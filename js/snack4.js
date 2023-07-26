// creo una lista di numeri a
let arrOne = [2,5,433,76,4,2]
// creo una lista di numeri b
let arrTwo = [456,756,445,6,43,45,3,456,3]
// verifico quanto è il numero massimo di elementi nella lista piu' grande
let maxLenght = Math.max(arrOne.length, arrTwo.length)
// creo un elemento vuoto da aggiungere alla lista minore fino a pareggio
empty = 0
//FINCHE lista a è minore di lista b
while (arrOne.length < maxLenght) {
    //aggiungo l' elemento vuoto alla lista x volte fino a pareggio
    arrOne.push(empty);
}
//FINCHE lista b è minore di lista a
while (arrTwo.length < maxLenght) {
      //aggiungo l' elemento vuoto alla lista x volte fino a pareggio
    arrTwo.push(empty);
  }
console.log(arrOne)
console.log(arrTwo)