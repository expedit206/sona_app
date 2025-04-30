<template>
  <div class="home">
    <!-- Section Hero -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Bienvenue chez Sona</h1>
        <p class="hero-subtitle">
          Votre partenaire pour une santé naturelle et un bien-être durable – Spécialiste en kinésithérapie et
          producteur de remèdes naturels.
        </p>
        <div class="hero-buttons">
          <router-link to="/services" class="btn btn-primary">Découvrir nos soins</router-link>
          <!-- <router-link to="/products" class="btn btn-secondary">Voir nos produits</router-link> -->
        </div>
      </div>
    </section>

    <!-- Section À propos rapide -->
    <section class="container about-section">
      <h2 class="section-title">Qui sommes-nous ?</h2>
      <p class="section-text">
        Chez Sona, nous combinons l’expertise de la kinésithérapie avec la puissance des remèdes naturels. Forts de plus
        de 10 ans d’expérience, nous offrons des soins personnalisés pour améliorer votre qualité de vie et des produits
        médicinaux faits maison, issus d’ingrédients biologiques et locaux.
      </p>
      <router-link to="/about" class="btn btn-secondary">En savoir plus sur notre histoire</router-link>
    </section>

    <!-- Section Services et Produits -->
    <section class="container services-products">
      <h2 class="section-title">Nos expertises</h2>
      <div class="sections">
        <div class="card">
          <div class="card-image"
            style="background: url('/img/masse-do.jpg') no-repeat center center; background-size: cover;">
            ">
          </div>
          <h2>Kinésithérapie</h2>
          <p>
            Des soins professionnels adaptés à vos besoins : rééducation, massages thérapeutiques, et consultations à
            domicile pour retrouver votre mobilité et soulager vos douleurs.
          </p>
          <router-link to="/services" class="btn btn-primary">En savoir plus</router-link>
        </div>
        <div class="card">
          <div class="card-image" style="background: url('/public/img/cacao-cabos.jpg')  no-repeat center/cover ">
          </div>
          <h2>Produits médicinaux</h2>
          <p>
            Découvrez notre gamme de remèdes naturels, comme le sirop de citron pour renforcer l’immunité ou la poudre
            de gingembre pour ses propriétés anti-inflammatoires.
          </p>
          <router-link to="/products" class="btn btn-primary">Découvrir les produits</router-link>
        </div>
      </div>
    </section>

    <!-- Section Témoignages -->
    <section class="container testimonials">
      <h2 class="section-title">Ce que disent nos clients</h2>
      <div class="testimonial-grid">
        <div class="card testimonial-card">
          <span class="quote-icon">“</span>
          <p class="quote">
            Les séances de kinésithérapie m’ont redonné une mobilité que je pensais perdue. Merci Sona !
          </p>
          <p class="author">— Marie, 45 ans</p>
        </div>
        <div class="card testimonial-card">
          <span class="quote-icon">“</span>
          <p class="quote">
            Le sirop de citron est incroyable pour renforcer mon système immunitaire, surtout en hiver.
          </p>
          <p class="author">— Paul, 32 ans</p>
        </div>
      </div>
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
  padding: 80px 20px;
  text-align: center;
  /* background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('/public/img/ecail.jpg') no-repeat center/contain; */
  background: linear-gradient(rgba(39, 38, 38, 0.4), rgba(74, 72, 72, 0.4)),
    url('/public/img/ecail.jpg') no-repeat center/contain;
  background-size: cover;
  background-position: center;
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.4rem;
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
  /* Blanc */
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 25px;
  color: #4A704B;
  text-align: center;
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
  margin-bottom: 30px;
  line-height: 1.7;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Section Services et Produits */
.services-products {
  padding: 60px 20px;
  background-color: #F5F5F5;
  /* Blanc cassé léger */
}

.sections {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.card {
  background-color: #FFFFFF;
  /* Blanc */
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 12px 12px 0 0;
}

.card h2 {
  font-size: 1.6rem;
  margin: 20px 20px 10px;
  color: #4A704B;
  /* Vert foncé */
}

.card p {
  font-size: 1rem;
  color: #666;
  margin: 0 20px 20px;
  line-height: 1.6;
}

/* Section Témoignages */
.testimonials {
  padding: 60px 20px;
  background-color: #FFFFFF;
  /* Blanc */
}

.testimonial-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.testimonial-card {
  background-color: #b8b3b394;
  /* Blanc */
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 2px solid #4A704B;
  /* Vert foncé */
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.quote-icon {
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 3rem;
  color: #000000;
  /* Vert foncé */
  opacity: 0.2;
}

.quote {
  font-style: italic;
  font-size: 1.1rem;
  color: #fefdfd;
  /* Gris foncé pour contraste */
  margin-bottom: 15px;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

.author {
  font-weight: 500;
  font-size: 1rem;
  color: #C8102E;
  /* Rouge */
  text-align: right;
}

/* Boutons */
.btn-primary {
  background-color: #4A704B;
  /* Vert foncé */
  color: #FFFFFF;
  /* Blanc */
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
  display: inline-block;
  margin: 0 20px 20px;
}

.btn-primary:hover {
  background-color: #C8102E;
  /* Rouge */
  transform: scale(1.05);
}

.btn-secondary {
  background-color: transparent;
  color: #260f0f;
  /* Vert foncé */
  border: 2px solid #4A704B;
  padding: 10px 15px !important;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-secondary:hover {
  background-color: #C8102E;
  /* Rouge */
  color: #FFFFFF;
  /* Blanc */
  border-color: #C8102E;
  transform: scale(1.05);
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

  .section-text {
    font-size: 1.1rem;
  }

  .sections {
    grid-template-columns: 1fr;
  }

  .card-image {
    height: 150px;
  }

  .card h2 {
    font-size: 1.4rem;
  }

  .card p {
    font-size: 0.95rem;
  }

  .testimonial-grid {
    grid-template-columns: 1fr;
  }

  .quote {
    font-size: 1rem;
  }

  .quote-icon {
    font-size: 2.5rem;
  }
}
</style>