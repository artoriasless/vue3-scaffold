import { markRaw } from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import type { ILogicModule } from '@/interfaces';

// 抹平 svg-icon 和 element-plus 图标的使用差异，传入 name 即可
const logicModule: ILogicModule = {
  name: 'CommonIcon',
  data() {
    return {
      // 除自带的一些内置文案和通用工具外，数据存放
      elIconMap: {},
    };
  },
  props: {
    name: String,
    color: String,
  },
  computed: {
    isElIcon() {
      // 大写字母开头的，即为 element-plus 的图标
      return /^[A-Z]/.test(this.name);
    },
    isValidName() {
      return this.name && typeof this.name === 'string';
    },

    // svg 图标相关
    svgClass() {
      if (this.name) {
        return `svg-icon icon-${this.name}`;
      }
      return 'svg-icon';
    },
    iconName() {
      return `#icon-${this.name}`;
    },
  },
  mounted() {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      this.elIconMap[key] = markRaw(component);
    }
  },
};

export default logicModule;
