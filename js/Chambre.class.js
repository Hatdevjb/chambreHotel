"use strict"
// classe à metre en export si utilisatuion de live
export class Chambre {
    // Attribue qui constitue une chambre
    #capacite;
    #superficie = 0;
    #reservation;
    // constructeur  avec les valeur qui contreuise la Chambre
    constructor(capacite,superficie,reservation){
      this.setCapacite(capacite);
      this.setSuperficie(superficie);
      this.setReservation(reservation);
    }
    // setter  
    setCapacite(capacite){
      this.#capacite = capacite;
    }

    #setSuperficie(superficie){
      if (!superficie) throw new Error("ERR: Champs 'superficie' obligatoir");
      if (isNaN(superficie)) throw new Error("ERR: Champs 'superficie'est un nombre");
      if (superficie <= 0)  throw new Error("ERR: Champs 'superficie'est un nombre positif");

      this.#superficie = superficie;
    }

    setReservation(){

    }
    // getter pour quand on veux récup les donner des attribue de chambre 
    getCapacite(){
        return this.#capacite;
    }

    getSuperficie(){
      return  this.#superficie;
    }

    getReservation(){
      return  this.#reservation;
    }
    // methode suplémentaire 
    affiche(){
        console.log("Ma superficie est de " + this.#superficie)
    }

    reserverChambre(){

    }

    libereChambre(){

    }
}