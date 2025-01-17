let ss_player;
let player;

let floor_height = 575; // Altezza del terreno

let world_left_limit = 0;
let world_right_limit = 3600;



function configure_player_animations(s) {
    PP.assets.sprite.animation_add_list(player, "idle", [50, 51, 52, 53], 4, -1);

    PP.assets.sprite.animation_play(player, "idle");
}

function preload_player(s) {
    ss_player = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/sprite_colori_def.png", 150, 168);

}

function create_player(s) {
    player = PP.assets.sprite.add(s, ss_player, 150, floor_height, 0.5, 1);

    // Aggiungo il giocatore alla fisica
    PP.physics.add(s, player, PP.physics.type.DYNAMIC);

    //Gestisco hitbox personaggio
    PP.physics.set_collision_rectangle(player, 110, 168, 0, 0);

    // Configuro le animazioni del playerf
    configure_player_animations(s);
}

function update_player(s) {

}
