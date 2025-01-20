let sfondo_t;
let img_sfondo_t;
let homebutton_t;

function preloadt(s) {
    img_sfondo_t = PP.assets.image.load(s, "ASSETS/IMAGES/fatinalibera.PNG");
    homebutton_t = PP.assets.image.load(s, "ASSETS/IMAGES/home.png");
}

function mouse_click_home_t(s) {
    location.href = 'indexwebapp.html';
}

function createt(s) {
    console.log("tavola finale creata!");
    sfondo_t = PP.assets.image.add(s, img_sfondo_t, 0, 0, 0, 0);

    let home_t = PP.assets.image.add(s, homebutton_t, 129.5, 639.7, 0.5, 0.5);

    PP.interactive.mouse.add(home_t, "pointerdown", mouse_click_home_t);
}

function updatet(s) {
    // Eventuali aggiornamenti per la scena gameover possono essere aggiunti qui
}

function destroyt(s) {
    // Eventuali operazioni di pulizia per la scena gameover possono essere aggiunte qui
}

PP.scenes.add("tavolafinale", preloadt, createt, updatet, destroyt);

