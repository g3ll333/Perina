let ss_player1;
let player1;
let img_shuriken1;

let player_speed1 = 700; // Velocità iniziale
let jump_init_speed1 = 400; // Velocità iniziale del salto
let floor_height1 = 720 - 413; // Altezza del terreno

let curr_anim1 = "stop";
let weapon_disable1 = false;
let is_throwing1 = false;

let contatore_morti1 = 0;

function configure_player_animations2(s) {
    PP.assets.sprite.animation_add_list(player1, "walk", [25, 26, 27, 28, 29, 30, 31, 32], 8, -1);
    PP.assets.sprite.animation_add_list(player1, "idle", [50, 51, 52, 53], 4, -1);
    PP.assets.sprite.animation_add_list(player1, "jump_up", [33, 34, 35, 36, 37, 38, 39, 40], 8, 0);
    PP.assets.sprite.animation_add_list(player1, "jump_down", [41, 42, 43, 44, 45, 46, 47, 48, 49], 9, 0);
    PP.assets.sprite.animation_add_list(player1, "throw", [0, 1, 2, 3, 4, 5, 6, 21, 22, 23, 24], 11, 0);
    //PP.assets.sprite.animation_add_list(player1, "climb", [54, 55, 56, 57, 58, 59, 60, 61, 62], 9, 0);


    PP.assets.sprite.animation_play(player1, "idle");

}

function preload_player2(s) {
    ss_player1 = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/SPRITETOTALE_PERINA.png", 150, 168);
    img_shuriken1 = PP.assets.image.load(s, "ASSETS/IMAGES/pomodoro40.png");
}

function create_player2(s) {
    player1 = PP.assets.sprite.add(s, ss_player1, 81, floor_height1, 0.5, 1);

    // Aggiungo il giocatore alla fisica
    PP.physics.add(s, player1, PP.physics.type.DYNAMIC);

    // Gestisco hitbox personaggio
    PP.physics.set_collision_rectangle(player1, 110, 168, 0, 0);

    // Configuro le animazioni del player
    configure_player_animations2(s);
}

function update_player2(s) {
    let next_anim1 = curr_anim1;

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
        // Se Ã¨ premuto il tasto destro...
        PP.physics.set_velocity_x(player1, player_speed1);
        next_anim1 = "walk";
    } else if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
        // Se Ã¨ premuto il tasto sinistro...
        PP.physics.set_velocity_x(player1, -player_speed1);
        next_anim1 = "walk";
    } else {
        // Se non Ã¨ premuto alcun tasto...
        PP.physics.set_velocity_x(player1, 0);
        next_anim1 = "idle";
    }

    // Salto
    {
        if (player1.geometry.y >= floor_height1 - 1 || player1.is_on_platform) {
            // Se mi trovo sul pavimento OPPURE su una piattaforma...
            if (PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
                // ... e premo il tasto spazio, allora salto
                PP.physics.set_velocity_y(player1, -jump_init_speed1);
            }
        }
    }

    // Logica per specchiare il giocatore
    if (PP.physics.get_velocity_x(player1) < 0) {
        player1.geometry.flip_x = true;
    } else if (PP.physics.get_velocity_x(player1) > 0) {
        player1.geometry.flip_x = false;
    }

    // Le animazioni del salto vengono gestite in base alla velocitÃ  verticale
    if (PP.physics.get_velocity_y(player1) < 0) {
        next_anim1 = "jump_up";
    } else if (PP.physics.get_velocity_y(player1) > 0) {
        next_anim1 = "jump_down";
    }

    //console.log("ccurr_score dopo svuota_cestino: ", curr_score);
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.A) && pomodori_raccolti > 0) {
        next_anim1 = "throw";
        PP.timers.add_timer(s, 610, manage_player_weapon2, false);

        svuota_cestino2(s);
        //console.log("ccurr_score dopo svuota_cestino: ", curr_score);
    }

    // Logica per le animazioni
    if (next_anim1 !== curr_anim1) {
        PP.assets.sprite.animation_play(player1, next_anim1);
        curr_anim1 = next_anim1;
    }

    // Resetto il flag is_on_platform dopo ogni aggiornamento
    player1.is_on_platform = false;
}

function hit_enemy2(s, shuriken1, enemy1) {
    PP.assets.destroy(shuriken1);
    PP.assets.destroy(enemy1);
    contatore_morti1++;
    console.log("nemico1 ucciso. contatore morti: ", contatore_morti1);
}

function hit_enemy3(s, shuriken1, enemy4) {
    PP.assets.destroy(shuriken1);
    PP.assets.destroy(enemy4);
    contatore_morti1++;
    console.log("nemico2 ucciso. contatore morti: ", contatore_morti1);
}

function reenable_weapon2(s) {
    weapon_disable1 = false;
}

function manage_player_weapon2(s) {
    let offset1 = 70;
    let velocity1 = 550;

    if (player1.geometry.flip_x == true) {
        offset1 = -offset1;
        velocity1 = -velocity1;
    }

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.A)) {
        if (weapon_disable1 == false) {
            //quando premo il tasto A..
            let shuriken1 = PP.assets.image.add(s, img_shuriken1,
                player1.geometry.x + offset1,
                player1.geometry.y - 70,
                0.5, 0.5
            );
            PP.physics.add(s, shuriken1, PP.physics.type.DYNAMIC);
            PP.physics.set_allow_gravity(shuriken1, false);
            PP.physics.set_rotation(shuriken1, 720);
            PP.physics.set_velocity_x(shuriken1, velocity1);
            PP.physics.add_collider_f(s, shuriken1, enemy1, hit_enemy2);
            PP.physics.add_collider_f(s, shuriken1, enemy4, hit_enemy3);
            PP.timers.add_timer(s, 2500, reenable_weapon2, false);
            weapon_disable1 = true;
        }
    }
}