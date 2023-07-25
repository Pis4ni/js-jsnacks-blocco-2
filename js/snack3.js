//crea una lista di numeri interi
const numberArr = [10,40,2,43,543,234,6,23,54]
//immagazino il risultato delle somme che inizialmente è 0
let sum = 0
//PER OGNI numero dell'indice della lista di numeri interi
for (let i = 0; i < numberArr.length; i++) {
    //SE è dispari
    if ( i % 2 !== 0) {
        //sommo il numero corrispondente al risultato
        sum += numberArr[i]
        console.log(sum)
    };    
}
console.log(sum)
