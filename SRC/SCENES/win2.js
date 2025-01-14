let sfondo2;
let img_sfondo2;
let yesbutton2;
let homebutton2;

function preloadwin2(s) {
    img_sfondo2 = PP.assets.image.load(s, "ASSETS/IMAGES/vincitamuffe.png");
    yesbutton2 = PP.assets.image.load(s, "ASSETS/IMAGES/nextlevelvittoriamuffe.png");
    homebutton2 = PP.assets.image.load(s, "ASSETS/IMAGES/homevincita2.png");
}

function mouse_click_yes2(s) {
    PP.scenes.start("vecchina3");
}

function mouse_click_home2(s) {
    location.href = 'indexwebapp.html';
}


function createwin2(s) {
    sfondo2 = PP.assets.image.add(s, img_sfondo2, 0, 0, 0, 0);

    let buttonyes2 = PP.assets.image.add(s, yesbutton2, 624, 450, 0.5, 0.5);
    let home2 = PP.assets.image.add(s, homebutton2, 105, 89.2, 0.5, 0.5);

    PP.interactive.mouse.add(buttonyes2, "pointerdown", mouse_click_yes2);
    PP.interactive.mouse.add(home2, "pointerdown", mouse_click_home2);
    //da fare azione per pulsante no: far ritornare all'inizio della webapp
}

function updatewin2(s) {
    // Eventuali aggiornamenti per la scena gameover possono essere aggiunti qui
}

function destroywin2(s) {
    // Eventuali operazioni di pulizia per la scena gameover possono essere aggiunte qui
}

PP.scenes.add("win2", preloadwin2, createwin2, updatewin2, destroywin2);
