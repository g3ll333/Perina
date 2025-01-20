let img_platform3viola_v;
let img_platform16_v; //era la 5

let img_platform8_v;

let platform12_v;
let platform13_v;
let platform14_v;

function preload_platforms3_v(s) {
    // Load dell'immagine della piattaforma
    img_platform3viola_v = PP.assets.image.load(s, "ASSETS/IMAGES/plat3viola.png"); //piattaforma a 3 blocchi viola
    img_platform16_v = PP.assets.image.load(s, "ASSETS/IMAGES/plat5.png"); //piattaforma a 5 blocchi viola
    img_platform8_v = PP.assets.image.load(s, "ASSETS/IMAGES/plat8.png"); //piattaforma a 8 blocchi viola
}



function create_platforms3_v(s) {
    //piattaforme viola
    platform12_v = PP.assets.image.add(s, img_platform8_v, 2593, 630, 0, 0);
    PP.physics.add(s, platform12_v, PP.physics.type.STATIC);


    platform13_v = PP.assets.image.add(s, img_platform16_v, 2923, 468, 0, 0);
    PP.physics.add(s, platform13_v, PP.physics.type.STATIC);


    platform14_v = PP.assets.image.add(s, img_platform3viola_v, 3096, 315, 0, 0);
    PP.physics.add(s, platform14_v, PP.physics.type.STATIC);
    PP.physics.add_collider(s, player3_v, platform14_v);

}

function update_platforms3_v(s) {
    // Funzioni di aggiornamento specifiche per le piattaforme possono andare qui
}