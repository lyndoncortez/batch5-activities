// Card Properties
const suits = ['♦','♥','♠','♣']
const values = ['Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King','Ace']
const nValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

// Card Object
function Card(suit, value, nValue) {
    this.suit = suit;
    this.value = value;
    this.nValue = nValue;
    this.dealt = false; 
    this.name = this.value + ' of ' + this.suit;
}

// Build Deck
function generateDeck() {
    gameDeck = []
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            let card = new Card(suits[i], values[j], nValues[j]);
            gameDeck.push(card);
        }
    }
    console.log(gameDeck);
}

// Shuffle Deck
function shuffleDeck(gameDeck) {
    gameDeck.sort(() => Math.random() - 0.5);
    for (let i = 0; i < gameDeck.length; i++) {
        gameDeck[i].dealt = false;
    }
    console.log(gameDeck);
}

// Arrange Deck by Suit
function arrangeBySuit(gameDeck) {
    gameDeck.sort((a, b) => {
        let cardA = a.suit.toLowerCase();
        let cardB = b.suit.toLowerCase();
        if (cardA < cardB) {
            return -1;
        }
        if (cardA > cardB) {
            return 1;
        }
        return 0;
    });
    console.log(gameDeck);
}

// Arrange Deck by Value
function arrangeByValue(gameDeck, mode = 'asc') {
    if (mode === 'asc') {
        gameDeck.sort((a, b) => {
            return a.nValue - b.nValue;
        });
    } else {
        gameDeck.sort((a, b) => {
            return b.nValue - a.nValue;
        });
    }
    console.log(gameDeck);
}

// Deal 1 Card
function dealCard(gameDeck) {
    let dCard = gameDeck[0];
    gameDeck.splice(0, 1);
    gameDeck.splice(gameDeck.length, 0, dCard);
    if (dCard.dealt !== true) {
        dCard.dealt = true;
        return dCard;
    } else {
        console.log('No more cards');
    }
}

// Deal 5 Cards or 1 Hand
function dealHand(gameDeck) {
    dealtHand = [];
    for (let i = 0; i < 5; i++) {
        dealtHand[i] = (dealCard(gameDeck));
        if (dealtHand[i] === undefined) {
            return;
        }
    }
    console.log(dealtHand);
    handValue(dealtHand);
}