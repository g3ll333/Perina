let sfondo2_c;
let img_sfondo2_c;
let playbutton2_c;



function preload2_c(s) {
    img_sfondo2_c = PP.assets.image.load(s, "ASSETS/IMAGES/vecchiettalarve1.png");
    playbutton2_c = PP.assets.image.load(s, "ASSETS/IMAGES/okayvecchina3.png");
}

function mouse_click_yes2_c(s) {

    console.log("Starting scene 3");
    PP.scenes.start("vecchina3");
    //console.log("Starting settings overlay");
    //PP.scenes.start_overlay("settings");
}

function create2_c(s) {
    sfondo2_c = PP.assets.image.add(s, img_sfondo2_c, 0, 0, 0, 0);

    let buttonplay2_c = PP.assets.image.add(s, playbutton2_c, 880.73, 466.8, 0.5, 0.5);

    PP.interactive.mouse.add(buttonplay2_c, "pointerdown", mouse_click_yes2_c);
}

function update2_c(s) {
    // Eventuali aggiornamenti per la scena vecchina1 possono essere aggiunti qui
}

function destroy2_c(s) {
    // Eventuali operazioni di pulizia per la scena vecchina1 possono essere aggiunte qui
}

PP.scenes.add("consumo2", preload2_c, create2_c, update2_c, destroy2_c);
