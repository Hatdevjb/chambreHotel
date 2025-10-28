"use strict"
// classe à metre en export si utilisatuion de live
class Chambre {
    // Attribue qui constitue une chambre
    #capacite;
    #superficie;
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

    setSuperficie(superficie){
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
    reserverChambre(){

    }

    libereChambre(){

    }
}