import type { ILogicModule } from '@/interfaces';

import AppHeader from './components/app-header/index.vue';
import AppMain from './components/app-main/index.vue';

const logicModule: ILogicModule = {
  name: 'Layout',
  components: {
    AppHeader,
    AppMain,
  },
};

export default logicModule;
