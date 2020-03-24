// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
var cognomeUtente = prompt("Inserisci il tuo cognome: ");

// Creo variabili con cognomi
var listaCognomi = ["Caccamo", "De Sica", "Rossi"];

listaCognomi.push(cognomeUtente);

console.log(cognomeUtente);


var listaOrganizzata = listaCognomi.sort();

console.log(listaCognomi);
