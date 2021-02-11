<template>
  <div id="app">
    <Header/>
    <Accueil v-if="showAccueil"/>
    <Profile v-if="showProfile"/>
    <Footer/>
  </div>
</template>

<script>
import Accueil from './views/Accueil.vue'
import Profile from './views/Profile.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  data () {
      return {
        loggedIn: true,
        showAccueil: false,
        showProfile: false
      }
    },
  components: {
    Accueil,
    Profile,
    Header,
    Footer
  },
  created() {
      if(this.loggedIn){
        this.showAccueil=false;
        this.showProfile=true;
      } else{
        this.showAccueil=true;
        this.showProfile=false;
      }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
