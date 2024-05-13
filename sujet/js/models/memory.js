class Memory{
    #cards

    constructor(){
        this.#cards = [];
    }

    newGame(pairsNumber){
        this.#cards = [];
        const min = 0x1F90C;
        for(let i = 0; i < pairsNumber; i++){
            this.#cards.push(new Card(i+min));
            this.#cards.push(new Card(i+min));
        }
        
    }

    getCardsNumber(){
        return this.#cards.length;
    }

    getCard(index){
        return this.#cards[index];
        
        
    }






}