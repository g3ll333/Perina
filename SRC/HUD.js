let img_vita;
let vita1;
let vita2;
let vita3;
let vita4;
let vita5;

let cestino;
let cestino1;
let cestino2;
let cestinopieno;
let cestinomuffa;
let img_cestino_vuoto;
let img_cestino_1pera;
let img_cestino_2pere;
let img_cestino_pieno;
let img_cestino_muffa;

let text_score;
let prev_score;
let curr_score;

let isThrowing = false;

function preload_hud(s) {
    img_cestino_vuoto = PP.assets.image.load(s, "ASSETS/IMAGES/cestinovuoto.png");
    img_cestino_1pera = PP.assets.image.load(s, "ASSETS/IMAGES/cestino1pera.png");
    img_cestino_2pere = PP.assets.image.load(s, "ASSETS/IMAGES/cestino2pere.png");
    img_cestino_pieno = PP.assets.image.load(s, "ASSETS/IMAGES/cestinopieno.png");
    img_cestino_muffa = PP.assets.image.load(s, "ASSETS/IMAGES/cestinomuffa.png");

    img_vita = PP.assets.image.load(s, "ASSETS/IMAGES/vitaperina.png");
}

function create_hud(s) {
    vita1 = PP.assets.image.add(s, img_vita, 150, 40, 0.5, 0.5);
    vita2 = PP.assets.image.add(s, img_vita, 200, 40, 0.5, 0.5);
    vita3 = PP.assets.image.add(s, img_vita, 250, 40, 0.5, 0.5);
    vita4 = PP.assets.image.add(s, img_vita, 300, 40, 0.5, 0.5);
    vita5 = PP.assets.image.add(s, img_vita, 350, 40, 0.5, 0.5);

    cestino = PP.assets.image.add(s, img_cestino_vuoto, 75, 40, 0.5, 0.5);
    cestino1 = PP.assets.image.add(s, img_cestino_1pera, 75, 40, 0.5, 0.5);
    cestino2 = PP.assets.image.add(s, img_cestino_2pere, 75, 40, 0.5, 0.5);
    cestinopieno = PP.assets.image.add(s, img_cestino_pieno, 75, 40, 0.5, 0.5);
    cestinomuffa = PP.assets.image.add(s, img_cestino_muffa, 75, 40, 0.5, 0.5);

    cestino1.visibility.hidden = true;
    cestino2.visibility.hidden = true;
    cestinopieno.visibility.hidden = true;
    cestinomuffa.visibility.hidden = true;

    text_score = PP.shapes.text_styled_add(s, 10, 20, "0", 40, "Helvetica", "normal", "0xFFFFFF", null, 0, 0);

    //non faccio muovere cestini e vite
    text_score.tile_geometry.scroll_factor_x = 0;
    text_score.tile_geometry.scroll_factor_y = 0;

    cestino.tile_geometry.scroll_factor_x = 0;
    cestino.tile_geometry.scroll_factor_y = 0;

    cestino1.tile_geometry.scroll_factor_x = 0;
    cestino1.tile_geometry.scroll_factor_y = 0;

    cestino2.tile_geometry.scroll_factor_x = 0;
    cestino2.tile_geometry.scroll_factor_y = 0;

    cestinopieno.tile_geometry.scroll_factor_x = 0;
    cestinopieno.tile_geometry.scroll_factor_y = 0;

    cestinomuffa.tile_geometry.scroll_factor_x = 0;
    cestinomuffa.tile_geometry.scroll_factor_y = 0;

    vita1.tile_geometry.scroll_factor_x = 0;
    vita1.tile_geometry.scroll_factor_y = 0;

    vita2.tile_geometry.scroll_factor_x = 0;
    vita2.tile_geometry.scroll_factor_y = 0;

    vita3.tile_geometry.scroll_factor_x = 0;
    vita3.tile_geometry.scroll_factor_y = 0;

    vita4.tile_geometry.scroll_factor_x = 0;
    vita4.tile_geometry.scroll_factor_y = 0;

    vita5.tile_geometry.scroll_factor_x = 0;
    vita5.tile_geometry.scroll_factor_y = 0;

    PP.game_state.set_variable("count_pere", 0);
}


