let sfondo1;
let blocco1;
let blocco2;
//let blocco3;
//let blocco4;
//let blocco5;
//let blocco6;
let floor_1;
let pavimentox_1;
let floor_pavimentox_1;
let floor_2;
//let floor_3;
//let floor_4;
//let floor_5;
let y_1;
let scalaverde;
//let scalaviola;
let piattaforma;
let alberiverdi;
let alberiverdi2;
let floor_grande;
let floor_6;

function preload2(s) {
    console.log("Executing preload() - SCENE 2");
    sfondo1 = PP.assets.image.load(s, "ASSETS/IMAGES/ennesimosfondo2.png");
    blocco1 = PP.assets.image.load(s, "ASSETS/IMAGES/blocco1verde.png");
    blocco2 = PP.assets.image.load(s, "ASSETS/IMAGES/bloccodimezzo.png");
    //blocco3 = PP.assets.image.load(s, "ASSETS/IMAGES/blocco3.png");
    //blocco4 = PP.assets.image.load(s, "ASSETS/IMAGES/blocco4.png");
    //blocco5 = PP.assets.image.load(s, "ASSETS/IMAGES/blocco5.png");
    //blocco6 = PP.assets.image.load(s, "ASSETS/IMAGES/blocco6.png");
    scalaverde = PP.assets.image.load(s, "ASSETS/IMAGES/scalaverde.png");
    //scalaviola = PP.assets.image.load(s, "ASSETS/IMAGES/scalaviola.png");
    pavimentox_1 = PP.assets.image.load(s, "ASSETS/IMAGES/pavimentonuovo.png");
    alberiverdi = PP.assets.image.load(s, "ASSETS/IMAGES/alberiverdi.png");
    alberiverdi2 = PP.assets.image.load(s, "ASSETS/IMAGES/alberiverdinuovi.png");

    preload_pomodori(s);
    preload_hud2(s);
    preload_platforms2(s);
    //preload_zucche(s);
    preload_player2(s);
    preload_enemy2(s);
    preload_strega2_v(s);

}

