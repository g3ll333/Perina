let img_vita_3;
let vita1_3;
let vita2_3;
let vita3_3;
let vita4_3;
let vita5_3;
let bottonemenu_3;

let cestino_3;
let cestino1_3;
let cestino2_3;
//let cestino3_3;
//let cestinopieno_3;
let cestinomuffa_3;
let img_cestino_vuoto_3;
let img_cestino_1zucca;
let img_cestino_2zucche;
//let img_cestino_3zucche;
//let img_cestino_pieno_3;
let img_cestino_muffa_3;
let img_bottonemenu_3;

let text_menu_3;
let text_score_3;
let prev_score_3;
let curr_score_3;

let isThrowing_3 = false;

let zucche_lanciate = 0;

function preload_hud3(s) {
    img_cestino_vuoto_3 = PP.assets.image.load(s, "ASSETS/IMAGES/cestinovuoto.png");
    img_cestino_1zucca = PP.assets.image.load(s, "ASSETS/IMAGES/cestinozucc1.png");
    img_cestino_2zucche = PP.assets.image.load(s, "ASSETS/IMAGES/cestinozucc2.png");
    //img_cestino_3zucche = PP.assets.image.load(s, "ASSETS/IMAGES/cestinozucc3.png");
    //img_cestino_pieno_3 = PP.assets.image.load(s, "ASSETS/IMAGES/cestinozucc4.png");
    img_cestino_muffa_3 = PP.assets.image.load(s, "ASSETS/IMAGES/cestinomuffa.png");

    img_bottonemenu_3 = PP.assets.image.load(s, "ASSETS/IMAGES/bottonemenu.png");

    img_vita_3 = PP.assets.image.load(s, "ASSETS/IMAGES/vitaperina.png");
}

function create_hud3(s) {
    vita1_3 = PP.assets.image.add(s, img_vita_3, 150, 40, 0.5, 0.5);
    vita2_3 = PP.assets.image.add(s, img_vita_3, 200, 40, 0.5, 0.5);
    vita3_3 = PP.assets.image.add(s, img_vita_3, 250, 40, 0.5, 0.5);
    vita4_3 = PP.assets.image.add(s, img_vita_3, 300, 40, 0.5, 0.5);
    vita5_3 = PP.assets.image.add(s, img_vita_3, 350, 40, 0.5, 0.5);

    cestino_3 = PP.assets.image.add(s, img_cestino_vuoto_3, 75, 40, 0.5, 0.5);
    cestino1_3 = PP.assets.image.add(s, img_cestino_1zucca, 75, 40, 0.5, 0.5);
    cestino2_3 = PP.assets.image.add(s, img_cestino_2zucche, 75, 40, 0.5, 0.5);
    //cestino3_3 = PP.assets.image.add(s, img_cestino_3zucche, 75, 40, 0.5, 0.5);
    //cestinopieno_3 = PP.assets.image.add(s, img_cestino_pieno_3, 75, 40, 0.5, 0.5);
    cestinomuffa_3 = PP.assets.image.add(s, img_cestino_muffa_3, 75, 40, 0.5, 0.5);

    cestino1_3.visibility.hidden = true;
    cestino2_3.visibility.hidden = true;
    //cestino3_3.visibility.hidden = true;
    //cestinopieno_3.visibility.hidden = true;
    cestinomuffa_3.visibility.hidden = true;

    bottonemenu_3 = PP.assets.image.add(s, img_bottonemenu_3, 1205, 43, 0.5, 0.5);

    text_score_3 = PP.shapes.text_styled_add(s, 10, 20, "0", 40, "Fatfrank", "normal", "0xb86127", null, 0, 0);
    text_menu_3 = PP.shapes.text_styled_add(s, 1188, 73, "Esc", 20, "Fatfrank", "normal", "0xb86127", null, 0, 0);

    //non faccio muovere cestini e vite
    text_score_3.tile_geometry.scroll_factor_x = 0;
    text_score_3.tile_geometry.scroll_factor_y = 0;

    text_menu_3.tile_geometry.scroll_factor_x = 0;
    text_menu_3.tile_geometry.scroll_factor_y = 0;

    cestino_3.tile_geometry.scroll_factor_x = 0;
    cestino_3.tile_geometry.scroll_factor_y = 0;

    cestino1_3.tile_geometry.scroll_factor_x = 0;
    cestino1_3.tile_geometry.scroll_factor_y = 0;

    cestino2_3.tile_geometry.scroll_factor_x = 0;
    cestino2_3.tile_geometry.scroll_factor_y = 0;

    //cestino3_3.tile_geometry.scroll_factor_x = 0;
    //cestino3_3.tile_geometry.scroll_factor_y = 0;

    //cestinopieno_3.tile_geometry.scroll_factor_x = 0;
    //cestinopieno_3.tile_geometry.scroll_factor_y = 0;

    cestinomuffa_3.tile_geometry.scroll_factor_x = 0;
    cestinomuffa_3.tile_geometry.scroll_factor_y = 0;

    vita1_3.tile_geometry.scroll_factor_x = 0;
    vita1_3.tile_geometry.scroll_factor_y = 0;

    vita2_3.tile_geometry.scroll_factor_x = 0;
    vita2_3.tile_geometry.scroll_factor_y = 0;

    vita3_3.tile_geometry.scroll_factor_x = 0;
    vita3_3.tile_geometry.scroll_factor_y = 0;

    vita4_3.tile_geometry.scroll_factor_x = 0;
    vita4_3.tile_geometry.scroll_factor_y = 0;

    vita5_3.tile_geometry.scroll_factor_x = 0;
    vita5_3.tile_geometry.scroll_factor_y = 0;

    bottonemenu_3.tile_geometry.scroll_factor_x = 0;
    bottonemenu_3.tile_geometry.scroll_factor_y = 0;

    PP.game_state.set_variable("count_zucche", 0);
}


