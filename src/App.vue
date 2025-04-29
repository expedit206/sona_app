<script setup >

import Navigation from './views/components/Navigation.vue';


</script >

<template>
  <div id="main">


    <Navigation /> 
    <div class="content">

      <router-view />
    </div>
    
  </div>
</template>

<style>


.content{
  margin-top: 2rem;
}
#main{
  margin-top: 60px;
  /* Ajuster la marge supérieure pour le contenu principal */
  padding: 10px;
  background-color: #f9f9f9;
  min-height: calc(100vh - 60px);
  /* Assurez-vous que le contenu principal occupe tout l'espace restant */
}
</style>