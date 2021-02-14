<template lang="html">

  <section class="header">

  <ul>
      <div v-for="select in menu" :key="select.id+select.name">
        <li>        
          <router-link class="link" :to="{path:select.name}" tag="li">{{select.name | selectLangue(langue)}}</router-link>
        </li>  
      </div>   
  </ul>
 </section>
</template>


<script lang="js">
  import   {LanguesMixin}  from "../mixins/LanguesMixin";

  export default  {
    mixins: [LanguesMixin],
    name: 'headerComponent',
    props: [],
    mounted () {

    },
    data () {
      return {
          menu: [
              {id:1, name: 'accueil'},
              {id:2, name: 'projet'},
              {id:3, name: 'contact'},
              {id:4, name: 'apropos'}
        ]     
      }
    },
    methods: {},
    computed: {}
  }

</script>

<style scoped>

li:hover,
li.router-link-active,
li.router-link-exact-active {
   background-color: #e35333;
   cursor: pointer;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #5597b4;
  box-shadow:0 1px 1px #ccc;
  border-radius:2px;
}

li,
li:last-child {
  border-right: none;
}

li {
  float: left;
}

li, .link{
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

 </style>