function change_cestino3(s) {
    // cambio l'immagine del cestino in base al numero di pere raccolte 
    //incremento il numero pere
    prev_score_3 = PP.game_state.get_variable("count_zucche", 0);
    PP.game_state.set_variable("count_zucche", prev_score_3 + 1);

    zucche_raccolte = PP.game_state.get_variable("count_zucche", 0); // Aggiungi questa riga

    if (zucche_raccolte === 1) {
        cestino_3.visibility.hidden = true;
        cestino1_3.visibility.hidden = false;
        cestino2_3.visibility.hidden = true;
        //cestino3_3.visibility.hidden = true;
        //cestinopieno_3.visibility.hidden = true;
        cestinomuffa_3.visibility.hidden = true;
    } else if (zucche_raccolte === 2) {
        cestino_3.visibility.hidden = true;
        cestino1_3.visibility.hidden = true;
        cestino2_3.visibility.hidden = false;
        //cestino3_3.visibility.hidden = true;
        //cestinopieno_3.visibility.hidden = true;
        cestinomuffa_3.visibility.hidden = true;
    } else if (zucche_raccolte > 2) {
        cestino_3.visibility.hidden = true;
        cestino1_3.visibility.hidden = true;
        cestino2_3.visibility.hidden = true;
        //cestino3_3.visibility.hidden = false;
        //cestinopieno_3.visibility.hidden = true;
        cestinomuffa_3.visibility.hidden = false;
    } /* else if (zucche_raccolte > 3) {
        cestino_3.visibility.hidden = true;
        cestino1_3.visibility.hidden = true;
        cestino2_3.visibility.hidden = true;
        //cestino3_3.visibility.hidden = true;
        //cestinopieno_3.visibility.hidden = false;
        cestinomuffa_3.visibility.hidden = false; 
    }  else if (zucche_raccolte > 4) {
        cestino_3.visibility.hidden = true;
        cestino1_3.visibility.hidden = true;
        cestino2_3.visibility.hidden = true;
        cestino3_3.visibility.hidden = true;
        cestinopieno_3.visibility.hidden = true;
        cestinomuffa_3.visibility.hidden = false;
    }*/
}


function svuota_cestino3(s) {
    if (isThrowing_3) return; // Evita esecuzioni multiple
    isThrowing_3 = true;

    // Controlla se c'è almeno una pera da lanciare
    if (curr_score_3 > 0) {
        // Decrementa il numero di pere
        curr_score_3--;
        prev_score_3 = PP.game_state.get_variable("count_zucche", 0);
        PP.game_state.set_variable("count_zucche", prev_score_3 - 1);
    }

    if (curr_score_3 === 0) {
        cestino_3.visibility.hidden = false;
        cestino1_3.visibility.hidden = true;
        cestino2_3.visibility.hidden = true;
        //cestinopieno_3.visibility.hidden = true;
        cestinomuffa_3.visibility.hidden = true;
    } else if (curr_score_3 === 1) {
        cestino_3.visibility.hidden = true;
        cestino1_3.visibility.hidden = false;
        cestino2_3.visibility.hidden = true;
        //cestinopieno_3.visibility.hidden = true;
        cestinomuffa_3.visibility.hidden = true;
    } else if (curr_score_3 === 2) {
        cestino_3.visibility.hidden = true;
        cestino1_3.visibility.hidden = true;
        cestino2_3.visibility.hidden = false;
        //cestinopieno_3.visibility.hidden = true;
        cestinomuffa_3.visibility.hidden = true;
    } else if (curr_score_3 > 2) {
        cestino_3.visibility.hidden = true;
        cestino1_3.visibility.hidden = true;
        cestino2_3.visibility.hidden = true;
        //cestinopieno_3.visibility.hidden = false;
        cestinomuffa_3.visibility.hidden = false;
        /* } else if (curr_score_3 > 3) {
            cestino_3.visibility.hidden = true;
            cestino1_3.visibility.hidden = true;
            cestino2_3.visibility.hidden = true;
            cestinopieno_3.visibility.hidden = true;
            cestinomuffa_3.visibility.hidden = false;*/
    }

    // Resetta il flag di lancio dopo un breve tempo per permettere nuovi lanci
    PP.timers.add_timer(s, 2000, () => {
        isThrowing_3 = false;
        zucche_raccolte--;
        zucche_lanciate++;
        console.log("zucche lanciate: ", zucche_lanciate);
    }, false);
}

function update_hud3(s) {
    curr_score_3 = PP.game_state.get_variable("count_zucche");
    PP.shapes.text_change(text_score_3, " " + curr_score_3);

    if (zucche_lanciate === 4 && contatore_morti2 != 2) {
        PP.timers.add_timer(s, 3000, () => {
            PP.scenes.start("nofrutta3");
        }, false);
    }
}