<template>
  <div>
    <div class="flex h-auto sm:h-auto md:h-screen items-center justify-center">
    	<div class="container max-w-4xl bg-white flex flex-wrap md:rounded-lg md:shadow-lg">
			<div class="flex flex-col items-center justify-center text-center w-full px-4 py-4 sm:py-4 md:py-12">
				<img src="https://images.unsplash.com/photo-1485358370836-4fb8998c06f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" class="rounded-lg w-full sm:w-full md:w-1/2 mx-auto mb-8"/>
    			<h1 class="text-4xl font-bold">
    				404 Page Not Found
    			</h1>
    			<p class="text-lg leading-regular text-gray-800">
    				Uh Oh. Looks like the page you requested doesn't exist or has moved.
    			</p>
    			<div class="mt-6">
					<button @click="route('home')" class="flex items-center bg-blue-500 hover:bg-blue-600 rounded-lg text-white px-5 py-2 focus:outline-none">
    					<div class="w-4 h-5 mr-2">
							<svg class="w-4 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    					</div>
    					<div>
    						Go Home
    					</div>
    				</button>
    			</div>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
	name:'NotFound',
	methods:{
		route(route,params){

	    	var route = route
	    	var params = params || {}

	    	this.$router.push({
	    		name:route,
	    		params:params
	    	})

	    }
	}
}
</script>