function change_cestino(s) {
    // cambio l'immagine del cestino in base al numero di pere raccolte 
    //incremento il numero pere
    prev_score = PP.game_state.get_variable("count_pere", 0);
    PP.game_state.set_variable("count_pere", prev_score + 1);

    pere_raccolte = PP.game_state.get_variable("count_pere", 0); // Aggiungi questa riga

    if (pere_raccolte === 1) {
        cestino.visibility.hidden = true;
        cestino1.visibility.hidden = false;
        cestino2.visibility.hidden = true;
        cestinopieno.visibility.hidden = true;
        cestinomuffa.visibility.hidden = true;

    } else if (pere_raccolte === 2) {
        cestino.visibility.hidden = true;
        cestino1.visibility.hidden = true;
        cestino2.visibility.hidden = false;
        cestinopieno.visibility.hidden = true;
        cestinomuffa.visibility.hidden = true;
    } else if (pere_raccolte === 3) {
        cestino.visibility.hidden = true;
        cestino1.visibility.hidden = true;
        cestino2.visibility.hidden = true;
        cestinopieno.visibility.hidden = false;
        cestinomuffa.visibility.hidden = true;
    } else if (pere_raccolte > 3) {
        cestino.visibility.hidden = true;
        cestino1.visibility.hidden = true;
        cestino2.visibility.hidden = true;
        cestinopieno.visibility.hidden = true;
        cestinomuffa.visibility.hidden = false;
    }
}



function svuota_cestino(s) {
    if (isThrowing) return; // Evita esecuzioni multiple
    isThrowing = true;

    // Controlla se c'è almeno una pera da lanciare
    if (curr_score > 0) {
        // Decrementa il numero di pere

        curr_score--;
        //console.log("ccurr_score prima: ", curr_score);

        //console.log("ccurr_score dopo decremento: ", curr_score);
        //pere_raccolte--;
        prev_score = PP.game_state.get_variable("count_pere", 0);
        PP.game_state.set_variable("count_pere", prev_score - 1);


    }

    if (curr_score === 0) {
        cestino.visibility.hidden = false;
        cestino1.visibility.hidden = true;
        cestino2.visibility.hidden = true;
        cestinopieno.visibility.hidden = true;
        cestinomuffa.visibility.hidden = true;
    } else if (curr_score === 1) {
        cestino.visibility.hidden = true;
        cestino1.visibility.hidden = false;
        cestino2.visibility.hidden = true;
        cestinopieno.visibility.hidden = true;
        cestinomuffa.visibility.hidden = true;
    } else if (curr_score === 2) {
        cestino.visibility.hidden = true;
        cestino1.visibility.hidden = true;
        cestino2.visibility.hidden = false;
        cestinopieno.visibility.hidden = true;
        cestinomuffa.visibility.hidden = true;
    } else if (curr_score === 3) {
        cestino.visibility.hidden = true;
        cestino1.visibility.hidden = true;
        cestino2.visibility.hidden = true;
        cestinopieno.visibility.hidden = false;
        cestinomuffa.visibility.hidden = true;
    } else if (curr_score > 3) {
        cestino.visibility.hidden = true;
        cestino1.visibility.hidden = true;
        cestino2.visibility.hidden = true;
        cestinopieno.visibility.hidden = true;
        cestinomuffa.visibility.hidden = false;
    }

    // Resetta il flag di lancio dopo un breve tempo per permettere nuovi lanci
    PP.timers.add_timer(s, 2000, () => {
        isThrowing = false;
        pere_raccolte--;
    }, false);

}


function update_hud(s) {
    curr_score = PP.game_state.get_variable("count_pere");
    PP.shapes.text_change(text_score, " " + curr_score);
}
