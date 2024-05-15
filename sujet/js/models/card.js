class Card {
    #value;

    constructor(value) {
        this.#value = value;
    }

    get value() {
        return this.#value;
    }

    toData(){
        const cardData = {
            value: this.#value
        };
        return cardData;
    }

    fromData(data){
        this.#value = data.value;
    }




}

export { Card };

