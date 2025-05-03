<template>
    <footer class="footer">
        <div class="footer-container container">
            <!-- Section Contact -->
            <div class="footer-section">
                <h3 class="footer-title">Contactez-nous</h3>
                <div class="contact-info">
                    <p>Email: <a href="mailto:contact@sona.com">contact@sona.com</a></p>
                    <p>Téléphone: +33 1 23 45 67 89</p>
                    <p>Adresse: 123 Rue de la Nature, 75001 Paris</p>
                </div>
            </div>
        </div>

        <!-- Copyright -->
        <div class="footer-bottom">
            <p>© 2025 Sona. Tous droits réservés. By <a href="mailto:mciagnessi@gmail.com"
                    class="email-link">mciagnessi@gmail.com</a></p>
        </div>
    </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
    background-color: #4A704B;
    /* Vert foncé */
    color: #FFFFFF;
    /* Blanc */
    padding: 20px 0;
    /* Réduction du padding vertical */
    margin-top: 20px;
    /* Réduction de la marge supérieure */
}

.footer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.footer-section {
    text-align: center;
}

.footer-title {
    font-size: 1.3rem;
    /* Réduction de la taille du titre */
    margin-bottom: 8px;
    /* Réduction de la marge */
    color: #FFFFFF;
    /* Blanc */
}

.contact-info {
    display: flex;
    justify-content: center;
    gap: 20px;
    /* Espacement entre les éléments de contact */
    flex-wrap: wrap;
    /* Permet de passer à la ligne si nécessaire */
}

.contact-info p {
    font-size: 0.95rem;
    /* Taille de texte réduite */
    margin: 0;
    /* Suppression des marges */
}

.contact-info a {
    color: #FFFFFF;
    /* Blanc */
    text-decoration: none;
    transition: color 0.3s ease;
}

.contact-info a:hover {
    color: #C8102E;
    /* Rouge */
}

.footer-bottom {
    text-align: center;
    padding-top: 10px;
    /* Réduction du padding */
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    margin-top: 10px;
    /* Réduction de la marge */
    font-size: 0.85rem;
    /* Taille de texte réduite */
    color: #FFFFFF;
    /* Blanc */
}

.email-link {
    color: #FFFFFF;
    /* Blanc */
    text-decoration: none;
    transition: color 0.3s ease;
}

.email-link:hover {
    color: #C8102E;
    /* Rouge */
}

/* Responsive */
@media (max-width: 768px) {
    .footer {
        padding: 15px 0;
        /* Encore plus compact sur mobile */
    }

    .footer-title {
        font-size: 1.2rem;
    }

    .contact-info {
        flex-direction: column;
        gap: 8px;
        /* Espacement réduit sur mobile */
    }

    .contact-info p {
        font-size: 0.9rem;
    }

    .footer-bottom {
        font-size: 0.8rem;
    }
}
</style>