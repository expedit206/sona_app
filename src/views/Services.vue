<template>
    <div class="services container">
        <!-- En-tête -->
        <header class="services-header">
            <h1 class="section-title">Services de kinésithérapie</h1>
            <p class="section-text">
                Des soins professionnels adaptés à vos besoins pour améliorer votre mobilité et votre bien-être.
            </p>
        </header>

        <!-- Liste des services -->
        <div class="service-list">
            <div class="service card">
                <img src="/public/img/reeduc.jpg"
                    alt="Rééducation post-opératoire" class="service-image" />
                <h2>Rééducation post-opératoire</h2>
                <p>
                    Accompagnement personnalisé pour retrouver votre mobilité après une opération. Nous travaillons sur
                    des exercices ciblés pour accélérer votre rétablissement.
                </p>
            </div>
            <div class="service card">
                <img src="https://images.unsplash.com/photo-1519824145371-2968948d4e77?q=80&w=2070&auto=format&fit=crop"
                    alt="Massages thérapeutiques" class="service-image" />
                <h2>Massages thérapeutiques</h2>
                <p>
                    Techniques de massage pour soulager les douleurs musculaires, réduire le stress et améliorer la
                    circulation sanguine.
                </p>
            </div>
            <div class="service card">
                <img src="https://images.unsplash.com/photo-1584464492346-6e7b81e8b344?q=80&w=2070&auto=format&fit=crop"
                    alt="Consultations à domicile" class="service-image" />
                <h2>Consultations à domicile</h2>
                <p>
                    Des soins directement chez vous pour plus de confort, adaptés à votre emploi du temps et à vos
                    besoins spécifiques.
                </p>
            </div>
        </div>

        <!-- Section CTA -->
        <section class="cta-section">
            <h2 class="section-title">Prêt à prendre soin de vous ?</h2>
            <p class="section-text">
                Contactez-nous pour réserver une séance ou pour plus d’informations sur nos services.
            </p>
            <router-link to="/contact" class="btn btn-secondary">Prendre rendez-vous</router-link>
        </section>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* En-tête */
.services-header {
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

/* Liste des services */
.service-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    padding: 20px 0;
}

.service {
    background-color: #FFFFFF;
    /* Blanc */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.service:hover {
    transform: translateY(-5px);
}

.service-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
    margin-bottom: 15px;
}

.service h2 {
    font-size: 1.5rem;
    color: #4A704B;
    /* Vert foncé */
    margin-bottom: 10px;
}

.service p {
    font-size: 1rem;
    color: #666;
}

/* Section CTA */
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

    .service h2 {
        font-size: 1.3rem;
    }

    .service p {
        font-size: 0.9rem;
    }

    .service-image {
        height: 150px;
    }
}
</style>