<script setup >

import Footer from './views/components/Footer.vue';
import Navigation from './views/components/Navigation.vue';


</script >

<template>
  <div id="main">


    <Navigation />
    <div class="content">

      <router-view />
    </div>
    <!-- Bouton Call-to-Action Flottant -->
    <router-link to="/contact" class="floating-btn" aria-label="Prendre rendez-vous">Prendre rendez-vous</router-link>
  <Footer />

  </div>
</template>

<style>
/* Bouton Call-to-Action Flottant */
.floating-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #4A704B;
  /* Vert foncé */
  color: #FFFFFF;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.3s ease;
  z-index: 1000;
}

.floating-btn:hover {
  background-color: #C8102E;
  /* Rouge */
  transform: scale(1.05);
}

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