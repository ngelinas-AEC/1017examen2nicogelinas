<template lang="html">

  <section class="profile">
          <h1>Mon Profil</h1>               

    <div class="post-container"> 
      <div class="post-thumb"><img src="../assets/logo.png" height="300px"/></div>
      <div class="post-content">
        <div class="presentation">
          <p>Bonjour, je m'appelle </p>
          <p>Je suis un Développeur</p>
        </div>
      </div>
    </div>

    <div class="post-container ">
      <h2>Mes formations</h2>
        <div class="formations">
          <ul>
            <li>Attestation d’études collégiales en Développement WEB
            Cégep Trois-Rivières, Trois-Rivières</li>
          
            <li>Attestation d’études ...</li>
          
          </ul>
        </div>
    </div>

    <div class="post-container ">
      <h2>Mes compétences</h2>
        <div class="formations">
          <ul>
            <li v-for="competence in competences" :key="competence">{{competence}}</li>
          </ul>
        </div>
    </div>
  </section>
    

</template>

<script lang="js">

  export default  {
    name: 'profile',
    props: [],
    mounted () {

    },
    data () {
      return {
          competences:[ "HTML5", "CSS3/SASS", "BootStrap", "javaScript", "jQuery", "typeScript", "React-js", "Angular", "Vue"]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped >
  .profile {
  }


  .post-container {
    margin: 20px;  
    border: 5px solid #333;
    overflow: auto
  }
.post-thumb {
    float: left
}
.post-thumb img {
    display: block
}
.post-content {
    font-size: 24px;
}

.formations{
  text-align: justify;
  font-size: 16px;
  margin: 20px
}

.presentation{
   margin: 20px
}

</style>
