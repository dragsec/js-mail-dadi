var numPlayer = Math.ceil(Math.random() * 6);
var numComputer = Math.ceil(Math.random() * 6);

console.log("Il tuo numero è " + numPlayer);
console.log("Il mio numero è " + numComputer);


if(numPlayer > numComputer) {
    console.log("Il tuo numero è maggiore");
}else if (numPlayer < numComputer) {
    console.log("Il mio numero è maggiore");
}else {
    console.log("I numeri sono uguali");
}
