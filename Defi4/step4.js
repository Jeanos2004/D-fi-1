// Etape 4:

function one() {
	var a = 1;
	console.log(a);
}

function two() {
	var a = 2;
	console.log(a);
}

one(); // Affiche "1"
two(); // Affiche "2"

//Les variables a n'interfèrent pas l'une avec l'autre car la portée du mot clé var est de type fonction ce qui les rend locales à la fonction .

function outer() {
	var a = 1;

	function inner() {
		var b = 2;
		console.log(a + b); // Affiche "3"
	}

	inner();
	console.log(a); // Affiche "1"
}

outer();

// la fonction  inner est dans la fonction outer (fonction dans une fonction), elle a donc accès aux variables de outer.

// outer ne peut pas accéder à b car b n'est pas dans sa portée .
