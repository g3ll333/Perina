let ss_strega3_v;
let strega3_v;


function configure_strega3_animations_v(s) {
    PP.assets.sprite.animation_add_list(strega3_v, "death3", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 15, 15], 8, 0);
    PP.assets.sprite.animation_add_list(strega3_v, "stop", [0, 0], 2, 1);
    PP.assets.sprite.animation_add_list(strega3_v, "idle", [0, 1, 2, 3], 4, -1);

}

function preload_strega3_v(s) {
    ss_strega3_v = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/Stregalarve.png", 146.47, 180);
}

function create_strega3_v(s) {
    strega3_v = PP.assets.sprite.add(s, ss_strega3_v, 3640, 250, 0.5, 1);

    // Aggiungo il giocatore alla fisica
    PP.physics.add(s, strega3_v, PP.physics.type.DYNAMIC);


    // Configuro animazioni strega
    configure_strega3_animations_v(s);
    PP.assets.sprite.animation_play(strega3_v, "idle");
    PP.timers.add_timer(s, 2000, morte_strega3, false);

}

function create_strega3_idle_v(s) {
    strega3_v = PP.assets.sprite.add(s, ss_strega3_v, 3600, 250, 0.5, 1);

    // Aggiungo il giocatore alla fisica
    PP.physics.add(s, strega3_v, PP.physics.type.DYNAMIC);


    // Configuro le animazioni del playerf
    configure_strega3_animations_v(s);
    PP.assets.sprite.animation_play(strega3_v, "idle");

}

function morte_strega3(s) {
    console.log("sono dentro a morte strega. zucche raccolte: ", zucche_raccolte);
    PP.assets.sprite.animation_play(strega3_v, "death3");

    if (zucche_raccolte > 0) {
        PP.timers.add_timer(s, 3000, consumocattivo3, false);
    } else if (zucche_raccolte === 0) {
        PP.timers.add_timer(s, 3000, vittoria3, false);
    }
}

function consumocattivo3(s) {
    location.href = 'fatinaimprigionata.html';
}

function vittoria3(s) {
    console.log("win3");
    PP.scenes.start("win3");
}

function update_strega3_v(s) {



}
