let ss_player1;
let player1;
let img_shuriken1;

let player_speed1 = 300;
let jump_init_speed1 = 400;
let floor_height1 = 2007
let starting_point = 720 - 413;


let curr_anim1 = "stop";
let weapon_disable1 = false;
let is_throwing1 = false;

let contatore_morti1 = 0;

let world_left_limit2 = 81;
let world_right_limit2 = 1100;

let is_climbing = false; // Flag per indicare se il player sta arrampicando
let is_on_ladder = false; // Flag per indicare se il player Ã¨ sulla scala
let is_holding = false; // Flag per indicare se il player Ã¨ sulla scala

function configure_player_animations2(s) {
    PP.assets.sprite.animation_add_list(player1, "walk", [25, 26, 27, 28, 29, 30, 31, 32], 8, -1);
    PP.assets.sprite.animation_add_list(player1, "idle", [50, 51, 52, 53], 4, -1);
    PP.assets.sprite.animation_add_list(player1, "jump_up", [33, 34, 35, 36, 37, 38, 39, 40], 8, 0);
    PP.assets.sprite.animation_add_list(player1, "jump_down", [41, 42, 43, 44, 45, 46, 47, 48, 49], 9, -1);
    PP.assets.sprite.animation_add_list(player1, "throw", [0, 1, 2, 3, 4, 5, 6, 21, 22, 23, 24], 11, 0);
    PP.assets.sprite.animation_add_list(player1, "climb", [54, 55, 56, 57, 58, 59, 60, 61, 62], 9, 0);
    PP.assets.sprite.animation_add_list(player1, "stop_climb", [54, 54], 9, 0);
    PP.assets.sprite.animation_add_list(player1, "collision", [63, 50, 63, 50], 4, -1);


    PP.assets.sprite.animation_play(player1, "idle");
}

function preload_player2(s) {
    ss_player1 = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/sprite_colori_def.png", 150, 168);
    img_shuriken1 = PP.assets.image.load(s, "ASSETS/IMAGES/pomodoro40.png");
}

function create_player2(s) {
    player1 = PP.assets.sprite.add(s, ss_player1, 130, starting_point, 0.5, 1);
    PP.physics.add(s, player1, PP.physics.type.DYNAMIC);
    PP.physics.set_collision_rectangle(player1, 30, 140, 50, 28);
    configure_player_animations2(s);
}

function update_player2(s) {
    let next_anim1 = curr_anim1;

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
        if (player1.geometry.x < world_right_limit2) {
            PP.physics.set_velocity_x(player1, player_speed1);
            next_anim1 = "walk";
        } else {
            PP.physics.set_velocity_x(player1, 0);
            next_anim1 = "idle";
        }
    } else if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
        if (player1.geometry.x > world_left_limit2) {
            PP.physics.set_velocity_x(player1, -player_speed1);
            next_anim1 = "walk";
        } else {
            PP.physics.set_velocity_x(player1, 0);
            next_anim1 = "idle";
        }
    } else {
        PP.physics.set_velocity_x(player1, 0);
        next_anim1 = "idle";
    }

    if (is_on_ladder) {
        PP.physics.set_velocity_y(player1, 0);
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.UP)) {
            PP.physics.set_velocity_y(player1, -player_speed1);
            next_anim1 = "climb";
        }
        else if (PP.interactive.kb.is_key_down(s, PP.key_codes.DOWN)) {
            PP.physics.set_velocity_y(player1, player_speed1);
            next_anim1 = "climb";
        } else if (PP.interactive.kb.is_key_up(s, PP.key_codes.UP)) {
            PP.physics.set_velocity_y(player1, 0);
            is_holding = true; // Il giocatore si ferma sulla scala 
            next_anim1 = "stop_climb"; // Usa l'animazione di arrampicata per fermo 
        }

    }
    // Salto
    if (!is_on_ladder) {
        if (player1.geometry.y >= floor_height1 - 1 || player1.is_on_platform) {
            if (PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
                PP.physics.set_velocity_y(player1, -jump_init_speed1);
            }
        }

        // Logica per specchiare il giocatore
        if (PP.physics.get_velocity_x(player1) < 0) {
            player1.geometry.flip_x = true;
            PP.physics.set_collision_rectangle(player1, 30, 140, 70, 28)
        } else if (PP.physics.get_velocity_x(player1) > 0) {
            player1.geometry.flip_x = false;
            PP.physics.set_collision_rectangle(player1, 30, 140, 50, 28)
        }

        if (PP.physics.get_velocity_y(player1) < 0) {
            next_anim1 = "jump_up";
        } else if (PP.physics.get_velocity_y(player1) > 0) {
            next_anim1 = "jump_down";
        }
    }





    if (PP.interactive.kb.is_key_down(s, PP.key_codes.A) && pomodori_raccolti > 0) {
        if (Math.abs(player1.geometry.x - enemy1.geometry.x) < 100) {
            next_anim1 = "throw";
            PP.timers.add_timer(s, 610, manage_player_weapon2, false);
            svuota_cestino2(s);
        }

        if (Math.abs(player1.geometry.x - enemy4.geometry.x) < 500) {
            next_anim1 = "throw";
            PP.timers.add_timer(s, 610, manage_player_weapon2, false);
            svuota_cestino2(s);
        }
    }

    if (next_anim1 !== curr_anim1) {
        PP.assets.sprite.animation_play(player1, next_anim1);
        curr_anim1 = next_anim1;
    }

    player1.is_on_platform = false;
    is_on_ladder = false; // Resetto il flag is_on_ladder dopo ogni aggiornamento

    if (is_holding) {
        PP.physics.set_velocity_y(player1, 0);
    }
    is_holding = false; // Resetto il flag is_on_ladder dopo ogni aggiornamento
}


function overlap_ladder(s, player1, floorscalaverde) {
    console.log("Player is on the ladder");
    is_on_ladder = true;
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
            let shuriken1 = PP.assets.image.add(s, img_shuriken1, player1.geometry.x + offset1, player1.geometry.y - 70, 0.5, 0.5);
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