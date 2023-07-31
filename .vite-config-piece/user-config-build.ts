import path from 'path';

import { version, appName, projectDir, currentEnvConfig } from './constants';

export const dirPrefix = `${currentEnvConfig.ENV}/${appName}/${version}`;

export const assetsDir = 'assets';

export const outDir = path.join(projectDir, 'dist', `${dirPrefix}`);

export default {
  assetsDir,
  outDir,
  // 手动复制资源到 指定目录
  copyPublicDir: false,
};
