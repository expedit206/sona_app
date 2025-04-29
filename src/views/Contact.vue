<template>
    <div class="contact">
        <!-- Section Hero -->
        <section class="hero">
            <div class="hero-content">
                <h1 class="hero-title">Contactez Sona</h1>
                <p class="hero-subtitle">
                    Besoin d’un rendez-vous ou d’informations sur nos produits ? Nous sommes là pour vous !
                </p>
            </div>
        </section>

        <!-- Section Formulaire -->
        <section class="container form-section">
            <div class="form-content">
                <form class="contact-form card">
                    <h2 class="section-title">Envoyez-nous un message</h2>
                    <input type="text" placeholder="Nom" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" rows="5" required></textarea>
                    <button type="submit" class="btn btn-primary">Envoyer</button>
                </form>
                <div class="contact-info">
                    <h2 class="section-title">Nos coordonnées</h2>
                    <p><strong>Email :</strong> contact@sona.com</p>
                    <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
                    <p><strong>Adresse :</strong> 123 Rue de la Nature, 75001 Paris</p>
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
        url('https://images.unsplash.com/photo-1504280390367-5d76a2d11935?q=80&w=2070&auto=format&fit=crop');
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

/* Section Formulaire */
.form-section {
    padding: 40px 0;
    background-color: #F5F5F5;
    /* Blanc cassé léger */
}

.form-content {
    display: flex;
    gap: 30px;
    align-items: flex-start;
}

.contact-form {
    flex: 2;
    padding: 30px;
}

.contact-info {
    flex: 1;
    padding: 20px;
    background-color: #FFFFFF;
    /* Blanc */
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.section-title {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #4A704B;
    /* Vert foncé */
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
}

.contact-form textarea {
    resize: vertical;
}

.contact-info p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 10px;
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

/* Responsive */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }

    .form-content {
        flex-direction: column;
    }

    .contact-form,
    .contact-info {
        width: 100%;
    }
}
</style>