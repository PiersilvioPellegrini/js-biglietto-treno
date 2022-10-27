const numeroKm = prompt("Quanti km vuoi percorrere?");
const Age = prompt("Quanti anni hai?");

// Calcolo prezzo biglietto
const prezzoBiglietto = numeroKm * 0.21;

// Calcolo sconto
let sconto = 0;
if (Age < 18) {
    sconto = prezzoBiglietto * 0.8;
    console.log(sconto.toFixed(2));
}
else if (Age > 65) {
    sconto = prezzoBiglietto * 0.6;
    console.log(sconto.toFixed(2));
}

// Calcolo prezzo finale
const prezzoFinale = prezzoBiglietto - sconto;
console.log(prezzoFinale.toFixed(2));

const price = document.getElementById("ticketPrice");

price.innerHTML = prezzoFinale.toFixed(2);

if(sconto>0){
const discount = document.getElementById("discount");
discount.innerHTML = "Hai diritto ad uno sconto di: " + sconto.toFixed(2) + "€";
}

else{
const discount = document.getElementById("discount");
discount.innerHTML = "Non hai diritto ad uno sconto";
}