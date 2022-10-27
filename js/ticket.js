const numeroKm = prompt("Quanti km vuoi percorrere?");
const Age = prompt("Quanti anni hai?");

// Calcolo prezzo biglietto
const prezzoBiglietto = numeroKm * 0.21;

// Calcolo sconto
let prezzoScontato = 0;
if (Age < 18) {
    prezzoScontato = prezzoBiglietto * 0.8;
    
}
else if (Age > 65) {
    prezzoScontato = prezzoBiglietto * 0.6;
    
}
console.log(prezzoScontato);

// Calcolo prezzo finale
const prezzoFinale = prezzoBiglietto - prezzoScontato;
console.log(prezzoFinale);

// output HTML
let price = document.querySelector("#ticketPrice");
price.innerHTML = prezzoBiglietto.toFixed(2)+ "€";


if(prezzoScontato > 0) {
let discount = document.getElementById("discountPrice");
discount.innerHTML = "Prezzo Scontato è: " + prezzoScontato.toFixed(2) + "€";
}
else{
    let discount = document.getElementById("discountPrice");
    discount.innerHTML = "Non hai diritto a sconti";
}






