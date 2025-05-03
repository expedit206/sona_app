<template>
    <div class="products container">
        <!-- En-tête -->
        <header class="products-header animate-on-scroll">
            <h1 class="section-title">Nos produits médicinaux</h1>
            <p class="section-text">
                Découvrez notre gamme de remèdes naturels, fabriqués avec des ingrédients biologiques et locaux pour
                soutenir votre santé et bien-être.
            </p>
        </header>

        <!-- Liste des produits -->
        <div class="product-list animate-on-scroll">
            <div v-for="product in productsData" :key="product.id" class="product card">
                <img :src="product.image" :alt="product.title" class="product-image" />
                <h3>
                    {{ product.title }}
                </h3>
                <p class="description">{{ product.description }}</p>
                <p class="benefits">
                    <strong>Bienfaits :</strong> {{ product.benefits }}
                </p>
                <p class="price">Prix : {{ product.price }}</p>
                <button class="btn btn-primary">
                    Commander
                </button>
            </div>
        </div>

        <!-- Section appel à l'action -->
        <section class="cta-section animate-on-scroll">
            <h2 class="section-title">
                Intéressé par nos produits ?
            </h2>
            <p class="section-text">
                Contactez-nous pour passer une commande ou pour plus d’informations sur nos remèdes naturels.
            </p>
            <router-link to="/contact" class="btn btn-secondary">
                Nous contacter
            </router-link>
        </section>
    </div>
</template>

<script setup lang="ts"> 
import { onMounted } from 'vue';

// Charger les données JSON
import productsData from '@/assets/products.json';

// Gestion des animations au scroll avec Intersection Observer
onMounted(() => {
    const sections = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Arrête l'observation après l'animation
            }
        });
    }, { threshold: 0.2 }); // Déclenche quand 20% de la section est visible

    sections.forEach(section => {
        observer.observe(section);
    });
});
</script>

<style scoped>
/* Animations au scroll */
.animate-on-scroll {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
}

/* En-tête */
.products-header {
    text-align: center;
    padding: 40px 0;
}

.section-title {
    font-size: 2rem;
    margin-bottom: 15px;
    color: #4A704B;
    /* Vert foncé */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.section-text {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 20px;
    line-height: 1.6;
}

/* Liste des produits */
.product-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    padding: 20px 0;
}

.product {
    background-color: #FFFFFF;
    /* Blanc */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.product:hover {
    transform: translateY(-5px);
}

.product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
    margin-bottom: 15px;
}

.product h3 {
    font-size: 1.5rem;
    color: #4A704B;
    /* Vert foncé */
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.product-icon {
    font-size: 1.3rem;
    color: #C8102E;
    /* Rouge */
}

.description {
    font-size: 1rem;
    color: #666;
    margin-bottom: 10px;
}

.benefits {
    font-size: 0.95rem;
    color: #666;
    margin-bottom: 15px;
}

.price {
    font-size: 1.1rem;
    font-weight: 500;
    color: #C8102E;
    /* Rouge */
    margin-bottom: 15px;
}

/* Section appel à l’action */
.cta-section {
    text-align: center;
    padding: 40px 0;
    background-color: #F5F5F5;
    /* Blanc cassé léger */
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('https://images.unsplash.com/photo-1542601098-8fc114e148e2?q=80&w=2070&auto=format&fit=crop');
    background-size: cover;
    background-position: center;
    margin-top: 40px;
    color: #FFFFFF;
    /* Blanc */
}

.cta-section .section-title,
.cta-section .section-text {
    color: #FFFFFF;
    /* Blanc */
}

.cta-icon {
    font-size: 1.5rem;
    color: #C8102E;
    /* Rouge */
}

/* Boutons */
.btn-primary {
    background-color: #4A704B;
    /* Vert foncé */
    color: #FFFFFF;
    /* Blanc */
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.btn-primary:hover {
    background-color: #C8102E;
    /* Rouge */
    transform: scale(1.05);
}

.btn-secondary {
    background-color: transparent;
    color: #FFFFFF;
    /* Blanc */
    border: 2px solid #FFFFFF;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.btn-secondary:hover {
    background-color: #C8102E;
    /* Rouge */
    color: #FFFFFF;
    border-color: #C8102E;
    transform: scale(1.05);
}

.btn-icon {
    font-size: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
    .section-title {
        font-size: 1.8rem;
    }

    .section-text {
        font-size: 1rem;
    }

    .product h3 {
        font-size: 1.3rem;
    }

    .product-icon {
        font-size: 1.2rem;
    }

    .description,
    .benefits,
    .price {
        font-size: 0.9rem;
    }

    .product-image {
        height: 150px;
    }

    .cta-icon {
        font-size: 1.3rem;
    }

    .btn-icon {
        font-size: 0.9rem;
    }
}
</style>