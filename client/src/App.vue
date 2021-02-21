<template>
  <div class="container">
    <Posts />
   <form-field></form-field>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import FormField from './components/Form/FormField.vue'
import Posts from './components/Posts/Posts'


export default {
  name: 'App',
  components: {
    FormField,
    Posts
  },
  setup() {
    const store = useStore()


    return {
      state: computed(() => store.state.posts),
      stateGetters: computed(() => store.getters['posts/displayPosts'])
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif
}

.btn {
  text-decoration: none;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;

  &:focus, &:active{
    border: none;
    outline: none
  }

}


.container {
  padding: 2rem 4rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 2rem;
  grid-template-columns: minmax(0, 1fr) 300px;
}
</style>
