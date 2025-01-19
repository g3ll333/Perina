let ss_player2;
let player2;
let img_shuriken2;

let player_speed2 = 300; // Velocità iniziale
let jump_init_speed2 = 400; // Velocità iniziale del salto
let floor_height3 = 2007; // Altezza del terreno

let curr_anim2 = "idle";
let weapon_disable2 = false;
let is_throwing2 = false;
let contatore_morti2 = 0;

let world_left_limit3 = 1950;
let world_right_limit3 = 3560;

function configure_player_animations3(s) {
    PP.assets.sprite.animation_add_list(player2, "walk", [25, 26, 27, 28, 29, 30, 31, 32], 8, -1);
    PP.assets.sprite.animation_add_list(player2, "idle", [50, 51, 52, 53], 4, -1);
    //PP.assets.sprite.animation_add_list(player2, "idle", [50, 63], 2, -1);
    PP.assets.sprite.animation_add_list(player2, "jump_up", [33, 34, 35, 36, 37, 38, 39, 40], 8, 0);
    PP.assets.sprite.animation_add_list(player2, "jump_down", [41, 42, 43, 44, 45, 46, 47, 48, 49], 9, 0);
    PP.assets.sprite.animation_add_list(player2, "throw", [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 11, 0);
    //PP.assets.sprite.animation_add_list(player2, "climb", [54, 55, 56, 57, 58, 59, 60, 61, 62], 9, 0);


    PP.assets.sprite.animation_play(player2, "idle");

}

function preload_player3(s) {
    ss_player2 = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/sprite_colori_def.png", 150, 168);
    //ss_player2 = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/SPERO_SIA_ULTIMA_SPRITE.png", 150, 168);
    img_shuriken2 = PP.assets.image.load(s, "ASSETS/IMAGES/zucca40.png");
}

function create_player3(s) {
    player2 = PP.assets.sprite.add(s, ss_player2, 1900, 2007, 0.5, 1);

    // Aggiungo il giocatore alla fisica
    PP.physics.add(s, player2, PP.physics.type.DYNAMIC);

    // Gestisco hitbox personaggio
    PP.physics.set_collision_rectangle(player2,  50, 140, 40, 28);

    // Configuro le animazioni del player
    configure_player_animations3(s);
}

function update_player3(s) {
    let next_anim2 = curr_anim2;

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
        // Se Ã¨ premuto il tasto destro...
        if (player2.geometry.x < world_right_limit3) {
            PP.physics.set_velocity_x(player2, player_speed2);
            next_anim2 = "walk";
        } else {
            PP.physics.set_velocity_x(player2, 0);
            next_anim2 = "idle";
        }
    } else if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
        // Se Ã¨ premuto il tasto sinistro...
        if (player2.geometry.x > world_left_limit3) {
            PP.physics.set_velocity_x(player2, -player_speed2);
            next_anim2 = "walk";
        } else {
            PP.physics.set_velocity_x(player2, 0);
            next_anim2 = "idle";
        }
    } else {
        // Se non Ã¨ premuto alcun tasto...
        PP.physics.set_velocity_x(player2, 0);
        next_anim2 = "idle"

    }

    // Salto
    {
        if (player2.geometry.y >= floor_height3 - 1 || player2.is_on_platform) {
            // Se mi trovo sul pavimento OPPURE su una piattaforma...
            if (PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
                // ... e premo il tasto spazio, allora salto
                PP.physics.set_velocity_y(player2, -jump_init_speed2);
            }
        }

        // Logica per specchiare il giocatore
        if (PP.physics.get_velocity_x(player2) < 0) {
            player2.geometry.flip_x = true;
        } else if (PP.physics.get_velocity_x(player2) > 0) {
            player2.geometry.flip_x = false;
        }


        // Le animazioni del salto vengono gestite in base alla velocitÃ  verticale
        if (PP.physics.get_velocity_y(player2) < 0) {
            next_anim2 = "jump_up";
        } else if (PP.physics.get_velocity_y(player2) > 0) {
            next_anim2 = "jump_down";
        }
    }

    //console.log("ccurr_score dopo svuota_cestino: ", curr_score);
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.A) && zucche_raccolte > 0) {
        next_anim2 = "throw";
        PP.timers.add_timer(s, 610, manage_player_weapon3, false);

        svuota_cestino3(s);
        //console.log("ccurr_score dopo svuota_cestino: ", curr_score);
    }

    // Logica per le animazioni
    if (next_anim2 !== curr_anim2) {
        PP.assets.sprite.animation_play(player2, next_anim2);
        curr_anim2 = next_anim2;
    }

    // Resetto il flag is_on_platform dopo ogni aggiornamento
    player2.is_on_platform = false;
}

function hit_enemy5(s, shuriken2, enemy2) {
    PP.assets.destroy(shuriken2);
    PP.assets.destroy(enemy2);
    contatore_morti2++;
    console.log("nemico1 ucciso. contatore morti: ", contatore_morti2);
}

function hit_enemy4(s, shuriken2, enemy3) {
    PP.assets.destroy(shuriken2);
    PP.assets.destroy(enemy3);
    contatore_morti2++;
    console.log("nemico2 ucciso. contatore morti: ", contatore_morti2);
}

function reenable_weapon3(s) {
    weapon_disable2 = false;
}

function manage_player_weapon3(s) {
    let offset2 = 70;
    let velocity2 = 550;

    if (player2.geometry.flip_x == true) {
        offset2 = -offset2;
        velocity2 = -velocity2;
    }

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.A)) {
        if (weapon_disable2 == false) {
            //quando premo il tasto A..
            let shuriken2 = PP.assets.image.add(s, img_shuriken2,
                player2.geometry.x + offset2,
                player2.geometry.y - 70,
                0.5, 0.5
            );
            PP.physics.add(s, shuriken2, PP.physics.type.DYNAMIC);
            PP.physics.set_allow_gravity(shuriken2, false);
            PP.physics.set_rotation(shuriken2, 720);
            PP.physics.set_velocity_x(shuriken2, velocity2);
            PP.physics.add_collider_f(s, shuriken2, enemy2, hit_enemy5);
            PP.physics.add_collider_f(s, shuriken2, enemy3, hit_enemy4);
            PP.timers.add_timer(s, 2500, reenable_weapon3, false);
            weapon_disable2 = true;
        }
    }
}