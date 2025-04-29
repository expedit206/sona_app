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
          <router-link to="/products" class="btn btn-secondary">Voir nos produits</router-link>
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
      <div class="sections">
        <div class="card">
          <h2>Kinésithérapie</h2>
          <p>
            Des soins professionnels adaptés à vos besoins : rééducation, massages thérapeutiques, et consultations à
            domicile pour retrouver votre mobilité et soulager vos douleurs.
          </p>
          <router-link to="/services" class="btn btn-primary">En savoir plus</router-link>
        </div>
        <div class="card">
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
        <div class="card">
          <p class="quote">
            "Les séances de kinésithérapie m’ont redonné une mobilité que je pensais perdue. Merci Sona !"
          </p>
          <p class="author">— Marie, 45 ans</p>
        </div>
        <div class="card">
          <p class="quote">
            "Le sirop de citron est incroyable pour renforcer mon système immunitaire, surtout en hiver."
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
  padding: 60px 20px;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
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

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

/* Sections générales */
.section-title {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
}

.section-text {
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.6;
}

/* Services et Produits */
.services-products {
  padding: 40px 0;
}

.sections {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.card h2 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #4A704B;
}

.card p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
}

/* Témoignages */
.testimonials {
  padding: 40px 0;
  background-color: #F5F5F5;
  /* Blanc cassé léger */
}

.testimonial-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.quote {
  font-style: italic;
  color: #666;
  margin-bottom: 10px;
}

.author {
  font-weight: 500;
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
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #C8102E;
  /* Rouge */
}

.btn-secondary {
  background-color: transparent;
  color: #4A704B;
  /* Vert foncé */
  border: 2px solid #4A704B;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: #C8102E;
  /* Rouge */
  color: #FFFFFF;
  /* Blanc */
  border-color: #C8102E;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 10px;
  }

  .sections {
    grid-template-columns: 1fr;
  }

  .testimonial-grid {
    grid-template-columns: 1fr;
  }
}
</style>