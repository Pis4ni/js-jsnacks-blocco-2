//creo una lista di nomi
let names = ['paolo','luca','gino','asdrubale','melchiorre','alekos']
//creo una lista di cognomi
let surnames = ['rossi','demetris','mura','yokohama','takeda','gojo']
//creo una lista di nomi + cognomi casuali
let randomNames = []
// PER OGNI nome dell array di nomi

//? sarebbe stato meglio utilizzare il for each ma non avendo ancoira fatto le funzioni di callback meglio evitare
for (let i = 0; i < names.length; i++) {

    // prendo un congome a caso dalla lista dei cognomi e lo unisco
    const randomIndex = Math.floor(Math.random() * names.length)
    // metto il nome + cognome ottenuto nella lista dei nomi random
    randomNames[i]=names[i]+surnames[randomIndex];
    
}