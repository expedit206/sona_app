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
                <img src="https://images.unsplash.com/photo-1576091160550-2173fd1bece7?q=80&w=2070&auto=format&fit=crop"
                    alt="Rééducation post-opératoire" class="service-image" />
                <h2>Rééducation post-opératoire</h2>
                <p>
                    Accompagnement personnalisé pour retrouver votre mobilité après une opération. Nous travaillons sur
                    des
                    exercices ciblés pour accélérer votre rétablissement.
                </p>
                <button class="btn btn-primary" @click="showGallery('reeduc')"
                    aria-label="Voir plus d'images pour la rééducation post-opératoire">Voir plus</button>
            </div>
            <div class="service card">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                    alt="Massages thérapeutiques" class="service-image" />
                <h2>Massages thérapeutiques</h2>
                <p>
                    Techniques de massage pour soulager les douleurs musculaires, réduire le stress et améliorer la
                    circulation
                    sanguine.
                </p>
                <button class="btn btn-primary" @click="showGallery('massage')"
                    aria-label="Voir plus d'images pour les massages thérapeutiques">Voir plus</button>
            </div>
            <div class="service card">
                <img src="https://images.unsplash.com/photo-1612349317154-ee6ee38a476a?q=80&w=2070&auto=format&fit=crop"
                    alt="Consultations à domicile" class="service-image" />
                <h2>Consultations à domicile</h2>
                <p>
                    Des soins directement chez vous pour plus de confort, adaptés à votre emploi du temps et à vos
                    besoins
                    spécifiques.
                </p>
                <button class="btn btn-primary" @click="showGallery('consult')"
                    aria-label="Voir plus d'images pour les consultations à domicile">Voir plus</button>
            </div>
        </div>

        <!-- Modale pour la galerie d'images -->
        <div v-if="isGalleryOpen" class="modal" @click.self="closeGallery" role="dialog" aria-labelledby="modal-title"
            aria-modal="true">
            <div class="modal-content">
                <button class="close-btn" @click="closeGallery" aria-label="Fermer la galerie">
                    <svg class="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <h3 id="modal-title" class="modal-title">{{ galleryTitle }}</h3>
                <div class="gallery">
                    <router-link v-for="(item, index) in galleryItems" :key="index"
                        :to="{ name: 'ImageView', params: { imageUrl: encodeURIComponent(item.url), description: encodeURIComponent(item.description) } }">
                        <img :src="item.url" :alt="item.description" class="gallery-image" />
                        <div class="gallery-overlay">
                            <span class="gallery-text">Voir en grand</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <!-- Section CTA -->
        <section class="cta-section">
            <h2 class="section-title">Prêt à prendre soin de vous ?</h2>
            <p class="section-text">
                Contactez-nous pour réserver une séance ou pour plus d’informations sur nos services.
            </p>
            <router-link to="/contact" class="btn btn-primary">Prendre rendez-vous</router-link>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isGalleryOpen = ref(false);
const galleryTitle = ref('');
const galleryItems = ref<{ url: string, description: string }[]>([]);

