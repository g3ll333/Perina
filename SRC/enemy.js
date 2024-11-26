let ss_enemy;
let enemy;

function preload_enemy(s) {
    // Load della sprite del nemico 
    ss_enemy = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/Funghetto1.png", 133, 111);
}

function goto_gameover(s) {
    PP.scenes.start("gameover");
}

function create_enemy(s) {
    // Creare nemico e posizionarlo
    enemy = PP.assets.sprite.add(s, ss_enemy, 800, floor_height, 0.5, 1);
    PP.physics.add(s, enemy, PP.physics.type.DYNAMIC);
    PP.physics.add_collider_f(s, enemy, player, goto_gameover);

    // Configurare le animazioni del nemico
    PP.assets.sprite.animation_add_list(enemy, "walk_right", [0, 1, 2, 3, 4, 5, 6, 7], 8, -1);
    PP.assets.sprite.animation_add_list(enemy, "walk_left", [7, 6, 5, 4, 3, 2, 1, 0], 8, -1);

    // Avviare l'animazione "walk_left" e impostare la velocità iniziale
    PP.assets.sprite.animation_play(enemy, "walk_left");
    PP.physics.set_velocity_x(enemy, 100);
}

function update_enemy(s) {
    // Movimento
    // Aggiorno la velocità del nemico nel
    // caso in cui si trovi al limite dx o sx
    // scelto (600 - 1000)

    if (enemy.geometry.x <= 600) {
        PP.physics.set_velocity_x(enemy, 100);
        PP.assets.sprite.animation_play(enemy, "walk_right");
        enemy.geometry.flip_x = true;
    }

    if (enemy.geometry.x >= 1000) {
        PP.physics.set_velocity_x(enemy, -100);
        PP.assets.sprite.animation_play(enemy, "walk_left");
        enemy.geometry.flip_x = false;
    }
}
