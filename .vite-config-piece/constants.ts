import path from 'path';

import devConfig from './env.development';
import stagingConfig from './env.staging';
import prodConfig from './env.production';

export const ENV_CONFIG_MAP = new Map([
  ['development', devConfig],
  ['staging', stagingConfig],
  ['production', prodConfig],
]);
export const CURRENT_ENV = String(process.env.CURRENT_ENV);

export const appName = 'dak-site';

export const version = '1.0.0';

export const isDev = CURRENT_ENV === 'development';

export const currentEnvConfig = ENV_CONFIG_MAP.get(CURRENT_ENV) || devConfig;

export const baseUrl = currentEnvConfig.BASE_URL;

export const projectDir = process.cwd();

export const resourcesDir = path.resolve(projectDir, 'public');

export const remoteAssetsDomain = 'dak-site.oss-cn-beijing.aliyuncs.com';
