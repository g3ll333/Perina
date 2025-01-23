let nf3_sfondo;
let nf3_img_sfondo;
let nf3_yesbutton;
let nf3_homebutton;

function nf3_preload(s) {
    nf3_img_sfondo = PP.assets.image.load(s, "ASSETS/IMAGES/nofrutta3.png");
    nf3_yesbutton = PP.assets.image.load(s, "ASSETS/IMAGES/playagain3.png");
    nf3_homebutton = PP.assets.image.load(s, "ASSETS/IMAGES/homebutton2.png");
}

function nf3_mouse_click_yes(s) {
    PP.scenes.start("vecchina3");
}

function nf3_mouse_click_home(s) {
    location.href = 'indexwebapp.html';
}


function nf3_create(s) {
    nf3_sfondo = PP.assets.image.add(s, nf3_img_sfondo, 0, 0, 0, 0);

    let nf3_buttonyes = PP.assets.image.add(s, nf3_yesbutton, 640, 560, 0.5, 0.5);
    let nf3_home = PP.assets.image.add(s, nf3_homebutton, 129.5, 639.7, 0.5, 0.5);

    PP.interactive.mouse.add(nf3_buttonyes, "pointerdown", nf3_mouse_click_yes);
    PP.interactive.mouse.add(nf3_home, "pointerdown", nf3_mouse_click_home);
    //da fare azione per pulsante no: far ritornare all'inizio della webapp
}

function nf3_update(s) {
    // Eventuali aggiornamenti per la scena gameover possono essere aggiunti qui
}

function nf3_destroy(s) {
    // Eventuali operazioni di pulizia per la scena gameover possono essere aggiunte qui
}

PP.scenes.add("nofrutta3", nf3_preload, nf3_create, nf3_update, nf3_destroy);