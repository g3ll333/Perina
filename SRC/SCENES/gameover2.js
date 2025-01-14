let sfondo1;
let img_sfondo1;
let yesbutton1;
let homebutton1;

function preload_2(s) {
    img_sfondo1 = PP.assets.image.load(s, "ASSETS/IMAGES/gamovermuffa.png");
    yesbutton1 = PP.assets.image.load(s, "ASSETS/IMAGES/playagain2.png");
    homebutton1 = PP.assets.image.load(s, "ASSETS/IMAGES/homebutton1.png");
}

function mouse_click_yes2(s) {
    PP.scenes.start("level2");
}

function mouse_click_home2(s) {
    location.href2 = 'indexwebapp.html';
}



function create_2(s) {
    sfondo1 = PP.assets.image.add(s, img_sfondo1, 0, 0, 0, 0);

    let buttonyes1 = PP.assets.image.add(s, yesbutton1, 640, 550, 0.5, 0.5);
    let home1 = PP.assets.image.add(s, homebutton1, 129.5, 639.7, 0.5, 0.5);

    PP.interactive.mouse.add(buttonyes1, "pointerdown", mouse_click_yes2);
    PP.interactive.mouse.add(home1, "pointerdown", mouse_click_home2);
    //da fare azione per pulsante no: far ritornare all'inizio della webapp
}

function update_2(s) {
    // Eventuali aggiornamenti per la scena gameover possono essere aggiunti qui
}

function destroy_2(s) {
    // Eventuali operazioni di pulizia per la scena gameover possono essere aggiunte qui
}

PP.scenes.add("gameover2", preload_2, create_2, update_2, destroy_2);