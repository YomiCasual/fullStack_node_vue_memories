<template>
    <div>
    <div class="Posts">
        <Post v-for="post in posts" :key="post._id" :post="post" />
    </div>
    </div>

</template>

<script>
import { onBeforeMount, computed } from 'vue'
import { useStore } from 'vuex'
import Post from './Post'
export default {
    components: {
        Post
    },
    setup() {
        const store = useStore()

        onBeforeMount(() => {
        store.dispatch('posts/getPosts')
        })

        return {
             posts: computed(() => store.state.posts.posts),
        }
    }

}
</script>

<style>
.Posts {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}

</style>