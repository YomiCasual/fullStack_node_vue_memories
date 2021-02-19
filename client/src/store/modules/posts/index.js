import Axios from 'axios'
const state = () => {
    return {
        posts: [ ]
    }
}

const actions = {

    async createPost  ({commit}, payload) {
        try {
            const request = await Axios.post("http://localhost:5000/posts", payload)
            commit('savePosts', request)
        } catch (error) {
            throw error
        }
    }

}

const getters = {
    displayPosts: (state) => state.posts
}

const mutations = {
    savePosts(state,payload) {
        console.log(payload)
        state.posts = [...state.posts, payload]
    }
}

export default {
    namespaced: true,
    state, 
    actions,
    getters,
    mutations
}