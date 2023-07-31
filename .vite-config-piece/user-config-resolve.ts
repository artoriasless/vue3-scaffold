import path from 'path';

import { projectDir } from './constants';

export default {
  alias: {
    // 减少相对路径引用
    '@': path.resolve(projectDir, 'src'),
  },
};
