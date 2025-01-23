let sfondo1_2;
//let blocco1_2;
let blocco2_2;
let blocco3_2;
//let blocco4;
//let blocco5;
//let blocco6;
let floor_2;
let pavimentox_2;
let floor_pavimentox_2;
let floor_2_2;
let floor_3_2;
let floor_4_2;
let floor_5_2;
let y_2;
//let scalaverde;
let scalaviola;
let scalaviola2;
let img_scalaviola;
let piattaforma_2;
let alberiviola;
let alberiviola2;
let alberiviola3;
let floor_sx;
let floor_7;
let floorscalaviola;
let img_zuccamarcia1;
let img_zuccamarcia2;
let img_zuccamarcia3;
let img_zuccamarcia4;
let img_zuccamarcia5;
let zuccamarcia1;
let zuccamarcia2;
let zuccamarcia3;
let zuccamarcia4;
let zuccamarcia5;
let zuccamarcia6;
let zuccamarcia7;
let zuccamarcia8;
let zuccamarcia9;
let zuccamarcia10;
let zuccamarcia11;
let zuccamarcia12;
let zuccamarcia13;
let zuccamarcia14;
let zuccamarcia15;
let zuccamarcia16;
let zuccamarcia17;
let zuccamarcia18;
let zuccamarcia19;
let zuccamarcia20;
let zuccamarcia21;
let zuccamarcia22;

function preload3(s) {
    console.log("Executing preload() - SCENE 3");
    sfondo1_2 = PP.assets.image.load(s, "ASSETS/IMAGES/ennesimosfondo2.png");
    //blocco1_2 = PP.assets.image.load(s, "ASSETS/IMAGES/blocco1.png");
    blocco2_2 = PP.assets.image.load(s, "ASSETS/IMAGES/bloccodimezzo.png");
    blocco3_2 = PP.assets.image.load(s, "ASSETS/IMAGES/blocco3nuovo.png");
    //blocco4 = PP.assets.image.load(s, "ASSETS/IMAGES/blocco4.png");
    //blocco5 = PP.assets.image.load(s, "ASSETS/IMAGES/blocco5.png");
    //blocco6 = PP.assets.image.load(s, "ASSETS/IMAGES/blocco6.png");
    //scalaverde = PP.assets.image.load(s, "ASSETS/IMAGES/scalaverde.png");
    img_scalaviola = PP.assets.image.load(s, "ASSETS/IMAGES/scalaviola.png");
    //scalaviola2 = PP.assets.image.load(s, "ASSETS/IMAGES/scalaviola.png");
    pavimentox_2 = PP.assets.image.load(s, "ASSETS/IMAGES/pavimentonuovo.png");
    alberiviola = PP.assets.image.load(s, "ASSETS/IMAGES/alberiviolanuovi.png");
    alberiviola2 = PP.assets.image.load(s, "ASSETS/IMAGES/alberiviolanuovi.png");
    alberiviola3 = PP.assets.image.load(s, "ASSETS/IMAGES/alberiviolanuovi.png");

    img_zuccamarcia1 = PP.assets.image.load(s, "ASSETS/IMAGES/zuccamorta1.png");
    img_zuccamarcia2 = PP.assets.image.load(s, "ASSETS/IMAGES/zuccamorta2.png");
    img_zuccamarcia3 = PP.assets.image.load(s, "ASSETS/IMAGES/zuccamorta3.png");
    img_zuccamarcia4 = PP.assets.image.load(s, "ASSETS/IMAGES/zuccamorta4.png");
    img_zuccamarcia5 = PP.assets.image.load(s, "ASSETS/IMAGES/zuccamorta5.png");

    preload_platforms3(s);
    preload_hud3(s);
    preload_zucche(s);
    preload_player3(s);
    preload_enemy3(s);
    preload_strega3_v(s);

}

