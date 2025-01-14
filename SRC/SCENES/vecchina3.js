let sfondovecchina3;
let img_sfondovecchina3;
let playbuttonvecchina3;



function preloadvecchina3(s) {
    img_sfondovecchina3 = PP.assets.image.load(s, "ASSETS/IMAGES/vecchiettalarve.png");
    playbuttonvecchina3 = PP.assets.image.load(s, "ASSETS/IMAGES/okayvecchina.png");
}

function mouse_click_yesvecchina3(s) {

    console.log("Starting level 3");
    PP.scenes.start("level3");
    //console.log("Starting settings overlay");
    //PP.scenes.start_overlay("settings");
}

function createvecchina3(s) {
    sfondovecchina3 = PP.assets.image.add(s, img_sfondovecchina3, 0, 0, 0, 0);

    let buttonplayvecchina3 = PP.assets.image.add(s, playbuttonvecchina3, 860.2, 475.5, 0.5, 0.5);

    PP.interactive.mouse.add(buttonplayvecchina3, "pointerdown", mouse_click_yesvecchina3);
}

function updatevecchina3(s) {
    // Eventuali aggiornamenti per la scena vecchina1 possono essere aggiunti qui
}

function destroyvecchina3(s) {
    // Eventuali operazioni di pulizia per la scena vecchina1 possono essere aggiunte qui
}

PP.scenes.add("vecchina3", preloadvecchina3, createvecchina3, updatevecchina3, destroyvecchina3);
