const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  };
  
  const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  };
  
  const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  };
  
  const prices = [34, 5, 2];
  const shippingCost = 50;
  let UtenteCheAcquista = marco
  
  const carrelloTotale = prices.reduce((totaleAcquistoUtente, prices) => totaleAcquistoUtente + prices, 0);
console.log("Totale iniziale del carrello:", carrelloTotale)

let totaleScontato = carrelloTotale
if (UtenteCheAcquista.isAmbassador) {
  totaleScontato *= 0.7
}

let costoTotale = totaleScontato

if (totaleScontato > 100) {
  console.log("La spedizione è gratuita.");
} else {
  costoTotale += shippingCost; // Aggiungi il costo di spedizione
  console.log(" costo di spedizione :", shippingCost)
}

console.log("Costo totale del carrello:", costoTotale)
const utenti = [marco, paul, amy]

utenti.forEach(function (utente) {
  if (utente.isAmbassador) {
    console.log(utente.name + " " + utente.lastName + " è un ambassador");
  } else {
    console.log(utente.name + " " + utente.lastName + " non è un ambassador");
  }
})
const ambassadorArray = utenti.filter(function (utente) {
  return utente.isAmbassador;
});
console.log("Ambassador trovati:", ambassadorArray)



  