function create3(s) {
    console.log("Executing create() - SCENE 3");
    sfondo1_2 = PP.assets.image.add(s, sfondo1_2, 0, 0, 0, 0);
    //blocco1_2 = PP.assets.image.add(s, blocco1_2, 0, 2160 - 1853, 0, 0);
    blocco2_2 = PP.assets.image.add(s, blocco2_2, 531, 248, 0, 0);
    blocco3_2 = PP.assets.image.add(s, blocco3_2, 2989, 248, 0, 0);
    // blocco4 = PP.assets.image.add(s, blocco4, 531, 1368, 0, 0);
    //blocco5 = PP.assets.image.add(s, blocco5, 531, 1442, 0, 0);
    //blocco6 = PP.assets.image.add(s, blocco6, 531, 1650, 0, 0);
    //scalaverde = PP.assets.image.add(s, scalaverde, 472, 1752, 0, 0);
    //scalaviola = PP.assets.image.add(s, img_scalaviola, 3275, 1561, 0, 0);
    scalaviola2 = PP.assets.image.add(s, img_scalaviola, 2560, 630, 0, 0);
    pavimentox_2 = PP.assets.image.add(s, pavimentox_2, 0, 2007, 0, 0);
    alberiviola = PP.assets.image.add(s, alberiviola, 3385, 8, 0, 0);
    alberiviola2 = PP.assets.image.add(s, alberiviola2, 4100, 8, 0, 0);
    alberiviola3 = PP.assets.image.add(s, alberiviola3, 1720, 8, 0, 0);

    zuccamarcia1 = PP.assets.image.add(s, img_zuccamarcia1, 2600, 2007, 0, 1);
    zuccamarcia2 = PP.assets.image.add(s, img_zuccamarcia2, 3000, 1785, 0, 1);
    zuccamarcia3 = PP.assets.image.add(s, img_zuccamarcia3, 2450, 1668, 0, 1);
    zuccamarcia4 = PP.assets.image.add(s, img_zuccamarcia4, 2800, 1570, 0, 1);
    zuccamarcia5 = PP.assets.image.add(s, img_zuccamarcia5, 3300, 1500, 0, 1);
    zuccamarcia6 = PP.assets.image.add(s, img_zuccamarcia1, 3070, 1370, 0, 1);
    zuccamarcia7 = PP.assets.image.add(s, img_zuccamarcia2, 2550, 1287, 0, 1);
    zuccamarcia8 = PP.assets.image.add(s, img_zuccamarcia3, 2970, 1065, 0, 1);
    zuccamarcia9 = PP.assets.image.add(s, img_zuccamarcia4, 2700, 904, 0, 1);
    zuccamarcia10 = PP.assets.image.add(s, img_zuccamarcia5, 2600, 630, 0, 1);
    zuccamarcia11 = PP.assets.image.add(s, img_zuccamarcia1, 2950, 468, 0, 1);
    zuccamarcia12 = PP.assets.image.add(s, img_zuccamarcia4, 3150, 315, 0, 1);
    zuccamarcia13 = PP.assets.image.add(s, img_zuccamarcia3, 1800, 2007, 0, 1);
    zuccamarcia14 = PP.assets.image.add(s, img_zuccamarcia4, 2900, 2007, 0, 1);
    zuccamarcia15 = PP.assets.image.add(s, img_zuccamarcia5, 3550, 2007, 0, 1);
    zuccamarcia16 = PP.assets.image.add(s, img_zuccamarcia1, 3250, 1785, 0, 1);
    zuccamarcia17 = PP.assets.image.add(s, img_zuccamarcia2, 3070, 2007, 0, 1);
    zuccamarcia18 = PP.assets.image.add(s, img_zuccamarcia3, 2800, 1287, 0, 1);
    zuccamarcia19 = PP.assets.image.add(s, img_zuccamarcia5, 3300, 1065, 0, 1);
    zuccamarcia20 = PP.assets.image.add(s, img_zuccamarcia2, 3000, 630, 0, 1);

    zuccamarcia22 = PP.assets.image.add(s, img_zuccamarcia1, 3690, 250, 0, 1);


    // Creo un pavimento "trasparente"
    floor_2 = PP.shapes.rectangle_add(s, 163 / 2, 2160 - 1853 / 2, 163, 1853, "0x000000", 0);
    floor_pavimentox_2 = PP.shapes.rectangle_add(s, 3840 / 2, 2007 + 153 / 2, 3840, 153, "0x000000", 0);
    floor_2_2 = PP.shapes.rectangle_add(s, 906, 1368 + 75 / 2, 749, 75, "0x000000", 0);
    // floor_3 = PP.shapes.rectangle_add(s, 739, 1442 + 209 / 2, 415, 209, "0x000000", 0);
    floor_4_2 = PP.shapes.rectangle_add(s, 906, 1650 + 102 / 2, 749, 102, "0x000000", 0);
    floor_5_2 = PP.shapes.rectangle_add(s, 3624, 248 + 1596 / 2, 432, 1596, "0x000000", 0); // ultimo blocco dx
    //piattaforma_2 = PP.shapes.rectangle_add(s, 2227 + 335 / 2, 1651 + 30, 335, 60, "0x000000", 0);
    floor_sx = PP.shapes.rectangle_add(s, 1188 + 1373 / 2, 0 + 1410 / 2, 1373, 1410, "0x000000", 0);
    floor_7 = PP.shapes.rectangle_add(s, 1188 + 1037 / 2, 1443 + 308 / 2, 1037, 308, "0x000000", 0);
    floorscalaviola = PP.shapes.rectangle_add(s, 2560 + 69 / 2, 630 + 325 / 2, 69, 325, "0x000000", 0);


    // Aggiungo il pavimento alla fisica
    PP.physics.add(s, floor_2, PP.physics.type.STATIC);
    PP.physics.add(s, floor_pavimentox_2, PP.physics.type.STATIC);
    PP.physics.add(s, floor_2_2, PP.physics.type.STATIC);
    //PP.physics.add(s, floor_3, PP.physics.type.STATIC);
    PP.physics.add(s, floor_4_2, PP.physics.type.STATIC);
    PP.physics.add(s, floor_5_2, PP.physics.type.STATIC);
    // PP.physics.add(s, piattaforma_2, PP.physics.type.STATIC);
    PP.physics.add(s, floor_sx, PP.physics.type.STATIC);
    PP.physics.add(s, floor_7, PP.physics.type.STATIC);
    PP.physics.add(s, floorscalaviola, PP.physics.type.STATIC);

    // Creo il player e le platform
    create_player3(s);
    create_enemy3(s);
    create_platforms3(s);
    create_zucche(s);
    create_strega3_idle_v(s);

    zuccamarcia21 = PP.assets.image.add(s, img_zuccamarcia2, 3450, 250, 0, 1);

    // Creo la collisione pavimento giocatore e nemico
    PP.physics.add_collider(s, player2, floor_2);
    PP.physics.add_collider(s, player2, floor_pavimentox_2);
    PP.physics.add_collider(s, player2, floor_2_2);
    //PP.physics.add_collider(s, player, floor_3);
    PP.physics.add_collider(s, player2, floor_4_2);
    PP.physics.add_collider(s, player2, floor_5_2);
    PP.physics.add_collider(s, player2, floor_sx);
    PP.physics.add_collider(s, player2, floor_7);
    //PP.physics.add_collider(s, enemy1, floor_pavimentox);
    // PP.physics.add_collider(s, enemy_3, floor_pavimentox);
    //PP.physics.add_collider(s, enemy4, floor_2);
    //PP.physics.add_collider(s, enemy_5, floor_4);
    //PP.physics.add_collider(s, enemy2, piattaforma_2);
    //PP.physics.add_collider(s, enemy2, floor_7);
    //PP.physics.add_collider(s, enemy3, floor_sx);
    PP.physics.add_collider(s, strega3_v, floor_5_2);

    PP.physics.add_overlap_f(s, player2, floorscalaviola, overlap_ladder_v);

    // Faccio sì che il player non esca dai confini del gioco
    //PP.physics.set_collide_world_bounds(player, true);

    create_hud3(s);

    PP.camera.start_follow(s, player2, 0, 0);
    PP.camera.set_follow_offset(s, -280, -33);

}

function update3(s) {

    update_player3(s);
    update_enemy3(s);
    update_platforms3(s);
    update_zucche(s);
    update_hud3(s);
    update_strega3_v(s);

    // Aggiorna la variabile y con la posizione y del giocatore
    y_2 = player2.geometry.body_y;

    // Limite massimo della camera in verticale
    let max_camera_y_2 = 1585;
    if (y_2 >= max_camera_y_2) {
        // Smette di seguire il giocatore oltre il limite
        PP.camera.set_follow_offset(s, -280, -33 + (player2.geometry.body_y - max_camera_y_2));
    } else {
        // Continua a seguire il giocatore
        PP.camera.start_follow(s, player2, 0, 0);
        PP.camera.set_follow_offset(s, -280, -33);
    }
}

function destroy3(s) {
    console.log("Executing destroy() - SCENE 3");
}

PP.scenes.add("level3", preload3, create3, update3, destroy3);
