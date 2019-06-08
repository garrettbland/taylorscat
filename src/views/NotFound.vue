<template>
  <div>
    <div class="flex h-auto sm:h-auto md:h-screen items-center justify-center">
    	<div class="container max-w-4xl bg-white flex flex-wrap md:rounded-lg md:shadow-lg items-center justify-center text-center">
			<div class="px-4 py-4 sm:py-4 md:py-12">
				<img src="https://images.unsplash.com/photo-1485358370836-4fb8998c06f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" class="rounded-lg w-full sm:w-full md:w-1/2 mx-auto mb-8"/>
    			<h1 class="text-4xl font-bold font-sans">
    				404 Page Not Found
    			</h1>
    			<p class="text-lg font-sans leading-regular text-gray-800">
    				Uh Oh. Looks like the page you requested doesn't exist or has moved.
    			</p>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
	name:'NotFound'
}
</script>