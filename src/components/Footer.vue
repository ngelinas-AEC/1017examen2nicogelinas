<!-- Footer : élément commun à toutes les pages du site web qui contient le copyright et l'anné de publication -->

<template lang="html">

  <section class="footer">
    <!-- Appel d'une directive : directivefooter  -->
    <div v-directivefooter> {{'droit' | selectLangue(langue)}} 
       - <a href="https://raw.githubusercontent.com/ngelinas-AEC/1017examen2nicogelinas/master/LICENSE" >LICENSE MIT</a>
    </div>
  </section>

</template>

<script lang="js">
  import {LanguesMixin}  from "../mixins/LanguesMixin";

  export default  {
    mixins: [LanguesMixin],
    name: 'footerComponent',
    props: [],
    directives: {
      directivefooter: {
       // Function hook bind : appelée une seule fois quand la directive est attachée à l’élément
       bind: function(el) {
          el.innerHTML = 'Copyright © ' + ' Nico Gelinas - ' +  new Date().getFullYear() + el.innerHTML;
          el.style.fontSize = 18 + 'px';
          el.style.color = 'white';
        },
      },
    }
}
</script>

<style scoped >
  .footer {
    margin-top: 30px;
    padding: 30px;
    color: 'white';
    background-color: #5597b4;
  }
</style>