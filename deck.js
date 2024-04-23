function Deck() {
  const suits = 'Spades Hearts Clubs Diamonds'.split(' ');
  const ranks = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split(' ');
  
  const deck = new Array(52);

  for (let i = 0; i < cards.length; i++) {
    const suit = suits[Math.floor(i / 13)];
    const rank = ranks[i % 13];

    deck[i] = { i, suit, rank };
  }

  Deck.shuffle = shuffle;
  Deck.draw = draw;

  return Deck;

  function shuffle() {
    for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this[i], this[j]] = [this[j], this[i]];
    }
  }

  function draw() {
    if (this.length === 0) {
      console.log("No cards left in the deck!");
      return null;
    }
    return this.pop();
  }
} 