function create2(s) {
    console.log("Executing create() - SCENE 2");
    sfondo1 = PP.assets.image.add(s, sfondo1, 0, 0, 0, 0);
    blocco1 = PP.assets.image.add(s, blocco1, 0, 2160 - 1853, 0, 0);
    blocco2 = PP.assets.image.add(s, blocco2, 531, 248, 0, 0);
    //blocco3 = PP.assets.image.add(s, blocco3, 3407, 248, 0, 0);
    // blocco4 = PP.assets.image.add(s, blocco4, 531, 1368, 0, 0);
    //blocco5 = PP.assets.image.add(s, blocco5, 531, 1442, 0, 0);
    //blocco6 = PP.assets.image.add(s, blocco6, 531, 1650, 0, 0);
    scalaverde = PP.assets.image.add(s, scalaverde, 472, 1752, 0, 0);
    //scalaviola = PP.assets.image.add(s, scalaviola, 3275, 1561, 0, 0);
    pavimentox_1 = PP.assets.image.add(s, pavimentox_1, 0, 2007, 0, 0);
    alberiverdi = PP.assets.image.add(s, alberiverdi, 0, 30, 0, 0);
    alberiverdi2 = PP.assets.image.add(s, alberiverdi2, 462, 2, 0, 0);


    // Creo un pavimento "trasparente"
    floor_1 = PP.shapes.rectangle_add(s, 163 / 2, 2160 - 1853 / 2, 163, 1853, "0x000000", 0);
    floor_pavimentox_1 = PP.shapes.rectangle_add(s, 3840 / 2, 2007 + 153 / 2, 3840, 153, "0x000000", 0);
    floor_2 = PP.shapes.rectangle_add(s, 532 + 1702 / 2, 1365 + 387 / 2, 1702, 387, "0x000000", 0);
    // floor_3 = PP.shapes.rectangle_add(s, 739, 1442 + 209 / 2, 415, 209, "0x000000", 0);
    //floor_4 = PP.shapes.rectangle_add(s, 906, 1650 + 102 / 2, 749, 102, "0x000000", 0);
    //floor_5 = PP.shapes.rectangle_add(s, 3624, 248 + 1596 / 2, 432, 1596, "0x000000", 0); // ultimo blocco dx
    //piattaforma = PP.shapes.rectangle_add(s, 2227 + 335 / 2, 1651 + 30, 335, 60, "0x000000", 0);
    floor_grande = PP.shapes.rectangle_add(s, 531 + 1698 / 2, 1100 / 2, 1694, 1105, "0x000000", 0);
    floor_6 = PP.shapes.rectangle_add(s, 1190 + 1042 / 2, 1099 + 268 / 2, 1042, 268, "0x000000", 0);


    // Aggiungo il pavimento alla fisica
    PP.physics.add(s, floor_1, PP.physics.type.STATIC);
    PP.physics.add(s, floor_pavimentox_1, PP.physics.type.STATIC);
    PP.physics.add(s, floor_2, PP.physics.type.STATIC);
    //PP.physics.add(s, floor_3, PP.physics.type.STATIC);
    //PP.physics.add(s, floor_4, PP.physics.type.STATIC);
    // PP.physics.add(s, floor_5, PP.physics.type.STATIC);
    // PP.physics.add(s, piattaforma, PP.physics.type.STATIC);
    PP.physics.add(s, floor_grande, PP.physics.type.STATIC);
    PP.physics.add(s, floor_6, PP.physics.type.STATIC);

    // Creo il player e le platform
    create_player2(s);
    create_enemy2(s);
    create_platforms2(s);
    create_pomodori(s);
    // create_zucche(s);
    create_strega2_idle_v(s);

    // Creo la collisione pavimento giocatore e nemico
    PP.physics.add_collider(s, player1, floor_1);
    PP.physics.add_collider(s, player1, floor_pavimentox_1);
    PP.physics.add_collider(s, player1, floor_2);
    //PP.physics.add_collider(s, player, floor_3);
    //PP.physics.add_collider(s, player1, floor_4);
    PP.physics.add_collider(s, player1, floor_grande);
    PP.physics.add_collider(s, player1, floor_6);
    // PP.physics.add_collider(s, player1, floor_5);
    PP.physics.add_collider(s, enemy1, floor_pavimentox_1);
    // PP.physics.add_collider(s, enemy_3, floor_pavimentox);
    PP.physics.add_collider(s, enemy4, floor_2);
    //PP.physics.add_collider(s, enemy_5, floor_4);
    //PP.physics.add_collider(s, enemy2, piattaforma);
    PP.physics.add_collider(s, strega2_v, floor_pavimentox_1);

    //interdaccia hudù
    create_hud2(s);

    // Faccio sì che il player non esca dai confini del gioco
    //PP.physics.set_collide_world_bounds(player, true);

    PP.camera.start_follow(s, player1, 0, 0);
    PP.camera.set_follow_offset(s, -559, -53);

}

function update2(s) {
    update_player2(s);
    update_enemy2(s);
    update_platforms2(s);
    update_pomodori(s);
    update_hud2(s);
    //update_zucche(s);
    update_strega2_v(s);

    // Aggiorna la variabile y con la posizione y del giocatore
    y_1 = player1.geometry.body_y;

    // Limite massimo della camera in verticale
    let max_camera_y_1 = 1585;
    if (y_1 >= max_camera_y_1) {
        // Smette di seguire il giocatore oltre il limite
        PP.camera.set_follow_offset(s, -559, -53 + (player1.geometry.body_y - max_camera_y_1));
    } else {
        // Continua a seguire il giocatore
        PP.camera.start_follow(s, player1, 0, 0);
        PP.camera.set_follow_offset(s, -559, -53);
    }
}

function destroy2(s) {
    console.log("Executing destroy() - SCENE 2");
}

PP.scenes.add("level2", preload2, create2, update2, destroy2);
