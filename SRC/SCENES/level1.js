let floor;
let background_0;
let background_1;
let background_2;
let background_3;
let background_4;
let img_terreno;

function preload(s) {
    console.log("Executing preload() - SCENE");

    img_terreno = PP.assets.image.load(s, "ASSETS/IMAGES/terreno.png");

    preload_platforms(s);
    preload_player(s);


    // Carico i nuovi background
    background_0 = PP.assets.image.load(s, "ASSETS/IMAGES/sfondo.png");
    background_1 = PP.assets.image.load(s, "ASSETS/IMAGES/alberi1.png");
    background_2 = PP.assets.image.load(s, "ASSETS/IMAGES/alberi2.png");
    background_3 = PP.assets.image.load(s, "ASSETS/IMAGES/alberi3.png");
    background_4 = PP.assets.image.load(s, "ASSETS/IMAGES/alberi4.png");

}

function create(s) {
    console.log("Executing create() - SCENE");

    // Inserisco background e giocatore


    PP.assets.image.add(s, background_0, 0, 0, 0, 0);
    PP.assets.image.add(s, background_1, 0, 0, 0, 0);
    PP.assets.image.add(s, background_2, 0, 0, 0, 0);
    PP.assets.image.add(s, background_3, 0, 0, 0, 0);
    PP.assets.image.add(s, background_4, 0, 0, 0, 0);
    PP.assets.image.add(s, img_terreno, 0, 0, 0, 0);

    // Aggiungo i livelli di background
    //background_0 = PP.assets.tilesprite.add(s, background_0, 0, 0, 1280, 720, 0, 0);
    //background_0.tile_geometry.scroll_factor_x = 0.05;
    //background_0.tile_geometry.scroll_factor_y = 0;

    //background_1 = PP.assets.tilesprite.add(s, background_1, 0, 0, 1280, 720, 0, 0);
    //background_1.tile_geometry.scroll_factor_x = 0.1;
    //background_1.tile_geometry.scroll_factor_y = 0;

    //background_2 = PP.assets.tilesprite.add(s, background_2, 0, 0, 1280, 720, 0, 0);
    //background_2.tile_geometry.scroll_factor_x = 0.2;
    //background_2.tile_geometry.scroll_factor_y = 0;

    //background_3 = PP.assets.tilesprite.add(s, background_3, 0, 0, 1280, 720, 0, 0);
    //background_3.tile_geometry.scroll_factor_x = 0.3;
    //background_3.tile_geometry.scroll_factor_y = 0;


    // Creo un pavimento "trasparente"
    floor = PP.shapes.rectangle_add(s, 640, 570, 1280, 1, "0x000000", 0);
    // Aggiungo il pavimento alla fisica
    PP.physics.add(s, floor, PP.physics.type.STATIC);

    // Creo il player

    create_player(s);
    create_platforms(s);



    // Creo la collisione pavimento giocatore
    PP.physics.add_collider(s, player, floor);

    // Inizio a seguire il player con la camera
    //PP.camera.start_follow(s, player, player.geometry.x - PP.game.config.canvas_width / 2 + player.geometry.display_width / 2, 250);
}

function update(s) {
    update_player(s);
    update_platforms(s);

    // Aggiorno il movimento del background per effetto parallasse
    // background_0.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.05;
    // background_1.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.1;
    // background_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.2;
    // background_3.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.3;

    // Sincronizzo l'altezza del background con la telecamera
    // background_0.tile_geometry.y = PP.camera.get_scroll_y(s);
    // background_1.tile_geometry.y = PP.camera.get_scroll_y(s);
    // background_2.tile_geometry.y = PP.camera.get_scroll_y(s);
    // background_3.tile_geometry.y = PP.camera.get_scroll_y(s);

    //PP.camera.set_follow_offset(s, 0, 0);
}

function destroy(s) {
    console.log("Executing destroy() - SCENE");
}

PP.scenes.add("level1", preload, create, update, destroy);
