let ss_player;
let player;
let img_shuriken;

let player_speed = 300; // Velocità iniziale
let jump_init_speed = 400; // Velocità iniziale del salto
let floor_height = 575; // Altezza del terreno

let curr_anim = "idle";

let weapon_disable = false;
let is_throwing = false;

let contatore_morti = 0;

let world_left_limit = 0;
let world_right_limit = 3550;



function configure_player_animations(s) {
    PP.assets.sprite.animation_add_list(player, "walk", [25, 26, 27, 28, 29, 30, 31, 32], 8, -1);
    PP.assets.sprite.animation_add_list(player, "idle", [50, 51, 52, 53], 4, -1);
    PP.assets.sprite.animation_add_list(player, "jump_up", [33, 34, 35, 36, 37, 38, 39, 40], 8, 0);
    PP.assets.sprite.animation_add_list(player, "jump_down", [41, 42, 43, 44, 45, 46, 47, 48, 49], 9, 0);
    PP.assets.sprite.animation_add_list(player, "throw", [7, 8, 9, 10, 11, 12, 13, 21, 22, 23, 24, 53], 12, 0);
    PP.assets.sprite.animation_add_list(player, "collision", [63, 50, 63, 50, 63, 50, 63, 50], 4, 0);

    PP.assets.sprite.animation_play(player, "idle");
}

function preload_player(s) {
    //ss_player = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/PERINASPRITETOTALE2.png", 103, 162);
    //ss_player = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/perinaforsedef.png", 150, 168);
    ss_player = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/sprite_colori_def_completo.png", 150, 168);
    img_shuriken = PP.assets.image.load(s, "ASSETS/IMAGES/pera40.png");
}

function create_player(s) {
    player = PP.assets.sprite.add(s, ss_player, 150, floor_height, 0.5, 1);

    // Aggiungo il giocatore alla fisica
    PP.physics.add(s, player, PP.physics.type.DYNAMIC);

    //Gestisco hitbox personaggio
    PP.physics.set_collision_rectangle(player, 30, 140, 50, 28)

    // Configuro le animazioni del playerf
    configure_player_animations(s);
}

function update_player(s) {
    let next_anim = curr_anim;

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
        // Se Ã¨ premuto il tasto destro...
        if (player.geometry.x < world_right_limit) {
            PP.physics.set_velocity_x(player, player_speed);
            next_anim = "walk";
        } else {
            PP.physics.set_velocity_x(player, 0);
            next_anim = "idle";
        }
    } else if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
        // Se Ã¨ premuto il tasto sinistro...
        if (player.geometry.x > world_left_limit) {
            PP.physics.set_velocity_x(player, -player_speed);
            next_anim = "walk";
        } else {
            PP.physics.set_velocity_x(player, 0);
            next_anim = "idle";
        }
    } else {
        // Se non Ã¨ premuto alcun tasto...
        PP.physics.set_velocity_x(player, 0);
        next_anim = "idle"

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
        PP.physics.set_collision_rectangle(player, 30, 140, 70, 28)
    } else if (PP.physics.get_velocity_x(player) > 0) {
        player.geometry.flip_x = false;
        PP.physics.set_collision_rectangle(player, 30, 140, 50, 28)
    }

    // Le animazioni del salto vengono gestite in base alla velocità verticale
    if (PP.physics.get_velocity_y(player) < 0) {
        next_anim = "jump_up";
    } else if (PP.physics.get_velocity_y(player) > 0) {
        next_anim = "jump_down";
    }

    //console.log("ccurr_score dopo svuota_cestino: ", curr_score);
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.A) && pere_raccolte > 0) {

        if (Math.abs(player.geometry.x - enemy.geometry.x) < 500) {
            next_anim = "throw";
            PP.timers.add_timer(s, 610, manage_player_weapon, false);

            svuota_cestino(s);
            //console.log("ccurr_score dopo svuota_cestino: ", curr_score);
        }

        if (Math.abs(player.geometry.x - enemy_2.geometry.x) < 500) {
            next_anim = "throw";
            PP.timers.add_timer(s, 610, manage_player_weapon, false);

            svuota_cestino(s);
            //console.log("ccurr_score dopo svuota_cestino: ", curr_score);
        }

        if (Math.abs(player.geometry.x - enemy_3.geometry.x) < 500) {
            next_anim = "throw";
            PP.timers.add_timer(s, 610, manage_player_weapon, false);

            svuota_cestino(s);
            //console.log("ccurr_score dopo svuota_cestino: ", curr_score);
        }

    }

    // Logica per le animazioni 
    if (next_anim !== curr_anim) {
        PP.assets.sprite.animation_play(player, next_anim);
        curr_anim = next_anim;
    }


    // Resetto il flag is_on_platform dopo ogni aggiornamento
    player.is_on_platform = false;
}


function hit_enemy(s, shuriken, enemy) {
    PP.assets.destroy(shuriken);
    PP.assets.destroy(enemy);
    contatore_morti++;
    console.log("nemico1ucciso.contatore morti: ", contatore_morti);
}

function hit_enemy_2(s, shuriken, enemy_2) {
    PP.assets.destroy(shuriken);
    PP.assets.destroy(enemy_2);
    contatore_morti++;
    console.log("nemico2ucciso.contatore morti: ", contatore_morti);
}

function hit_enemy_3(s, shuriken, enemy_3) {
    PP.assets.destroy(shuriken);
    PP.assets.destroy(enemy_3);
    contatore_morti++;
    console.log("nemico3ucciso.contatore morti: ", contatore_morti);
}

function reenable_weapon(s) {
    weapon_disable = false;
}

function manage_player_weapon(s) {
    let offset = 70;
    let velocity = 550;

    if (player.geometry.flip_x == true) {
        offset = -offset;
        velocity = -velocity;
    }

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.A)) {
        if (weapon_disable == false) {
            //quando premo il tasto A..
            let shuriken = PP.assets.image.add(s, img_shuriken,
                player.geometry.x + offset,
                player.geometry.y - 70,
                0.5, 0.5
            );
            PP.physics.add(s, shuriken, PP.physics.type.DYNAMIC);
            PP.physics.set_allow_gravity(shuriken, false);
            PP.physics.set_rotation(shuriken, 720);
            PP.physics.set_velocity_x(shuriken, velocity);
            PP.physics.add_collider_f(s, shuriken, enemy, hit_enemy);
            PP.physics.add_collider_f(s, shuriken, enemy_2, hit_enemy_2);
            PP.physics.add_collider_f(s, shuriken, enemy_3, hit_enemy_3);
            PP.timers.add_timer(s, 2500, reenable_weapon, false);
            weapon_disable = true;

        }
    }
}
