<script setup>
import { ref } from 'vue';
// const taches = ref < string[]> ([]);
const taches = ref ([])
const nouvelleTache = ref('');

const ajouterTache = () => {
    if (nouvelleTache.value.trim()) {
        taches.value.push(nouvelleTache.value)
        nouvelleTache.value = '';
    }
}


const supprimerTache = (index) => {
    taches.value.splice(index,1)
}
</script>

<template>
    <div class="todos">
        <h1>Liste de tâches</h1>
        <input v-model="nouvelleTache" placeholder="Ajouter une tâche" 
        @keyup.enter="ajouterTache"
         />
        <ul>
            <li v-for="(tache, index) in taches" :key="index">
                {{ tache }}
                <button @click="supprimerTache(index)">Supprimer</button>
            </li>
        </ul>
        <p v-if="!taches.length">Aucune tâche pour le moment.</p>
    </div>
</template>

<style scoped>
.todos {
    padding: 2rem;
    max-width: 600px;
    margin: 0 auto;
}

input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: 1px solid #ccc;
}

button {
    background: #ff4d4f;
    color: white;
    border: none;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
}
</style>