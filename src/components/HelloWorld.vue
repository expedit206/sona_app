<script setup lang="ts">
  import { computed, ref } from 'vue';
defineProps<{
  msg: string
}>()


const compteur = ref(0);
// const estPair = compteur.value % 2 === 0;
const estPair = computed(() => compteur.value % 2 === 0);

const incrementer = () => {
  compteur.value++;
}
const decrementer = () => {
  compteur.value--;
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>

      Compteur : {{ compteur }} <br>

      <button @click="incrementer">Encrementer</button><br>
      <button @click="decrementer">Decrementer</button><br>
      Etat : {{  estPair ? 'Pair' : 'Impair' }}
   
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
