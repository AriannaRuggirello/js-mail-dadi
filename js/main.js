// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// creare un array con una lista di email
const email = ['lucarossi@gmail.com', 'nomecognome@gmail.com', 'pincopallo@gmail.com', 'rosabianchi@gmail.com'];
console.log(email);

// creare una funzione che chieda all'utente di inserire la sua email
function emailVerification() {

    // email dell'utente
    let userEmail = document.querySelector("input").value;
    // console.log(userEmail);
    
   
    // se il nome dell'utente è presente allora gli chiedo l'email
    if(email.includes(userEmail)) {
        
    document.getElementById("output").innerHTML = "Benvenuto!"
        // console.log("benvenuto!");
    }
    // altrimenti nega accesso’
    else{
        document.getElementById("output").innerHTML = "Non sei ancora registrato. Registrati!";
        // console.log("non sei ancora registrato,registrati!");
    }
}

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



// Generare un numero random da 1 a 6 per il computer

// Generare un numero random da 1 a 6 per il giocatore 

// (if) il giocatore ha un numero maggiore del computer vince il giocatore  

// (else if) il computer ha il numero più alto del giocatore vince il computer

// (else) se hanno il numero uguale, pareggiano