Hello html => cours et tp voir ma prise de note sur notion.

Foad 29/11/2024 => exo 1

Suite FLEXBOX => 04/12/2024 = branche Flex
Display: flex => ligne row

Suite GRId => 05/12/2024 = branche grid
https://cssgridgarden.com/#fr
https://css-tricks.com/snippets/css/complete-guide-grid/#aa-css-grid-properties
https://developer.mozilla.org/fr/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout


GRID //// EXOS/////////////////////////////////////////////////////////////////////////////////////
README pour les Exercices de Positionnement Grid
Introduction
Ce projet contient trois exercices simples pour apprendre à utiliser CSS Grid et Flexbox pour positionner des éléments sur une page web. Chaque exercice est conçu pour vous aider à comprendre et à maîtriser les différentes techniques de positionnement.
Exercices
Exercice 1: Positionnement Grid A

    Objectif:
        Créer une grille de 3x3 et centrer les éléments dans chaque cellule.
    Explication:
        Création de la Grille:
            Utilisez display: grid sur le conteneur pour créer une grille.
            Définissez les lignes et les colonnes avec grid-template-rows: repeat(3, 1fr) et grid-template-columns: repeat(3, 1fr).
        Positionnement des Éléments:
            Utilisez grid-row et grid-column pour positionner chaque élément dans sa cellule spécifique.
        Centrage des Éléments:
            Appliquez justify-items: center et align-items: center pour centrer les éléments horizontalement et verticalement dans leurs cellules.
        Visualisation:
            Vous devriez voir une grille de 3x3 avec des éléments centrés dans chaque cellule.

Exercice 2: Positionnement Grid B

    Objectif:
        Disposer les éléments en trois lignes avec des alignements différents (gauche, égal, droite).
    Explication:
        Structure de la Page:
            Utilisez des divs pour représenter les lignes et les éléments à l'intérieur de ces lignes.
        Utilisation de Flexbox:
            Appliquez display: flex sur chaque ligne pour utiliser les propriétés de Flexbox.
        Alignement des Éléments:
            Utilisez justify-content pour aligner les éléments dans chaque ligne :
                justify-content: flex-start pour aligner les éléments à gauche.
                justify-content: space-around pour répartir les éléments de manière égale.
                justify-content: flex-end pour aligner les éléments à droite.
        Visualisation:
            Vous devriez voir trois lignes avec des éléments alignés différemment dans chaque ligne.

Exercice 3: Positionnement Grid C

    Objectif:
        Disposer les éléments en trois lignes sans espace vertical entre les lignes.
        Faire que certains éléments prennent toute la place restante.
    Explication:
        Suppression de l'Espace Vertical:
            Utilisez gap: 0 sur le conteneur grid pour supprimer l'espace vertical entre les lignes.
        Utilisation de Flexbox:
            Appliquez display: flex sur chaque ligne pour utiliser les propriétés de Flexbox.
        Alignement des Éléments:
            Utilisez justify-content pour aligner les éléments dans chaque ligne, similaire à l'exercice 2.
        Éléments qui Prendent la Place Restante:
            Appliquez flex-grow: 1 sur les éléments spécifiques (par exemple, elem3 et elem7) pour qu'ils prennent toute la place restante.
        Visualisation:
            Vous devriez voir trois lignes sans espace vertical entre elles, avec certains éléments prenant toute la place restante.

Comment Cela Fonctionne

    HTML:
        Structurez votre page avec des divs pour contenir les éléments à positionner.
    CSS:
        Utilisez les propriétés de CSS Grid et Flexbox pour positionner et aligner les éléments.

Ressources

    HTML et CSS:
        Consultez les ressources de W3Schools et MDN Web Docs pour plus d'informations sur HTML, CSS Grid et Flexbox.
        W3Schools - HTML
        W3Schools - CSS
        MDN Web Docs - CSS Grid
        MDN Web Docs - Flexbox

