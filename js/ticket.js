const numeroKm = prompt("Quanti km vuoi percorrere?");
const Age = prompt("Quanti anni hai?");

// Calcolo prezzo biglietto
const prezzoBiglietto = numeroKm * 0.21;

// Calcolo sconto
let sconto = 0;
if (Age < 18) {
    sconto = prezzoBiglietto * 0.2;
}
else if (Age > 65) {
    sconto = prezzoBiglietto * 0.4;
}

// Calcolo prezzo finale
const prezzoFinale = prezzoBiglietto - sconto;
console.log(prezzoFinale.toFixed(2));