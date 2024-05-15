class Card {
    #value;
    #faceHidden = true;

    constructor(value) {
        this.#value = value;
    }

    get value() {
        return this.#value;
    }

    get faceHidden() {
        return this.#faceHidden;
    }

    show() {
        this.#faceHidden = false;
    }

    hide() {
        this.#faceHidden = true;
    }

    



    toData(){
        const cardData = {
            value: this.#value,
            faceHidden: this.#faceHidden

        };
        return cardData;
    }

    fromData(data){
        this.#value = data.value;
    }




}

export { Card };

