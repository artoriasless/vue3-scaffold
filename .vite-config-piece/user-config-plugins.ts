import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueEslint from 'vite-plugin-eslint';

import path from 'path';
import fs from 'fs-extra';

import { outDir, dirPrefix, assetsDir } from './user-config-build';
import { projectDir, remoteAssetsDomain, resourcesDir } from './constants';
import { createSvg, readfiles } from './utils';

export default [
  vue(),
  vueJsx(),
  vueEslint({
    include: [
      path.resolve(projectDir, 'src/*.js'),
      path.resolve(projectDir, 'src/*.ts'),
      path.resolve(projectDir, 'src/*.vue'),
      path.resolve(projectDir, 'src/**/*.js'),
      path.resolve(projectDir, 'src/**/*.ts'),
      path.resolve(projectDir, 'src/**/*.vue'),
    ],
  }),
  createSvg(path.resolve(projectDir, 'src/assets/svg-icons/')),
  {
    name: 'rewrite-assets-url-plugin',
    writeBundle() {
      // 针对构建出的资源，添加远程服务器地址前缀
      const entryHtmlPath = path.resolve(outDir, 'index.html');
      const entryHtmlContent = fs.readFileSync(entryHtmlPath, 'utf-8').toString();

      // 构建出的 assets 资源添加 CDN 前缀
      let targetHtmlContent = entryHtmlContent
        .replace(
          new RegExp('/' + assetsDir, 'g'),
          '//' + `${remoteAssetsDomain}/${dirPrefix}/${assetsDir}`.replace(/\/+/g, '/')
        )
        .replace(/^\/+\/\//g, '//');

      // public 目录下的资源进行复制，并手动添加远程 CDN 前缀
      const excludeFiles = ['.DS_Store'];
      const filesInPublic = readfiles(resourcesDir);

      filesInPublic.forEach((fileNameWithFolder: string) => {
        if (excludeFiles.includes(fileNameWithFolder)) return;

        // 复制文件到构建目录
        const srcPath = path.resolve(resourcesDir, fileNameWithFolder.replace(/^\/+/g, ''));
        const targetPath = path.resolve(outDir, fileNameWithFolder.replace(/^\/+/g, ''));

        fs.ensureFileSync(targetPath);

        fs.copyFileSync(srcPath, targetPath);

        // 更新 html 内容中，对 public 目录的索引
        targetHtmlContent = targetHtmlContent.replace(
          new RegExp(`/${fileNameWithFolder}`.replace(/\/+/g, ''), 'g'),
          `//${remoteAssetsDomain}/${dirPrefix}/${fileNameWithFolder}`.replace(/\/+/g, '/')
        );
      });

      fs.writeFileSync(entryHtmlPath, targetHtmlContent, 'utf-8');

      // TODO，构建完成后，推送资源到远程 CDN 目录，路径结构：
      // https://cdn.xxx.com/staging/dak-site/1.0.0
      // TODO，生产构建的时候，自动升级版本号
    },
  },
];
