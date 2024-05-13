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

    displayCard(card){
        
        const cardsElement = document.querySelector(".cards"); //Problème de . pour la classe
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.textContent = String.fromCodePoint(card.value);
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