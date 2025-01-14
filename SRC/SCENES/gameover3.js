let sfondo3;
let img_sfondo3;
let yesbutton3;
let homebutton3;

function preload_3(s) {
    img_sfondo3 = PP.assets.image.load(s, "ASSETS/IMAGES/gameoverlarve.png");
    yesbutton3 = PP.assets.image.load(s, "ASSETS/IMAGES/playagain3.png");
    homebutton3 = PP.assets.image.load(s, "ASSETS/IMAGES/homebutton2.png");
}

function mouse_click_yes3(s) {
    PP.scenes.start("level3");
}

function mouse_click_home3(s) {
    location.href3 = 'indexwebapp.html';
}


function create_3(s) {
    sfondo3 = PP.assets.image.add(s, img_sfondo3, 0, 0, 0, 0);

    let buttonyes3 = PP.assets.image.add(s, yesbutton3, 640, 550, 0.5, 0.5);
    let home3 = PP.assets.image.add(s, homebutton3, 129.5, 639.7, 0.5, 0.5);

    PP.interactive.mouse.add(buttonyes3, "pointerdown", mouse_click_yes3);
    PP.interactive.mouse.add(home3, "pointerdown", mouse_click_home3);
    //da fare azione per pulsante no: far ritornare all'inizio della webapp
}

function update_3(s) {
    // Eventuali aggiornamenti per la scena gameover possono essere aggiunti qui
}

function destroy_3(s) {
    // Eventuali operazioni di pulizia per la scena gameover possono essere aggiunte qui
}

PP.scenes.add("gameover3", preload_3, create_3, update_3, destroy_3);