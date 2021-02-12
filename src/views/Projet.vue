<template lang="html">

  <section class="projet">
     <div class="post-container ">
      <h2>Mes projets</h2>
          <div class="app-gridview">
    <div class="grid-wrapper">

        <div class="grid-row">
            <div class="grid-header">Nom</div>
            <div class="grid-header">Lien</div>
        </div>

        <!-- GridView structure -->
        <div class="grid-row">
        
            <div class="list-row-item">
                <li v-for="projet in projets" :key="projet">{{projet}}</li>
            </div>
            
            <div class="list-row-item">
                <li v-for="lien in liens" :key="lien">{{lien}}</li>
            </div>
            
        </div>

    </div>

</div>
  
    </div>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'projetComponent',
    props: [],
    mounted () {

    },
    data () {
      return {
          projets:[ "Portfolio", "Lecteur de nouvelles"],
          liens:[ "http://portfolio.nicogelinas.ca", "http://https://github.com/ngelinas-AEC/AEC_Front_End/tree/master/Integration1/SiteWEB/Portfolio%20bootstrap"]
      }
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
    
    border: 4px solid #336699;
    border-radius: 6px;
    transition: all ease 0.5s;
}

.grid-header {
	font-weight: bold;
	background: #336699;
	color: white;
	border-bottom: 4px solid #f6f6f6;
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