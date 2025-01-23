let ss_enemy1;
let enemy1;
let enemy4;
let ss_enemy2;
let invincibile_2 = false;

let contatore_vite_2 = 5;

//let enemy3;
//let ss_enemy3;
//let enemy4;
//let ss_enemy4;
//let enemy_5;


function preload_enemy2(s) {
    // Load della sprite del nemico 
    ss_enemy1 = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/Muffa1.png", 167, 71);
    ss_enemy2 = PP.assets.sprite.load_spritesheet(s, "ASSETS/IMAGES/Muffa2.png", 150, 114);

}

function goto_gameover2(s) {
    PP.scenes.start("gameover2");
}

function reset_invincibile2(s) {
    invincibile_2 = false;
    console.log("resettata invincibilità");
    PP.physics.set_velocity_x(enemy1, 100);
    PP.physics.set_velocity_x(enemy4, 100);
}

function decrease_life2_1(s) {
    if (invincibile_2) {
        return;
    }
    invincibile_2 = true;
    contatore_vite_2--;
    PP.physics.set_velocity_x(player1, 0);
    player1.geometry.x = enemy1.geometry.x - 250;
    PP.physics.set_velocity_x(enemy1, 0);
    PP.assets.sprite.animation_play(enemy1, "stop");

    PP.assets.sprite.animation_play(player1, "collision");

    PP.timers.add_timer(s, 1000, reset_invincibile2, false);

    if (contatore_vite_2 === 0) {
        PP.scenes.start("gameover2");
    }
    else if (contatore_vite_2 === 4) {
        vita5_2.visibility.hidden = true;
        vita4_2.visibility.hidden = false;
        vita3_2.visibility.hidden = false;
        vita2_2.visibility.hidden = false;
        vita1_2.visibility.hidden = false;
    }
    else if (contatore_vite_2 === 3) {
        vita5_2.visibility.hidden = true;
        vita4_2.visibility.hidden = true;
        vita3_2.visibility.hidden = false;
        vita2_2.visibility.hidden = false;
        vita1_2.visibility.hidden = false;
    }
    else if (contatore_vite_2 === 2) {
        vita5_2.visibility.hidden = true;
        vita4_2.visibility.hidden = true;
        vita3_2.visibility.hidden = true;
        vita2_2.visibility.hidden = false;
        vita1_2.visibility.hidden = false;
    }
    else if (contatore_vite_2 === 1) {
        vita5_2.visibility.hidden = true;
        vita4_2.visibility.hidden = true;
        vita3_2.visibility.hidden = true;
        vita2_2.visibility.hidden = true;
        vita1_2.visibility.hidden = false;
    }

}

function decrease_life2_4(s) {
    if (invincibile_2) {
        return;
    }
    invincibile_2 = true;
    contatore_vite_2--;
    PP.physics.set_velocity_x(player1, 0);
    player1.geometry.x = enemy4.geometry.x - 250;
    PP.physics.set_velocity_x(enemy4, 0);
    PP.assets.sprite.animation_play(enemy4, "stop");

    PP.assets.sprite.animation_play(player1, "collision");

    PP.timers.add_timer(s, 1000, reset_invincibile2, false);

    if (contatore_vite_2 === 0) {
        PP.scenes.start("gameover2");
    }
    else if (contatore_vite_2 === 4) {
        vita5_2.visibility.hidden = true;
        vita4_2.visibility.hidden = false;
        vita3_2.visibility.hidden = false;
        vita2_2.visibility.hidden = false;
        vita1_2.visibility.hidden = false;
    }
    else if (contatore_vite_2 === 3) {
        vita5_2.visibility.hidden = true;
        vita4_2.visibility.hidden = true;
        vita3_2.visibility.hidden = false;
        vita2_2.visibility.hidden = false;
        vita1_2.visibility.hidden = false;
    }
    else if (contatore_vite_2 === 2) {
        vita5_2.visibility.hidden = true;
        vita4_2.visibility.hidden = true;
        vita3_2.visibility.hidden = true;
        vita2_2.visibility.hidden = false;
        vita1_2.visibility.hidden = false;
    }
    else if (contatore_vite_2 === 1) {
        vita5_2.visibility.hidden = true;
        vita4_2.visibility.hidden = true;
        vita3_2.visibility.hidden = true;
        vita2_2.visibility.hidden = true;
        vita1_2.visibility.hidden = false;
    }

}

