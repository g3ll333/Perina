let sfondo1_v;
let blocco1_v;
let img_sfondo1_v;
let img_blocco1_v;

let floor_1_v;
let img_floor_1_v;
let pavimento_1_v;

let y_1_v;

let img_pomomarcia3_v;
let img_pomomarcia4_v;
let pomomarcia8_v;
let pomomarcia9_v;


function preload2_v(s) {
    console.log("Executing preload() - SCENE 2");
    img_sfondo1_v = PP.assets.image.load(s, "ASSETS/IMAGES/ennesimosfondo2.png");
    img_blocco1_v = PP.assets.image.load(s, "ASSETS/IMAGES/bloccodimezzo.png");
    img_floor_1_v = PP.assets.image.load(s, "ASSETS/IMAGES/pavimentonuovo.png");

    img_pomomarcia3_v = PP.assets.image.load(s, "ASSETS/IMAGES/pomomorto3.png");
    img_pomomarcia4_v = PP.assets.image.load(s, "ASSETS/IMAGES/pomomorto4.png");

    preload_player2_v(s);
    preload_strega2_v(s);

}

function create2_v(s) {
    console.log("Executing create() - SCENE 2");
    sfondo1_v = PP.assets.image.add(s, img_sfondo1_v, 0, 0, 0, 0);
    blocco1_v = PP.assets.image.add(s, img_blocco1_v, 531, 248, 0, 0);
    floor_1_v = PP.assets.image.add(s, img_floor_1_v, 0, 2007, 0, 0);

    pomomarcia8_v = PP.assets.image.add(s, img_pomomarcia3_v, 1320, 2007, 0, 1);
    pomomarcia9_v = PP.assets.image.add(s, img_pomomarcia4_v, 1150, 2007, 0, 1);

    // Creo un pavimento "trasparente"
    pavimento_1_v = PP.shapes.rectangle_add(s, 3840 / 2, 2007 + 153 / 2, 3840, 153, "0x000000", 0);

    // Aggiungo il pavimento alla fisica
    PP.physics.add(s, pavimento_1_v, PP.physics.type.STATIC);

    // Creo il player, le platform e la strega
    create_player2_v(s);
    create_strega2_v(s);

    // Creo la collisione pavimento giocatore e nemico
    PP.physics.add_collider(s, player2_v, pavimento_1_v);
    PP.physics.add_collider(s, strega2_v, pavimento_1_v);

    PP.camera.start_follow(s, player2_v, 0, 0);
    PP.camera.set_follow_offset(s, -400, -53);

}

function update2_v(s) {
    update_player2_v(s);
    update_strega2_v(s);

    y_1_v = player2_v.geometry.body_y;

    let max_camera_y_1_v = 1557;
    if (y_1_v >= max_camera_y_1_v) {
        PP.camera.set_follow_offset(s, -400, -53 + (player2_v.geometry.body_y - max_camera_y_1_v));
    } else {
        PP.camera.start_follow(s, player2_v, 0, 0);
        PP.camera.set_follow_offset(s, -400, -53);
    }

}

function destroy2_v(s) {
    console.log("Executing destroy() - SCENE 2");
}

PP.scenes.add("strega2morte", preload2_v, create2_v, update2_v, destroy2_v);
