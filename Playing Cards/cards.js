const suits = ["♤", "♢", "♣", "♡"];
const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

let deck = [];

for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = suits[i] + values[x] ;
        deck.push(card);
        
    }
}

/*  console.log(deck); */

//Shuffle cards
function shuffleCards(arr) {
		for (let i = arr.length - 1; i > 0; i--) {
		let j =  Math.floor(Math.random() * i);
  	let temp = arr[i];
  	arr[i] = arr[j];
  	arr[j] = temp;
	}
  return console.log(arr);
}

/* shuffleCards(deck); */

function suitCards(arr){
	
}

