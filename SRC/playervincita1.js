let ss_player_v;
let player_v;

let floor_height_v = 575; // Altezza del terreno





function configure_player_animations_v(s) {
    PP.assets.sprite.animation_add_list(player_v, "idle_v", [50, 51, 52, 53], 4, -1);

    PP.assets.sprite.animation_play(player_v, "idle_v");
}

function preload_player_v(s) {
    ss_player_v = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/sprite_colori_def.png", 150, 168);
}

function create_player_v(s) {
    player_v = PP.assets.sprite.add(s, ss_player_v, 3100, floor_height_v, 0.5, 1);

    // Aggiungo il giocatore alla fisica
    PP.physics.add(s, player_v, PP.physics.type.DYNAMIC);

    //Gestisco hitbox personaggio
    PP.physics.set_collision_rectangle(player_v, 110, 168, 0, 0);

    // Configuro le animazioni del playerf
    configure_player_animations_v(s);
}

function update_player_v(s) {

}
