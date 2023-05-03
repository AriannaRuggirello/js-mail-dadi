// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.



let messaggio = "Non sei ancora registrato. Registrati!"
// creare un array con una lista di email
const email = ['lucarossi@gmail.com', 'nomecognome@gmail.com', 'pincopallo@gmail.com', 'rosabianchi@gmail.com'];
console.log(email);

// creare una funzione che chieda all'utente di inserire la sua email
function emailVerification() {

    // email dell'utente
    let userEmail = document.querySelector("input").value;
    // console.log(userEmail);
    
   for(let i = 0; i < email.length; i++){

    let value = email[i];
    // se il nome dell'utente è presente allora gli do il benvenuto
    if(value === userEmail) {       
        messaggio = "Benvenuto!"
            // console.log("benvenuto!");
        }  
   }
   
   document.getElementById('output').innerHTML = messaggio
   
}

