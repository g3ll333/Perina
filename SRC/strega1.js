let ss_strega1_v;
let strega1_v;

let floor_height_v_strega = 575; // Altezza del terreno


function configure_strega1_animations_v(s) {
    PP.assets.sprite.animation_add_list(strega1_v, "death1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 14], 15, 0);
    PP.assets.sprite.animation_add_list(strega1_v, "stop", [0, 0], 2, 1);
    PP.assets.sprite.animation_add_list(strega1_v, "idle", [0, 1, 2, 3, 4, 5], 4, -1);

}

function preload_strega1_v(s) {
    ss_strega1_v = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/Stregafunghi.png", 258.3, 300);
}

function create_strega1_v(s) {
    strega1_v = PP.assets.sprite.add(s, ss_strega1_v, 3700, floor_height_v_strega, 0.5, 1);

    // Aggiungo il giocatore alla fisica
    PP.physics.add(s, strega1_v, PP.physics.type.DYNAMIC);


    // Configuro le animazioni del playerf
    configure_strega1_animations_v(s);
    PP.assets.sprite.animation_play(strega1_v, "stop");
    PP.timers.add_timer(s, 600, morte_strega1, false);

}

function create_strega1_idle_v(s) {
    strega1_v = PP.assets.sprite.add(s, ss_strega1_v, 3700, floor_height_v_strega, 0.5, 1);

    // Aggiungo il giocatore alla fisica
    PP.physics.add(s, strega1_v, PP.physics.type.DYNAMIC);


    // Configuro le animazioni del playerf
    configure_strega1_animations_v(s);
    PP.assets.sprite.animation_play(strega1_v, "idle");

}

function morte_strega1(s) {
    PP.assets.sprite.animation_play(strega1_v, "death1");

    PP.timers.add_timer(s, 3000, vittoria1, false);
}

function vittoria1(s) {
    PP.scenes.start("win");
}

function update_strega1_v(s) {



}
