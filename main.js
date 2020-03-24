// FOCUS
// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.

// Chiedere cognome all'utente
var cognomeUtente = prompt("Inserisci il tuo cognome: ");

// Creo variabile array con cognomi in una lista
var listaCognomi = ["Caccamo", "De Sica", "Rossi"];

// Inserisco il cognome all'interno dell'array
listaCognomi.push(cognomeUtente);
console.log(cognomeUtente);

// Creo una lista cognome organizzata
var listaOrganizzata = listaCognomi.sort();
console.log(listaCognomi);

var listaN, contenutoPrecedente;
var position;

for ( var i = 0; i < listaCognomi.length; i++) {
  listaN = listaCognomi[i];

  console.log(listaN);

  if (cognomeUtente == listaCognomi[i]) {
    position = i;
  }

  contenutoPrecedente = document.getElementById('cognomi').innerHTML;

  console.log("Interazione cognomi: " + cognomeUtente + contenutoPrecedente);

  document.getElementById('cognomi').innerHTML = contenutoPrecedente + "<li>" + listaN + "</li>";

}
 // Stampare all'interno della console la posizione del cognome all'interno della lista
 console.log("Il tuo cognome: " + cognomeUtente + "nella lista console " + "è: " + i);
 document.getElementById("cognomi2").innerHTML = "Il tuo cognome: " + cognomeUtente + "nella lista browser" + "è: " + position;
