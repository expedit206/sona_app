<template>
  <div class="home">
    <!-- Section Hero avec Parallax -->
    <section class="hero animate-on-scroll">
      <div class="hero-content">
        <h1 class="hero-title">
          Bienvenue chez Sona
        </h1>
        <p class="hero-subtitle">
          Votre partenaire pour une santé naturelle et un bien-être durable – Spécialiste en kinésithérapie et
          producteur de remèdes naturels.
        </p>
        <div class="hero-buttons">
          <router-link to="/services" class="btn btn-primary">
            Découvrir nos soins
          </router-link>
        </div>
      </div>
    </section>

    <!-- Section À propos rapide -->
    <section class="container about-section animate-on-scroll">
      <h2 class="section-title">
        Qui sommes-nous ?
      </h2>
      <p class="section-text">
        Chez Sona, nous combinons l’expertise de la kinésithérapie avec la puissance des remèdes naturels. Forts de plus
        de 10 ans d’expérience, nous offrons des soins personnalisés pour améliorer votre qualité de vie et des produits
        médicinaux faits maison, issus d’ingrédients biologiques et locaux.
      </p>
      <router-link to="/about" class="btn btn-secondary">
        En savoir plus sur notre histoire
      </router-link>
    </section>

    <!-- Section Services et Produits -->
    <section class="container services-products animate-on-scroll">
      <h2 class="section-title">
        Nos expertises
      </h2>
      <div class="sections">
        <div class="card" v-for="item in allItems" :key="item.id">
          <div class="card-image"
            :style="{ background: `url(${item.image}) no-repeat center center`, backgroundSize: 'cover' }">
          </div>
          <h2>
            <i :class="item.icon" class="card-icon"></i>
            {{ item.title }}
          </h2>
          <p>{{ item.description }}</p>
          <router-link :to="item.link"  class="btn btn-primary">
            En savoir plus
          </router-link>
        </div>
      </div>
    </section>

    <!-- Section Témoignages avec Carrousel -->
    <section class="container testimonials animate-on-scroll">
      <h2 class="section-title">
        Ce que disent nos clients
      </h2>
      <div class="carousel-container">
        <button class="carousel-btn prev" @click="prevSlide" aria-label="Témoignage précédent">
        </button>
        <div class="carousel">
          <div class="carousel-inner" :style="{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }">
            <div class="card testimonial-card" v-for="(testimonial, index) in testimonialsData" :key="testimonial.id"
              :class="{ 'center': index === (currentSlide % testimonialsData.length), 'left': index === ((currentSlide - 1 + testimonialsData.length) % testimonialsData.length), 'right': index === ((currentSlide + 1) % testimonialsData.length) }">
              <div class="testimonial-avatar">
                <img :src="testimonial.avatar" :alt="`Avatar de ${testimonial.author.split(',')[0]}`"
                  class="avatar-img">
              </div>
              <p class="quote">{{ testimonial.quote }}</p>
              <p class="author">— {{ testimonial.author }}</p>
            </div>
          </div>
        </div>
        <button class="carousel-btn next" @click="nextSlide" aria-label="Témoignage suivant">
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

// Charger les données JSON
import servicesData from '@/assets/services.json';
import productsData from '@/assets/products.json';
import testimonialsDataRaw from '@/assets/testimonials.json';

const allItems = computed(() => {
  // Limiter à un seul service et un seul produit
  const service = servicesData.length > 0 ? [servicesData[0]] : [];
  const product = productsData.length > 0 ? [productsData[0]] : [];
  return [...service, ...product].map(item => ({
    ...item,
    link: item.id.startsWith('reeduc') || item.id.startsWith('massage') || item.id.startsWith('consult') ? '/services' : '/products'
  }));
});
const testimonialsData = ref(testimonialsDataRaw);

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

// Gestion du carrousel
const currentSlide = ref(0);
const totalSlides = computed(() => Math.ceil(testimonialsData.value.length / 3));

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % testimonialsData.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + testimonialsData.value.length) % testimonialsData.value.length;
};

// Défilement automatique (facultatif, toutes les 5 secondes)
onMounted(() => {
  let autoSlide = setInterval(() => {
    nextSlide();
  }, 5000);

  // Arrête le défilement automatique si l'utilisateur interagit
  document.querySelector('.carousel-container')?.addEventListener('mouseover', () => clearInterval(autoSlide));
  document.querySelector('.carousel-container')?.addEventListener('mouseout', () => {
    autoSlide = setInterval(() => nextSlide(), 5000);
  });
});
</script>

<style scoped>
/* Conteneur principal */
.home {
  background: linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 100%);
  /* Dégradé subtil */
}

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

/* Hero Section avec Parallax */
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
    url('/img/consu.jpg') no-repeat center/cover;
  background-attachment: fixed;
  /* Effet de parallax */
  background-position: center;
  padding: 80px 20px;
  text-align: center;
  color: #FFFFFF;
  min-height: 600px;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.3);
}

