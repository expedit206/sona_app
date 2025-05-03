<template>
  <div class="about">
    <!-- Section Hero -->
    <section class="hero animate" data-delay="100">
      <div class="hero-content">
        <h1 class="hero-title">À propos de Sona</h1>
        <p class="hero-subtitle">
          Découvrez notre mission : allier expertise en kinésithérapie et passion pour les remèdes naturels.
        </p>
      </div>
    </section>

    <!-- Section Détails -->
    <section class="container details-section">
      <div class="details-content">
        <div class="text-content animate" data-delay="200">
          <h2 class="section-title">Notre histoire</h2>
          <p class="section-text">
            Je suis Sona, kinésithérapeute diplômé avec plus de 10 ans d’expérience dans la rééducation et le bien-être.
            Ma passion pour la nature m’a conduit à explorer les bienfaits des remèdes traditionnels. Aujourd’hui, je
            combine ces deux univers pour offrir des soins professionnels et des produits médicinaux naturels, fabriqués
            à partir d’ingrédients biologiques et locaux.
          </p>
          <p class="section-text">
            Mon objectif est simple : améliorer votre qualité de vie grâce à des solutions naturelles et des thérapies
            adaptées à vos besoins.
          </p>
        </div>
        <img src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=2070&auto=format&fit=crop"
          alt="Sona en pleine nature" class="about-image animate" data-delay="300" />
      </div>
    </section>

    <!-- Section Mission -->
    <section class="container mission-section animate" data-delay="400">
      <h2 class="section-title">Notre mission</h2>
      <p class="section-text">
        Promouvoir une santé durable en combinant les bienfaits de la kinésithérapie moderne et les vertus des remèdes
        naturels, tout en respectant l’environnement.
      </p>
      <router-link to="/contact" class="btn btn-primary animate" aria-label="Prendre rendez-vous" data-delay="500">
        Prendre rendez-vous
      </router-link>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  // Sélectionner tous les éléments avec la classe 'animate'
  const animateElements = document.querySelectorAll('.animate');

  // Config میباشد

  // Configurer l'IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Arrêter l'observation après l'animation
        }
      });
    },
    {
      threshold: 0.2, // Déclencher quand 20% de l'élément est visible
      rootMargin: '0px 0px -50px 0px', // Déclencher légèrement avant
    }
  );

  // Observer chaque élément avec la classe 'animate'
  animateElements.forEach((el) => {
    observer.observe(el);
  });
});
</script>

<style scoped>
/* Conteneur principal */
.about {
  background: linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 100%);
}

/* Hero Section */
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('https://images.unsplash.com/photo-1504280390367-5d76a2d11935?q=80&w=2070&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  padding: 80px 20px;
  text-align: center;
  color: #FFFFFF;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.3);
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 15px;
  position: relative;
}

.hero-title::after {
  content: '';
  width: 80px;
  height: 4px;
  background-color: #C8102E;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.hero-subtitle {
  font-size: 1.4rem;
  margin-bottom: 30px;
  line-height: 1.6;
  opacity: 0.9;
}

/* Section Détails */
.details-section {
  padding: 60px 0;
  background: #FFFFFF;
}

.details-content {
  display: flex;
  gap: 40px;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
}

.text-content {
  flex: 1;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #4A704B;
  position: relative;
}

.section-title::after {
  content: '';
  width: 50px;
  height: 3px;
  background-color: #C8102E;
  position: absolute;
  bottom: -8px;
  left: 0;
}

.section-text {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.7;
}

.about-image {
  flex: 1;
  max-width: 500px;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(74, 112, 75, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-image:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* Section Mission */
.mission-section {
  text-align: center;
  padding: 60px 0;
  background: linear-gradient(135deg, #F5F5F5, #E0E0E0);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.btn-primary {
  background-color: #4A704B;
  color: #FFFFFF;
  padding: 12px 25px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.3s ease;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
}

.btn-primary:hover {
  background-color: #C8102E;
  transform: scale(1.05);
}

/* Animations au scroll */
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeRight {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeLeft {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Styles pour les éléments à animer */
.animate {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.animate.visible {
  opacity: 1;
}

.hero.animate.visible {
  animation: fadeUp 0.8s ease-out forwards;
}

.details-content .text-content.animate.visible {
  animation: fadeRight 0.8s ease-out forwards;
}

.about-image.animate.visible {
  animation: fadeLeft 0.8s ease-out forwards;
}

.mission-section.animate.visible {
  animation: fadeUp 0.8s ease-out forwards;
}

.btn-primary.animate.visible {
  animation: zoomIn 0.6s ease-out forwards;
}

/* Délais pour effet de décalage */
.animate[data-delay="100"] {
  animation-delay: 0.1s;
}

.animate[data-delay="200"] {
  animation-delay: 0.2s;
}

.animate[data-delay="300"] {
  animation-delay: 0.3s;
}

.animate[data-delay="400"] {
  animation-delay: 0.4s;
}

.animate[data-delay="500"] {
  animation-delay: 0.5s;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    padding: 60px 20px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .details-content {
    flex-direction: column;
    gap: 30px;
  }

  .about-image {
    max-width: 100%;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .section-text {
    font-size: 1rem;
  }

  .mission-section {
    padding: 40px 0;
  }

  .btn-primary {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}
</style>