<template>
  <div>

    <div class="flex h-auto sm:h-auto md:h-screen items-center justify-center">
    	<div class="container max-w-4xl bg-white flex flex-wrap md:rounded-lg md:shadow-lg">
    		<div class="w-full sm:w-full md:w-1/2 rounded-lg p-4 flex items-center">
          <div v-if="loading">
            Loading Image
          </div>
    			<img v-if="!loading" :src="image" class="w-full rounded-lg"/>
    		</div>
    		<div class="flex flex-col justify-between w-full sm:w-full md:w-1/2">
    			<div class="p-4">
            <span class="bg-indigo-500 px-3 py-1 text-xs text-indigo-100 rounded-full">Coming Soon</span>
	    			<h1 class="text-4xl font-bold font-sans">
	    				Taylors Cat
	    			</h1>
	    			<p class="text-lg font-sans leading-regular text-gray-800">
	    				Welcome to Taylors Cat. Taylor uploads a new picture of his cat <strong>Millie</strong> on a daily basis. Check back everyday for a new cute picture! 
	    			</p>
	    		</div>
	    		<div>
	    			<div class="px-4 py-2 text-sm text-gray-600 italic">
	    				Want to be reminded to check Taylors new cat pictures? Sign up below to receive nothing but a daily reminder.
	    			</div>
	    			<div class="bg-gray-100 flex justify-between m-4 rounded-lg border-2 border-gray-200">
	    				<input v-model="email" name="signup" placeholder="you@email.com" type="email" class="text-gray-900 border-2 border-transparent bg-transparent focus:outline-none p-4 w-4/5"/>
	    				<button class="flex text-gray-900 p-4 focus:outline-none md:rounded-br-lg" v-bind:class="emailStatus" @click="subscribe()" @prevent.default>
	    					<span class="h-4 w-4 mr-4 pt-px">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="261"><path d="M20 6L9 17 4 12"/></svg>
	    					</span>
	    					Subscribe
	    				</button>
	    			</div>
	    		</div>
    		</div>
    	</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
  	return {
      loading:true,
  		email:'',
      image:''
  	}
  },
  methods:{
    async getImage(){

      var state = this

      // set loading
      state.loading = true

      state.$firebase.images.where('user', '==', 'taylor').orderBy('uploaded','desc').limit(1).get().then(function(snapshot){
        snapshot.forEach(function(doc){
          state.image = doc.data().url
        })

        // Set loading to false
        state.loading = false

      }).catch(function(err){

        // Set loading to false
        state.loading = false

        console.log('Error getting documents '+err)
      })

    },
  	validEmail(email){
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    subscribe(){
    	if(this.validEmail(this.email)){
    		window.alert('This feature isnt working yet')
    	}
    }
  },
  computed:{
  	emailStatus(){
  		if(this.validEmail(this.email)){
  			return 'text-green-500 opactiy-100 hover:text-green-700'
  		}else{
  			return 'opacity-50 cursor-not-allowed'
  		}
  	}
  },
  mounted(){
    var state = this
    state.getImage().then(function(){
      state.loading = false
    })
  }
}
</script>