const showGallery = (service: string) => {
    isGalleryOpen.value = true;
    switch (service) {
        case 'reeduc':
            galleryTitle.value = 'Galerie - Rééducation post-opératoire';
            galleryItems.value = [
                { url: 'https://images.unsplash.com/photo-1576091160550-2173fd1bece7?q=80&w=2070&auto=format&fit=crop', description: 'Patient en rééducation post-opératoire avec un kinésithérapeute' },
                { url: 'https://images.unsplash.com/photo-1571019614242-c5ca3f5e59f8?q=80&w=2070&auto=format&fit=crop', description: 'Exercices de rééducation pour renforcer les muscles' },
                { url: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2070&auto=format&fit=crop', description: 'Séance de rééducation avec équipement médical' }
            ];
            break;
        case 'massage':
            galleryTitle.value = 'Galerie - Massages thérapeutiques';
            galleryItems.value = [
                { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', description: 'Massage thérapeutique pour soulager les douleurs musculaires' },
                { url: 'https://images.unsplash.com/photo-1519824145371-2968948d4e77?q=80&w=2070&auto=format&fit=crop', description: 'Massage relaxant pour réduire le stress' },
                { url: 'https://images.unsplash.com/photo-1616394584738-fc687bef1dd1?q=80&w=2070&auto=format&fit=crop', description: 'Massage des jambes pour améliorer la circulation' }
            ];
            break;
        case 'consult':
            galleryTitle.value = 'Galerie - Consultations à domicile';
            galleryItems.value = [
                { url: 'https://images.unsplash.com/photo-1612349317154-ee6ee38a476a?q=80&w=2070&auto=format&fit=crop', description: 'Consultation à domicile avec un kinésithérapeute' },
                { url: 'https://images.unsplash.com/photo-1584464491920-41b432a4235b?q=80&w=2070&auto=format&fit=crop', description: 'Séance de soins à domicile pour un patient' },
                { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', description: 'Consultation à domicile avec matériel portable' }
            ];
            break;
    }
};

const closeGallery = () => {
    isGalleryOpen.value = false;
    galleryItems.value = [];
};
</script>

<style scoped>
/* Conteneur principal */
.services {
    background: linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 100%);
    /* Dégradé subtil */
    padding: 40px 20px;
}

/* En-tête */
.services-header {
    text-align: center;
    padding: 40px 0;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: #4A704B;
    /* Vert foncé */
    position: relative;
}

.section-title::after {
    content: '';
    width: 60px;
    height: 3px;
    background-color: #C8102E;
    /* Rouge */
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
}

.section-text {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 20px;
    line-height: 1.6;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

/* Liste des services */
.service-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    padding: 30px 0;
}

.service {
    background-color: #FFFFFF;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid rgba(74, 112, 75, 0.2);
    /* Bordure subtile verte */
}

.service:hover {
    transform: translateY(-8px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.service-image {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    margin-bottom: 15px;
    transition: opacity 0.3s ease;
}

.service-image:hover {
    opacity: 0.9;
}

.service h2 {
    font-size: 1.6rem;
    font-weight: 600;
    color: #4A704B;
    /* Vert foncé */
    margin-bottom: 10px;
}

.service p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
    margin-bottom: 15px;
}

/* Modale pour la galerie */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: rgba(255, 255, 255, 0.95);
    padding: 30px;
    border-radius: 12px;
    width: 85%;
    max-width: 900px;
    position: relative;
    text-align: center;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(74, 112, 75, 0.3);
}

.close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    cursor: pointer;
    color: #C8102E;
    /* Rouge */
    transition: transform 0.3s ease;
}

.close-btn:hover {
    transform: scale(1.2);
}

.close-icon {
    width: 24px;
    height: 24px;
}

.modal-title {
    font-size: 1.8rem;
    font-weight: 600;
    color: #4A704B;
    /* Vert foncé */
    margin-bottom: 20px;
}

.gallery {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    padding: 15px 0;
    scroll-behavior: smooth;
}

.gallery a {
    position: relative;
    display: inline-block;
}

.gallery-image {
    width: 220px;
    height: 160px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.gallery-image:hover {
    transform: scale(1.05);
    opacity: 0.9;
}

.gallery-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 8px;
}

.gallery a:hover .gallery-overlay {
    opacity: 1;
}

.gallery-text {
    color: #FFFFFF;
    font-size: 0.9rem;
    font-weight: 500;
}

/* Section CTA */
.cta-section {
    text-align: center;
    padding: 50px 0;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('https://images.unsplash.com/photo-1542601098-8fc114e148e2?q=80&w=2070&auto=format&fit=crop');
    background-size: cover;
    background-position: center;
    margin-top: 40px;
    border-radius: 12px;
    color: #FFFFFF;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.cta-section .section-title {
    color: #FFFFFF;
    font-size: 2.2rem;
}

.cta-section .section-text {
    color: #FFFFFF;
    opacity: 0.9;
    font-size: 1.2rem;
    margin-bottom: 25px;
}

/* Boutons */
.btn-primary {
    background-color: #4A704B;
    /* Vert foncé */
    color: #FFFFFF;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.3s ease, transform 0.3s ease;
    cursor: pointer;
}

.btn-primary:hover {
    background-color: #C8102E;
    /* Rouge */
    transform: scale(1.05);
}

.btn-secondary {
    background-color: #4A704B;
    /* Vert foncé */
    color: #FFFFFF;
    border: none;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-secondary:hover {
    background-color: #C8102E;
    /* Rouge */
    transform: scale(1.05);
}

/* Responsive */
@media (max-width: 768px) {
    .services-header {
        padding: 30px 0;
    }

    .section-title {
        font-size: 2rem;
    }

    .section-text {
        font-size: 1.1rem;
    }

    .service-list {
        grid-template-columns: 1fr;
        gap: 25px;
    }

    .service {
        padding: 15px;
    }

    .service-image {
        height: 180px;
    }

    .service h2 {
        font-size: 1.4rem;
    }

    .service p {
        font-size: 0.95rem;
    }

    .modal-content {
        width: 90%;
        padding: 20px;
    }

    .modal-title {
        font-size: 1.5rem;
    }

    .gallery-image {
        width: 180px;
        height: 120px;
    }

    .cta-section {
        padding: 40px 0;
    }

    .cta-section .section-title {
        font-size: 1.8rem;
    }

    .cta-section .section-text {
        font-size: 1rem;
    }

    .btn-primary,
    .btn-secondary {
        padding: 10px 20px;
        font-size: 0.9rem;
    }
}
</style>