Hello html => cours et tp voir ma prise de note sur notion.

FOAD 06/12/2024

NB:pour mon filet => pensr à regarder doc pseudo-class pour lui donner une taille en largeur
https://developer.mozilla.org/en-US/docs/Web/CSS/::after

https://htmlcheatsheet.com/

README pour les Exercices de Formulaire avec Flexbox
Introduction
Ce projet contient deux exercices pour apprendre à utiliser Flexbox pour créer des formulaires bien structurés et esthétiques. Chaque exercice est conçu pour vous aider à comprendre et à maîtriser les techniques de positionnement et de mise en forme des éléments de formulaire using Flexbox.
Exercices
Exercice 1 : Formulaire de Connexion

    Objectif:
        Créer un formulaire de connexion simple avec des champs pour le login et le mot de passe, ainsi qu'un bouton de soumission.
    Explication:
        Structure HTML:
            Utilisez un form pour contenir les champs de saisie et le bouton de soumission.
            Créez des div pour grouper les champs de saisie et leurs labels.
        Utilisation de Flexbox:
            Appliquez display: flex sur la section de connexion pour centrer le contenu horizontalement et verticalement.
            Utilisez flex-direction: column pour aligner les éléments en colonne.
            Appliquez gap: 20px pour ajouter un espace entre les éléments.
        Styles Spécifiques:
            Utilisez display: flex et flex-direction: column pour chaque groupe de champ (form-group) pour aligner les labels et les champs de saisie en colonne.
            Stylez les champs de saisie et les boutons pour une apparence uniforme.
        Visualisation:
            Vous devriez voir un formulaire de connexion centré avec des champs de saisie et un bouton de soumission bien alignés.

Exercice 2 : Formulaire de Contact

    Objectif:
        Créer un formulaire de contact avec des champs pour le nom, le prénom, l'adresse email, un menu déroulant pour le sujet, et une zone de texte pour le message.
    Explication:
        Structure HTML:
            Utilisez un form pour contenir les champs de saisie, le menu déroulant et la zone de texte.
            Créez des div pour grouper les champs de saisie et leurs labels.
        Utilisation de Flexbox:
            Appliquez display: flex sur la section de contact pour centrer le contenu horizontalement et verticalement.
            Utilisez flex-direction: column pour aligner les éléments en colonne.
            Appliquez gap: 20px pour ajouter un espace entre les éléments.
        Styles Spécifiques:
            Utilisez display: flex et gap: 20px pour les lignes de champs (form-row) pour aligner les groupes de champs horizontalement.
            Stylez les champs de saisie, le menu déroulant, la zone de texte et le bouton de soumission pour une apparence uniforme.
        Visualisation:
            Vous devriez voir un formulaire de contact centré avec des champs de saisie, un menu déroulant, une zone de texte et un bouton de soumission bien alignés.

Comment Cela Fonctionne

    HTML:
        Structurez votre page avec des form et des div pour contenir les champs de saisie et les labels.
    CSS:
        Utilisez les propriétés de Flexbox pour positionner et aligner les éléments.
        Appliquez des styles pour une apparence uniforme et esthétique.

Ressources

    HTML et CSS:
        Consultez les ressources de W3Schools et MDN Web Docs pour plus d'informations sur HTML et CSS Flexbox.
        W3Schools - HTML
        W3Schools - CSS
        MDN Web Docs - Flexbox

///////////////////////////////////////////////////////////////////////////////////////////////
SCRIPT JS pour le formulaire

Ce script fait les choses suivantes :

    Il attend que le DOM soit chargé avant d'exécuter le code.
    Il récupère les références aux formulaires de connexion et de contact.
    Il définit des fonctions de validation pour chaque formulaire.
    Il ajoute des écouteurs d'événements sur les formulaires pour intercepter leur soumission.
    Lors de la soumission, il vérifie les champs et affiche des alertes si les données ne sont pas valides.
    Si les données sont valides, il affiche les informations dans la console (vous pouvez remplacer cela par un envoi au serveur).

N'oubliez pas d'inclure ce script dans votre fichier HTML, par exemple juste avant la fermeture de la balise </body> :

xml
<script src="script.js"></script>
</body>
</html>

Formulaire Flex
Description
Ce projet contient deux formulaires : un formulaire de connexion et un formulaire de contact. Il est conçu pour être simple et facile à comprendre pour les débutants en HTML, CSS et JavaScript.
Contenu du projet

    HTML : Structure de base des formulaires.
    CSS : Styles pour rendre les formulaires attrayants (dans styles.css).
    JavaScript : Validation des formulaires en utilisant du JavaScript pur (dans script.js).

Fonctionnalités

    Formulaire de connexion :
        Champ pour le login (doit contenir au moins 8 caractères).
        Champ pour le mot de passe.
        Bouton de soumission.
    Formulaire de contact :
        Champs pour le nom et le prénom.
        Champ pour l'adresse email (doit être valide).
        Menu déroulant pour sélectionner un sujet.
        Zone de texte pour le message (doit contenir au moins 10 caractères).
        Bouton d'envoi.

Installation

    Clonez ou téléchargez ce dépôt sur votre ordinateur.
    Ouvrez le fichier index.html dans votre navigateur web.

Utilisation

    Remplissez les champs des formulaires.
    Cliquez sur "Connexion" pour le formulaire de connexion ou "Envoyer le message" pour le formulaire de contact.
    Des alertes s'afficheront si les données saisies ne sont pas valides.

Technologies utilisées

    HTML
    CSS
    JavaScript (vanilla)

Aide
Si vous avez des questions ou des problèmes, n'hésitez pas à me contacter. Vous pouvez également consulter des ressources en ligne sur HTML, CSS et JavaScript pour en apprendre davantage. N'hésitez pas à personnaliser ce README selon vos besoins ou à ajouter d'autres sections si nécessaire !
