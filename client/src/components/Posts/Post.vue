<template>
	<div class="card">
		<div class="card-image">
            <button class="btn edit">Edit</button>
			<img :src="post.image" alt="image" />
		</div>
		<div class="card-body">
			<div class="card-content">
				<p class="tags">tags</p>
				<h3 class="title">{{post.title}}</h3>
				<h4 class="message">{{post.message}}</h4>
			</div>
            <div class="card-footer">
                <button class="btn like-btn">Liked: 8</button>
                <button class="btn delete3-btn" @click="deletePost(post._id)">Delete</button>
            </div>
		</div>
	</div>
</template>

<script>
import { useStore } from 'vuex'
export default {
    props: {
        post: Object
    },
    setup() {
        const store = useStore()

        const deletePost = (id) => {
            store.dispatch('posts/deletePost', id)
        }

        return {
            deletePost
        }
    }
};
</script>

<style lang="scss" scoped>
.card {
    background: white;
    box-shadow: 2px 4px 10px rgba(0,0,0,0.1);
    border-radius: 5px;

    .card-image {
        height: 200px;
        width: 100%;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        button {
            position: absolute;
            right: 10px;
            top: 10px;
            border-radius: 4px;
            color: white;
            background: purple;
            padding: 5px 10px;
            font-size: 12px
        }
    }

    .card-body {
        padding: 1rem;

        .card-content {
            .tags {
                background: rgb(211, 211, 211);
                padding: 4px 12px;
                border-radius: 25px;
                font-weight: 700;
                display: inline-block;
                margin: 0 0 1rem 0;
                font-size: 10px
            }
            .title {
                margin-bottom: 1rem;;
            }

            .message {
                margin-bottom: 1rem;
            }
        }
    }
}
</style>
