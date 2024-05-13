import { Card } from "../models/card.js";
//import { Memory } from "../models/memory.js";
import { Notifier } from "../patterns/notifier.js";

export class ControllerMemory extends Notifier
{
    #card ;
    constructor()
    {
        super();
    }

    createCard(){
        const min = 0x1F90C; 
        const max = 0x1F9FF;

        

        const value = Math.floor(Math.random() * (max - min + 1)) + min;

        this.#card = new Card(value);
        this.notify("cardCreated");
    }

    get card()
    {
        return this.#card;
    }   
}