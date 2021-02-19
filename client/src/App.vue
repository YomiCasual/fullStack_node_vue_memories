<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
   <form-field></form-field>
  </div>
</template>

<script>
import { computed } from 'vue'
import { mapGetters, useStore } from 'vuex'

import FormField from './components/Form/FormField.vue'


export default {
  name: 'App',
  components: {
    FormField
  },
  setup() {
    const store = useStore()
    console.log(store)

    return {
      state: computed(() => store.state.posts),
      stateGetters: computed(() => store.getters['posts/displayPosts'])
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
