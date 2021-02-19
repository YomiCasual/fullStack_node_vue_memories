<template>
    <div>
        <form @submit.prevent="submitForm">
        <input type="text" v-model="formData.title">
        <input type="text" v-model="formData.message" >
        <input type="file" accept="image/*" placeholder="Upload Image" id="" @change="handleImage">
        
        <input type="submit" value="Submit">
    </form>
    <img :src="formData.image" alt="no image" />
   
    </div>
    
    
</template>

<script>
import { reactive} from 'vue'
import { useStore } from 'vuex'
export default {

    setup() {
        const store = useStore()
        const formData = reactive({
            title: '',
            message: '',
            image: ''
        })

        const submitForm = () => {
            store.dispatch('posts/createPost', formData)
        }

        const handleImage = (e) => {
            const selectedImage = e.target.files[0]
            const reader = new FileReader()
            reader.onload = (e) => {
                formData.image = e.target.result
            }
            reader.readAsDataURL(selectedImage)
        }


        return {
            formData,
            submitForm,
            handleImage
        }
    }
    

}
</script>

<style>

</style>