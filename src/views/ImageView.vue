<template>
    <div class="image-view">
        <div class="image-container" role="region" aria-label="Galerie d'images">
            <transition name="fade">
                <div class="image-wrapper" v-if="currentImage">
                    <button v-if="hasPrevious" @click="previousImage" class="nav-btn nav-btn-prev"
                        aria-label="Image précédente">
                        <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <div class="image-content">
                        <img :src="currentImage.url" :alt="currentImage.description" class="large-image" />
                        <p class="image-description">{{ currentImage.description }}</p>
                    </div>
                    <button v-if="hasNext" @click="nextImage" class="nav-btn nav-btn-next" aria-label="Image suivante">
                        <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </transition>
            <router-link to="/services" class="btn btn-secondary" aria-label="Retour à la page des services">Retour aux
                services</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Liste complète des images pour permettre la navigation
const allImages = ref([
    // Rééducation post-opératoire
    { url: 'https://images.unsplash.com/photo-1576091160550-2173fd1bece7?q=80&w=2070&auto=format&fit=crop', description: 'Patient en rééducation post-opératoire avec un kinésithérapeute' },
    { url: 'https://images.unsplash.com/photo-1571019614242-c5ca3f5e59f8?q=80&w=2070&auto=format&fit=crop', description: 'Exercices de rééducation pour renforcer les muscles' },
    { url: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2070&auto=format&fit=crop', description: 'Séance de rééducation avec équipement médical' },
    // Massages thérapeutiques
    { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', description: 'Massage thérapeutique pour soulager les douleurs musculaires' },
    { url: 'https://images.unsplash.com/photo-1519824145371-2968948d4e77?q=80&w=2070&auto=format&fit=crop', description: 'Massage relaxant pour réduire le stress' },
    { url: 'https://images.unsplash.com/photo-1616394584738-fc687bef1dd1?q=80&w=2070&auto=format&fit=crop', description: 'Massage des jambes pour améliorer la circulation' },
    // Consultations à domicile
    { url: 'https://images.unsplash.com/photo-1612349317154-ee6ee38a476a?q=80&w=2070&auto=format&fit=crop', description: 'Consultation à domicile avec un kinésithérapeute' },
    { url: 'https://images.unsplash.com/photo-1584464491920-41b432a4235b?q=80&w=2070&auto=format&fit=crop', description: 'Séance de soins à domicile pour un patient' },
    { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', description: 'Consultation à domicile avec matériel portable' }
]);

const route = useRoute();
const router = useRouter();

// Récupérer l'image actuelle et sa description
const currentImage = computed(() => {
    const imageUrl = decodeURIComponent(route.params.imageUrl as string);
    const description = decodeURIComponent(route.params.description as string);
    return allImages.value.find(img => img.url === imageUrl && img.description === description) || null;
});

// Index de l'image actuelle pour la navigation
const currentIndex = computed(() => {
    return allImages.value.findIndex(img => img.url === currentImage.value?.url && img.description === currentImage.value?.description);
});

const hasPrevious = computed(() => currentIndex.value > 0);
const hasNext = computed(() => currentIndex.value < allImages.value.length - 1);

const previousImage = () => {
    if (hasPrevious.value) {
        const prevImage = allImages.value[currentIndex.value - 1];
        router.push({ name: 'ImageView', params: { imageUrl: encodeURIComponent(prevImage.url), description: encodeURIComponent(prevImage.description) } });
    }
};

const nextImage = () => {
    if (hasNext.value) {
        const nextImage = allImages.value[currentIndex.value + 1];
        router.push({ name: 'ImageView', params: { imageUrl: encodeURIComponent(nextImage.url), description: encodeURIComponent(nextImage.description) } });
    }
};
</script>

<style scoped>
.image-view {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222222;
    /* Fond sombre pour contraste */
    padding: 20px;
    position: relative;
}

.image-container {
    position: relative;
    max-width: 900px;
    width: 100%;
    text-align: center;
    background: rgba(255, 255, 255, 0.95);
    /* Fond blanc semi-transparent */
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.image-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-content {
    position: relative;
}

.large-image {
    max-width: 100%;
    max-height: 60vh;
    object-fit: contain;
    border-radius: 8px;
    border: 2px solid #4A704B;
    /* Vert foncé */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.large-image:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.image-description {
    font-size: 1.1rem;
    color: #4A704B;
    /* Vert foncé */
    margin-top: 15px;
    font-style: italic;
    line-height: 1.5;
    background: rgba(255, 255, 255, 0.9);
    padding: 8px 15px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #4A704B;
    /* Vert foncé */
    color: #FFFFFF;
    border: none;
    padding: 12px;
    cursor: pointer;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease, transform 0.3s ease;
}

.nav-btn:hover {
    background: #C8102E;
    /* Rouge */
    transform: translateY(-50%) scale(1.1);
}

.nav-btn-prev {
    left: -60px;
}

.nav-btn-next {
    right: -60px;
}

.arrow-icon {
    width: 20px;
    height: 20px;
    stroke: #FFFFFF;
}

.btn-secondary {
    display: inline-block;
    margin-top: 25px;
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

/* Animation de fade */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
    .image-container {
        padding: 20px;
    }

    .large-image {
        max-height: 50vh;
    }

    .image-description {
        font-size: 0.95rem;
        padding: 6px 10px;
    }

    .nav-btn {
        width: 35px;
        height: 35px;
        padding: 8px;
    }

    .nav-btn-prev {
        left: -10px;
    }

    .nav-btn-next {
        right: -10px;
    }

    .arrow-icon {
        width: 16px;
        height: 16px;
    }

    .btn-secondary {
        padding: 10px 20px;
        font-size: 0.9rem;
    }
}
</style>