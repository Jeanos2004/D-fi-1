// Exercice 8
let note = 99;
let mention = " ";

if ( note >= 90 && note <= 100 ) {
    mention = "Excellent";
}
else if ( note >= 80 && note <= 89) {
    mention = "Tres bien";
}
else if ( note >= 70 && note <= 79) {
    mention = "Bien";
}
else if ( note >= 60 && note <= 69) {
    mention = "Assez Bien";
}
else if ( note >= 50 && note <= 59) {
    mention = "Passable";
}
else {
    mention = "Insuffisant";
}

console.log("Vous avez eu une note de " + note + " pour une mention " + mention);