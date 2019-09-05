/*

for( i = 0 ; i < 10 ; i++ ){
      console.log(i);
 }
 // counts up from 0 - 9

for( i = 9 ; i > -1 ; i-- ){
      console.log(i);
 }
 // counts down from 9 - 0


let favDrinks = ["coke","orange","water"];
console.log(favDrinks[0]);
console.log(favDrinks[1]);
console.log(favDrinks[2]);



let favFilms = [
    "gladiator",
    "300",
    "star wars",
    "spiderman",
    "lord of the rings"
]
favFilms.push("robocop","lion king")
for (filmIndex = 0; filmIndex < favFilms.length; filmIndex++){
    console.log(favFilms[filmIndex]);
}


let cards = ["diamond","spade","heart","club"];
let currentCard = "heart";
while(currentCard != "spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard)


let favFilms = [
    "gladiator",
    "300",
    "ghostbusters",
    "spiderman",
    "lord of the rings"
]
favFilms.push("robocop","lion king")
for (filmIndex = 0; filmIndex < favFilms.length; filmIndex++){
    console.log(favFilms[filmIndex]);
}
if (favFilms[2]=="ghostbusters"){
    console.log("yay, it's ghostbusters")
}else{
    console.log("boo, we want ghostbusters")
}

let number = 50;
let x = 0;
while(x !== number){
  x = Math.floor((Math.random() * 50) + 1);
  console.log(x);
}
// random number 0-50

*/
