import { Observer } from "../patterns/observer.js";

export class ViewMemory extends Observer
{
    #controllerMemory;

    constructor(controllerMemory)
    {
        super();

        this.#controllerMemory = controllerMemory;
        this.#controllerMemory.addObserver(this);
    }

    displayCard(card, index){
        const cardsElement = document.querySelector(".cards");
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.textContent = String.fromCodePoint(card.value);
        if(card.faceHidden){
            cardElement.classList.add("hidden");
        }
        else{
            cardElement.classList.add("flip");
        }
    
        cardElement.addEventListener('click', () => {
            console.log("Click !");
            const index = Array.from(cardsElement.children).indexOf(cardElement);
            console.log(index);
            this.#controllerMemory.showCard(index);
        });
    
        cardsElement.appendChild(cardElement);
    }

    displayCards(){
        const cardsElement = document.querySelector(".cards");
        cardsElement.innerHTML = "";
        for(let i = 0; i < this.#controllerMemory.getCardsNumber(); i++){
            this.displayCard(this.#controllerMemory.getCard(i));
        }
    }

    notify()
    {
        this.displayCards();
    }
}