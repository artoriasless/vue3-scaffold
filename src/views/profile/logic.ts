import type { ILogicModule } from '@/interfaces';
import store from '@/store';
import { ASYNC_ACTIONS as globalAsyncActions } from '@/store/constants';

const logicModule: ILogicModule = {
  name: 'ProfilePage',
  data() {
    return {};
  },
  computed: {
    userInfo() {
      return store.state.userInfo;
    },
  },
  methods: {
    logoutHandler() {
      store.dispatch(globalAsyncActions.LOGOUT);
    },
  },
};

export default logicModule;
