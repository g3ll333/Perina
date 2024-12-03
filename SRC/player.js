let ss_player;
let player;

let player_speed = 700; // velocità iniziale
let jump_init_speed = 400; // Velocità iniziale del salto
let floor_height = 575; // Altezza del terreno

let curr_anim = "stop";

function configure_player_animations(s) {
    PP.assets.sprite.animation_add_list(player, "walk", [0, 1, 2, 3, 4, 5, 6, 7], 8, -1);
    PP.assets.sprite.animation_add_list(player, "stop", [6, 6], 10, 0);
    PP.assets.sprite.animation_play(player, "stop");
}

function preload_player(s) {
    ss_player = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/sheetwalkperina.png", 151, 156);
}

function create_player(s) {
    player = PP.assets.sprite.add(s, ss_player, 150, floor_height, 0.5, 1);

    // Aggiungo il giocatore alla fisica
    PP.physics.add(s, player, PP.physics.type.DYNAMIC);

    // Configuro le animazioni del player
    configure_player_animations(s);
}

function update_player(s) {
    let next_anim = curr_anim;

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
        // Se è premuto il tasto destro...
        PP.physics.set_velocity_x(player, player_speed);
        next_anim = "walk";
    } else if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
        // Se è premuto il tasto sinistro...
        PP.physics.set_velocity_x(player, -player_speed);
        next_anim = "walk";
    } else {
        // Se non è premuto alcun tasto...
        PP.physics.set_velocity_x(player, 0);
        next_anim = "stop";
    }

    // Logica per specchiare il giocatore
    if (PP.physics.get_velocity_x(player) < 0) {
        player.geometry.flip_x = true;
    } else if (PP.physics.get_velocity_x(player) > 0) {
        player.geometry.flip_x = false;
    }

    if (player.geometry.y >= floor_height - 1 || player.is_on_platform) {
        // Se il giocatore è sul pavimento OPPURE su una piattaforma...
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
            // ... e preme il tasto spazio, allora salta
            PP.physics.set_velocity_y(player, -jump_init_speed);
        }
    }

    // Logica per le animazioni
    if (next_anim !== curr_anim) {
        PP.assets.sprite.animation_play(player, next_anim);
        curr_anim = next_anim;
    }
}
