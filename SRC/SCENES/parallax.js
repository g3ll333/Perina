let floor;

let img_background_1, img_background_2, img_background_3, img_background_4, img_background_5;
let background_1, background_2, background_3, background_4, background_5;


function preload(s) {
    console.log("Executing preload() - SCENE 1");

    // Carico i background
    img_background_1 = PP.assets.image.load(s, "ASSETS/IMAGES/background1.png");
    img_background_2 = PP.assets.image.load(s, "ASSETS/IMAGES/background2.png");
    img_background_3 = PP.assets.image.load(s, "ASSETS/IMAGES/background3.png");
    img_background_4 = PP.assets.image.load(s, "ASSETS/IMAGES/background4.png");
    img_background_5 = PP.assets.image.load(s, "ASSETS/IMAGES/background5.png");

    //img_cestino = PP.assets.image.load(s, "ASSETS/IMAGES/cestinovuoto.png");
    preload_pere(s);
    preload_hud(s);
    //preload_hud_1(s);
    preload_platforms(s);
    preload_player(s);
    preload_enemy(s);

}

function create(s) {
    console.log("Executing create() - SCENE 1");

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

    // Creazione player, pere, nemici e piattaforme
    create_player(s);
    create_enemy(s);
    create_platforms(s);
    create_pere(s);

    // Creo la collisione pavimento giocatore e nemico
    PP.physics.add_collider(s, player, floor);
    PP.physics.add_collider(s, enemy, floor);
    PP.physics.add_collider(s, enemy_2, floor);

    //interfaccia hud
    create_hud(s);
    //create_hud_1(s);

    // Faccio sì che il player non esca dai confini del gioco
    // PP.physics.set_collide_world_bounds(player, true);


    //offset camera
    PP.camera.start_follow(s, player, 0, 0);
    PP.camera.set_follow_offset(s, -490, 210);

}

function update(s) {
    update_player(s);
    update_platforms(s);
    update_pere(s);
    update_enemy(s);
    update_hud(s);


    background_1.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.20;
    background_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.08;
    background_3.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.10;
    background_4.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.12;
    background_5.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.20;


}

function destroy(s) {
    console.log("Executing destroy() - SCENE 1");
}

PP.scenes.add("parallax", preload, create, update, destroy);
