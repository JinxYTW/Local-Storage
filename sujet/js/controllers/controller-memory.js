//import { Card } from "../models/card.js";
import { Memory } from "../models/memory.js";
import { Notifier } from "../patterns/notifier.js";

export class ControllerMemory extends Notifier
{
    #memory;
    
    constructor()
    {

        super();
        this.#memory = new Memory();//Crée une instance de Memory possédant les caractéristiques de Memory
    
    }

    newGame(){
        this.#memory.newGame(10);
        this.notify();//Magie magie
        this.saveGame();
    }

    //Ajout de getter afin d'utiliser les méthodes de Memory

    getCardsNumber(){
        return this.#memory.getCardsNumber(); 
    }

    getCard(index){
        return this.#memory.getCard(index);
    }

    saveGame(){
        localStorage.setItem('memory', JSON.stringify(this.#memory.toData()));

        
    }   

    loadGame(){
        const data = JSON.parse(localStorage.getItem('memory'));
        if(data){
            this.#memory.fromData(data);
            this.notify();
            return true;
        }
        return false;
    }

    start() {
        if (!this.loadGame()) {
            this.newGame();
            
        }
    }

    
      
}