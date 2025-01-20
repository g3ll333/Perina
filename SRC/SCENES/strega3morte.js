let sfondo1_2_v;

let blocco3_2_v;

let floor_5_2_v;
let y_2_v;


let alberiviola_v;
let alberiviola2_v;
let alberiviola3_v;


function preload3_v(s) {
    console.log("Executing preload() - SCENE 3");
    sfondo1_2_v = PP.assets.image.load(s, "ASSETS/IMAGES/ennesimosfondo2.png");

    blocco3_2_v = PP.assets.image.load(s, "ASSETS/IMAGES/blocco3nuovo.png");


    alberiviola_v = PP.assets.image.load(s, "ASSETS/IMAGES/alberiviolanuovi.png");
    alberiviola2_v = PP.assets.image.load(s, "ASSETS/IMAGES/alberiviolanuovi.png");
    alberiviola3_v = PP.assets.image.load(s, "ASSETS/IMAGES/alberiviolanuovi.png");


    preload_platforms3_v(s);
    preload_player3_v(s);
    preload_strega3_v(s);

}

function create3_v(s) {
    console.log("Executing create() - SCENE 3");
    sfondo1_2_v = PP.assets.image.add(s, sfondo1_2_v, 0, 0, 0, 0);

    blocco3_2_v = PP.assets.image.add(s, blocco3_2_v, 2989, 248, 0, 0);

    alberiviola_v = PP.assets.image.add(s, alberiviola_v, 3385, 8, 0, 0);
    alberiviola2_v = PP.assets.image.add(s, alberiviola2_v, 4100, 8, 0, 0);
    alberiviola3_v = PP.assets.image.add(s, alberiviola3_v, 1720, 8, 0, 0);

    // Creo un pavimento "trasparente"
    floor_5_2_v = PP.shapes.rectangle_add(s, 3624, 248 + 1596 / 2, 432, 1596, "0x000000", 0); // ultimo blocco dx


    // Aggiungo il pavimento alla fisica
    PP.physics.add(s, floor_5_2_v, PP.physics.type.STATIC);


    // Creo il player, le platform e la strega
    create_player3_v(s);
    create_platforms3_v(s);
    create_strega3_v(s);


    // Creo la collisione pavimento strega
    PP.physics.add_collider(s, strega3_v, floor_5_2_v);

    PP.camera.start_follow(s, player3_v, 0, 0);
    PP.camera.set_follow_offset(s, -280, -33);

}

function update3_v(s) {

    update_player3_v(s);
    update_platforms3_v(s);
    update_strega3_v(s);


    // Aggiorna la variabile y con la posizione y del giocatore
    y_2_v = player3_v.geometry.body_y;

    // Limite massimo della camera in verticale
    let max_camera_y_2_v = 1585;
    if (y_2_v >= max_camera_y_2_v) {
        // Smette di seguire il giocatore oltre il limite
        PP.camera.set_follow_offset(s, -280, -33 + (player3_v.geometry.body_y - max_camera_y_2_v));
    } else {
        // Continua a seguire il giocatore
        PP.camera.start_follow(s, player3_v, 0, 0);
        PP.camera.set_follow_offset(s, -280, -33);
    }
}

function destroy3_v(s) {
    console.log("Executing destroy() - SCENE 3");
}

PP.scenes.add("strega3morte", preload3_v, create3_v, update3_v, destroy3_v);
