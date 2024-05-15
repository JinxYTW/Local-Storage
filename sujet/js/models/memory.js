import { Card } from './../models/card.js';

class Memory{
    #cards

    constructor(){
        this.#cards = [];
    }

    newGame(pairsNumber){
        this.#cards = [];
        const min = 0x1F90C;
        for(let i = 0; i < pairsNumber; i++){
            const card1 = new Card(i+min);
            const card2 = new Card(i+min);
    
            const index1 = Math.floor(Math.random() * (this.#cards.length + 1));
            this.#cards.splice(index1, 0, card1);
    
            const index2 = Math.floor(Math.random() * (this.#cards.length + 1));
            this.#cards.splice(index2, 0, card2);
        }
    }

    getCardsNumber(){
        return this.#cards.length;
    }

    getCard(index){
        return this.#cards[index];
        
        
    }

    toData(){

        const memoryData = this.#cards.map(card => card.toData());
        return memoryData;

        

        
    }

    fromData(data){
        this.#cards = data.map(cardData => {
            const card = new Card();
            card.fromData(cardData);
            return card;
        });
    }






}

export { Memory };