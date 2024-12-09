Hello html => cours et tp voir ma prise de note sur notion.

Foad 29/11/2024 => exo 1
README pour les Exercices de Positionnement Flexbox
Introduction
Ce projet contient trois exercices simples pour apprendre à utiliser Flexbox pour positionner des éléments sur une page web. Chaque exercice est conçu pour vous aider à comprendre et à maîtriser les différentes techniques de positionnement avec Flexbox.
Exercices
Exercice 1: Positionnement Flexbox A

    Objectif:
        Créer trois colonnes avec des éléments empilés verticalement et répartis uniformément dans chaque colonne.
    Explication:
        Structure HTML:
            Utilisez des divs pour représenter les colonnes et les éléments à l'intérieur de ces colonnes.
        Utilisation de Flexbox:
            Appliquez display: flex sur le conteneur principal pour activer Flexbox.
            Utilisez flex-direction: column sur chaque colonne pour empiler les éléments verticalement.
            Appliquez justify-content: space-around pour répartir l'espace verticalement entre les éléments dans chaque colonne.
            Utilisez flex: 1 pour permettre à chaque colonne de prendre une part égale de l'espace disponible.
        Visualisation:
            Vous devriez voir trois colonnes avec des éléments empilés verticalement et répartis uniformément.

Exercice 2: Positionnement Flexbox B

    Objectif:
        Disposer les éléments en trois lignes avec des alignements différents (gauche, égal, droite).
    Explication:
        Structure HTML:
            Utilisez des divs pour représenter les lignes et les éléments à l'intérieur de ces lignes.
        Utilisation de Flexbox:
            Appliquez display: flex sur le conteneur principal pour activer Flexbox, mais changez la direction en flex-direction: column pour afficher les lignes verticalement.
            Utilisez display: flex sur chaque ligne pour activer Flexbox et répartir l'espace horizontalement entre les éléments.
            Appliquez des styles spécifiques pour chaque ligne :
                justify-content: flex-start pour aligner les éléments à gauche dans la première ligne.
                justify-content: space-around pour répartir les éléments uniformément dans la deuxième ligne.
                justify-content: flex-end pour aligner les éléments à droite dans la troisième ligne.
        Visualisation:
            Vous devriez voir trois lignes avec des éléments alignés différemment dans chaque ligne.

Exercice 3: Positionnement Flexbox C

    Objectif:
        Disposer les éléments en trois lignes avec des alignements différents et faire que certains éléments prennent toute la place restante.
    Explication:
        Structure HTML:
            Utilisez des divs pour représenter les lignes et les éléments à l'intérieur de ces lignes.
        Utilisation de Flexbox:
            Appliquez display: flex sur le conteneur principal pour activer Flexbox, mais changez la direction en flex-direction: column pour afficher les lignes verticalement.
            Utilisez display: flex sur chaque ligne pour activer Flexbox et répartir l'espace horizontalement entre les éléments.
            Appliquez des styles spécifiques pour chaque ligne :
                justify-content: flex-start pour aligner les éléments à gauche dans la première ligne.
                justify-content: space-around pour répartir les éléments uniformément dans la deuxième ligne.
                justify-content: flex-end pour aligner les éléments à droite dans la troisième ligne.
            Éléments qui Prendent la Place Restante:
                Appliquez flex-grow: 1 sur l'élément 3 de la première ligne et l'élément 1 de la troisième ligne pour qu'ils prennent toute la place restante.
        Visualisation:
            Vous devriez voir trois lignes avec des éléments alignés différemment et certains éléments prenant toute la place restante.

Comment Cela Fonctionne

    HTML:
        Structurez votre page avec des divs pour contenir les éléments à positionner.
    CSS:
        Utilisez les propriétés de Flexbox pour positionner et aligner les éléments.

Ressources

    HTML et CSS:
        Consultez les ressources de W3Schools et MDN Web Docs pour plus d'informations sur HTML et CSS Flexbox.
        W3Schools - HTML
        W3Schools - CSS
        MDN Web Docs - Flexbox
