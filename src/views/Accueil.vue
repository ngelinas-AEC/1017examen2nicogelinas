<template lang="html">

  <section class="accueil">

    <Profile v-if="showProfile" name='profile'/>
    <div v-else>
        <div class="title">
        <h1>{{'accueil' | selectLangue(langue)}}</h1>
        </div>
        
        <div class="content img">
          <img
            class="resize"
            src="../assets/ordi.png"
          />
        </div>
        <div class="normalize content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
     </div>
  </section>

</template>

<script >
import {LanguesMixin}  from "../mixins/LanguesMixin";
import Profile from '../views/Profile.vue'

export default  {
    mixins: [LanguesMixin],
    name: 'accueil',
    props: [],
    components: {
      Profile
    },
    mounted () {
    },
    data () {
      return {
        showProfile: true
      }
    },
    methods: {
    },
    computed: {
 },
    created() {
      let loggedIn = false;
  
      if (loggedIn) {
          this.showProfile = true;
      }
  },
}
</script>
<style scoped>
  .accueil {
  }
</style>

