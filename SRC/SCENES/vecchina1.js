let sfondo;
let img_sfondo;
let playbutton;

function preload(s) {
    img_sfondo = PP.assets.image.load(s, "ASSETS/IMAGES/vecchiettafunghi.jpg");
    playbutton = PP.assets.image.load(s, "ASSETS/IMAGES/yesbutton.png");
}

function mouse_click_yes(s) {
    PP.scenes.start("parallax");
}

function create(s) {
    sfondo = PP.assets.image.add(s, img_sfondo, 0, 0, 0, 0);

    let buttonplay = PP.assets.image.add(s, playbutton, 870, 500, 0.5, 0.5);

    PP.interactive.mouse.add(buttonplay, "pointerdown", mouse_click_yes); // Cambiato da buttonyes a buttonplay
    //PP.interactive.mouse.add(button_no, "pointerdown", mouse_click_no);
    //da fare azione per pulsante no: far ritornare all'inizio della webapp
}

function update(s) {
    // Eventuali aggiornamenti per la scena gameover possono essere aggiunti qui
}

function destroy(s) {
    // Eventuali operazioni di pulizia per la scena gameover possono essere aggiunte qui
}

PP.scenes.add("vecchina1", preload, create, update, destroy);
