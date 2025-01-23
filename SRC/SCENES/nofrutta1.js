let nf_sfondo;
let nf_img_sfondo;
let nf_yesbutton;
let nf_homebutton;

function nf_preload(s) {
    nf_img_sfondo = PP.assets.image.load(s, "ASSETS/IMAGES/nofrutta1.png");
    nf_yesbutton = PP.assets.image.load(s, "ASSETS/IMAGES/playagain.png");
    nf_homebutton = PP.assets.image.load(s, "ASSETS/IMAGES/home.png");
}

function nf_mouse_click_yes(s) {
    PP.scenes.start("parallax");
}

function nf_mouse_click_home(s) {
    location.href = 'indexwebapp.html';
}


function nf_create(s) {
    nf_sfondo = PP.assets.image.add(s, nf_img_sfondo, 0, 0, 0, 0);

    let nf_buttonyes = PP.assets.image.add(s, nf_yesbutton, 640, 560, 0.5, 0.5);
    let nf_home = PP.assets.image.add(s, nf_homebutton, 129.5, 639.7, 0.5, 0.5);

    PP.interactive.mouse.add(nf_buttonyes, "pointerdown", nf_mouse_click_yes);
    PP.interactive.mouse.add(nf_home, "pointerdown", nf_mouse_click_home);
    //da fare azione per pulsante no: far ritornare all'inizio della webapp
}

function nf_update(s) {
    // Eventuali aggiornamenti per la scena gameover possono essere aggiunti qui
}

function nf_destroy(s) {
    // Eventuali operazioni di pulizia per la scena gameover possono essere aggiunte qui
}

PP.scenes.add("nofrutta1", nf_preload, nf_create, nf_update, nf_destroy);