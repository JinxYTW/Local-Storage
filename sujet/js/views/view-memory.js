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

    displayCard(){
        
        const cardsElement = document.querySelector(".cards"); //Problème de . pour la classe
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.textContent = String.fromCodePoint(this.#controllerMemory.card.value);
        cardsElement.appendChild(cardElement);

        cardElement.addEventListener("click", () => {
            this.#controllerMemory.createCard();
        });
    }

    notify()
    {
        this.displayCard();
    }
}