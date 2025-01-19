let ss_player2_v;
let player2_v;


function configure_player_animations2_v(s) {
    PP.assets.sprite.animation_add_list(player2_v, "idle_v", [50, 51, 52, 53], 4, -1);

    PP.assets.sprite.animation_play(player2_v, "idle_v");
}

function preload_player2_v(s) {
    ss_player2_v = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/sprite_colori_def.png", 150, 168);
}

function create_player2_v(s) {
    player2_v = PP.assets.sprite.add(s, ss_player2_v, 750, 2007, 0.5, 1);

    // Aggiungo il giocatore alla fisica
    PP.physics.add(s, player2_v, PP.physics.type.DYNAMIC);

    //Gestisco hitbox personaggio
    PP.physics.set_collision_rectangle(player2_v, 110, 168, 0, 0);

    // Configuro le animazioni del playerf
    configure_player_animations2_v(s);
}

function update_player2_v(s) {

}
