<template>
    <nav class="navigation">
        <div class="nav-container">
            <!-- Logo ou nom -->
            <router-link to="/" class="logo">
                
                <img src="/img/logojpg.jpg" alt="" class="logo-image" />
            </router-link>

            <!-- Bouton Burger (visible sur mobile) -->
            <button class="burger-menu" @click="toggleMenu" aria-label="Toggle menu">
                <span class="burger-icon"></span>
                <span class="burger-icon"></span>
                <span class="burger-icon"></span>
            </button>

            <!-- Liens de navigation -->
            <div class="nav-links" :class="{ 'nav-links-active': isMenuOpen }">
                <router-link to="/" class="nav-link" @click="closeMenu">Accueil</router-link>
                <router-link to="/about" class="nav-link" @click="closeMenu">À propos</router-link>
                <router-link to="/services" class="nav-link" @click="closeMenu">Services</router-link>
                <router-link to="/products" class="nav-link" @click="closeMenu">Produits</router-link>
                <router-link to="/contact" class="nav-link" @click="closeMenu">Contact</router-link>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// État pour gérer l'ouverture/fermeture du menu
const isMenuOpen = ref(false);

// Fonction pour basculer le menu
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

// Fonction pour fermer le menu après un clic sur un lien
const closeMenu = () => {
    isMenuOpen.value = false;
};
</script>

<style scoped>
.navigation {
    background-color: #4A704B;
    /* Vert foncé */
    color: #FFFFFF;
    /* Blanc */
    padding: 15px 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}
.logo-image{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
}
.nav-container {
    /* max-width: 1200px; */
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: #FFFFFF;
    /* Blanc */
    text-decoration: none;
}
.router-link-active.logo{
    color: #C8102E;
    /* Rouge */
    border-bottom: none;
}

.nav-links {
    display: flex;
    gap: 25px;
}

.nav-link {
    color: #FFFFFF;
    /* Blanc */
    text-decoration: none;
    font-weight: 500;
    padding: 5px 10px;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: #C8102E;
    /* Rouge pour survol */
}

.router-link-active {
    color: #C8102E;
    /* Rouge */
    border-bottom: 2px solid #C8102E;
}

/* Burger Menu */
.burger-menu {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
}

.burger-icon {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #FFFFFF;
    /* Blanc */
    margin: 5px 0;
    transition: all 0.3s ease;
}

/* Responsive design */
@media (max-width: 768px) {
    .burger-menu {
        display: block;
    }

    .nav-links {
        display: none;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background-color: #4A704B;
        /* Vert foncé */
        padding: 20px 0;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .nav-links-active {
        display: flex;
    }

    .nav-link {
        font-size: 1.1rem;
        padding: 10px;
    }

    /* Animation du burger en "X" */
    .burger-menu.active .burger-icon:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .burger-menu.active .burger-icon:nth-child(2) {
        opacity: 0;
    }

    .burger-menu.active .burger-icon:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }
}
</style>