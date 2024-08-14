// Écrivez une fonction appelée compterB qui prend une chaîne comme seul argument et renvoie un nombre indiquant combien de caractères B majuscules se trouvent dans la chaîne.

function compterB(chaine) {
	let compteur = 0;
	for (let i = 0; i < chaine.length; i++) {
		if (mot[i] === "B") {
			compteur++;
		}
	}
	return compteur;
}

console.log(compterB("BoB"));

// Par après, écrivez une fonction appelée compterChar qui se comporte comme compterB, sauf qu'elle prend un deuxième argument qui indique le caractère à compter (plutôt que de compter uniquement les caractères B majuscules

function compterChar(chaine, char) {
	let compteur = 0; // Creation d'un compteur qui va s'incrementer à chaque fois qu'il rencontre le caractère rechercher dans la Chaine
	for (let i = 0; i < chaine.length; i++) {
		if (chaine[i] === char) {
			compteur++;
		}
	}
	return compteur;
}

console.log(compterChar("kakkerlak", "k"));

//Réécrivez compterB pour utiliser cette nouvelle fonction.
function compterB(mot) {
	return compterChar(mot, "B");
}

console.log(compterB("ABADACADABRA"));
