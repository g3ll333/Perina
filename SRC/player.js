let img_player;
let player;
let player_speed = 5; // Ridotto da 10 a 5 per rallentare il movimento

function configure_player_animations(s) {
    // Qui puoi aggiungere configurazioni per le animazioni del giocatore se necessario
}

function preload_player(s) {
    img_player = PP.assets.image.load(s, "ASSETS/IMAGES/perinadefside.png", 223, 190);
}

function create_player(s) {
    player = PP.assets.image.add(s, img_player, 150, 570, 0.5, 1);

    //aggiungo giocatore a fisica
    PP.physics.add(s, player, PP.physics.type.DYNAMIC);
}

function update_player(s) {
    // Movimento verso destra
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
        PP.physics.set_velocity_x(player, player_speed);
        player.geometry.x += player_speed;
    }
    // Movimento verso sinistra
    else if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
        PP.physics.set_velocity_x(player, -player_speed);
        player.geometry.x -= player_speed;
    }

    else {
        PP.physics.set_velocity_x(player, 0);
    }

    // Logica per specchiare il giocatore:
    if (PP.physics.get_velocity_x(player) < 0) {
        player.geometry.flip_x = true;
    }
    else if (PP.physics.get_velocity_x(player) > 0) {
        player.geometry.flip_x = false;
    }

}

