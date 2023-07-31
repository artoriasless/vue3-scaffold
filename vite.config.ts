import { defineConfig } from 'vite';

import { projectDir, resourcesDir, isDev, baseUrl } from './.vite-config-piece/constants';
import userConfigCss from './.vite-config-piece/user-config-css';
import userConfigDefine from './.vite-config-piece/user-config-define';
import userConfigServer from './.vite-config-piece/user-config-server';
import userConfigPlugins from './.vite-config-piece/user-config-plugins';
import userConfigResolve from './.vite-config-piece/user-config-resolve';
import userConfigBuild from './.vite-config-piece/user-config-build';
import userConfigEsbuild from './.vite-config-piece/user-config-esbuild';

// 以下为 vite 配置，用于透传
const base = baseUrl;

const root = projectDir;

const esbuild = userConfigEsbuild;

const css = userConfigCss;

const mode = isDev ? 'development' : 'production';

const define = userConfigDefine;

const plugins = userConfigPlugins;

const resolve = userConfigResolve;

const publicDir = resourcesDir;

const server = userConfigServer;

const build = userConfigBuild;

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  base,
  esbuild,
  css,
  root,
  mode,
  define,
  plugins,
  resolve,
  publicDir,
  server,
  build,
});
