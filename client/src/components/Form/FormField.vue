<template>
	<div>
		<div class="form-field">
			<h3>Create Memories</h3>
			<form @submit.prevent="submitForm" class="form">
				<input
					type="text"
					v-model="formData.title"
					placeholder="Enter your title...."
				/>
				<textarea
					v-model="formData.message"
					placeholder="Enter your message...."
				></textarea>
				<input
					type="file"
					accept="image/*"
					placeholder="Upload Image"
					@change="handleImage"
				/>
				<img
					v-if="formData.image"
					:src="formData.image"
					alt="no image"
					@click="deleteImage"
					class="image"
				/>
				<input type="submit" value="Submit" class="btn submit-btn" />
			</form>
		</div>
	</div>
</template>

<script>
import { reactive } from 'vue';
import { useStore } from 'vuex';
export default {
	setup() {
		const store = useStore();
		const formData = reactive({
			title: '',
			message: '',
			image: '',
		});

		const submitForm = () => {
			store.dispatch('posts/createPost', formData);
            formData.title = ""
            formData.message = ""
            formData.image = ""
		};

		const deleteImage = () => (formData.image = '');

		const handleImage = e => {
			const selectedImage = e.target.files[0];
			const reader = new FileReader();
			reader.onload = e => {
				formData.image = e.target.result;
			};
			reader.readAsDataURL(selectedImage);
		};

		return {
			formData,
			submitForm,
			handleImage,
			deleteImage,
		};
	},
};
</script>

<style lang="scss" scoped>
input[type='text'],
textarea {
	background: rgb(240, 238, 238) !important;
	border: 1px solid rgb(177, 176, 176);
	border-radius: 6px;
	font-size: 15px;
}

textarea {
	height: 100px;
	width: 100%;
	resize: none;
	padding: 0.6rem 0.6rem;
}

input:focus,
input:active {
	outline: none;
}

.form-field {
	background-color: white;
	border-radius: 5px;
	box-shadow: 2px 6px 10px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	padding: 1rem;

	h3 {
		margin-bottom: 1rem;
	}

	.form {
		width: 100%;

		.image {
			height: 150px;
			margin-bottom: 1rem;
			cursor: pointer;
		}

		input {
			border-radius: 3px;
			margin-bottom: 1rem;
			padding: 0.4rem 0.6rem;
			width: 100%;
		}

		.submit-btn {
			text-transform: uppercase;
			background: #bf4080;
			padding: 8px 8px !important;
			color: white;
			font-weight: 700;
			border-radius: 0 !important;
		}
	}
}
</style>
