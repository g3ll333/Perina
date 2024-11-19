let img_player;
let player;

function configure_player_animations(s) {
    // Qui puoi aggiungere configurazioni per le animazioni del giocatore se necessario
}

function preload_player(s) {
    img_player = PP.assets.image.load(s, "ASSETS/IMAGES/perinadefside.png", 223, 190);
}

function create_player(s) {
    player = PP.assets.image.add(s, img_player, 150, 620, 0.5, 1);
}

function update_player(s) {
    // Movimento verso destra
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
        player.geometry.x += 10; // Muove il personaggio verso destra di 10 pixel
    }
    // Movimento verso sinistra
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
        player.geometry.x -= 10; // Muove il personaggio verso sinistra di 10 pixel
    }
}

// Assicurati di chiamare queste funzioni nei punti appropriati del tuo gioco:
PP.scenes.add("sceneX", preload_player, create_player, update_player, configure_player_animations);
