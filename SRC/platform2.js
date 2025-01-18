//let img_platform;
let img_platform3;
let img_platform2_2;

let platform1_2;
let platform2_2;
let platform3_2;
let platform4_2;
let platform_mobile2;
let platform_mobile3;


function preload_platforms2(s) {
    // Load dell'immagine della piattaforma
    //img_platform = PP.assets.image.load(s, "ASSETS/IMAGES/blocco.png");
    img_platform3 = PP.assets.image.load(s, "ASSETS/IMAGES/plat3.png"); //piattaforma a 3 blocchi verde
    img_platform2_2 = PP.assets.image.load(s, "ASSETS/IMAGES/plat2.png"); //piattaforma a 2 blocchi verde
    
}

function collision_platform2(s, player1, platform_s2) {
    // Funzione di collisione con le piattaforme.
    if (player1.geometry.x >= platform_s2.geometry.x &&
        player1.geometry.x <= platform_s2.geometry.x + platform_s2.geometry.display_width) {
        player1.is_on_platform = true;
    }
}


/* function create_platform_series(s, startX, startY, numBlocks) {
    let platformWidth = 60;  // Larghezza del blocco della piattaforma

    for (let i = 0; i < numBlocks; i++) {
        let platform = PP.assets.image.add(s, img_platform, startX + i * platformWidth, startY, 0, 0);
        PP.physics.add(s, platform, PP.physics.type.STATIC);
        PP.physics.add_collider_f(s, player, platform, collision_platform);
        PP.physics.add_collider_f(s, enemy_2, platform, collision_platform);
    }


} */


function create_platforms2(s) {
    // Crea piattaforme utilizzando la funzione create_platform_series
    /* create_platform_series(s, 161.5, 660, 3);
    create_platform_series(s, 413, 1042, 2);
    create_platform_series(s, 161.5, 1507, 2);
    create_platform_series(s, 413, 1692, 2);
    create_platform_series(s, 1054, 1883, 4);
    create_platform_series(s, 1665, 1774, 7);
    create_platform_series(s, 1437.5, 1563, 5);
    create_platform_series(s, 1949.6, 1500, 3);
    create_platform_series(s, 1769, 1381, 3);
    create_platform_series(s, 1280, 1287, 6);
    create_platform_series(s, 1710, 1047, 7);
    create_platform_series(s, 1280, 904, 5);
    create_platform_series(s, 1311, 630, 8);
    create_platform_series(s, 1641, 468, 5);
    create_platform_series(s, 1814, 315, 3); */

    //piattaforme verdi
    platform1_2 = PP.assets.image.add(s, img_platform3, 161.5, 660, 0, 0);
    PP.physics.add(s, platform1_2, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player1, platform1_2, collision_platform2);

    //platform2_2 = PP.assets.image.add(s, img_platform2_2, 413, 1042, 0, 0);
    //PP.physics.add(s, platform2_2, PP.physics.type.STATIC);
    //PP.physics.add_collider_f(s, player1, platform2_2, collision_platform2);

    //platform3_2 = PP.assets.image.add(s, img_platform2_2, 161.5, 1507, 0, 0);
    //PP.physics.add(s, platform3_2, PP.physics.type.STATIC);
    //PP.physics.add_collider_f(s, player1, platform3_2, collision_platform2);

    platform4_2 = PP.assets.image.add(s, img_platform2_2, 413, 1692, 0, 0);
    PP.physics.add(s, platform4_2, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player1, platform4_2, collision_platform2);

    //piattaforme mobili verdi
    platform_mobile2 = PP.assets.image.add(s, img_platform2_2, 413, 1042, 0, 0);
    PP.physics.add(s, platform_mobile2, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_mobile2, true);
    PP.physics.set_allow_gravity(platform_mobile2, false);
    PP.physics.add_collider_f(s, player1, platform_mobile2, collision_platform2);
    PP.physics.set_velocity_x(platform_mobile2, 80);

    platform_mobile3 = PP.assets.image.add(s, img_platform2_2, 161.5, 1507, 0, 0);
    PP.physics.add(s, platform_mobile3, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_mobile3, true);
    PP.physics.set_allow_gravity(platform_mobile3, false);
    PP.physics.add_collider_f(s, player1, platform_mobile3, collision_platform2);
    PP.physics.set_velocity_x(platform_mobile3, 80);


}

function update_platforms2(s) {
    // Funzioni di aggiornamento specifiche per le piattaforme possono andare qui

    if (platform_mobile2.geometry.x >= 413) {
        PP.physics.set_velocity_x(platform_mobile2, -70);
    }
    else if (platform_mobile2.geometry.x <= 320) {
        PP.physics.set_velocity_x(platform_mobile2, 70);
    }

    if (platform_mobile3.geometry.x >= 250) {
        PP.physics.set_velocity_x(platform_mobile3, -70);
    }
    else if (platform_mobile3.geometry.x <= 161.5) {
        PP.physics.set_velocity_x(platform_mobile3, 70);
    }
}
