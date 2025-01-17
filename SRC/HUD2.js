let img_vita_2;
let vita1_2;
let vita2_2;
let vita3_2;
let vita4_2;
let vita5_2;

let cestino_2;
let cestino1_2;
//let cestino2_2;
let cestinopieno_2;
let cestinomuffa_2;
let img_cestino_vuoto_2;
let img_cestino_1pomodoro;
let img_cestino_2pomodori;
let img_cestino_pieno_2;
let img_cestino_muffa_2;

let text_score_2;
let prev_score_2;
let curr_score_2;

let isThrowing_2 = false;

function preload_hud2(s) {
    img_cestino_vuoto_2 = PP.assets.image.load(s, "ASSETS/IMAGES/cestinovuoto.png");
    img_cestino_1pomodoro = PP.assets.image.load(s, "ASSETS/IMAGES/cestinopomo1.png");
    //img_cestino_2pomodori = PP.assets.image.load(s, "ASSETS/IMAGES/cestinopomo2.png");
    img_cestino_pieno_2 = PP.assets.image.load(s, "ASSETS/IMAGES/cestinopomo2.png");
    img_cestino_muffa_2 = PP.assets.image.load(s, "ASSETS/IMAGES/cestinomuffa.png");

    img_vita_2 = PP.assets.image.load(s, "ASSETS/IMAGES/vitaperina.png");
}

function create_hud2(s) {
    vita1_2 = PP.assets.image.add(s, img_vita_2, 150, 40, 0.5, 0.5);
    vita2_2 = PP.assets.image.add(s, img_vita_2, 200, 40, 0.5, 0.5);
    vita3_2 = PP.assets.image.add(s, img_vita_2, 250, 40, 0.5, 0.5);
    vita4_2 = PP.assets.image.add(s, img_vita_2, 300, 40, 0.5, 0.5);
    vita5_2 = PP.assets.image.add(s, img_vita_2, 350, 40, 0.5, 0.5);

    cestino_2 = PP.assets.image.add(s, img_cestino_vuoto_2, 75, 40, 0.5, 0.5);
    cestino1_2 = PP.assets.image.add(s, img_cestino_1pomodoro, 75, 40, 0.5, 0.5);
    //cestino2_2 = PP.assets.image.add(s, img_cestino_2pomodori, 75, 40, 0.5, 0.5);
    cestinopieno_2 = PP.assets.image.add(s, img_cestino_pieno_2, 75, 40, 0.5, 0.5);
    cestinomuffa_2 = PP.assets.image.add(s, img_cestino_muffa_2, 75, 40, 0.5, 0.5);

    cestino1_2.visibility.hidden = true;
    //cestino2_2.visibility.hidden = true;
    cestinopieno_2.visibility.hidden = true;
    cestinomuffa_2.visibility.hidden = true;

    text_score_2 = PP.shapes.text_styled_add(s, 10, 20, "0", 40, "Helvetica", "normal", "0xb86127", null, 0, 0);

    //non faccio muovere cestini e vite
    text_score_2.tile_geometry.scroll_factor_x = 0;
    text_score_2.tile_geometry.scroll_factor_y = 0;

    cestino_2.tile_geometry.scroll_factor_x = 0;
    cestino_2.tile_geometry.scroll_factor_y = 0;

    cestino1_2.tile_geometry.scroll_factor_x = 0;
    cestino1_2.tile_geometry.scroll_factor_y = 0;

    //cestino2_2.tile_geometry.scroll_factor_x = 0;
    //cestino2_2.tile_geometry.scroll_factor_y = 0;

    cestinopieno_2.tile_geometry.scroll_factor_x = 0;
    cestinopieno_2.tile_geometry.scroll_factor_y = 0;

    cestinomuffa_2.tile_geometry.scroll_factor_x = 0;
    cestinomuffa_2.tile_geometry.scroll_factor_y = 0;

    vita1_2.tile_geometry.scroll_factor_x = 0;
    vita1_2.tile_geometry.scroll_factor_y = 0;

    vita2_2.tile_geometry.scroll_factor_x = 0;
    vita2_2.tile_geometry.scroll_factor_y = 0;

    vita3_2.tile_geometry.scroll_factor_x = 0;
    vita3_2.tile_geometry.scroll_factor_y = 0;

    vita4_2.tile_geometry.scroll_factor_x = 0;
    vita4_2.tile_geometry.scroll_factor_y = 0;

    vita5_2.tile_geometry.scroll_factor_x = 0;
    vita5_2.tile_geometry.scroll_factor_y = 0;

    PP.game_state.set_variable("count_pomodori", 0);
}


