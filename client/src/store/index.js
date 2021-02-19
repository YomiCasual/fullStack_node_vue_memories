import { createStore } from 'vuex'

import postsModules from './modules/posts'

export default createStore({
  modules: {
    posts: postsModules
  }
})
