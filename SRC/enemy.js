let ss_enemy;
let enemy;
let ss_enemy_2;
let enemy_2;
let enemy_3;

function preload_enemy(s) {
    // Load della sprite del nemico 
    ss_enemy = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/Funghetto1.png", 133, 111);
    ss_enemy_2 = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/Funghetto2.png", 130, 86);
}

function goto_gameover(s) {
    PP.scenes.start("gameover");
}

function create_enemy(s) {
    // Creare nemico e posizionarlo
    enemy = PP.assets.sprite.add(s, ss_enemy, 1000, 350, 0.5, 1);
    enemy_2 = PP.assets.sprite.add(s, ss_enemy_2, 1980, 140, 0.5, 1);
    enemy_3 = PP.assets.sprite.add(s, ss_enemy, 2850, 140, 0.5, 1);

    console.log("Nemici creati:", enemy, enemy_2, enemy_3);

    PP.physics.add(s, enemy, PP.physics.type.DYNAMIC);
    PP.physics.add(s, enemy_2, PP.physics.type.DYNAMIC);
    PP.physics.add(s, enemy_3, PP.physics.type.DYNAMIC);
    PP.physics.add_collider_f(s, enemy, player, goto_gameover);
    PP.physics.add_collider_f(s, enemy_2, player, goto_gameover);
    PP.physics.add_collider_f(s, enemy_3, player, goto_gameover);

    // Configurare le animazioni del nemico
    PP.assets.sprite.animation_add_list(enemy, "walk_right", [0, 1, 2, 3, 4, 5, 6, 7], 8, -1);
    PP.assets.sprite.animation_add_list(enemy, "walk_left", [7, 6, 5, 4, 3, 2, 1, 0], 8, -1);

    PP.assets.sprite.animation_add_list(enemy_2, "walk_right", [0, 1, 2, 3, 4, 5, 6, 7], 8, -1);
    PP.assets.sprite.animation_add_list(enemy_2, "walk_left", [7, 6, 5, 4, 3, 2, 1, 0], 8, -1);

    PP.assets.sprite.animation_add_list(enemy_3, "walk_right", [0, 1, 2, 3, 4, 5, 6, 7], 8, -1);
    PP.assets.sprite.animation_add_list(enemy_3, "walk_left", [7, 6, 5, 4, 3, 2, 1, 0], 8, -1);

    // Avviare l'animazione "walk_left" e impostare la velocità iniziale
    PP.assets.sprite.animation_play(enemy, "walk_left");
    PP.physics.set_velocity_x(enemy, 100);

    PP.assets.sprite.animation_play(enemy_2, "walk_left");
    PP.physics.set_velocity_x(enemy_2, 100);

    PP.assets.sprite.animation_play(enemy_3, "walk_left");
    PP.physics.set_velocity_x(enemy_3, 100);
}

function collision_enemy_platform(s, enemy, platform) {
    // Funzione di collisione tra il nemico e le piattaforme. 
    if (enemy.geometry.x >= platform.geometry.x && enemy.geometry.x <= platform.geometry.x + platform.geometry.display_width) {
        enemy.is_on_platform = true;
    }
}

function collision_enemy_platform(s, enemy_2, platform) {
    // Funzione di collisione tra il nemico e le piattaforme. 
    if (enemy_2.geometry.x >= platform.geometry.x && enemy_2.geometry.x <= platform.geometry.x + platform.geometry.display_width) {
        enemy_2.is_on_platform = true;
    }
}

function collision_enemy_platform(s, enemy_3, platform) {
    // Funzione di collisione tra il nemico e le piattaforme. 
    if (enemy_3.geometry.x >= platform.geometry.x && enemy_3.geometry.x <= platform.geometry.x + platform.geometry.display_width) {
        enemy_3.is_on_platform = true;
    }
}

function update_enemy(s) {
    // Movimento
    // Aggiorno la velocità del nemico nel
    // caso in cui si trovi al limite dx o sx
    // scelto (830 - 1000)

    if (enemy.geometry.x <= 830) {
        PP.physics.set_velocity_x(enemy, 100);
        PP.assets.sprite.animation_play(enemy, "walk_right");
        enemy.geometry.flip_x = true;
    }

    if (enemy.geometry.x >= 1000) {
        PP.physics.set_velocity_x(enemy, -100);
        PP.assets.sprite.animation_play(enemy, "walk_left");
        enemy.geometry.flip_x = false;
    }

    if (enemy_2.geometry.x <= 1890) {
        PP.physics.set_velocity_x(enemy_2, 70);
        PP.assets.sprite.animation_play(enemy_2, "walk_right");
        enemy_2.geometry.flip_x = true;
    }

    if (enemy_2.geometry.x >= 2000) {
        PP.physics.set_velocity_x(enemy_2, -70);
        PP.assets.sprite.animation_play(enemy_2, "walk_left");
        enemy_2.geometry.flip_x = false;
    }

    if (enemy_3.geometry.x <= 2900) {
        PP.physics.set_velocity_x(enemy_3, 80);
        PP.assets.sprite.animation_play(enemy_3, "walk_right");
        enemy_3.geometry.flip_x = true;
    }

    if (enemy_3.geometry.x >= 3100) {
        PP.physics.set_velocity_x(enemy_3, -80);
        PP.assets.sprite.animation_play(enemy_3, "walk_left");
        enemy_3.geometry.flip_x = false;
    }
}
