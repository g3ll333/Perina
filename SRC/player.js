let ss_player;
let player;

let player_speed = 700; // Velocità iniziale
let jump_init_speed = 400; // Velocità iniziale del salto
let floor_height = 575; // Altezza del terreno

let curr_anim = "stop";

function configure_player_animations(s) {
    PP.assets.sprite.animation_add_list(player, "walk", [0, 1, 2, 3, 4, 5, 6, 7], 8, -1);
    PP.assets.sprite.animation_add_list(player, "stop", [6, 6], 8, 0);
    PP.assets.sprite.animation_add_list(player, "jump_up", [8, 9, 10, 11, 12, 13, 14, 15], 8, 0);
    PP.assets.sprite.animation_add_list(player, "jump_down", [14, 15], 8, 0);
    PP.assets.sprite.animation_play(player, "stop");
}

function preload_player(s) {
    ss_player = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/CAMMINATASALTO3.png", 98, 162);
}

function create_player(s) {
    player = PP.assets.sprite.add(s, ss_player, 150, floor_height, 0.5, 1);

    // Aggiungo il giocatore alla fisica
    PP.physics.add(s, player, PP.physics.type.DYNAMIC);

    //Gestisco hitbox personaggio
    PP.physics.set_collision_rectangle(player, 90, 162, 0, 0);

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

    if (player.geometry.y >= floor_height - 1 || player.is_on_platform) {
        // Se mi trovo sul pavimento OPPURE su una piattaforma...
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
            // ... e premo il tasto spazio, allora salto
            PP.physics.set_velocity_y(player, -jump_init_speed);
        }
    }

    // Logica per specchiare il giocatore
    if (PP.physics.get_velocity_x(player) < 0) {
        player.geometry.flip_x = true;
    } else if (PP.physics.get_velocity_x(player) > 0) {
        player.geometry.flip_x = false;
    }

    // Le animazioni del salto vengono gestite in base alla velocità verticale
    if (PP.physics.get_velocity_y(player) < 0) {
        next_anim = "jump_up";
    } else if (PP.physics.get_velocity_y(player) > 0) {
        next_anim = "jump_down";
    }

    // Logica per le animazioni
    if (next_anim !== curr_anim) {
        PP.assets.sprite.animation_play(player, next_anim);
        curr_anim = next_anim;
    }

    // Resetto il flag is_on_platform dopo ogni aggiornamento
    player.is_on_platform = false;
}