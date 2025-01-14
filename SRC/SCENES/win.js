let sfondo;
let img_sfondo;
let yesbutton;
let homebutton;

function preload(s) {
    img_sfondo = PP.assets.image.load(s, "ASSETS/IMAGES/vincitafunghi.png");
    yesbutton = PP.assets.image.load(s, "ASSETS/IMAGES/nextlevelvittoriafunghi.png");
    homebutton = PP.assets.image.load(s, "ASSETS/IMAGES/homevincita.png");
}

function mouse_click_yes(s) {
    PP.scenes.start("vecchina2");
}

function mouse_click_home(s) {
    location.href = 'indexwebapp.html';
}


function create(s) {
    sfondo = PP.assets.image.add(s, img_sfondo, 0, 0, 0, 0);

    let buttonyes = PP.assets.image.add(s, yesbutton, 624, 450, 0.5, 0.5);
    let home = PP.assets.image.add(s, homebutton, 105, 89.2, 0.5, 0.5);

    PP.interactive.mouse.add(buttonyes, "pointerdown", mouse_click_yes);
    PP.interactive.mouse.add(home, "pointerdown", mouse_click_home);
    //da fare azione per pulsante no: far ritornare all'inizio della webapp
}

function update(s) {
    // Eventuali aggiornamenti per la scena gameover possono essere aggiunti qui
}

function destroy(s) {
    // Eventuali operazioni di pulizia per la scena gameover possono essere aggiunte qui
}

PP.scenes.add("win", preload, create, update, destroy);
