let nf2_sfondo;
let nf2_img_sfondo;
let nf2_yesbutton;
let nf2_homebutton;

function nf2_preload(s) {
    nf2_img_sfondo = PP.assets.image.load(s, "ASSETS/IMAGES/nofrutta2.png");
    nf2_yesbutton = PP.assets.image.load(s, "ASSETS/IMAGES/playagain2.png");
    nf2_homebutton = PP.assets.image.load(s, "ASSETS/IMAGES/homebutton1.png");
}

function nf2_mouse_click_yes(s) {
    PP.scenes.start("level2");
}

function nf2_mouse_click_home(s) {
    location.href = 'indexwebapp.html';
}


function nf2_create(s) {
    nf2_sfondo = PP.assets.image.add(s, nf2_img_sfondo, 0, 0, 0, 0);

    let nf2_buttonyes = PP.assets.image.add(s, nf2_yesbutton, 640, 550, 0.5, 0.5);
    let nf2_home = PP.assets.image.add(s, nf2_homebutton, 129.5, 639.7, 0.5, 0.5);

    PP.interactive.mouse.add(nf2_buttonyes, "pointerdown", nf2_mouse_click_yes);
    PP.interactive.mouse.add(nf2_home, "pointerdown", nf2_mouse_click_home);
    //da fare azione per pulsante no: far ritornare all'inizio della webapp
}

function nf2_update(s) {
    // Eventuali aggiornamenti per la scena gameover possono essere aggiunti qui
}

function nf2_destroy(s) {
    // Eventuali operazioni di pulizia per la scena gameover possono essere aggiunte qui
}

PP.scenes.add("nofrutta2", nf2_preload, nf2_create, nf2_update, nf2_destroy);