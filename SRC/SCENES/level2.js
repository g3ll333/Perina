let sfondo1;
let blocco1;
let blocco2;
let floor_1;
let pavimentox_1;
let floor_pavimentox_1;
let floor_2;
let y_1;
let scalaverde;
let alberiverdi;
let alberiverdi2;
let floor_grande;
let floor_6;
let floorscalaverde;

function preload2(s) {
    console.log("Executing preload() - SCENE 2");
    sfondo1 = PP.assets.image.load(s, "ASSETS/IMAGES/ennesimosfondo2.png");
    blocco1 = PP.assets.image.load(s, "ASSETS/IMAGES/blocco1verde.png");
    blocco2 = PP.assets.image.load(s, "ASSETS/IMAGES/bloccodimezzo.png");
    scalaverde = PP.assets.image.load(s, "ASSETS/IMAGES/scalaverde.png");
    pavimentox_1 = PP.assets.image.load(s, "ASSETS/IMAGES/pavimentonuovo.png");
    alberiverdi = PP.assets.image.load(s, "ASSETS/IMAGES/alberiverdi.png");
    alberiverdi2 = PP.assets.image.load(s, "ASSETS/IMAGES/alberiverdinuovi.png");

    preload_pomodori(s);
    preload_hud2(s);
    preload_platforms2(s);
    preload_player2(s);
    preload_enemy2(s);
    preload_strega2_v(s);
}

function create2(s) {
    console.log("Executing create() - SCENE 2");
    sfondo1 = PP.assets.image.add(s, sfondo1, 0, 0, 0, 0);
    blocco1 = PP.assets.image.add(s, blocco1, 0, 2160 - 1853, 0, 0);
    blocco2 = PP.assets.image.add(s, blocco2, 531, 248, 0, 0);
    scalaverde = PP.assets.image.add(s, scalaverde, 472, 1752, 0, 0);
    pavimentox_1 = PP.assets.image.add(s, pavimentox_1, 0, 2007, 0, 0);
    alberiverdi = PP.assets.image.add(s, alberiverdi, 0, 30, 0, 0);
    alberiverdi2 = PP.assets.image.add(s, alberiverdi2, 462, 2, 0, 0);

    floor_1 = PP.shapes.rectangle_add(s, 163 / 2, 2160 - 1853 / 2, 163, 1853, "0x000000", 0);
    floor_pavimentox_1 = PP.shapes.rectangle_add(s, 3840 / 2, 2007 + 153 / 2, 3840, 153, "0x000000", 0);
    floor_2 = PP.shapes.rectangle_add(s, 532 + 1702 / 2, 1365 + 387 / 2, 1702, 387, "0x000000", 0);
    floor_grande = PP.shapes.rectangle_add(s, 531 + 1698 / 2, 1100 / 2, 1694, 1105, "0x000000", 0);
    floor_6 = PP.shapes.rectangle_add(s, 1190 + 1042 / 2, 1099 + 268 / 2, 1042, 268, "0x000000", 0);
    floorscalaverde = PP.shapes.rectangle_add(s, 472 + 69 / 2, 1752 + 256 / 2, 69, 256, "0x000000", 0);

    PP.physics.add(s, floor_1, PP.physics.type.STATIC);
    PP.physics.add(s, floor_pavimentox_1, PP.physics.type.STATIC);
    PP.physics.add(s, floor_2, PP.physics.type.STATIC);
    PP.physics.add(s, floor_grande, PP.physics.type.STATIC);
    PP.physics.add(s, floor_6, PP.physics.type.STATIC);
    PP.physics.add(s, floorscalaverde, PP.physics.type.STATIC);

    create_player2(s);
    create_enemy2(s);
    create_platforms2(s);
    create_pomodori(s);
    create_strega2_idle_v(s);

    PP.physics.add_collider(s, player1, floor_1);
    PP.physics.add_collider(s, player1, floor_pavimentox_1);
    PP.physics.add_collider(s, player1, floor_2);
    PP.physics.add_collider(s, player1, floor_grande);
    PP.physics.add_collider(s, player1, floor_6);
    PP.physics.add_collider(s, enemy1, floor_pavimentox_1);
    PP.physics.add_collider(s, enemy4, floor_2);
    PP.physics.add_collider(s, strega2_v, floor_pavimentox_1);

    PP.physics.add_overlap_f(s, player1, floorscalaverde, overlap_ladder);

    create_hud2(s);

    PP.camera.start_follow(s, player1, 0, 0);
    PP.camera.set_follow_offset(s, -559, -53);
}

function update2(s) {
    update_player2(s);
    update_enemy2(s);
    update_platforms2(s);
    update_pomodori(s);
    update_hud2(s);
    update_strega2_v(s);

    y_1 = player1.geometry.body_y;

    let max_camera_y_1 = 1585;
    if (y_1 >= max_camera_y_1) {
        PP.camera.set_follow_offset(s, -559, -53 + (player1.geometry.body_y - max_camera_y_1));
    } else {
        PP.camera.start_follow(s, player1, 0, 0);
        PP.camera.set_follow_offset(s, -559, -53);
    }
}

function destroy2(s) {
    console.log("Executing destroy() - SCENE 2");
}

PP.scenes.add("level2", preload2, create2, update2, destroy2);