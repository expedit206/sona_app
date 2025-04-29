<template>
    <div class="products container">
        <!-- En-tête -->
        <header class="products-header">
            <h1 class="section-title">Nos produits médicinaux</h1>
            <p class="section-text">
                Découvrez notre gamme de remèdes naturels, fabriqués avec des ingrédients biologiques et locaux pour
                soutenir votre santé et bien-être.
            </p>
        </header>

        <!-- Liste des produits -->
        <div class="product-list">
            <div class="product card">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                    alt="Sirop de citron" class="product-image" />
                <h3>Sirop de citron</h3>
                <p class="description">
                    Un remède naturel pour renforcer votre immunité et apaiser les maux de gorge. Idéal pour toute la
                    famille, surtout en hiver.
                </p>
                <p class="benefits">
                    <strong>Bienfaits :</strong> Riche en vitamine C, antioxydant, apaise les irritations.
                </p>
                <p class="price">Prix : 10€ (250ml)</p>
                <button class="btn btn-primary">Commander</button>
            </div>
            <div class="product card">
                <img src="https://images.unsplash.com/photo-1615485290382-441e9d161f72?q=80&w=2070&auto=format&fit=crop"
                    alt="Poudre de gingembre" class="product-image" />
                <h3>Poudre de gingembre</h3>
                <p class="description">
                    Un anti-inflammatoire naturel puissant, parfait pour améliorer la digestion et soulager les douleurs
                    articulaires.
                </p>
                <p class="benefits">
                    <strong>Bienfaits :</strong> Stimule la digestion, réduit l’inflammation, booste l’énergie.
                </p>
                <p class="price">Prix : 8€ (100g)</p>
                <button class="btn btn-primary">Commander</button>
            </div>
        </div>

        <!-- Section appel à l'action -->
        <section class="cta-section">
            <h2 class="section-title">Intéressé par nos produits ?</h2>
            <p class="section-text">
                Contactez-nous pour passer une commande ou pour plus d’informations sur nos remèdes naturels.
            </p>
            <router-link to="/contact" class="btn btn-secondary">Nous contacter</router-link>
        </section>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
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
    transition: background-color 0.3s ease;
}

.btn-primary:hover {
    background-color: #C8102E;
    /* Rouge */
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
}

.btn-secondary:hover {
    background-color: #C8102E;
    /* Rouge */
    color: #FFFFFF;
    border-color: #C8102E;
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

    .description,
    .benefits,
    .price {
        font-size: 0.9rem;
    }

    .product-image {
        height: 150px;
    }
}
</style>