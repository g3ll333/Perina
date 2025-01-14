let sfondovecchina2;
let img_sfondovecchina2;
let playbuttonvecchina2;



function preloadvecchina2(s) {
    img_sfondovecchina2 = PP.assets.image.load(s, "ASSETS/IMAGES/vecchiettamuffe.png");
    playbuttonvecchina2 = PP.assets.image.load(s, "ASSETS/IMAGES/okayvecchina.png");
}

function mouse_click_yesvecchina2(s) {

    console.log("Starting level 2");
    PP.scenes.start("level2");
    //console.log("Starting settings overlay");
    //PP.scenes.start_overlay("settings");
}

function createvecchina2(s) {
    sfondovecchina2 = PP.assets.image.add(s, img_sfondovecchina2, 0, 0, 0, 0);

    let buttonplayvecchina2 = PP.assets.image.add(s, playbuttonvecchina2, 860.2, 475.5, 0.5, 0.5);

    PP.interactive.mouse.add(buttonplayvecchina2, "pointerdown", mouse_click_yesvecchina2);
}

function updatevecchina2(s) {
    // Eventuali aggiornamenti per la scena vecchina1 possono essere aggiunti qui
}

function destroyvecchina2(s) {
    // Eventuali operazioni di pulizia per la scena vecchina1 possono essere aggiunte qui
}

PP.scenes.add("vecchina2", preloadvecchina2, createvecchina2, updatevecchina2, destroyvecchina2);
