let floor;

let img_background_1, img_background_2, img_background_3, img_background_4, img_background_5;
let background_1, background_2, background_3, background_4, background_5;
let scalablu;
let floorscalablu;
let img_peramarcia1;
let img_peramarcia2;
let img_peramarcia3;
let img_peramarcia4;
let img_peramarcia5;
let img_peramarcia6;
let peramarcia1;
let peramarcia2;
let peramarcia3;
let peramarcia4;
let peramarcia5;
let peramarcia6;
let peramarcia7;
let peramarcia8;
let peramarcia9;
let peramarcia10;
let peramarcia11;
let peramarcia12;
let peramarcia13;
let peramarcia14;
let peramarcia15;
let peramarcia16;
let peramarcia17;
let peramarcia18;
let peramarcia19;
let peramarcia20;
let peramarcia21;






function preload(s) {
    console.log("Executing preload() - SCENE 1");

    // Carico i background
    img_background_1 = PP.assets.image.load(s, "ASSETS/IMAGES/background1.png");
    img_background_2 = PP.assets.image.load(s, "ASSETS/IMAGES/background2.png");
    img_background_3 = PP.assets.image.load(s, "ASSETS/IMAGES/background3.png");
    img_background_4 = PP.assets.image.load(s, "ASSETS/IMAGES/background4.png");
    img_background_5 = PP.assets.image.load(s, "ASSETS/IMAGES/background5.png");
    scalablu = PP.assets.image.load(s, "ASSETS/IMAGES/scalablu.png");
    img_peramarcia1 = PP.assets.image.load(s, "ASSETS/IMAGES/peramarcia1.png");
    img_peramarcia2 = PP.assets.image.load(s, "ASSETS/IMAGES/peramarcia2.png");
    img_peramarcia3 = PP.assets.image.load(s, "ASSETS/IMAGES/peramarcia3.png");
    img_peramarcia4 = PP.assets.image.load(s, "ASSETS/IMAGES/peramarcia4.png");
    img_peramarcia5 = PP.assets.image.load(s, "ASSETS/IMAGES/peramarcia5.png");
    img_peramarcia6 = PP.assets.image.load(s, "ASSETS/IMAGES/peramarcia6.png");


    preload_pere(s);
    preload_hud(s);
    preload_platforms(s);
    preload_player(s);
    preload_enemy(s);
    preload_strega1_v(s);
}

function create(s) {
    console.log("Executing create() - SCENE 1");

    invincibile = false;
    contatore_vite = 5;

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

    scalablu = PP.assets.image.add(s, scalablu, 2471, 370, 0, 0);
    floorscalablu = PP.shapes.rectangle_add(s, 2471 + 69 / 2, 370 + 207 / 2, 73, 207, "0x000000", 0);

    peramarcia1 = PP.assets.image.add(s, img_peramarcia1, 360, 450, 0, 1);
    peramarcia2 = PP.assets.image.add(s, img_peramarcia2, 600, 575, 0, 1);
    peramarcia3 = PP.assets.image.add(s, img_peramarcia3, 850, 330, 0, 1);
    peramarcia4 = PP.assets.image.add(s, img_peramarcia4, 1050, 330, 0, 1);
    peramarcia5 = PP.assets.image.add(s, img_peramarcia5, 1820, 150, 0, 1);
    peramarcia6 = PP.assets.image.add(s, img_peramarcia2, 2400, 575, 0, 1);
    peramarcia7 = PP.assets.image.add(s, img_peramarcia1, 2580, 373, 0, 1);
    peramarcia8 = PP.assets.image.add(s, img_peramarcia3, 2740, 120, 0, 1);
    peramarcia9 = PP.assets.image.add(s, img_peramarcia2, 3800, 575, 0, 1)
    peramarcia10 = PP.assets.image.add(s, img_peramarcia5, 800, 575, 0, 1);
    peramarcia11 = PP.assets.image.add(s, img_peramarcia3, 2000, 575, 0, 1);
    peramarcia12 = PP.assets.image.add(s, img_peramarcia2, 200, 575, 0, 1);
    peramarcia13 = PP.assets.image.add(s, img_peramarcia1, 1700, 575, 0, 1);
    peramarcia14 = PP.assets.image.add(s, img_peramarcia4, 1090, 575, 0, 1);
    peramarcia15 = PP.assets.image.add(s, img_peramarcia5, 2890, 575, 0, 1);
    peramarcia16 = PP.assets.image.add(s, img_peramarcia6, 2750, 373, 0, 1);
    peramarcia17 = PP.assets.image.add(s, img_peramarcia6, 3300, 300, 0, 1);
    peramarcia18 = PP.assets.image.add(s, img_peramarcia6, 2890, 120, 0, 1);
    peramarcia19 = PP.assets.image.add(s, img_peramarcia6, 1300, 575, 0, 1);
    peramarcia20 = PP.assets.image.add(s, img_peramarcia1, 3400, 575, 0, 1);
    peramarcia21 = PP.assets.image.add(s, img_peramarcia6, 1730, 150, 0, 1);
 


    PP.physics.add(s, floorscalablu, PP.physics.type.STATIC);

    PP.physics.add_overlap_f(s, player, floorscalablu, overlap_ladder);

    // Creo un pavimento "trasparente"
    floor = PP.shapes.rectangle_add(s, 1920, 575, 3840, 1, "0x000000", 0);
    // Aggiungo il pavimento alla fisica
    PP.physics.add(s, floor, PP.physics.type.STATIC);

    // Creazione player, pere, nemici e piattaforme
    create_player(s);
    create_enemy(s);
    create_platforms(s);
    create_pere(s);
    create_strega1_idle_v(s);

    // Creo la collisione pavimento giocatore e nemico
    PP.physics.add_collider(s, player, floor);
    PP.physics.add_collider(s, enemy, floor);
    PP.physics.add_collider(s, enemy_2, floor);
    PP.physics.add_collider(s, strega1_v, floor);

    // Interfaccia hud
    create_hud(s);

    // Faccio sì che il player non esca dai confini del gioco
    // PP.physics.set_collide_world_bounds(player, true);

    // Offset camera
    PP.camera.start_follow(s, player, 0, 0);
    PP.camera.set_follow_offset(s, -490, 210);

}



function update(s) {
    update_player(s);
    update_platforms(s);
    update_pere(s);
    update_enemy(s);
    update_strega1_v(s)
    update_hud(s);

    background_1.tile_geometry.x = PP.camera.get_scroll_x(s) * 1;
    background_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.2;
    background_3.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.4;
    background_4.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.6;
    background_5.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.8;
}

function destroy(s) {
    console.log("Executing destroy() - SCENE 1");
}

PP.scenes.add("parallax", preload, create, update, destroy);
