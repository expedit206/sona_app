<template>
  <div class="about">
    <!-- Section Hero -->
    <section class="hero">
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
        <div class="text-content">
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
          alt="Sona en pleine nature" class="about-image" />
      </div>
    </section>

    <!-- Section Mission -->
    <section class="container mission-section">
      <h2 class="section-title">Notre mission</h2>
      <p class="section-text">
        Promouvoir une santé durable en combinant les bienfaits de la kinésithérapie moderne et les vertus des remèdes
        naturels, tout en respectant l’environnement.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Hero Section */
.hero {
  background-color: #4A704B;
  /* Vert foncé */
  color: #FFFFFF;
  /* Blanc */
  padding: 60px 20px;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('/public/img//masse-genou.jpg') no-repeat center/cover;
  background-size: cover;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 15px;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 30px;
  line-height: 1.6;
}

/* Section Détails */
.details-section {
  padding: 40px 0;
}

.details-content {
  display: flex;
  gap: 30px;
  align-items: center;
}

.text-content {
  flex: 1;
}

.about-image {
  flex: 1;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Section Mission */
.mission-section {
  text-align: center;
  padding: 40px 0;
  background-color: #F5F5F5;
  /* Blanc cassé léger */
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

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .details-content {
    flex-direction: column;
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
}
</style>