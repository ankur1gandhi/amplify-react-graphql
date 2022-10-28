import { useEffect, useState } from 'react';
import Cards from './Cards';

export default function Deck() {
    // array or list better? linked list
    const [deck, setDeck] = useState([]);
    const buildDeck = () => {
        const deck = [];
        for(let i = 0; i < Cards.SUITS.length; i++) {
            for(let j = 0; j < Cards.NUMBERS.length; j++) {
                deck.push({
                    suit: Cards.SUITS[i],
                    number: Cards.NUMBERS[j]
                });
            }
        }
        setDeck(deck);
    }
    

    const shuffle = () => {
        const newDeck = deck;
        let currentIndex = newDeck.length, randomIndex;
        console.log(randomIndex);
      
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [newDeck[currentIndex], newDeck[randomIndex]] = [
            newDeck[randomIndex], newDeck[currentIndex]];
        }
        console.log(newDeck);
        setDeck(newDeck);
      }

    useEffect(() => {
        buildDeck();
        shuffle();
    }, [])
}