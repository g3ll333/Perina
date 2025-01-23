let floor;

let img_background_1, img_background_2, img_background_3, img_background_4, img_background_5;
let background_1, background_2, background_3, background_4, background_5;

let settings;
let img_settings;
let okaybutton;
let buttonokay;

let img_peramarcia1t;
let img_peramarcia2t;
let img_peramarcia3t;
let img_peramarcia4t;
let img_peramarcia5t;
let img_peramarcia6t;
let peramarcia1t;
let peramarcia2t;
let peramarcia3t;
let peramarcia4t;
let peramarcia5t;
let peramarcia6t;
let peramarcia7t;
let peramarcia8t;
let peramarcia9t;
let peramarcia10t;
let peramarcia11t;
let peramarcia12t;
let peramarcia13t;
let peramarcia14t;
let peramarcia15t;
let peramarcia16t;
let peramarcia17t;
let peramarcia18t;
let peramarcia19t;
let peramarcia20t;
let peramarcia21t;
let scalablut;
let floorscalablut;

function preload(s) {
    console.log("Executing preload() - TUTORIAL");

    // Carico i background
    img_background_1 = PP.assets.image.load(s, "ASSETS/IMAGES/background1.png");
    img_background_2 = PP.assets.image.load(s, "ASSETS/IMAGES/background2.png");
    img_background_3 = PP.assets.image.load(s, "ASSETS/IMAGES/background3.png");
    img_background_4 = PP.assets.image.load(s, "ASSETS/IMAGES/background4.png");
    img_background_5 = PP.assets.image.load(s, "ASSETS/IMAGES/background5.png");
    scalablut = PP.assets.image.load(s, "ASSETS/IMAGES/scalablu.png");
    img_peramarcia1t = PP.assets.image.load(s, "ASSETS/IMAGES/peramarcia1.png");
    img_peramarcia2t = PP.assets.image.load(s, "ASSETS/IMAGES/peramarcia2.png");
    img_peramarcia3t = PP.assets.image.load(s, "ASSETS/IMAGES/peramarcia3.png");
    img_peramarcia4t = PP.assets.image.load(s, "ASSETS/IMAGES/peramarcia4.png");
    img_peramarcia5t = PP.assets.image.load(s, "ASSETS/IMAGES/peramarcia5.png");
    img_peramarcia6t = PP.assets.image.load(s, "ASSETS/IMAGES/peramarcia6.png");

    img_settings = PP.assets.image.load(s, "ASSETS/IMAGES/settings.png");
    okaybutton = PP.assets.image.load(s, "ASSETS/IMAGES/okayvecchina.png");

    preload_pere(s);
    preload_hud(s);
    preload_platforms(s);
    preload_player(s);
    preload_enemy(s);
    preload_strega1_v(s);
}

