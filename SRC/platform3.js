let img_platform15; //era la 4
let img_platform7;
let img_platform3viola;
let img_platform16; //era la 5
let img_platform17; //era la 6
let img_platform8;
let platform15; //era la 4
let platform16; //era la 5
let platform17; //era la 6
let platform7;
let platform8;
let platform9;
let platform10;
let platform11;
let platform12;
let platform13;
let platform14;

function preload_platforms3(s) {
    // Load dell'immagine della piattaforma
   
    img_platform15 = PP.assets.image.load(s, "ASSETS/IMAGES/plat4.png"); //piattaforma a 5 blocchi e mezzo viola
    img_platform7 = PP.assets.image.load(s, "ASSETS/IMAGES/plat7.png"); //piattaforma a 7 blocchi viola
    img_platform3viola = PP.assets.image.load(s, "ASSETS/IMAGES/plat3viola.png"); //piattaforma a 3 blocchi viola
    img_platform16 = PP.assets.image.load(s, "ASSETS/IMAGES/plat5.png"); //piattaforma a 5 blocchi viola
    img_platform17 = PP.assets.image.load(s, "ASSETS/IMAGES/plat6.png"); //piattaforma a 6 blocchi viola
    img_platform8 = PP.assets.image.load(s, "ASSETS/IMAGES/plat8.png"); //piattaforma a 8 blocchi viola
}

function collision_platform3(s, player2, platform_s3) {
    // Funzione di collisione con le piattaforme.
    if (player2.geometry.x >= platform_s3.geometry.x &&
        player2.geometry.x <= platform_s3.geometry.x + platform_s3.geometry.display_width) {
        player2.is_on_platform = true;
    }
}

function create_platforms3(s) {

//piattaforme viola
platform15 = PP.assets.image.add(s, img_platform15, 2227, 1651, 0, 0);
PP.physics.add(s, platform15, PP.physics.type.STATIC);
PP.physics.add_collider_f(s, player2, platform15, collision_platform3);

platform16 = PP.assets.image.add(s, img_platform7, 3840 - 896, 1774, 0, 0);
PP.physics.add(s, platform16, PP.physics.type.STATIC);
PP.physics.add_collider_f(s, player2, platform16, collision_platform3);

platform17 = PP.assets.image.add(s, img_platform3viola, 3229, 1500, 0, 0);
PP.physics.add(s, platform17, PP.physics.type.STATIC);
PP.physics.add_collider_f(s, player2, platform17, collision_platform3);

platform7 = PP.assets.image.add(s, img_platform16, 2717, 1550, 0, 0); //modificata la y perchè se no perina non ci passava
PP.physics.add(s, platform7, PP.physics.type.STATIC);
PP.physics.add_collider_f(s, player2, platform7, collision_platform3);

platform8 = PP.assets.image.add(s, img_platform3viola, 3049, 1370, 0, 0);
PP.physics.add(s, platform8, PP.physics.type.STATIC);
PP.physics.add_collider_f(s, player2, platform8, collision_platform3);

platform9 = PP.assets.image.add(s, img_platform17, 2560, 1287, 0, 0);
PP.physics.add(s, platform9, PP.physics.type.STATIC);
PP.physics.add_collider_f(s, player2, platform9, collision_platform3);
//PP.physics.add_collider_f(s, enemy3, platform9, collision_platform3);

platform10 = PP.assets.image.add(s, img_platform7, 2978, 1053, 0, 0);
PP.physics.add(s, platform10, PP.physics.type.STATIC);
PP.physics.add_collider_f(s, player2, platform10, collision_platform3);

platform11 = PP.assets.image.add(s, img_platform16, 2560, 904, 0, 0);
PP.physics.add(s, platform11, PP.physics.type.STATIC);
PP.physics.add_collider_f(s, player2, platform11, collision_platform3);

platform12 = PP.assets.image.add(s, img_platform8, 2593, 630, 0, 0);
PP.physics.add(s, platform12, PP.physics.type.STATIC);
PP.physics.add_collider_f(s, player2, platform12, collision_platform3);
PP.physics.add_collider_f(s, enemy3, platform12, collision_platform3);

platform13 = PP.assets.image.add(s, img_platform16, 2923, 468, 0, 0);
PP.physics.add(s, platform13, PP.physics.type.STATIC);
PP.physics.add_collider_f(s, player2, platform13, collision_platform3);

platform14 = PP.assets.image.add(s, img_platform3viola, 3096, 315, 0, 0);
PP.physics.add(s, platform14, PP.physics.type.STATIC);
PP.physics.add_collider_f(s, player2, platform14, collision_platform3);

}

function update_platforms3(s) {
// Funzioni di aggiornamento specifiche per le piattaforme possono andare qui
}