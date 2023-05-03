// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// creare un array con una lista di email
const email = ['lucarossi@gmail.com', 'nomecognome@gmail.com', 'pincopallo@gmail.com', 'rosabianchi@gmail.com'];
console.log(email);

// creare una funzione che chieda all'utente di inserire la sua email
function emailVerification() {

    // email dell'utente
    let userEmail = document.getElementById("email").value;

    console.log(userEmail);

    // creare un ciclo con le email
    for(let i = 0; i < userEmails.length; i++){
        
        // se il nome dell'utente è presente allora gli chiedo l'email
        if(userEmails.includes(email)) {
            
            console.log("benvenuto!");
        }
        // altrimenti nega accesso’
        else{
            console.log("non sei ancora registrato,registrati!");
        }
    }

}
    