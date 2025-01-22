let floor_v;

let img_background_1_v, img_background_2_v, img_background_3_v, img_background_4_v, img_background_5_v;
let background_1_v, background_2_v, background_3_v, background_4_v, background_5_v;


function preload(s) {
    console.log("Executing preload() - SCENE 1");

    // Carico i background
    img_background_1_v = PP.assets.image.load(s, "ASSETS/IMAGES/background1.png");
    img_background_2_v = PP.assets.image.load(s, "ASSETS/IMAGES/background2.png");
    img_background_3_v = PP.assets.image.load(s, "ASSETS/IMAGES/background3.png");
    img_background_4_v = PP.assets.image.load(s, "ASSETS/IMAGES/background4.png");
    img_background_5_v = PP.assets.image.load(s, "ASSETS/IMAGES/background5.png");



    preload_platforms_v(s);
    preload_player_v(s);
    preload_strega1_v(s);

}

function create(s) {
    console.log("Executing create() - SCENE 1");

    // Inserisco i background
    background_1_v = PP.assets.tilesprite.add(s, img_background_1_v, 0, 5, 3840, 720, 0, 0);
    background_1_v.tile_geometry.scroll_factor_x = 0;

    background_2_v = PP.assets.tilesprite.add(s, img_background_2_v, 0, 10, 3840, 720, 0, 0);
    background_2_v.tile_geometry.scroll_factor_x = 0;

    background_3_v = PP.assets.tilesprite.add(s, img_background_3_v, 0, 10, 3840, 720, 0, 0);
    background_3_v.tile_geometry.scroll_factor_x = 0;

    background_4_v = PP.assets.tilesprite.add(s, img_background_4_v, 0, 10, 3840, 720, 0, 0);
    background_4_v.tile_geometry.scroll_factor_x = 0;

    background_5_v = PP.assets.tilesprite.add(s, img_background_5_v, 0, 10, 3840, 720, 0, 0);
    background_5_v.tile_geometry.scroll_factor_x = 0;

    // Creo un pavimento "trasparente"
    floor_v = PP.shapes.rectangle_add(s, 1920, 575, 4200, 1, "0x000000", 0);
    // Aggiungo il pavimento alla fisica
    PP.physics.add(s, floor_v, PP.physics.type.STATIC);

    // Creazione player, piattaforme e strega
    create_player_v(s);
    create_platforms_v(s);
    create_strega1_v(s)


    // Creo la collisione pavimento giocatore e nemico
    PP.physics.add_collider(s, player_v, floor_v);
    PP.physics.add_collider(s, strega1_v, floor_v);


    // Offset camera
    PP.camera.start_follow(s, player_v, 0, 0);
    PP.camera.set_follow_offset(s, -490, 210);

}



function update(s) {
    update_player_v(s);
    update_platforms_v(s);
    update_strega1_v(s)


    background_1_v.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.10;
    background_2_v.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.04;
    background_3_v.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.06;
    background_4_v.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.08;
    background_5_v.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.10;

}


function destroy(s) {
    console.log("Executing destroy() - SCENE 1");
}

PP.scenes.add("strega1morte", preload, create, update, destroy);