function change_cestino2(s) {
    // cambio l'immagine del cestino in base al numero di pere raccolte 
    //incremento il numero pere
    prev_score_2 = PP.game_state.get_variable("count_pomodori", 0);
    PP.game_state.set_variable("count_pomodori", prev_score_2 + 1);

    pomodori_raccolti = PP.game_state.get_variable("count_pomodori", 0); // Aggiungi questa riga

    if (pomodori_raccolti === 1) {
        cestino_2.visibility.hidden = true;
        cestino1_2.visibility.hidden = false;
        //cestino2_2.visibility.hidden = true;
        cestinopieno_2.visibility.hidden = true;
        cestinomuffa_2.visibility.hidden = true;

    } else if (pomodori_raccolti === 2) {
        cestino_2.visibility.hidden = true;
        cestino1_2.visibility.hidden = true;
        //cestino2_2.visibility.hidden = false;
        cestinopieno_2.visibility.hidden = false;
        cestinomuffa_2.visibility.hidden = true;
    } else if (pomodori_raccolti > 2) {
        cestino_2.visibility.hidden = true;
        cestino1_2.visibility.hidden = true;
        //cestino2_2.visibility.hidden = true;
        cestinopieno_2.visibility.hidden = true;
        cestinomuffa_2.visibility.hidden = false;
    } //else if (pomodori_raccolti > 3) {
    // cestino_2.visibility.hidden = true;
    //cestino1_2.visibility.hidden = true;
    //cestino2_2.visibility.hidden = true;
    // cestinopieno_2.visibility.hidden = true;
    // cestinomuffa_2.visibility.hidden = false;
    //}
}



function svuota_cestino2(s) {
    if (isThrowing_2) return; // Evita esecuzioni multiple
    isThrowing_2 = true;

    // Controlla se c'è almeno una pera da lanciare
    if (curr_score_2 > 0) {
        // Decrementa il numero di pere
        curr_score_2--;
        prev_score_2 = PP.game_state.get_variable("count_pomodori", 0);
        PP.game_state.set_variable("count_pomodori", prev_score_2 - 1);
    }

    if (curr_score_2 === 0) {
        cestino_2.visibility.hidden = false;
        cestino1_2.visibility.hidden = true;
        //cestino2_2.visibility.hidden = true;
        cestinopieno_2.visibility.hidden = true;
        cestinomuffa_2.visibility.hidden = true;
    } else if (curr_score_2 === 1) {
        cestino_2.visibility.hidden = true;
        cestino1_2.visibility.hidden = false;
        //cestino2_2.visibility.hidden = true;
        cestinopieno_2.visibility.hidden = true;
        cestinomuffa_2.visibility.hidden = true;
    } else if (curr_score_2 === 2) {
        cestino_2.visibility.hidden = true;
        cestino1_2.visibility.hidden = true;
        // cestino2_2.visibility.hidden = false;
        cestinopieno_2.visibility.hidden = false;
        cestinomuffa_2.visibility.hidden = true;
    } else if (curr_score_2 > 2) {
        cestino_2.visibility.hidden = true;
        cestino1_2.visibility.hidden = true;
        //cestino2_2.visibility.hidden = true;
        cestinopieno_2.visibility.hidden = true;
        cestinomuffa_2.visibility.hidden = false;
    } //else if (curr_score_2 > 3) {
    //cestino_2.visibility.hidden = true;
    //cestino1_2.visibility.hidden = true;
    //cestino2_2.visibility.hidden = true;
    //cestinopieno_2.visibility.hidden = true;
    //cestinomuffa_2.visibility.hidden = false;
    //}

    // Resetta il flag di lancio dopo un breve tempo per permettere nuovi lanci
    PP.timers.add_timer(s, 2000, () => {
        isThrowing = false;
        pomodori_raccolti--;
    }, false);
}


function update_hud2(s) {
    curr_score_2 = PP.game_state.get_variable("count_pomodori");
    PP.shapes.text_change(text_score_2, " " + curr_score_2);
}



