// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// variabili globali
let playButton = document.getElementById("gioca");
let result = document.getElementById("result");



// funzione con il bottone play

playButton.addEventListener ('click', 
function() {
    // Generare un numero random da 1 a 6 per il giocatore 
    let user = Math.floor(Math.random() * 6) + 1;
    document.getElementById("userNumber").innerHTML += user;

    // console.log('numero scelto dal giocatore 1: ' + user);

    // Generare un numero random da 1 a 6 per il computer
    let computer = Math.floor(Math.random() * 6) + 1;
    document.getElementById("computerNumber").innerHTML += computer;

    // console.log('numero scelto dal pc: ' + computer);


    let messaggio;
    // (if) il giocatore ha un numero maggiore del computer vince il giocatore  
    if (user > computer) {
        messaggio = "Il giocatore vince!"

        // console.log("Il giocatore vince");

    } else if (computer > user) {
    // (else if) il computer ha il numero più alto del giocatore vince il computer
        messaggio = "Il computer vince!"

        // console.log("Il computer vince");

    } else {
    // (else) se hanno il numero uguale, pareggiano
        messaggio = "Pareggio!"
        
        // console.log("Pareggio!");
    }

    result.innerHTML = messaggio;
})