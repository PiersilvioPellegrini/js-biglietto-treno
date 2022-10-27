const numeroKm = prompt("Quanti km vuoi percorrere?");
const Age = prompt("Quanti anni hai?");

// Calcolo prezzo biglietto
const prezzoBiglietto = numeroKm * 0.21;

// Calcolo sconto
let sconto = 0;
if (Age < 18) {
    sconto = prezzoBiglietto * 0.8;
    
}
else if (Age > 65) {
    sconto = prezzoBiglietto * 0.6;
    
}
console.log(sconto);

// Calcolo prezzo finale
const prezzoFinale = prezzoBiglietto - sconto;
console.log(prezzoFinale);

// output HTML
let price = document.querySelector("#ticketPrice");
price.innerHTML = prezzoFinale.toFixed(2)+ "€";


let discount = document.getElementById("discountPrice");
discount.innerHTML = "Hai diritto ad uno sconto di: " + sconto.toFixed(2) + "€";



