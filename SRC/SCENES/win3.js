let sfondo3;
let img_sfondo3;
let yesbutton3;
let homebutton3;

function preloadwin3(s) {
    img_sfondo3 = PP.assets.image.load(s, "ASSETS/IMAGES/vincitalarve.png");
    yesbutton3 = PP.assets.image.load(s, "ASSETS/IMAGES/andnow.png");
    homebutton3 = PP.assets.image.load(s, "ASSETS/IMAGES/homevincita3.png");
}

function mouse_click_yes3(s) {
    PP.scenes.start("tavolafinale");
}

function mouse_click_home3(s) {
    location.href = 'indexwebapp.html';
}


function createwin3(s) {
    sfondo3 = PP.assets.image.add(s, img_sfondo3, 0, 0, 0, 0);

    let buttonyes3 = PP.assets.image.add(s, yesbutton3, 624, 450, 0.5, 0.5);
    let home3 = PP.assets.image.add(s, homebutton3, 105, 89.2, 0.5, 0.5);

    PP.interactive.mouse.add(buttonyes3, "pointerdown", mouse_click_yes3);
    PP.interactive.mouse.add(home3, "pointerdown", mouse_click_home3);
    //da fare azione per pulsante no: far ritornare all'inizio della webapp
}

function updatewin3(s) {
    // Eventuali aggiornamenti per la scena gameover possono essere aggiunti qui
}

function destroywin3(s) {
    // Eventuali operazioni di pulizia per la scena gameover possono essere aggiunte qui
}

PP.scenes.add("win3", preloadwin3, createwin3, updatewin3, destroywin3);
