// Exercice 1
const montantFacture = 150;
const pourcentagePourboire = 15;

let montantPourboire = (pourcentagePourboire/100) * montantFacture;
let totalApayer = montantFacture + montantPourboire;

console.log("Montant pourboire : " + montantPourboire +" euros");
console.log("Montant de la facture : " + montantFacture + " euros");
console.log("Total apayer : " + totalApayer + " euros");