.hero-content {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.hero-title::after {
  content: '';
  width: 80px;
  height: 4px;
  background-color: #C8102E;
  /* Rouge */
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.hero-icon {
  font-size: 2.5rem;
  color: #C8102E;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 40px;
  line-height: 1.6;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

/* Section À propos rapide */
.about-section {
  padding: 60px 20px;
  background-color: #FFFFFF;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 25px;
  color: #4A704B;
  /* Vert foncé */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
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

.section-icon {
  font-size: 1.8rem;
  color: #C8102E;
}

.section-text {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.7;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Section Services et Produits */
.services-products {
  padding: 60px 20px;
  background: linear-gradient(135deg, #F5F5F5, #E0E0E0);
}

.sections {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
}

.card {
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(74, 112, 75, 0.2);
  /* Bordure subtile verte */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  height: 220px;
  background-size: cover;
  background-position: center;
  border-radius: 12px 12px 0 0;
  transition: opacity 0.3s ease;
}

.card-image:hover {
  opacity: 0.9;
}

.card h2 {
  font-size: 1.6rem;
  font-weight: 600;
  margin: 20px 20px 10px;
  color: #4A704B;
  /* Vert foncé */
  display: flex;
  align-items: center;
  gap: 8px;
}

.card-icon {
  font-size: 1.4rem;
  color: #C8102E;
}

.card p {
  font-size: 1rem;
  color: #666;
  margin: 0 20px 20px;
  line-height: 1.6;
}

/* Section Témoignages avec Carrousel */
.testimonials {
  padding: 60px 20px;
  background-color: #FFFFFF;
}

.carousel-container {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
}

.carousel {
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.testimonial-card {
  background-color: #FFFFFF;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(74, 112, 75, 0.2);
  position: relative;
  flex: 0 0 calc(33.33% - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
}

.testimonial-card.center {
  transform: scale(.7);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  z-index: 3;
  opacity: .7;
}

.testimonial-card.left,
.testimonial-card.right {
  transform: scale(1.2);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  opacity: 1;
}

.testimonial-avatar {
  margin-bottom: 15px;
}

.avatar-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #4A704B;
  transition: transform 0.3s ease;
}

.avatar-img:hover {
  transform: scale(1.1);
}

.quote-icon {
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 2rem;
  color: #4A704B;
  opacity: 0.2;
}

.quote {
  font-style: italic;
  font-size: 1rem;
  color: #666;
  margin-bottom: 10px;
  line-height: 1.5;
  position: relative;
  z-index: 1;
  text-align: center;
}

.author {
  font-weight: 500;
  font-size: 0.95rem;
  color: #C8102E;
  /* Rouge */
  text-align: center;
  margin-top: auto;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #4A704B;
  color: #FFFFFF;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  z-index: 10;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.carousel-btn:hover {
  background-color: #C8102E;
  transform: translateY(-50%) scale(1.1);
}

.prev {
  left: -50px;
}

.next {
  right: -50px;
}

/* Boutons */
.btn-primary {
  background-color: #4A704B;
  /* Vert foncé */
  color: #FFFFFF;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 10px 20px;
}

.btn-primary:hover {
  background-color: #C8102E;
  /* Rouge */
  transform: scale(1.05);
}

.btn-secondary {
  background-color: transparent;
  color: #4A704B;
  /* Vert foncé */
  border: 2px solid #4A704B;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-secondary:hover {
  background-color: #C8102E;
  color: #FFFFFF;
  border-color: #C8102E;
  transform: scale(1.05);
}

.btn-icon {
  font-size: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    padding: 60px 20px;
    min-height: 400px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-icon {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 15px;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-icon {
    font-size: 1.5rem;
  }

  .section-text {
    font-size: 1.1rem;
  }

  .sections {
    grid-template-columns: 1fr;
  }

  .card-image {
    height: 180px;
  }

  .card h2 {
    font-size: 1.4rem;
  }

  .card-icon {
    font-size: 1.2rem;
  }

  .card p {
    font-size: 0.95rem;
  }

  .carousel-btn {
    display: none;
    /* Masquer les boutons sur mobile pour simplifier */
  }

  .testimonial-card {
    flex: 0 0 100%;
    transform: scale(1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    opacity: 1;
  }

  .testimonial-card.center {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  .testimonial-card.left,
  .testimonial-card.right {
    display: none;
  }

  .avatar-img {
    width: 50px;
    height: 50px;
  }

  .quote {
    font-size: 0.95rem;
  }

  .quote-icon {
    font-size: 1.8rem;
  }

  .btn-primary,
  .btn-secondary {
    padding: 10px 20px;
    font-size: 0.9rem;
  }

  .btn-icon {
    font-size: 0.9rem;
  }
}
</style>