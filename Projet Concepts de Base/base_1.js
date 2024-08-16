// Gestionnaire de recettes de Cuisine

// 1. Gestion des recettes

// Creation d'une variable "recettes" de type tableau qui va recevoir chaque recette ajoutée
let recettes = [];

// a.Fonction Pour ajouter une nouvelle recette
function ajouterRecette(
	titre,
	ingredients,
	instructions,
	tempsPreparation,
	difficulty
) {
	let nouvelleRecette = {
		titre: titre,
		ingredients: ingredients,
		instructions: instructions,
		tempsPreparation: tempsPreparation,
		difficulty: difficulty,
	};
	recettes.push(nouvelleRecette);
}
// Ajouter de recette à notre tableau de recettes pour verifier le bon fonctionnement du programme
ajouterRecette(
	"Sauce de manioc",
	["feuille de manioc", "combo", "sel"],
	["Mettre de l'eau au feu", "Mettre les feuilles sur dans la marmite"],
	30,
	"facile"
);
ajouterRecette(
	"Spaghetti",
	["spaghetti", "l'huile d'arachide", "Oignons"],
	[
		"Mettre une marmite contenant de l'huile sur le feu",
		"Ajouter les spaghettis une fois l'eau chauffé",
	],
	25,
	"Moyen"
);
console.log(recettes);

// b. Fonction pour modifier une recette
function modifierRecette(
	titre,
	updateRecette = [
		titre,
		ingredients,
		instructions,
		tempsPreparation,
		difficulty,
	]
) {
	// La fonction va prendre en argument le titre de la recette à modifier et un tableau qui contiendra la modification dans l'ordre de toutes les attributs de la recette

	let index = recettes.findIndex((recette) => recette.titre === titre); // Va recuperer l'index de la recette constituant le titre fournit

    // teste l'existence ou non de l'index
    console.log(index)
	if (index !== -1) {
		recettes[index].titre = updateRecette[0];
		recettes[index].ingredients = updateRecette[1];
		recettes[index].instructions = updateRecette[2];
		recettes[index].tempsPreparation = updateRecette[3];
		recettes[index].difficulty = updateRecette[4];
	} else {
		console.log("Recette non trouvée !");
	}
}
// Un exemple pour la verification de la fonction modification
/* modifierRecette("Spaghetti", [
	"Spaghetti de Viande",
	["Viande", "huile d'arachide", "oignos", "frites"],
	[
		"Trancher verticalement la viande de sorte à avoir des part hyper fines",
		"Mettre une marmite d'eau sur le feu",
		"Ajouter les tranches de viandes une fois l'eau chauffé",
	],
	50,
	"facile",
]); */
console.log(recettes);

// c. Fonction pour supprimer une recette
console.log("Suppression de la recette")
function supprimerRecette(titre) {
	recettes = recettes.filter((recette) => recette.titre !== titre);
}

// la Methode filter retourne un objet trié suivant les parametres qu'il reçoit


// Suppression de la recette Spaghetti pour verifier le fonctionnement efficient de notre fonction de suppression
// supprimerRecette("Spaghetti")
console.log(recettes)

// 2. Recherche et Filtrage
// a. Rechercher des recettes par titre ou ingredient
console.log("Recherche de la recette")
function rechercherRecette(recherche) {
	return recettes.filter(
		(recette) =>
			recette.titre.toLowerCase().includes(recherche.toLowerCase()) ||
			recette.ingredients.some((ingredient) =>
				ingredient.toLowerCase().includes(recherche.toLowerCase())
			)
        // toLowerCase c'est pour ne pas tenir compte de la Casse
        // includes permet de trouver une valeur dans un objet
	);
}
// test de la fonction Recherche
let vr = rechercherRecette("Oignons")
console.log(vr);


