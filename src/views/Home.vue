<template>
  <div>
    <div class="flex h-auto sm:h-auto md:h-screen items-center justify-center">
    	<div class="container max-w-4xl bg-white flex flex-wrap md:rounded-lg md:shadow-lg">
    		<div class="w-full sm:w-full md:w-1/2 rounded-lg py-4 px-4 sm:px-4 md:pl-4 md:pr-0 flex items-center">
          <div class="w-full min-h-full bg-gray-200 rounded-lg relative z-30" style="min-height: 20rem;">
            <div v-if="loading" class="absolute z-30 flex items-center justify-center w-full h-full bg-gray-200 rounded-lg">
              <div class="w-5 h-5 text-gray-500 loading relative z-40">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>
              </div>
            </div>
            <img v-if="!loading" :src="document.data().url" class="w-full rounded-lg relative z-20"/>
          </div>
    		</div>
    		<div class="flex flex-col justify-between w-full sm:w-full md:w-1/2">
    			<div class="p-4">
            <span class="bg-indigo-500 px-3 py-1 text-xs text-indigo-100 rounded-full">Update Coming Soon!</span>
	    			<h1 class="text-4xl font-bold">
	    				Millie The Cat
	    			</h1>
	    			<p class="text-lg leading-regular text-gray-800">
	    				Welcome to Millie The Cat. Taylor or Jamie uploads a new picture of their cat <strong>Millie</strong> on a daily basis. Check back everyday for a new cute picture! 
	    			</p>
            <div class="flex flex-col items-center justify-center py-12">
              <div>
                Leave Millie a heart!
              </div>
              <div class="py-4">
                <button @click="setHeart()" class="hover:bg-pink-300 p-4 rounded-lg heart focus:outline-none" v-bind:class="hasHearted">
                  <svg v-bind:class="hasHeartedSvg" class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="661"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </button>
              </div>
              <div>
                {{ hearts }} hearts today so far!
              </div>
              <div>
                local storage id name {{imageid}}
              </div>
            </div>
	    		</div>
	    		<div>
	    			<div class="px-4 text-sm text-gray-600 italic">
	    				Want to be reminded to check Millies new picture? Sign up below to receive nothing but a daily reminder.
	    			</div>

            <div class="bg-green-500 text-white flex items-center justify-center m-4 rounded-lg" v-if="successful">
              <div class="py-4">
                <p class="text-center"><strong>Success!</strong></p>
                <p>You will now receive daily email reminders.</p>
              </div>
            </div>

	    			<div class="bg-gray-100 flex justify-between m-4 rounded-lg" v-if="!successful">
	    				<input v-model="email" name="signup" placeholder="you@email.com" type="email" class="text-gray-900 border-2 border-transparent bg-transparent focus:outline-none p-4 w-4/5"/>
              <button @prevent.default @click="subscribing === false ? subscribe() : null" v-bind:class="emailStatus" class="flex flex-1 items-center justify-center py-2 text-center border-2 border-blue-500 text-white rounded-lg bg-blue-500 focus:outline-none m-2">
                <div v-if="subscribing === false" class="w-5 h-5 mx-2">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="261"><path d="M20 6L9 17 4 12"/></svg>
                </div>
                <div v-if="subscribing === false" class="mr-2">
                  Subscribe
                </div>
                <div v-if="subscribing === true" class="w-5 h-5 loading">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>
                </div>
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
      successful:false,
      subscribing:false,
      heart:false,
      hearts:0,
      document:{},
      imageid:'',
      canVote:true,
  	}
  },
  methods:{
    setHeart(){
      if(this.heart){
        console.log('remove heart')
        this.heart = false
        this.hearts = this.hearts - 1
      }else{
        console.log('add heart')
        this.heart = true
        this.hearts = this.hearts + 1
      }
      this.updateHearts(this.hearts)
    },
    updateHearts(hearts){
      var state = this

      var imageDocument = state.$firebase.images.doc(state.document.id);

      imageDocument.update({
        hearts:hearts
      })
    },
    async getImage(){

      var state = this

      // set loading
      state.loading = true

      state.$firebase.images.where('user', '==', 'taylor').orderBy('uploaded','desc').limit(1).get().then(function(snapshot){
        snapshot.forEach(function(doc){
          state.document = doc
          state.hearts = doc.data().hearts || 0
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

        // Set state so we can use variable within firebase functions
        var state = this

        // Set loading state of subscribtion
        state.subscribing = true

        // Call firebase function to create sale and pass in sale object
        this.$firebase.subscribers.add(
          {
            email:state.email,
            created:Date.now(),
            subscribed:true
          }
        )
        .then(docRef => {

          // Stop loading
          state.subscribing = false

          // Reset
          state.email = ''

          // Set successful state
          state.successful = true

        })
        .catch(err => {

          // TO-DO: Make an alert or popup or something
          window.alert('Error. Something went wrong saving your image')

        })
 
    	}
    }
  },
  computed:{
  	emailStatus(){
  		if(this.validEmail(this.email)){
  			return 'text-white opactiy-100 hover:bg-blue-600 hover:border-blue-600'
  		}else{
  			return 'opacity-50 cursor-not-allowed'
  		}
  	},
    hasHearted(){
      if(this.heart === true){
        return 'bg-pink-300'
      }else{
        return 'bg-gray-200 shadow-inner'
      }
    },
    hasHeartedSvg(){
      if(this.heart === true){
        return 'text-white'
      }else{
        return 'text-gray-400'
      }
    }
  },
  mounted(){
    var state = this
    state.getImage().then(function(){
      state.loading = false
    })


    //   //check if votedImageId equals todays image id
    //   if(localStorage.votedImageId === 'id'){

    //     // check localStorage.voteStatus and set can vote to whatever votestatus is
       

    //   }else{

    //     //set local storage of votedImageId to todays image id and set can vote to true
    //     localStorage.votedImageId = 'id'

    //   }
    }

  
}
</script>
