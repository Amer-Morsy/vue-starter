import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';

import { userModule } from './userStore';

const ls = new SecureLS({ isCompression: false });

export default createStore({
  modules: {
    userModule,
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
        // clear: () => ls.clear(),
      },
    }),
  ],
});
