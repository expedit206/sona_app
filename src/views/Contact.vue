<template>
    <div class="contact">
        <!-- Section Hero -->
        <section class="hero animate-on-scroll">
            <div class="hero-content">
                <h1 class="hero-title">Contactez Sona</h1>
                <p class="hero-subtitle">
                    Besoin d’un rendez-vous ou d’informations sur nos produits ? Nous sommes là pour vous !
                </p>
            </div>
        </section>

        <!-- Section Formulaire -->
        <section class="container form-section animate-on-scroll">
            <div class="form-content">
                <form class="contact-form card" @submit.prevent>
                    <h2 class="section-title">Envoyez-nous un message</h2>
                    <div class="form-group">
                        <label for="name" class="form-label">Nom</label>
                        <input id="name" type="text" placeholder="Votre nom" required aria-required="true" />
                    </div>

                    <div class="form-group">
                        <label for="email" class="form-label">Email</label>
                        <input id="email" type="email" placeholder="Votre email" required aria-required="true" />
                    </div>
                    <div class="form-group">
                        <label for="message" class="form-label">Message</label>
                        <textarea id="message" placeholder="Votre message" rows="5" required
                            aria-required="true"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" aria-label="Envoyer le message">Envoyer</button>
                </form>
                <div class="contact-info card">
                    <h2 class="section-title">Nos coordonnées</h2>
                    <p>
                        <svg class="info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                            </path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <strong>Email :</strong> contact@sona.com
                    </p>
                    <p>
                        <svg class="info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path
                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                            </path>
                        </svg>
                        <strong>Téléphone :</strong> +33 1 23 45 67 89
                    </p>
                    <p>
                        <svg class="info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <strong>Adresse :</strong> 123 Rue de la Nature, 75001 Paris
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

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
/* Conteneur principal */
.contact {
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

/* Hero Section */
.hero {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('https://images.unsplash.com/photo-1504280390367-5d76a2d11935?q=80&w=2070&auto=format&fit=crop');
    background-size: cover;
    background-position: center;
    padding: 80px 20px;
    text-align: center;
    color: #FFFFFF;
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2);
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
    /* Rouge */
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

/* Section Formulaire */
.form-section {
    padding: 50px 0;
    background-color: #FFFFFF;
}

.form-content {
    display: flex;
    gap: 40px;
    align-items: flex-start;
    max-width: 1100px;
    margin: 0 auto;
}

.contact-form {
    flex: 2;
    padding: 30px;
    background: #FFFFFF;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(74, 112, 75, 0.2);
    /* Bordure subtile verte */
}

.contact-info {
    flex: 1;
    padding: 25px;
    background: #FFFFFF;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(74, 112, 75, 0.2);
}

.section-title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 20px;
    color: #4A704B;
    /* Vert foncé */
    position: relative;
}

.section-title::after {
    content: '';
    width: 50px;
    height: 3px;
    background-color: #C8102E;
    /* Rouge */
    position: absolute;
    bottom: -8px;
    left: 0;
}

.form-group {
    margin-bottom: 20px;
}

.form-label {
    display: block;
    font-size: 1rem;
    color: #4A704B;
    margin-bottom: 5px;
    font-weight: 500;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
    border-color: #4A704B;
    box-shadow: 0 0 5px rgba(74, 112, 75, 0.3);
    outline: none;
}

.contact-form textarea {
    resize: vertical;
}

.contact-info p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.info-icon {
    width: 20px;
    height: 20px;
    color: #4A704B;
}

/* Boutons */
.btn-primary {
    background-color: #4A704B;
    /* Vert foncé */
    color: #FFFFFF;
    padding: 12px 25px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-primary:hover {
    background-color: #C8102E;
    /* Rouge */
    transform: scale(1.05);
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

    .form-section {
        padding: 40px 0;
    }

    .form-content {
        flex-direction: column;
        gap: 30px;
    }

    .contact-form,
    .contact-info {
        width: 100%;
        padding: 20px;
    }

    .section-title {
        font-size: 1.8rem;
    }

    .contact-form input,
    .contact-form textarea {
        padding: 10px;
        font-size: 0.95rem;
    }

    .contact-info p {
        font-size: 0.95rem;
    }

    .btn-primary {
        padding: 10px 20px;
        font-size: 0.9rem;
    }
}
</style>