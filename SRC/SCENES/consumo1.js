let sfondo_c;
let img_sfondo_c;
let playbutton_c;



function preload_c(s) {
    img_sfondo_c = PP.assets.image.load(s, "ASSETS/IMAGES/vecchiettamuffe1.png");
    playbutton_c = PP.assets.image.load(s, "ASSETS/IMAGES/okayvecchina2.png");
}

function mouse_click_yes_c(s) {

    console.log("Starting scene 2");
    PP.scenes.start("vecchina2");
    //console.log("Starting settings overlay");
    //PP.scenes.start_overlay("settings");
}

function create_c(s) {
    sfondo_c = PP.assets.image.add(s, img_sfondo_c, 0, 0, 0, 0);

    let buttonplay_c = PP.assets.image.add(s, playbutton_c, 882, 456, 0.5, 0.5);

    PP.interactive.mouse.add(buttonplay_c, "pointerdown", mouse_click_yes_c);
}

function update_c(s) {
    // Eventuali aggiornamenti per la scena vecchina1 possono essere aggiunti qui
}

function destroy_c(s) {
    // Eventuali operazioni di pulizia per la scena vecchina1 possono essere aggiunte qui
}

PP.scenes.add("consumo1", preload_c, create_c, update_c, destroy_c);
