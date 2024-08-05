// Exercice 10
const AGE_MINIMUM_VOTE = 18;
let age = 17;

if (age >= AGE_MINIMUM_VOTE) {
    console.log("Vous êtes éligible.");
}else{
    console.log("Vous n'êtes pas éligible. Vous le serez dans " + (18 - age) + " ans. Merci Bien !");
}