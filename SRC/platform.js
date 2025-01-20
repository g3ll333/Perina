//let img_platform;
let img_platform2;
let platform1;
let platform2;
let platform3;
let platform4;
let platform5;
let platform6;
let img_platform4;
let img_platform5;
let img_platform6;
let img_platform_mobile;
let platform_mobile;
let platform_mobile_2;
let platform_mobile_3;


function preload_platforms(s) {
    // Load dell'immagine della piattaforma
    // img_platform = PP.assets.image.load(s, "ASSETS/IMAGES/blocco.png");
    img_platform2 = PP.assets.image.load(s, "ASSETS/IMAGES/piattaforma2.png"); //piattaforma a 2 blocchi
    img_platform4 = PP.assets.image.load(s, "ASSETS/IMAGES/piattaforma4.png"); //piattaforma a 4 blocchi
    img_platform5 = PP.assets.image.load(s, "ASSETS/IMAGES/piattaforma5.png"); //piattaforma a 5 blocchi
    img_platform6 = PP.assets.image.load(s, "ASSETS/IMAGES/piattaforma6.png"); //piattaforma a 6 blocchi
    img_platform_mobile = PP.assets.image.load(s, "ASSETS/IMAGES/piattaformamobile.png"); //piattaforma a 3 blocchi
    //img_platform_mobile_2 = PP.assets.image.load(s, "ASSETS/IMAGES/piattaformamobile.png");

}

function collision_platform(s, player, platform) {
    // Funzione di collisione con le piattaforme.
    if (player.geometry.x >= platform.geometry.x &&
        player.geometry.x <= platform.geometry.x + platform.geometry.display_width) {
        player.is_on_platform = true;
    }
}

//function create_platform_series(s, startX, startY, numBlocks) {
// let platformWidth = 60;  // Larghezza del blocco della piattaforma

//  for (let i = 0; i < numBlocks; i++) {
//     let platform = PP.assets.image.add(s, img_platform, startX + i * platformWidth, startY, 0, 0);
//     PP.physics.add(s, platform, PP.physics.type.STATIC);
//     PP.physics.add_collider_f(s, player, platform, collision_platform);
//     PP.physics.add_collider(s, enemy, platform);
//     PP.physics.add_collider(s, enemy_2, platform);
// }
//}



function create_platforms(s) {
    // Crea piattaforme utilizzando la funzione create_platform_series
    //create_platform_series(s, 380, 450, 3);
    //create_platform_series(s, 760, 350, 5);
    //create_platform_series(s, 1140, 240, 3);
    //create_platform_series(s, 1440, 340, 3);
    //create_platform_series(s, 1740, 140, 5);
    //create_platform_series(s, 2200, 190, 3);
    //create_platform_series(s, 2600, 480, 4);
    //create_platform_series(s, 2780, 140, 6);
    //create_platform_series(s, 3300, 400, 2);

    platform1 = PP.assets.image.add(s, img_platform_mobile, 380, 450, 0, 0);
    PP.physics.add(s, platform1, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform1, collision_platform);

    platform2 = PP.assets.image.add(s, img_platform6, 760, 330, 0, 0);
    PP.physics.add(s, platform2, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform2, collision_platform);
    PP.physics.add_collider(s, enemy, platform2);

    platform5 = PP.assets.image.add(s, img_platform6, 1740, 150, 0, 0);
    PP.physics.add(s, platform5, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform5, collision_platform);
    PP.physics.add_collider(s, enemy_2, platform5);

    platform7 = PP.assets.image.add(s, img_platform5, 2540, 370, 0, 0);
    PP.physics.add(s, platform7, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform7, collision_platform);

    platform8 = PP.assets.image.add(s, img_platform6, 2740, 120, 0, 0);
    PP.physics.add(s, platform8, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform8, collision_platform);
    PP.physics.add_collider(s, enemy_3, platform8);

    platform9 = PP.assets.image.add(s, img_platform2, 3270, 300, 0, 0);
    PP.physics.add(s, platform9, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform9, collision_platform);

    // Piattaforma mobile
    platform_mobile = PP.assets.image.add(s, img_platform_mobile, 1140, 100, 0, 0);
    PP.physics.add(s, platform_mobile, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_mobile, true);
    PP.physics.set_allow_gravity(platform_mobile, false);
    PP.physics.add_collider_f(s, player, platform_mobile, collision_platform);
    PP.physics.set_velocity_y(platform_mobile, 80);

    // Piattaforma mobile 2
    platform_mobile_2 = PP.assets.image.add(s, img_platform_mobile, 1440, 300, 0, 0);
    PP.physics.add(s, platform_mobile_2, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_mobile_2, true);
    PP.physics.set_allow_gravity(platform_mobile_2, false);
    PP.physics.add_collider_f(s, player, platform_mobile_2, collision_platform);
    PP.physics.set_velocity_x(platform_mobile_2, 80);

    // Piattaforma mobile 3
    platform_mobile_3 = PP.assets.image.add(s, img_platform_mobile, 2300, 190, 0, 0);
    PP.physics.add(s, platform_mobile_3, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_mobile_3, true);
    PP.physics.set_allow_gravity(platform_mobile_3, false);
    PP.physics.add_collider_f(s, player, platform_mobile_3, collision_platform);
    PP.physics.set_velocity_y(platform_mobile_3, 90);

}

function update_platforms(s) {
    // Funzioni di aggiornamento specifiche per le piattaforme possono andare qui
    // Aggiorno la velocita' della piattaforma mobile nel
    // caso in cui si trovi al limite destro o il limite sinistro
    // scelto (800 - 1200)

    if (platform_mobile.geometry.y >= 240) {
        PP.physics.set_velocity_y(platform_mobile, -80);
    }
    else if (platform_mobile.geometry.y <= 100) {
        PP.physics.set_velocity_y(platform_mobile, 80);
    }

    if (platform_mobile_2.geometry.x >= 1490) {
        PP.physics.set_velocity_x(platform_mobile_2, -80);
    }
    else if (platform_mobile_2.geometry.x <= 1400) {
        PP.physics.set_velocity_x(platform_mobile_2, 80);
    }

    if (platform_mobile_3.geometry.y >= 270) {
        PP.physics.set_velocity_y(platform_mobile_3, -80);
    }
    else if (platform_mobile_3.geometry.y <= 150) {
        PP.physics.set_velocity_y(platform_mobile_3, 80);
    }
}
