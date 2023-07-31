import { unparse } from './utils';
import { currentEnvConfig } from './constants';

const { ENV, BASE_URL, HOST, PORT, APP_TITLE, APP_KEY, SERVER_API_HOST, SERVER_API_PORT, COPYRIGHT } = currentEnvConfig;

export default {
  __ENV__: unparse(ENV),
  __BASE_URL__: unparse(BASE_URL),
  __HOST__: unparse(HOST),
  __PORT__: unparse(PORT),
  __APP_TITLE__: unparse(APP_TITLE),
  __APP_KEY__: unparse(APP_KEY),
  __SERVER_API_HOST__: unparse(SERVER_API_HOST),
  __SERVER_API_PORT__: unparse(SERVER_API_PORT),
  __COPYRIGHT__: unparse(COPYRIGHT),

  __TOKEN_KEY__: unparse('Authorization'),
};
