/*
Il computer deve generare 16 numeri casuali tra 1 e 100.
In seguito deve chiedere all’utente di inserire un numero alla volta,
sempre compreso tra 1 e 100.
Se il numero è presente nella lista dei numeri generati,
la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o
raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio,
 cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: all’inizio il software richiede anche una difficoltà all’utente
che cambia il range di numeri casuali.
Con difficoltà 0=> tra 1 e 100, con difficoltà 1 =>  tra 1 e 80, con difficoltà 2=> tra 1 e 50
*/

var checker = true;
var chiedodifficolta = prompt('Inserisci una difficoltà tra 0 e 2 , 0 è facile, 1 è medio e 2 è difficile.');
if (chiedodifficolta == 0) {
var difficolta = 100;
}else if (chiedodifficolta == 1) {
var difficolta = 80;
} else if(chiedodifficolta == 2) {
var difficolta = 50;
} else {
     document.getElementById('id').innerHTML = 'Scegli una difficoltà tra 0 e 2';
     var checker = false;
}

console.log(difficolta); //debug



var numeriRandom = []; //*Array vuoto

for (var i = 0; i < 16; i++) { //Creo 16 numberi da 1 a 100 randomici
     var numeroRandom = generaRandom(1,difficolta);
     numeriRandom.push(numeroRandom); // Push 16 numeri nell'array numeriRandom.
}
console.log(numeriRandom); //DEBUG *Array pieno

var numeroUtente = []; //Array vuoto per numero utente

while (checker) { // vado a pienare l'array con tutti i tentativi, appena l'utente digita il numero generato dal for sopra while si stoppa
     var chiedo = parseInt(prompt('inserisci un numero'));
     document.getElementById('id').innerHTML = 'BOOOM!!! Il punteggio è : ' + numeroUtente.length;

     if(chiedo <= 100 && chiedo >= 1 && !numeroUtente.includes(chiedo) ){ //Piccolo check per non prendere i numeri superiori a 100 e minori a 1 e non prendere i numeri doppi
          numeroUtente.push(chiedo);
          console.log(numeroUtente);
          if (numeriRandom.includes(chiedo)){
               var checker = false;
          } else {
               checker = true;
               document.getElementById('id').innerHTML = 'BOOOM!!! Il punteggio è : ' + numeroUtente.length;
               document.getElementById('id2').innerHTML = 'DATI : ';
               document.getElementById('id3').innerHTML = 'i numeri che hai scelto: '  + numeroUtente;
               document.getElementById('id4').innerHTML = 'i numeri del campo minato: ' + numeriRandom;
               document.getElementById('id5').innerHTML = 'Difficoltà: ' + chiedodifficolta;

          }
     }
}








function generaRandom(min, max) { //funzione che genera numeri randomici con un min e un max
    numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