function create_enemy2(s) {
    // Creare nemico e posizionarlo
    enemy1 = PP.assets.sprite.add(s, ss_enemy1, 801, 2007, 0.5, 1); //muffa in basso
    enemy4 = PP.assets.sprite.add(s, ss_enemy2, 946, 1365, 0.5, 1); // muffa nel rientro
    //enemy_5 = PP.assets.sprite.add(s, ss_enemy_4, 1040, 1652, 0.5, 1);
    PP.physics.add(s, enemy1, PP.physics.type.DYNAMIC);
    PP.physics.add(s, enemy4, PP.physics.type.DYNAMIC);
    //PP.physics.add(s, enemy_5, PP.physics.type.DYNAMIC);
    PP.physics.add_overlap_f(s, enemy1, player1, decrease_life2_1);
    PP.physics.add_overlap_f(s, enemy4, player1, decrease_life2_4);

    //PP.physics.add_collider_f(s, enemy_5, player, goto_gameover);

    //Gestisco hitbox personaggio 
    PP.physics.set_collision_rectangle(enemy4, 50, 100, 50, 12);
    PP.physics.set_collision_rectangle(enemy1, 110, 90, 35, -20);



    // Configurare le animazioni del nemico
    PP.assets.sprite.animation_add_list(enemy1, "walk_right", [0, 1, 2, 3, 4, 5], 6, -1);
    PP.assets.sprite.animation_add_list(enemy1, "walk_left", [5, 4, 3, 2, 1, 0], 6, -1);
    PP.assets.sprite.animation_add_list(enemy1, "stop", [0, 0, 0, 0, 0, 0, 0, 0], 4, 0);


    PP.assets.sprite.animation_add_list(enemy4, "walk_right", [0, 1, 2, 3, 4, 5], 6, -1);
    PP.assets.sprite.animation_add_list(enemy4, "walk_left", [5, 4, 3, 2, 1, 0], 6, -1);
    PP.assets.sprite.animation_add_list(enemy4, "stop", [0, 0, 0, 0, 0, 0, 0, 0], 4, 0);


    //PP.assets.sprite.animation_add_list(enemy_5, "walk_right", [0, 1, 2, 3, 4, 5, 6, 7], 8, -1);
    //PP.assets.sprite.animation_add_list(enemy_5, "walk_left", [7, 6, 5, 4, 3, 2, 1, 0], 8, -1);


    // Avviare l'animazione "walk_left" e impostare la velocitÃ  iniziale
    PP.assets.sprite.animation_play(enemy1, "walk_left");
    PP.physics.set_velocity_x(enemy1, 100);

    PP.assets.sprite.animation_play(enemy4, "walk_left");
    PP.physics.set_velocity_x(enemy4, 100);
}

function update_enemy2(s) {
    // Movimento
    // Aggiorno la velocitÃ  del nemico nel
    // caso in cui si trovi al limite dx o sx
    // scelto 

    if (enemy1.geometry.x <= 740) {
        PP.physics.set_velocity_x(enemy1, 100);
        PP.assets.sprite.animation_play(enemy1, "walk_right");
        enemy1.geometry.flip_x = true;
    }
    if (enemy1.geometry.x >= 890) {
        PP.physics.set_velocity_x(enemy1, -100);
        PP.assets.sprite.animation_play(enemy1, "walk_left");
        enemy1.geometry.flip_x = false;
    }


    if (enemy4.geometry.x <= 900) {
        PP.physics.set_velocity_x(enemy4, 100);
        PP.assets.sprite.animation_play(enemy4, "walk_right");
        enemy4.geometry.flip_x = true;
    }
    if (enemy4.geometry.x >= 1050) {
        PP.physics.set_velocity_x(enemy4, -100);
        PP.assets.sprite.animation_play(enemy4, "walk_left");
        enemy4.geometry.flip_x = false;
    }

    //if (enemy_5.geometry.x <= 1010) {
    //   PP.physics.set_velocity_x(enemy_5, 100);
    //   PP.assets.sprite.animation_play(enemy_5, "walk_right");
    //  enemy_5.geometry.flip_x = true;
    //}
    //if (enemy_5.geometry.x >= 1130) {
    //    PP.physics.set_velocity_x(enemy_5, -100);
    //    PP.assets.sprite.animation_play(enemy_5, "walk_left");
    //    enemy_5.geometry.flip_x = false;
    //}

    // Verifica se tutti i nemici sono stati uccisi 
    if (contatore_morti1 >= 2) {
        console.log(pomodori_raccolti);
        PP.timers.add_timer(s, 2500, stregamortissima2, false);
    }
}

function stregamortissima2(s) {
    console.log(pomodori_raccolti);
    PP.scenes.start("strega2morte");
}