let enemy3;
let ss_enemy3;
let enemy2;
let ss_enemy4;
let invincibile_3 = false;

let contatore_vite_3 = 5;


function preload_enemy3(s) {
    // Load della sprite del nemico 

    ss_enemy3 = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/Larva.png", 160, 100);
    ss_enemy4 = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/Mosca.png", 165, 75);

}

function goto_gameover3(s) {
    PP.scenes.start("gameover3");
}

function reset_invincibile3(s) {
    invincibile_3 = false;
}

function decrease_life3(s) {
    if (invincibile_3) {
        return;
    }
    invincibile_3 = true;
    contatore_vite_3--;
    PP.timers.add_timer(s, 1000, reset_invincibile3, false);

    if (contatore_vite_3 === 0) {
        PP.scenes.start("gameover3");
    }
    else if (contatore_vite_3 === 4) {
        vita5_3.visibility.hidden = true;
        vita4_3.visibility.hidden = false;
        vita3_3.visibility.hidden = false;
        vita2_3.visibility.hidden = false;
        vita1_3.visibility.hidden = false;
    }
    else if (contatore_vite_3 === 3) {
        vita5_3.visibility.hidden = true;
        vita4_3.visibility.hidden = true;
        vita3_3.visibility.hidden = false;
        vita2_3.visibility.hidden = false;
        vita1_3.visibility.hidden = false;
    }
    else if (contatore_vite_3 === 2) {
        vita5_3.visibility.hidden = true;
        vita4_3.visibility.hidden = true;
        vita3_3.visibility.hidden = true;
        vita2_3.visibility.hidden = false;
        vita1_3.visibility.hidden = false;
    }
    else if (contatore_vite_3 === 1) {
        vita5_3.visibility.hidden = true;
        vita4_3.visibility.hidden = true;
        vita3_3.visibility.hidden = true;
        vita2_3.visibility.hidden = true;
        vita1_3.visibility.hidden = false;
    }

}

function create_enemy3(s) {
    // Creare nemico e posizionarlo

    enemy2 = PP.assets.sprite.add(s, ss_enemy3, 2290, 1650, 0.5, 1);
    enemy3 = PP.assets.sprite.add(s, ss_enemy4, 2690, 1287, 0.5, 1);

    PP.physics.add(s, enemy2, PP.physics.type.DYNAMIC);
    PP.physics.add(s, enemy3, PP.physics.type.DYNAMIC);

    PP.physics.add_overlap_f(s, enemy2, player2, decrease_life3);
    PP.physics.add_overlap_f(s, enemy3, player2, decrease_life3);

    // Configurare le animazioni del nemico
    PP.assets.sprite.animation_add_list(enemy2, "walk_right", [0, 1, 2, 3, 4, 5], 6, -1);
    PP.assets.sprite.animation_add_list(enemy2, "walk_left", [5, 4, 3, 2, 1, 0], 6, -1);

    PP.assets.sprite.animation_add_list(enemy3, "walk_right", [0, 1, 2, 3, 4, 5], 6, -1);
    PP.assets.sprite.animation_add_list(enemy3, "walk_left", [5, 4, 3, 2, 1, 0], 6, -1);

    // Avviare l'animazione "walk_left" e impostare la velocitÃ  iniziale

    PP.assets.sprite.animation_play(enemy2, "walk_left");
    PP.physics.set_velocity_x(enemy2, 100);

    PP.assets.sprite.animation_play(enemy3, "walk_left");
    PP.physics.set_velocity_x(enemy3, 100);

}


function update_enemy3(s) {
    // Movimento
    // Aggiorno la velocitÃ  del nemico nel
    // caso in cui si trovi al limite dx o sx
    // scelto 

    if (enemy2.geometry.x <= 2290) {
        PP.physics.set_velocity_x(enemy2, 70);
        PP.assets.sprite.animation_play(enemy2, "walk_right");
        enemy2.geometry.flip_x = true;
    }
    if (enemy2.geometry.x >= 2400) {
        PP.physics.set_velocity_x(enemy2, -70);
        PP.assets.sprite.animation_play(enemy2, "walk_left");
        enemy2.geometry.flip_x = false;
    }

    if (enemy3.geometry.x <= 2620) {
        PP.physics.set_velocity_x(enemy3, 80);
        PP.assets.sprite.animation_play(enemy3, "walk_right");
        enemy3.geometry.flip_x = true;
    }
    if (enemy3.geometry.x >= 2760) {
        PP.physics.set_velocity_x(enemy3, -80);
        PP.assets.sprite.animation_play(enemy3, "walk_left");
        enemy3.geometry.flip_x = false;
    }

    // Verifica se tutti i nemici sono stati uccisi 
    if (contatore_morti2 >= 2) {
        PP.scenes.start("win3");
    }
}