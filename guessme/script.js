'use strict';


// Selectionner les éléments du DOM
document.querySelector(".message").textContent = "Nombre juste 💡"

const score = document.querySelector(".score");
const secretNumber = document.querySelector(".number");
const guess = document.querySelector(".guess");
const checkButton = document.querySelector('.check');

// Réassigner certains contenus de balises
score.textContent = 0;
secretNumber.textContent = 12;

// Ajouter un écouteur d'événements pour le clic sur le bouton
checkButton.addEventListener('click', function() {
    // Récupérer la valeur entrée dans le champ input
    const userInput = guess.value;
    
    // Afficher la valeur dans la console (ou faire autre chose avec)
    console.log('Valeur entrée :', userInput);
});


