// Défi Codage #3
let age = 20;
let total = 100;

let result =
	age >= 21
		? " le boisson offert pour cet age est le wiski ou du vin "
		: age >= 18 && age <= 20
		? "le boisson offert pour cet age est le vin"
		: "du jus de fruits pour vous";
console.log(result);

let remise =
	total >= 100
		? "vous obtenez une remise de 20%"
		: total >= 50
		? " vous obtenez une remise de 10%"
		: " Désolé, Aucune remise pour vous. ";

console.log(remise);
