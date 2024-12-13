// Attendre que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les formulaires
    const loginForm = document.querySelector('#connexion form');
    const contactForm = document.querySelector('#contact form');

    // Fonction pour valider le formulaire de connexion
    function validateLoginForm(event) {
        event.preventDefault(); // Empêcher la soumission par défaut du formulaire

        const login = document.getElementById('login').value;
        const password = document.getElementById('pass').value;

        if (login.length < 8) {
            alert('Le login doit contenir au moins 8 caractères.');
            return;
        }

        if (password.length === 0) {
            alert('Veuillez entrer un mot de passe.');
            return;
        }

        // Si tout est valide, vous pouvez soumettre le formulaire ou envoyer les données
        console.log('Formulaire de connexion soumis', { login, password });
        // Ici, vous pourriez ajouter du code pour envoyer les données au serveur
    }

    // Fonction pour valider le formulaire de contact
    function validateContactForm(event) {
        event.preventDefault(); // Empêcher la soumission par défaut du formulaire

        const lastName = document.getElementById('lastname').value;
        const firstName = document.getElementById('firstname').value;
        const email = document.getElementById('mail').value;
        const subject = document.getElementById('menu-choix').value;
        const message = document.getElementById('message').value;

        if (!lastName || !firstName) {
            alert('Veuillez entrer votre nom et prénom.');
            return;
        }

        if (!email || !email.includes('@')) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }

        if (!subject) {
            alert('Veuillez sélectionner un sujet.');
            return;
        }

        if (message.length < 10) {
            alert('Votre message doit contenir au moins 10 caractères.');
            return;
        }

        // Si tout est valide, vous pouvez soumettre le formulaire ou envoyer les données
        console.log('Formulaire de contact soumis', { lastName, firstName, email, subject, message });
        // Ici, vous pourriez ajouter du code pour envoyer les données au serveur
    }

    // Ajouter des écouteurs d'événements pour la soumission des formulaires
    if (loginForm) {
        loginForm.addEventListener('submit', validateLoginForm);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', validateContactForm);
    }
});