function create(s) {
    console.log("Executing create() - TUTORIAL");

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

    scalablut = PP.assets.image.add(s, scalablut, 2471, 370, 0, 0);
    floorscalablut = PP.shapes.rectangle_add(s, 2471 + 69 / 2, 370 + 207 / 2, 73, 207, "0x000000", 0);

    peramarcia1t = PP.assets.image.add(s, img_peramarcia1t, 360, 450, 0, 1);
    peramarcia2t = PP.assets.image.add(s, img_peramarcia2t, 600, 575, 0, 1);
    peramarcia3t = PP.assets.image.add(s, img_peramarcia3t, 850, 330, 0, 1);
    peramarcia4t = PP.assets.image.add(s, img_peramarcia4t, 1050, 330, 0, 1);
    peramarcia5t = PP.assets.image.add(s, img_peramarcia5t, 1820, 150, 0, 1);
    peramarcia6t = PP.assets.image.add(s, img_peramarcia2t, 2400, 575, 0, 1);
    peramarcia7t = PP.assets.image.add(s, img_peramarcia1t, 2580, 373, 0, 1);
    peramarcia8t = PP.assets.image.add(s, img_peramarcia3t, 2740, 120, 0, 1);
    peramarcia9t = PP.assets.image.add(s, img_peramarcia2t, 3800, 575, 0, 1)
    peramarcia10t = PP.assets.image.add(s, img_peramarcia5t, 800, 575, 0, 1);
    peramarcia11t = PP.assets.image.add(s, img_peramarcia3t, 2000, 575, 0, 1);
    peramarcia12t = PP.assets.image.add(s, img_peramarcia2t, 200, 575, 0, 1);
    peramarcia13t = PP.assets.image.add(s, img_peramarcia1t, 1700, 575, 0, 1);
    peramarcia14t = PP.assets.image.add(s, img_peramarcia4t, 1090, 575, 0, 1);
    peramarcia15t = PP.assets.image.add(s, img_peramarcia5t, 2890, 575, 0, 1);
    peramarcia16t = PP.assets.image.add(s, img_peramarcia6t, 2750, 373, 0, 1);
    peramarcia17t = PP.assets.image.add(s, img_peramarcia6t, 3300, 300, 0, 1);
    peramarcia18t = PP.assets.image.add(s, img_peramarcia6t, 2890, 120, 0, 1);
    peramarcia19t = PP.assets.image.add(s, img_peramarcia6t, 1300, 575, 0, 1);

    peramarcia21t = PP.assets.image.add(s, img_peramarcia6t, 1730, 150, 0, 1);

    // Creo un pavimento "trasparente"
    floor = PP.shapes.rectangle_add(s, 1920, 575, 3840, 1, "0x000000", 0);
    // Aggiungo il pavimento alla fisica
    PP.physics.add(s, floor, PP.physics.type.STATIC);

    PP.physics.add(s, floorscalablut, PP.physics.type.STATIC);

    // Creazione player, pere, nemici e piattaforme
    create_player(s);
    create_enemy(s);
    create_platforms(s);
    create_pere(s);
    create_strega1_idle_v(s);

    peramarcia20t = PP.assets.image.add(s, img_peramarcia1t, 3500, 575, 0, 1);

    // Creo la collisione pavimento giocatore e nemico
    PP.physics.add_collider(s, player, floor);
    PP.physics.add_collider(s, enemy, floor);
    PP.physics.add_collider(s, enemy_2, floor);
    PP.physics.add_overlap_f(s, player, floorscalablut, overlap_ladder1);

    // Interfaccia hud
    create_hud(s);

    // Faccio sì che il player non esca dai confini del gioco
    // PP.physics.set_collide_world_bounds(player, true);

    // Offset camera
    PP.camera.start_follow(s, player, 0, 0);
    PP.camera.set_follow_offset(s, -490, 210);

    settings = PP.assets.image.add(s, img_settings, 0, 45, 0, 0);
    settings.tile_geometry.scroll_factor_x = 0;
    settings.tile_geometry.scroll_factor_y = 0;

    buttonokay = PP.assets.image.add(s, okaybutton, 800, 430, 0.5, 0.5);
    buttonokay.tile_geometry.scroll_factor_x = 0;
    buttonokay.tile_geometry.scroll_factor_y = 0;

    PP.interactive.mouse.add(buttonokay, "pointerdown", function () { mouse_click_yes(s, buttonokay, settings); });
}

function mouse_click_yes(s) {
    console.log("Destroying button and settings image");
    PP.assets.destroy(buttonokay);
    PP.assets.destroy(settings);
    console.log("Starting scene 1");
    PP.scenes.start("parallax");

}

function update(s) {
    update_player(s);
    update_platforms(s);
    update_pere(s);
    update_enemy(s);
    update_strega1_v(s)
    update_hud(s);

    background_1.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.10;
    background_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.04;
    background_3.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.06;
    background_4.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.08;
    background_5.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.10;
}

function destroy(s) {
    console.log("Executing destroy() - TUTORIAL");
}

PP.scenes.add("tutorial", preload, create, update, destroy);
