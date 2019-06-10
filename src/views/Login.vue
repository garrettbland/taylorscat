<template>
  <div>
    <div class="flex h-auto sm:h-auto md:h-screen items-center justify-center">
    	<div class="bg-white md:rounded-lg md:shadow-lg p-4 container max-w-md">
            <div class="text-center mb-6">
                <h1 class="text-4xl font-bold">
                    Login
                </h1>
                <p class="text-gray-600">
                    Sign in with your preferred google account below.
                </p>
            </div>
            <div class="flex items-center justify-center">
                <button @click="signIn('google')" v-bind:class="{'cursor-not-allowed':loading}" class="flex flex-1 items-center justify-center h-12 text-center border-2 border-gray-300 text-gray-900 font-bold rounded-lg bg-gray-300 hover:bg-gray-400 hover:border-gray-400 ml-2 focus:outline-none">
                    <div v-if="loading === false" class="w-5 h-5 mr-2">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M43.61 20.082H42V20H24v8h11.305c-1.653 4.656-6.082 8-11.305 8-6.629 0-12-5.371-12-12s5.371-12 12-12c3.059 0 5.844 1.152 7.96 3.04l5.657-5.657C34.047 6.055 29.27 4 24 4 12.953 4 4 12.953 4 24s8.953 20 20 20 20-8.953 20-20c0-1.34-.137-2.648-.39-3.918z" fill="#ffc107"/><path d="M6.305 14.691l6.574 4.82C14.656 15.11 18.96 12 24 12c3.059 0 5.844 1.152 7.96 3.04l5.657-5.657C34.047 6.055 29.27 4 24 4 16.316 4 9.656 8.336 6.305 14.691z" fill="#ff3d00"/><path d="M24 44c5.164 0 9.86-1.977 13.41-5.191L31.22 33.57A11.918 11.918 0 0 1 24 36c-5.203 0-9.617-3.316-11.281-7.945l-6.524 5.023C9.504 39.555 16.227 44 24 44z" fill="#4caf50"/><path d="M43.61 20.082H42V20H24v8h11.305a12.054 12.054 0 0 1-4.09 5.57h.004l6.191 5.239C36.973 39.203 44 34 44 24c0-1.34-.137-2.648-.39-3.918z" fill="#1976d2"/></svg>
                    </div>
                    <div v-if="loading === false">
                        Sign In
                    </div>
                    <div v-if="loading === true" class="w-5 h-5 mr-2 loading">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>
                    </div>
                </button>
            </div>
    	</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name:'Login',
    data(){
        return {
            loading:false
        }
    },
    methods:{
        signIn(socialPlatform){

            var state = this

            // Set loading to true
            state.loading = true

            // Sign in with firebase popup and feed in the social platform user selected
            state.$firebase.auth.signInWithPopup(state.$firebase[socialPlatform]).then((result) => {

                // Stop loading
                state.loading = false

                // Sets user in vuex store
                state.$store.commit('setCurrentUser', result.user)

                // Redirect user to upload
                state.$router.push({
                    name:'upload'
                })

            }).catch((err) => {

                // Stop loading
                state.loading = false

                // If there was a problem logging in
                // TO-DO: Make an alert or popup or something
                console.log(err)
            })

        },
        redirect(){

            // If user is logged in, then route user to redirect
            if(this.currentUser){
                this.$router.replace(this.$route.query.redirect || '/upload')
            }
            
        }
    },
    computed: {

        // Maps currentUser from vuex store to use
        ...mapState(['currentUser'])

    },
    mounted(){

        // After page is reloaded or loaded, fire redirect method
        this.redirect()

    }
}
</script>