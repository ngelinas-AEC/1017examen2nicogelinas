<!-- Projet : composant qui permet d'afficher les différents projets -->
<template lang="html">

  <section class="projet">
      <h1>{{'projetlabel' | selectLangue(langue)}}</h1>     
      <!-- Boucle v-for qui affiche les projets --> 
      <p v-for="(projet, i) in projets" :key="i"> <a :href="projet.lien" target="_blank"> {{ projet.nom | selectLangue(langue)}} </a> </p>
  </section>

</template>

<script lang="js">
  import {LanguesMixin}  from "../mixins/LanguesMixin";
  export default  {
    mixins: [LanguesMixin],
    name: 'projetComponent',
    
    data () {
      return {
           // Array qui contient les nom et les liens des projets
           projets: [
              {id:1, nom:"portfolio", lien:"http://portfolio.nicogelinas.ca"},
              {id:2, nom:"lecteurdenouvelles", lien:"https://github.com/ngelinas-AEC/AEC_Front_End/tree/master/programmation2/projet-final_Portfolio/"},
              {ID:3, nom:"appvoyage", lien:"https://github.com/ngelinas-AEC/AEC_Front_End/tree/master/Programmation3/application-voyages/"},
              {ID:4, nom:"appvue", lien:"https://github.com/ngelinas-AEC/1017examen2nicogelinas/"}
          ]
      }
    },
    props: [],
    mounted () {
    },
    methods: {
    },
    computed: {
    }
}

</script>


<style scoped>
.app-gridview {
  margin: auto;
  width: 50%;
  padding: 10px;
   } 
.grid-wrapper {
    display: table;
    
    border: 4px solid #5597b4;
    border-radius: 6px;
    transition: all ease 0.5s;
}

.grid-header {
	font-weight: bold;
	background: #5597b4;
	color: white;
	border-bottom: 4px solid #5597b4;
}

.grid-row {
	display: table-row;
}

.grid-row > div {
	display: table-cell;
	padding: 10px 20px;
}

.grid-wrapper > div:nth-child(even) {
	background: #f6f6f6;
	transition: all ease 0.4s;
}

.grid-wrapper > div:nth-child(odd) {
	background: #fafafa;
	transition: all ease 0.4s;
}

.grid-wrapper > div:hover {
	background: #a9d6ff;
	transition: all ease 0.4s;
}
</style>