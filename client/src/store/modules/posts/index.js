import Axios from 'axios'

const BASE_URL = "http://localhost:5000"
const state = () => {
    return {
        posts: [ ]
    }
}

const actions = {
    async createPost  ({commit, dispatch}, payload) {
        try {
            const request = await Axios.post(`${BASE_URL}/posts`, payload)
            dispatch('getPosts')
        } catch (error) {
            throw error
        }
    },

    async getPosts ({commit}) {
        try {
            const request = await Axios.get(`${BASE_URL}/posts`)
            commit('getPosts', request.data.data)
        } catch (error) {
            throw error
        }
    },

    async deletePost ({commit, dispatch}, payload) {
        try {
            const request = await Axios.delete(`${BASE_URL}/posts/${payload}`)
            commit('deletePost', payload)
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
        state.posts = [...state.posts, payload]
    },
    getPosts (state, payload) {
        state.posts = payload
    },
    deletePost(state, payload) {
        state.posts = state.posts.filter(item => item._id !== payload)
    }
}

export default {
    namespaced: true,
    state, 
    actions,
    getters,
    mutations
}