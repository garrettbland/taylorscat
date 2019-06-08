<template>
  <div>
    <div class="flex h-auto sm:h-auto md:h-screen items-center justify-center">
    	<div class="container max-w-4xl bg-white flex flex-wrap md:rounded-lg md:shadow-lg">
    		<div class="w-full sm:w-full md:w-1/2 p-4">
    			<div v-if="tempImage !== ''" class="flex flex-col justify-between h-full">
    				<div>
						<img :src="image" class="rounded-lg relative z-10"/>
					</div>
    			</div>
    		</div>
    		<div class="flex w-full h-full sm:w-full md:w-1/2">
    			<div class="p-4">
	    			<h1 class="text-4xl font-bold font-sans">
	    				Time to Share!
	    			</h1>
	    			<p class="text-lg font-sans leading-regular text-gray-800">
	    				Share this cute fur-baby with friends and family. Also make sure to spam all of your coworkers!
	    			</p>
	    		</div>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
	name:'Share',
	data(){
		return {
			image:'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
		}
	},
	methods:{

	}
}
</script>