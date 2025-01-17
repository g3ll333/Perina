let sfondo;
let img_sfondo;
let playbutton;



function preload(s) {
    img_sfondo = PP.assets.image.load(s, "ASSETS/IMAGES/vecchiettafunghi.png");
    playbutton = PP.assets.image.load(s, "ASSETS/IMAGES/okayvecchina.png");
}

function mouse_click_yes(s) {

    console.log("Starting tutorial scene");
    PP.scenes.start("tutorial");
    //console.log("Starting settings overlay");
    //PP.scenes.start_overlay("settings");
}

function create(s) {
    sfondo = PP.assets.image.add(s, img_sfondo, 0, 0, 0, 0);

    let buttonplay = PP.assets.image.add(s, playbutton, 860.2, 475.5, 0.5, 0.5);

    PP.interactive.mouse.add(buttonplay, "pointerdown", mouse_click_yes);
}

function update(s) {
    // Eventuali aggiornamenti per la scena vecchina1 possono essere aggiunti qui
}

function destroy(s) {
    // Eventuali operazioni di pulizia per la scena vecchina1 possono essere aggiunte qui
}

PP.scenes.add("vecchina1", preload, create, update, destroy);
