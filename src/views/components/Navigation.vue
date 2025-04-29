<template>
    <nav class="navigation">
        <div class="nav-container">
            <!-- Logo ou nom -->
            <router-link to="/" class="logo">Sona</router-link>
            <!-- Liens de navigation -->
            <div class="nav-links">
                <router-link to="/" class="nav-link">Accueil</router-link>
                <router-link to="/about" class="nav-link">À propos</router-link>
                <router-link to="/services" class="nav-link">Services</router-link>
                <router-link to="/products" class="nav-link">Produits</router-link>
                <router-link to="/contact" class="nav-link">Contact</router-link>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
.navigation {
    background-color: #4A704B;
    /* Vert naturel pour santé et nature */
    color: white;
    padding: 15px 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: background-color 0.3s ease;
        
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    text-decoration: none;
}

.nav-links {
    display: flex;
    gap: 25px;
}

.nav-link {
    color: white;
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



/* .router-link-active {
    color: #A9CAAA;
    border-bottom: 2px solid #A9CAAA;
} */

/* Responsive design */
@media (max-width: 768px) {
    .nav-container {
        flex-direction: column;
        gap: 15px;
    }

    .nav-links {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .nav-link {
        font-size: 0.9rem;
    }
}
</style>