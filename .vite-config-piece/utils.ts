import fs, { readFileSync, readdirSync } from 'fs';
import path from 'path';

// 一些工具方法

// 通过 define 传入时，需要对字符串做一次 unparse ，即 JSON.stringify
export const unparse = (original: any) => JSON.stringify(original);

// 创建 svg
export const createSvg = (svgPath: string, perfix = 'icon') => {
  if (svgPath === '') return;

  let idPerfix = '';
  const svgTitle = /<svg([^>+].*?)>/;
  const clearHeightWidth = /(width|height)="([^>+].*?)"/g;
  const hasViewBox = /(viewBox="[^>+].*?")/g;
  const clearReturn = /(\r)|(\n)/g;

  // 查找svg文件
  const svgFind = (e: string): Array<unknown> => {
    const arr = [];
    const dirents = readdirSync(e, { withFileTypes: true });

    for (const dirent of dirents) {
      if (dirent.isDirectory()) {
        const dir = path.join(e, dirent.name);

        arr.push(...svgFind(dir));
      } else {
        const filePath = path.join(e, dirent.name);
        const svg = readFileSync(filePath)
          .toString()
          .replace(clearReturn, '')
          .replace(svgTitle, ($1, $2) => {
            let width = 0;
            let height = 0;

            let content = $2.replace(clearHeightWidth, (s1: string, s2: string, s3: number) => {
              if (s2 === 'width') {
                width = s3;
              } else if (s2 === 'height') {
                height = s3;
              }

              return '';
            });

            if (!hasViewBox.test($2)) {
              content += `viewBox="0 0 ${width} ${height}"`;
            }

            return `<symbol id="${idPerfix}-${dirent.name.replace('.svg', '')}" ${content}>`;
          })
          .replace('</svg>', '</symbol>');

        arr.push(svg);
      }
    }

    return arr;
  };

  idPerfix = perfix;

  const res = svgFind(svgPath);

  return {
    name: 'svg-transform',
    transformIndexHtml(dom: string) {
      return dom.replace(
        '<body>',
        `<body><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0">${res.join(
          ''
        )}</svg>`
      );
    },
  };
};

// 读取某个目录下的文件，会自动拼接目录
export const readfiles = (rootDir: string) => {
  const result: Array<string> = [];
  const loopDirReadFiles = (dir: string, parentFolderName: string = '') => {
    const items = fs.readdirSync(dir);

    items.forEach(item => {
      const itemPath = `${dir}/${item}`;
      const stat = fs.statSync(itemPath);

      if (stat.isDirectory()) {
        // 继续深度遍历
        loopDirReadFiles(itemPath, `${parentFolderName}/${item}`);
      } else {
        // 文件
        result.push(parentFolderName ? `${parentFolderName}/${item}` : item);
      }
    });
  };

  loopDirReadFiles(rootDir);

  return result;
};
