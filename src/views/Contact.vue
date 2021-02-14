
<template lang="html">
<section class="contactComponent">
  <div class="container">
    <h1>{{'contact' | selectLangue(langue)}}</h1>
    <div class='item'>
      <label> {{ 'nom' | selectLangue(langue)}} </label>
      <input type="text" name="nom"/>
    </div>
    <div class='item'>
      <label> {{ 'prenom' | selectLangue(langue)}} </label>
      <input type="text" name="prenom"/>
    </div>
    <div class='item'>
    <label> {{ 'courriel' | selectLangue(langue) }} </label>
    <input type="text" name="courriel"/>
    </div>

    <div class='item'>
      <label> {{ 'categorie' | selectLangue(langue) }} </label>
         <select class="sel" name="categorie">
            <option v-for="(option, i) in category" :key="i"> {{ option | selectLangue(langue) }}</option>
         </select>
    </div>
  </div>
  </section>
</template>

<script lang="js">

import   {LanguesMixin}  from "../mixins/LanguesMixin";

  export default  {
    mixins: [LanguesMixin],
    name: 'contactComponent',
    props: [],
    mounted () {

    },
    data () {
      return {
      category: [
              "emploie",
              "projet",
              "information",
              "autre"
          ],

      }
    },
    methods: {
    },
    computed: {
    }
}

</script>