<template>
  <div class="aboutclass">
    <div class="title">
        <h1>{{"apropos" | selectLangue(langue)}}</h1>
    </div>
    <div class="content img">
        <img
          class="resize"
          src="../assets/ordi.png"
        />
    </div>
    <div class="normalize content">
    
        <p>{{"jesuis" | selectLangue(langue)}}</p>
        <p>{{"texteapropos" | selectLangue(langue)}}</p>
      </div>
  </div>
</template>

<script lang="js">
    import {LanguesMixin}  from "../mixins/LanguesMixin";
    
    export default  {
      mixins: [LanguesMixin]
    }
</script>