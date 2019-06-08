<template>
  <div>
    <div class="flex h-auto sm:h-auto md:h-screen items-center justify-center">
    	<div class="container max-w-4xl bg-white flex flex-wrap md:rounded-lg md:shadow-lg">
    		<div class="w-full sm:w-full md:w-1/2 p-4">
    			<div v-if="tempImage == ''" class="flex flex-col w-full h-full border-dashed border-2 border-gray-400 rounded-lg items-center justify-center text-gray-500 py-24">
    				<span class="w-8 h-8 mb-1">
    					<svg class="text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="976"><circle cx="12" cy="12" r="10"/><path d="M12 8L12 16M8 12L16 12"/></svg>
    				</span>
	    			<div class="mb-4">
	    				Drag & Drop
	    			</div>
	    			<div>
	    				<button @click="chooseImage()" class="bg-blue-500 hover:bg-blue-600 rounded-lg text-white px-5 py-3 focus:outline-none">
	    					Select files to upload
	    				</button>
	    				<input type="file" ref="addImage" hidden @change="onFileChange">
	    			</div>
    			</div>
    			<div v-if="tempImage !== ''" class="flex flex-col justify-between h-full">
    				<div>
						<img :src="previewImage(tempImage)" class="rounded-lg relative z-10"/>
					</div>
					<div class="flex justify-between mt-4">
						<button @click="removeImage" class="py-2 px-4 text-center border-2 border-red-500 text-red-500 rounded-lg hover:text-white hover:bg-red-500 mr-1 focus:outline-none">
							<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="1231"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
						</button>
						<button @click="submit" class="flex flex-1 items-center justify-center py-2 text-center border-2 border-blue-500 text-blue-500 rounded-lg hover:text-white hover:bg-blue-500 ml-1 focus:outline-none">
							<div class="w-5 h-5 mr-2">
								<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/><polyline points="16 16 12 12 8 16"/></svg>
							</div>
							<div>
								Upload <span v-if="loading">loading</span>
							</div>
						</button>
					</div>
    			</div>
    		</div>
    		<div class="flex w-full h-full sm:w-full md:w-1/2">
    			<div class="p-4">
	    			<h1 class="text-4xl font-bold font-sans">
	    				Upload
	    			</h1>
	    			<p class="text-lg font-sans leading-regular text-gray-800 mb-6">
	    				Upload your adorable pet picture here.
	    			</p>
	    			<p class="text-lg font-sans leading-regular text-gray-800">
	    				Don't worry if you can't post daily. On off days we will show users a randomly selected photo
	    				from your previous uploads.
	    			</p>
	    			<img src="https://cdn.dribbble.com/users/95644/screenshots/2574787/dog_positive.png" class="w-full sm:w-full md:w-1/2" style="margin-left:auto;margin-right: auto;"/>
	    		</div>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
import Compressor from 'compressorjs';
export default {
	name:'Upload',
	data(){
		return {
			tempImage:'',
			uploadedImagePath:'',
			loading:false
		}
	},
	methods:{
		chooseImage(){

			// Find reference id in template and simulate a click
			this.$refs.addImage.click()

		},
		removeImage() {

	    	// Resets temp image
			this.tempImage = ''

	    },
		previewImage(image){

			// Creates blob url so we can show user preview of image
			return URL.createObjectURL(image)

		},
		onFileChange(e) {

			// Set state so we can use variable within functions
			var state = this
		
			// Listen for user to select image and add image to temp image for upload
			var file = e.target.files[0]

			// Get file extension
			var fileExtension = file.name.split('.')[file.name.split('.').length - 1].toLowerCase();

			// Get file size
			var fileSize = file.size;

			// If file extension is a png, jpg, or jpeg (the diff between the jpgs may not be needed)
			if(fileExtension == 'png' || fileExtension == 'jpg' || fileExtension == 'jpeg'){

				// The file is an image, now lets check sizes

				// Set max size, this is 10MB
				let maxSize = 10485760
				let maxWidth = 700
				let quality = 0.6

				if(fileSize < maxSize){

					  new Compressor(file, {
					  	maxWidth:maxWidth,
					    quality: quality,
					    success(result) {

					      	// file is less than maxSize, continue on
							state.tempImage = result

					    },
					    error(err) {

					    	console.error(err.message);
					    },
					  })

				}else{

					// file was over maxSize, give user error
					window.alert('Error, max image size exceeded. Image must be less than 10 MB. Try uploading a smaller image.')

				}
			}else{

				// file type isn't a png, jpg, or jpeg
				window.alert('Error, file type is not allowed. Must be a png or jpeg. Please try again.')

			}

	    },
	    submit(){

	    	var state = this

	    	// start loading
	    	state.loading = true

	    	// upload file, then add firestore item, then end loading
	    	state.uploadImage(state.tempImage).then(function(){
	    		state.saveData()
	    	})

	    },
	    uploadImage(image){

	    	var state = this

	    	// Returns a promise
			// After successful upload, push the public image URL to the image object
			return new Promise((resolve,reject) => {
				state.$firebase.storage.ref('images/'+Date.now()).put(image)
				.then((snapshot) => {
					snapshot.ref.getDownloadURL().then(function(downloadURL) {

						console.log('uploaded image path is '+downloadURL)
		              	state.uploadedImagePath = downloadURL
		              	resolve(downloadURL)

		            });
				}).catch((error) => {

					// Something went wrong uploading image
					// TO-DO: Make an alert or popup or something
					console.error('Image upload failed...', item, error.message)

				})
			})

	    },
	    saveData(){

				// Set state so we can use variable within firebase functions
				var state = this

				// Call firebase function to create sale and pass in sale object
				this.$firebase.images.add(
					{
						url:state.uploadedImagePath,
						uploaded:Date.now(),
						user:'taylor'
					}
				)
				.then(docRef => {

					// Stop loading
					state.loading = false

					// Reset
					state.tempImage = ''
					state.uploadedImagePath = ''

				})
				.catch(err => {

					// TO-DO: Make an alert or popup or something
					console.error(err)

				})
	    }
	}
}
</script>