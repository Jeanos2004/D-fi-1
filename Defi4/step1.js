// 1ère Etape:

function printAmount() {
	console.log(amount.toFixed(2));
}

//Creation de la Variable "amount"

let amount = 12.345;
printAmount(); // Elle affiche la valeur contenue dans la variable "amount" avec un format de deux chiffres après la virgule

amount *= 2; // Multiplie par deux la valeur de "amount" puis reafecte le resultat dans la variable du même nom

printAmount(); // Elle affiche la nouvelle de la variable "amount" avec deux chiffres après la virgule