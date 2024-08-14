// 2 ème Etape:

function printAmount(amt) {
	console.log(amt.toFixed(2));
}

let amt = 100.679;

function formatAmount(amt) {
	return "$" + amt.toFixed(2);
}

amt = formatAmount(amt);

 // La fonction printAmount prend "amt" comme paramètre .

// formatAmount renvoie la nouvelle valeur de la variable "amt" qui est une chaine de caractères. Cela permet de formater la valeur sans l'afficher directement.
