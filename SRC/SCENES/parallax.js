let floor;

let img_background_1, img_background_2, img_background_3, img_background_4, img_background_5;
let background_1, background_2, background_3, background_4, background_5;


function preload(s) {
    console.log("Executing preload() - SCENE");

    // Carico i background
    img_background_1 = PP.assets.image.load(s, "ASSETS/IMAGES/background1.png");
    img_background_2 = PP.assets.image.load(s, "ASSETS/IMAGES/background2.png");
    img_background_3 = PP.assets.image.load(s, "ASSETS/IMAGES/background3.png");
    img_background_4 = PP.assets.image.load(s, "ASSETS/IMAGES/background4.png");
    img_background_5 = PP.assets.image.load(s, "ASSETS/IMAGES/background5.png");

    preload_platforms(s);
    preload_player(s);
    preload_enemy(s);
}

function create(s) {
    console.log("Executing create() - SCENE");

    // Inserisco i background
    background_1 = PP.assets.tilesprite.add(s, img_background_1, 0, 5, 3840, 720, 0, 0);
    background_1.tile_geometry.scroll_factor_x = 0;

    background_2 = PP.assets.tilesprite.add(s, img_background_2, 0, 10, 3840, 720, 0, 0);
    background_2.tile_geometry.scroll_factor_x = 0;

    background_3 = PP.assets.tilesprite.add(s, img_background_3, 0, 10, 3840, 720, 0, 0);
    background_3.tile_geometry.scroll_factor_x = 0;

    background_4 = PP.assets.tilesprite.add(s, img_background_4, 0, 10, 3840, 720, 0, 0);
    background_4.tile_geometry.scroll_factor_x = 0;

    background_5 = PP.assets.tilesprite.add(s, img_background_5, 0, 10, 3840, 720, 0, 0);
    background_5.tile_geometry.scroll_factor_x = 0;

    // Creo un pavimento "trasparente"
    floor = PP.shapes.rectangle_add(s, 1920, 575, 3840, 1, "0x000000", 0);
    // Aggiungo il pavimento alla fisica
    PP.physics.add(s, floor, PP.physics.type.STATIC);

    // Creo il player
    create_player(s);

    create_enemy(s);
    create_platforms(s);

    // Creo la collisione pavimento giocatore e nemico
    PP.physics.add_collider(s, player, floor);
    PP.physics.add_collider(s, enemy, floor);


    // Faccio sì che il player non esca dai confini del gioco
    // PP.physics.set_collide_world_bounds(player, true);

    PP.camera.start_follow(s, player, 0, 0);
    PP.camera.set_follow_offset(s, -490, 210);

}

function update(s) {
    update_player(s);
    update_platforms(s);
    update_enemy(s);

    background_1.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.20;
    background_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.08;
    background_3.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.10;
    background_4.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.12;
    background_5.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.20;

}

function destroy(s) {
    console.log("Executing destroy() - SCENE");
}

PP.scenes.add("parallax", preload, create, update, destroy);
