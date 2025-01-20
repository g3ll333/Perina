let ss_player3_v;
let player3_v;


function configure_player_animations3_v(s) {
    PP.assets.sprite.animation_add_list(player3_v, "idle_v", [50, 51, 52, 53], 4, -1);

    PP.assets.sprite.animation_play(player3_v, "idle_v");
}

function preload_player3_v(s) {
    ss_player3_v = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/sprite_colori_def.png", 150, 168);
}

function create_player3_v(s) {
    player3_v = PP.assets.sprite.add(s, ss_player3_v, 3233, 315, 0.5, 1);

    // Aggiungo il giocatore alla fisica
    PP.physics.add(s, player3_v, PP.physics.type.DYNAMIC);

    //Gestisco hitbox personaggio
    PP.physics.set_collision_rectangle(player3_v, 110, 168, 0, 0);

    // Configuro le animazioni del playerf
    configure_player_animations3_v(s);
}

function update_player3_v(s) {

}
