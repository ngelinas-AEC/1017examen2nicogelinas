
<template lang="html">
<section class="contactComponent">
  <div class="container">
    <h1>Contact</h1>
    <div class='item'>
      <label> {{ 'firstname' }} </label>
      <input type="text" name="firstname" placeholder="Firstname"/>
    </div>
    <div class='item'>
      <label> {{ 'lastname' }} </label>
      <input type="text" name="lastname" placeholder="Lastname"/>
    </div>
    <div class='item'>
    <label> {{ 'email' }} </label>
    <input type="text" name="email" placeholder="Email"/>
    </div>
    <div class='item'>
      <label> {{ 'category' }} </label>
      <select v-model="selected">
        <option v-for="item in inventory" :value="item" :key="item.id">
          {{ item.name }}
        </option>
      </select>
    </div>
    <button type="button">Register</button>
  </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'contactComponent',
    props: [],
    mounted () {

    },
    data () {
      return {
         inventory: [
      {name: 'Emploie', id: 1},
      {name: 'Projet', id: 2},
      {name: 'Informations', id: 3},
      {name: 'Autre', id: 4}
    ],
      }
    },
    methods: {
    },
    computed: {
    }
}

</script>