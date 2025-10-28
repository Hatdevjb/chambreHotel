    "use strict"

    import { Chambre } from "./Chambre.class.js";

    // faire un hotel dans un tableau de 10chambre
    let tHotel = [1,2,3,4,5,6,7,8,9,10]


     // SCENARIOS ALTERNATIFS - TESTS
    try {
        // let ch1 = new Chambre();
        // let ch2 = new Chambre("titi","toto");
        // let ch3 = new Chambre(-3,-10);

        // SCENARIO NOMINAL
        let ch4 = new Chambre(3,25);

        //console.log(ch4);
        ch4.affiche();

    } catch(err) {
        console.error(err.message);
    }

    console.log("Mon programme continue");