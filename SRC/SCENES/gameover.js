let sfondo;
let img_sfondo;
let yesbutton;

function preload(s) {
    img_sfondo = PP.assets.image.load(s, "ASSETS/IMAGES/Gameover.jpg");
    yesbutton = PP.assets.image.load(s, "ASSETS/IMAGES/yesbutton.png");
}

function mouse_click_yes(s) {
    PP.scenes.start("parallax");
}

/* function mouse_click_no(s) {
    PP.scenes.start("webapp");
}
 */


function create(s) {
    sfondo = PP.assets.image.add(s, img_sfondo, 0, 0, 0, 0);

    let buttonyes = PP.assets.image.add(s, yesbutton, 541, 388, 0.5, 0.5);
    let button_no = PP.assets.image.add(s, yesbutton, 722, 388, 0.5, 0.5);

    PP.interactive.mouse.add(buttonyes, "pointerdown", mouse_click_yes);
    //PP.interactive.mouse.add(button_no, "pointerdown", mouse_click_no);
    //da fare azione per pulsante no: far ritornare all'inizio della webapp
}

function update(s) {
    // Eventuali aggiornamenti per la scena gameover possono essere aggiunti qui
}

function destroy(s) {
    // Eventuali operazioni di pulizia per la scena gameover possono essere aggiunte qui
}

PP.scenes.add("gameover", preload, create, update, destroy);
