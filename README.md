Hello html => cours et tp voir ma prise de note sur notion.

Foad 29/11/2024 => exo 1

Suite FLEXBOX => 04/12/2024 = branche Flex

README pour les Exercices de Formulaire avec Flexbox et Grid
Introduction
Ce projet contient deux exercices pour apprendre à utiliser Flexbox et CSS Grid pour créer des formulaires bien structurés et esthétiques. Chaque exercice est conçu pour vous aider à comprendre et à maîtriser les techniques de positionnement et de mise en forme des éléments de formulaire.
Exercices
Exercice 1 : Formulaire de Connexion

    Objectif:
        Créer un formulaire de connexion simple avec des champs pour le login et le mot de passe, ainsi qu'un bouton de soumission.
    Explication:
        Structure HTML:
            Utilisez un form pour contenir les champs de saisie et le bouton de soumission.
            Créez des div pour grouper les champs de saisie et leurs labels.
        Utilisation de Grid:
            Appliquez display: grid sur la section de connexion pour centrer le contenu horizontalement et verticalement.
            Utilisez gap: 20px pour ajouter un espace entre les éléments.
        Styles Spécifiques:
            Utilisez display: grid et gap: 5px pour chaque groupe de champ (form-group) pour aligner les labels et les champs de saisie en grille.
            Stylez les champs de saisie et les boutons pour une apparence uniforme.
            Centrez les boutons dans leur cellule de grille using justify-self: center.
        Visualisation:
            Vous devriez voir un formulaire de connexion centré avec des champs de saisie et un bouton de soumission bien alignés.

Exercice 2 : Formulaire de Contact

    Objectif:
        Créer un formulaire de contact avec des champs pour le nom, le prénom, l'adresse email, un menu déroulant pour le sujet, et une zone de texte pour le message.
    Explication:
        Structure HTML:
            Utilisez un form pour contenir les champs de saisie, le menu déroulant et la zone de texte.
            Créez des div pour grouper les champs de saisie et leurs labels.
        Utilisation de Grid:
            Appliquez display: grid sur la section de contact pour centrer le contenu horizontalement et verticalement.
            Utilisez gap: 20px pour ajouter un espace entre les éléments.
        Styles Spécifiques:
            Utilisez display: grid et grid-template-columns: 1fr 1fr pour les lignes de champs (form-row) pour aligner les groupes de champs en deux colonnes de largeur égale.
            Stylez les champs de saisie, le menu déroulant, la zone de texte et le bouton de soumission pour une apparence uniforme.
            Centrez le bouton dans sa cellule de grille using justify-content: center.
        Visualisation:
            Vous devriez voir un formulaire de contact centré avec des champs de saisie, un menu déroulant, une zone de texte et un bouton de soumission bien alignés.

Comment Cela Fonctionne

    HTML:
        Structurez votre page avec des form et des div pour contenir les champs de saisie et les labels.
    CSS:
        Utilisez les propriétés de Grid et Flexbox pour positionner et aligner les éléments.
        Appliquez des styles pour une apparence uniforme et esthétique.

Ressources

    HTML et CSS:
        Consultez les ressources de W3Schools et MDN Web Docs pour plus d'informations sur HTML, CSS Grid et Flexbox.
        W3Schools - HTML
        W3Schools - CSS
        MDN Web Docs - CSS Grid
        MDN Web Docs - Flexbox
