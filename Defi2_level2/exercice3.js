// Exercice 3
let poids = 50;
let taille = 1.80;

let IMC = poids / (taille*taille);
let categorie = " ";

if (IMC < 18.5) {
    categorie =  "Sous-Poids";
} else if (IMC >= 18.5 && IMC < 25) {
    categorie = "Poids Normal";
} else if (IMC >= 25) {
    categorie = "Surpoids";
}

console.log("Votre IMC est égal à " + IMC + " et vous êtes dans la categorie : " + categorie);