// b.filtrer par temps de préparation ou difficulté
console.log("Filtrer par temps de préparation ou difficulté")
function filtrerParTemps(temps) {
	return recettes.filter((recette) => recette.tempsPreparation === temps);
}
function filtrerParDifficultes(difficulty) {
	return recettes.filter((recette) => recette.difficulty ===  difficulty); 
};

// Test de la fonction rechercher par temps de préparatins et difficultés
let tep = filtrerParDifficultes("Moyen")
console.log(tep)


// 3. Gestion des Ingrédients
// a. Créer une liste d'ingredients disponibles
let ingredientsDisponibles = [
	"Pâtes",
	"sel",
	"Carottes",
	"combo",
	"Aubergine",
    "feuille de manioc",
    "Spaghetti",
    "Oignons",
];

// b. Vérifier si tous les ingrédients d'une recettes sont disponibles

console.log("Ingredients disponibles de la recette")
function ingredientsDisponiblesPourRecette(recette) {
    let index = recettes.findIndex((r) => r.titre === recette); // Pour recuperer l'index de la recette dans le tableau des recettes
	let iterateur = 0; // Un iterateur qui va me servir pour tester ou non si tous les ingredients de la recette sont présents dans la liste d'ingrédients disponibles
	let tailleListeIngredients = recettes[index].ingredients.length; // une variale pour stocker la taille du Tableau des ingrédients

	// Ma boucle imbriquée pour parcourir verifier que chaque ingrédients de la recette se trouve bien dans ceux dispos
    for (let i = 0; i < tailleListeIngredients; i++){ 
		
        for (let j = 0; j < ingredientsDisponibles.length; j++){
			if (recettes[index].ingredients[i] === ingredientsDisponibles[j]){
				iterateur = iterateur + 1;
			}
		}
    }
	// Ma condition super essentiel pour verifier que l'iterateur a bien la valeur qu'il faut pour averer mes propos
	if (iterateur === tailleListeIngredients){
		console.log("Tous les ingredients sont disponibles");
	}
	else {
		console.log("Il y a " + iterateur + " ingredient(s) sur " + tailleListeIngredients + " disponible(s)" )
	}
    
}

ingredientsDisponiblesPourRecette("Spaghetti")

// 4. Planification des Repas
// a. Créer un planning hebdomadaire de repas
let planningHebdoRepas = {
	lundi: "Sauce de manioc",
	Mardi: "Soupe",
	Mercredi: "Spaghetti",
	Jeudi: "Sauce de manioc",
	vendredi: "Salade",
	samedi: "Omellette",
	dimanche: "Confiture de Mangues",
};

// b. Générer une liste de courses basée sur le planning
console.log("Gerer le planning des courses")
function genererListeCourses() {
	let listeCourses = [];
	for (let jour in planningHebdoRepas) {
		let recetteJour = planningHebdoRepas[jour]; // Va etre assigné de la valeur de l'attribut de l'objet planningHebdoRepas
        let index = recettes.findIndex((r) => r.titre === recetteJour); // Va contenir l'index de la recette correspondante
		let isIn = true; // Un booleen pour tester si oui ou non l'ingredients et deja dans la liste des courses
		let tailleListeIgts = recettes[index].ingredients.length; // une variable qui va stocker la taille du tab contenant les ingredients

		// ma boucle de teste je vous prie 😎
		for (let i = 0; i < tailleListeIgts; i++){ 
		    let ingredient = recettes[index].ingredients[i]
			for (let j = 0; j < listeCourses.length; j++){
				if (ingredient === listeCourses[j]){
					isIn = false;
				}
			}
			if (isIn){
				listeCourses.push(ingredient)
			}
		}
		
		
	}
	return listeCourses;
}
// Pour tester ma fonction de generation de liste de cours 
let planning = genererListeCourses()
console.log(planning);
// Cependant, J'ai des soucis avec son execution..je peine à le debuguer.. Y a surement un truc que j'ai paumé🤔


// 5.Calcul des Portions









