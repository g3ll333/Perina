let img_background;
let floor;

function preload(s) {
    console.log("Executing preload() - SCENE");

    img_background = PP.assets.image.load(s, "ASSETS/IMAGES/paesaggiofunghinoperina.jpg");

    preload_player(s);

}

function create(s) {
    console.log("Executing create() - SCENE");

    // Inserisco background e giocatore
    PP.assets.image.add(s, img_background, 0, 0, 0, 0);

    // Creo un pavimento "trasparente"
    floor = PP.shapes.rectangle_add(s, 640, 620, 1280, 1, "0x000000", 0);

    //aggiungo il pavimento alla fisica
    PP.physics.add(s, floor, PP.physics.type.STATIC);

    // Creo il player
    create_player(s);

    //creo collisione pavimento giocatore
    PP.physics.add_collider(s, player, floor);
}


function update(s) {
    update_player(s);

}

function destroy(s) {
    console.log("Executing destroy() - SCENE");

}

PP.scenes.add("level1", preload, create, update, destroy);
