// 3ème Etape:

let amount = 100;
const TAX_RATE = 0.14; // 14 %

function calculateFinalPurchaseAmount(amount) {
	return amount + (amount * TAX_RATE);
}

// 1: la valeur de la constante Tax_Rate est égale à 14% soit O.14

// 2: La fonction calculateFinalPurchaseAmount prend la valeur de amount2 comme paramètre et renvoie la valeur de amount2 + (amount2 * TAX_RATE).

console.log(calculateFinalPurchaseAmount(amount));

// la valeur finale d'amount cest 100. la Fonction ne modifie aucunement la valeur de amount. Il n'y a pas de reassignation de la variable
console.log(amount)