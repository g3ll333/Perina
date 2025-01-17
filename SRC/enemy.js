let ss_enemy;
let enemy;
let ss_enemy_2;
let enemy_2;
let enemy_3;
let invincibile = false;

let contatore_vite = 5;



function preload_enemy(s) {
    // Load della sprite del nemico 
    ss_enemy = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/Funghetto1.png", 133, 111);
    ss_enemy_2 = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/Funghetto2.png", 130, 86);
}

function goto_gameover(s) {
    PP.scenes.start("gameover");
}

function reset_invincibile(s) {
    invincibile = false;
    console.log("resettata invincibilità");
}

function decrease_life(s) {
    if (invincibile) {
        return;
    }
    invincibile = true;
    contatore_vite--;
    PP.timers.add_timer(s, 1000, reset_invincibile, false);

    if (contatore_vite === 0) {
        PP.scenes.start("gameover");
    }
    else if (contatore_vite === 4) {
        vita5.visibility.hidden = true;
        vita4.visibility.hidden = false;
        vita3.visibility.hidden = false;
        vita2.visibility.hidden = false;
        vita1.visibility.hidden = false;
    }
    else if (contatore_vite === 3) {
        vita5.visibility.hidden = true;
        vita4.visibility.hidden = true;
        vita3.visibility.hidden = false;
        vita2.visibility.hidden = false;
        vita1.visibility.hidden = false;
    }
    else if (contatore_vite === 2) {
        vita5.visibility.hidden = true;
        vita4.visibility.hidden = true;
        vita3.visibility.hidden = true;
        vita2.visibility.hidden = false;
        vita1.visibility.hidden = false;
    }
    else if (contatore_vite === 1) {
        vita5.visibility.hidden = true;
        vita4.visibility.hidden = true;
        vita3.visibility.hidden = true;
        vita2.visibility.hidden = true;
        vita1.visibility.hidden = false;
    }

}


function create_enemy(s) {
    // Creare nemico e posizionarlo
    enemy = PP.assets.sprite.add(s, ss_enemy, 960, 330, 0.5, 1);
    enemy_2 = PP.assets.sprite.add(s, ss_enemy_2, 1980, 140, 0.5, 1);
    enemy_3 = PP.assets.sprite.add(s, ss_enemy, 2850, 120, 0.5, 1);

    console.log("Nemici creati:", enemy, enemy_2, enemy_3);

    PP.physics.add(s, enemy, PP.physics.type.DYNAMIC);
    PP.physics.add(s, enemy_2, PP.physics.type.DYNAMIC);
    PP.physics.add(s, enemy_3, PP.physics.type.DYNAMIC);

    PP.physics.add_overlap_f(s, enemy, player, decrease_life);
    PP.physics.add_overlap_f(s, enemy_2, player, decrease_life);
    PP.physics.add_overlap_f(s, enemy_3, player, decrease_life);

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

    if (enemy.geometry.x <= 960) {
        PP.physics.set_velocity_x(enemy, 80);
        PP.assets.sprite.animation_play(enemy, "walk_right");
        enemy.geometry.flip_x = true;
    }

    if (enemy.geometry.x >= 1060) {
        PP.physics.set_velocity_x(enemy, -80);
        PP.assets.sprite.animation_play(enemy, "walk_left");
        enemy.geometry.flip_x = false;
    }

    if (enemy_2.geometry.x <= 1940) {
        PP.physics.set_velocity_x(enemy_2, 70);
        PP.assets.sprite.animation_play(enemy_2, "walk_right");
        enemy_2.geometry.flip_x = true;
    }

    if (enemy_2.geometry.x >= 2080) {
        PP.physics.set_velocity_x(enemy_2, -70);
        PP.assets.sprite.animation_play(enemy_2, "walk_left");
        enemy_2.geometry.flip_x = false;
    }

    if (enemy_3.geometry.x <= 2900) {
        PP.physics.set_velocity_x(enemy_3, 80);
        PP.assets.sprite.animation_play(enemy_3, "walk_right");
        enemy_3.geometry.flip_x = true;
    }

    if (enemy_3.geometry.x >= 3050) {
        PP.physics.set_velocity_x(enemy_3, -80);
        PP.assets.sprite.animation_play(enemy_3, "walk_left");
        enemy_3.geometry.flip_x = false;
    }

    // Verifica se tutti i nemici sono stati uccisi 
    if (contatore_morti >= 3) {
        PP.scenes.start("win");
    }
}
