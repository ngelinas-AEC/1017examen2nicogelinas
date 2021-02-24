<!-- Profile : composant afficher lorsque l'utitlisateur est connecté -->

<template lang="html">

  <section class="profile">
    
    <h1>{{'profile' | selectLangue(langue)}}</h1>

    <!-- Grid qui affiche le profil utilisateur -->
    <div class="app-gridview">
      <div class="grid-wrapper">
          <div class="grid-row">
              <p>{{"bonjour" | selectLangue(langue)}}</p>
              <p>{{"jesuis" | selectLangue(langue)}}</p>
              <p>{{"texteapropos" | selectLangue(langue)}}</p>
              <div><img src="../assets/icon.png" height="200px"/></div>
          </div>
      </div>
    </div> 
    
    <!-- Grid qui affiche les formations de l'utilisateur -->
    <div class="app-gridview">
      <div class="grid-wrapper">
          <div class="grid-row">
            <h2>{{'formation' | selectLangue(langue)}}</h2>
            <div class="formations">
                <p>Attestation d’études collégiales en Développement WEB - Cégep Trois-Rivières</p>        
                <p>Certificat en informatique appliquée (4128) - Université TÉLUQ</p>            
                <p>Udacity Front-end Web Dev Plus - Udacity</p>            
                <p>AEC-Développement d'applications Mobile - Cégep de Sainte-Foy </p>            
                <p>Programme court en développement de logiciels - Université TÉLUQ</p>  
                <p>Android Nanodegree by Google - Udacity</p>
            </div>
          </div>
      </div>
    </div> 

    <div class="app-gridview">
      <div class="grid-wrapper">
          <div class="grid-row">
          <h2>{{'competence' | selectLangue(langue)}}</h2>
            <!-- Boucle v-for qui affiche les compétences -->
            <p v-for="competence in competences" :key="competence">{{competence}}</p>
          </div>
      </div>
    </div> 
  </section>
    

</template>

<script lang="js">
import {LanguesMixin}  from "../mixins/LanguesMixin";
  export default  {
    mixins: [LanguesMixin],
    name: 'profile',
    props: [],
    mounted () {

    },
    data () {
      return {
          // Array qui contient les compétences du menu navBar
          competences:[ "ANDROID STUDIO KOTLIN ECLIPSE DELPHI", "JAVASCRIPT/TYPESCRIPT, JQUERY, JQUERY MOBILE, PHP", "GOOGLE (FIREBASE-ANALYTICS) VMWARE(AIRWATCH) REST NODE.JS", "HTML CSS SASS SCSS BOOTSTRAP", "SQLSERVER SYBASE MYSQL ORACLE MONGODB", "REACT ANGULAR VUE", "AGILE-SPRING XML"]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped >
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


<style scoped>
.app-gridview {
    margin: 20px;  
    border: 5px solid #5597b4;
    overflow: auto
} 

.grid-row > div {
	padding: 10px 10px;
  text-align: center;
}




</style>