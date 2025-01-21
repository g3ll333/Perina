let ss_strega2_v;
let strega2_v;


function configure_strega2_animations_v(s) {
    PP.assets.sprite.animation_add_list(strega2_v, "death2", [6, 7, 8, 4, 5, 9, 10, 11, 12, 13, 14, 15, 15, 15], 8, 0);
    PP.assets.sprite.animation_add_list(strega2_v, "stop", [0, 0], 2, 1);
    PP.assets.sprite.animation_add_list(strega2_v, "idle", [0, 1, 2, 3], 4, -1);

}

function preload_strega2_v(s) {
    ss_strega2_v = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/Stregamuffe.png", 164.75, 190);
}

function create_strega2_v(s) {
    strega2_v = PP.assets.sprite.add(s, ss_strega2_v, 1300, 2007, 0.5, 1);

    // Aggiungo il giocatore alla fisica
    PP.physics.add(s, strega2_v, PP.physics.type.DYNAMIC);


    // Configuro animazioni strega
    configure_strega2_animations_v(s);
    PP.assets.sprite.animation_play(strega2_v, "idle");
    PP.timers.add_timer(s, 2000, morte_strega2, false);

}

function create_strega2_idle_v(s) {
    strega2_v = PP.assets.sprite.add(s, ss_strega2_v, 1300, 2007, 0.5, 1);

    // Aggiungo il giocatore alla fisica
    PP.physics.add(s, strega2_v, PP.physics.type.DYNAMIC);


    // Configuro le animazioni del playerf
    configure_strega2_animations_v(s);
    PP.assets.sprite.animation_play(strega2_v, "idle");

}

function morte_strega2(s) {
    PP.assets.sprite.animation_play(strega2_v, "death2");

    PP.timers.add_timer(s, 3000, vittoria2, false);
}

function vittoria2(s) {
    console.log("win2");
    PP.scenes.start("win2");
}

function update_strega2_v(s) {



}
