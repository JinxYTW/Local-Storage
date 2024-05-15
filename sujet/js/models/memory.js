import { Card } from './../models/card.js';

class Memory{
    #cards
    #firstCard = null;

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

    showCard(index) {
        const card = this.#cards[index];
    
        // Si la carte est déjà retournée, la fonction n'a aucun effet.
        if (!card.faceHidden) {
            console.log("Nope !");
            return;
        }
    
        // Retourner la carte
        card.show();
        console.log("Click Click !");
    
        // Si c'est la première carte à être retournée
        if (this.#firstCard === null) {
            this.#firstCard = card;
        } else {
            // Si c'est la seconde carte à être retournée
            if (card.value === this.#firstCard.value) {
                // Si elle est identique à la première de la série, alors les deux cartes restent visibles
                this.#firstCard = null;
            } else {
                // Sinon, les deux cartes sont masquées au bout d'une seconde
                setTimeout(() => {
                    card.hide();
                    this.#firstCard.hide();
                    this.#firstCard = null;
                }, 1000);
            }
        }
    
        // Si toutes les cartes sont retournées, nouvelle partie !
        if (this.#cards.every(card => !card.faceHidden)) {
            this.newGame();
        }
    }

    toData(){

        const memoryData = this.#cards.map(card => card.toData());
        return memoryData;

        

        
    }

    fromData(data) {
        this.#cards = data.map(cardData => {
            const card = new Card(cardData.value);
            if (cardData.faceHidden) {
                card.hide();
            } else {
                card.show();
            }
            return card;
        });
    }






}

export { Memory };