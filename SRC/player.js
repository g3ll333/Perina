let img_player;
let platform;
let player;

let player_speed = 5; //velocità iniziale
let jump_init_speed = -15; // Velocità iniziale del salto
let floor_height = 570; // Altezza del terreno

let is_jumping = false; // Stato del salto
let gravity = 1; // Forza di gravità

function configure_player_animations(s) {
    // Qui puoi aggiungere configurazioni per le animazioni del giocatore se necessario
}

function preload_player(s) {
    img_player = PP.assets.image.load(s, "ASSETS/IMAGES/perinadefside.png", 223, 190);
}

function create_player(s) {
    player = PP.assets.image.add(s, img_player, 150, floor_height, 0.5, 1);

    // Aggiungo il giocatore alla fisica
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
    } else {
        PP.physics.set_velocity_x(player, 0);
    }

    // Logica per specchiare il giocatore
    if (PP.physics.get_velocity_x(player) < 0) {
        player.geometry.flip_x = true;
    } else if (PP.physics.get_velocity_x(player) > 0) {
        player.geometry.flip_x = false;
    }

    if (player.geometry.y >= floor_height - 1 || player.is_on_platform) {
        // Se mi trovo sul pavimento OPPURE su una piattaforma...

        if (PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
            // ... e premo il tasto spazio, allo salto
            PP.physics.set_velocity_y(player, -jump_init_speed);
        }

        // Non gestisco qui le animazioni del salto, ma piu' avanti
    }

    player.is_on_platform = false;  // Resetto il flag che viene messo a true quando il giocatore 
    // si trova sulla piattaforma



    // Logica per il salto
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE) && !is_jumping) {
        is_jumping = true;
        console.log("sto saltando");
        player.velocity_y = jump_init_speed;
    }

    if (is_jumping) {
        player.velocity_y += gravity;
        player.geometry.y += player.velocity_y;

        // Gestione della collisione con la piattaforma
        if (platform && player.geometry.y + player.geometry.height / 2 >= platform.geometry.y - platform.geometry.height / 2 &&
            player.geometry.y - player.geometry.height / 2 <= platform.geometry.y + platform.geometry.height / 2 &&
            player.geometry.x + player.geometry.width / 2 >= platform.geometry.x - platform.geometry.width / 2 &&
            player.geometry.x - player.geometry.width / 2 <= platform.geometry.x + platform.geometry.width / 2)

            // Il giocatore è sulla piattaforma
            player.geometry.y = platform.geometry.y - platform.geometry.height / 2 - player.geometry.height / 2;
        is_jumping = false;
        player.velocity_y = 0;
        // Fermare il salto quando si raggiunge il terreno
        if (player.geometry.y >= floor_height) {
            player.geometry.y = floor_height;
            is_jumping = false;
            player.velocity_y = 0;
        }
    }
}