<template>
  <div>
    <div class="flex h-auto sm:h-auto md:h-screen items-center justify-center">
    	<div class="container max-w-4xl bg-white flex flex-wrap md:rounded-lg md:shadow-lg">
    		<div class="w-full sm:w-full md:w-1/2 p-4">
    			<div class="flex flex-col w-full h-full border-dashed border-2 border-gray-400 rounded-lg items-center justify-center text-gray-500 py-24">
    				<span class="w-8 h-8 mb-1">
    					<svg class="text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="976"><circle cx="12" cy="12" r="10"/><path d="M12 8L12 16M8 12L16 12"/></svg>
    				</span>
	    			<div class="mb-4">
	    				Drag & Drop files
	    			</div>
	    			<div>
	    				<button class="bg-blue-500 hover:bg-blue-600 rounded-lg text-white px-5 py-3 focus:outline-none">
	    					Select files to upload
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
export default {
	name:'Upload'
}
</script>