<template lang="html">

  <section class="footer">
    <div v-directivefooter> {{'droit' | selectLangue(langue)}} </div>
    
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