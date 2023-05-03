// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// creare un array con una lista di email

const userEmails = ['lucarossi@gmail.com', 'nomecognome@gmail.com', 'pincopallo@gmail.com', 'rosabianchi@gmail.com'];

// creare una funzione che chieda all'utente di inserire la sua email
function emailVerification() {

    // email dell'utente
    let email = document.getElementById("email").value;
    console.log(email);

    // creare un ciclo con le email
    for(let i = 0; i < userEmails.length; i++){
        if(userEmails.includes(email)) {
            // se il nome dell'utente è presente allora gli chiedo l'email
            console.log("benvenuto pinco pallo!");
        }

            else{
                console.log("non sei ancora registrato,registrati!");
            }
    }

}
    