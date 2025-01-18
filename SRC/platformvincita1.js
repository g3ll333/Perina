//let img_platform;
let img_platform2_v;
let platform1_v;
let platform2_v;
let platform3_v;
let platform4_v;
let platform5_v;
let platform6_v;
let img_platform4_v;
let img_platform5_v;
let img_platform6_v;
let img_platform_mobile_v;
let platform_mobile_v;
let platform_mobile_2_v;
let platform_mobile_3_v;


function preload_platforms_v(s) {
    // Load dell'immagine della piattaforma
    // img_platform = PP.assets.image.load(s, "ASSETS/IMAGES/blocco.png");
    img_platform2_v = PP.assets.image.load(s, "ASSETS/IMAGES/piattaforma2.png"); //piattaforma a 2 blocchi
    img_platform4_v = PP.assets.image.load(s, "ASSETS/IMAGES/piattaforma4.png"); //piattaforma a 4 blocchi
    img_platform5_v = PP.assets.image.load(s, "ASSETS/IMAGES/piattaforma5.png"); //piattaforma a 5 blocchi
    img_platform6_v = PP.assets.image.load(s, "ASSETS/IMAGES/piattaforma6.png"); //piattaforma a 6 blocchi
    img_platform_mobile_v = PP.assets.image.load(s, "ASSETS/IMAGES/piattaformamobile.png"); //piattaforma a 3 blocchi

}




function create_platforms_v(s) {
    platform1_v = PP.assets.image.add(s, img_platform_mobile_v, 380, 450, 0, 0);
    PP.physics.add(s, platform1_v, PP.physics.type.STATIC);


    platform2_v = PP.assets.image.add(s, img_platform6_v, 760, 330, 0, 0);
    PP.physics.add(s, platform2_v, PP.physics.type.STATIC);


    platform5_v = PP.assets.image.add(s, img_platform6_v, 1740, 140, 0, 0);
    PP.physics.add(s, platform5_v, PP.physics.type.STATIC);


    platform7_v = PP.assets.image.add(s, img_platform5_v, 2540, 370, 0, 0);
    PP.physics.add(s, platform7_v, PP.physics.type.STATIC);


    platform8_v = PP.assets.image.add(s, img_platform6_v, 2740, 120, 0, 0);
    PP.physics.add(s, platform8_v, PP.physics.type.STATIC);


    platform9_v = PP.assets.image.add(s, img_platform2_v, 3270, 300, 0, 0);
    PP.physics.add(s, platform9_v, PP.physics.type.STATIC);


    // Piattaforma mobile
    platform_mobile_v = PP.assets.image.add(s, img_platform_mobile_v, 1140, 100, 0, 0);
    PP.physics.add(s, platform_mobile_v, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_mobile_v, true);
    PP.physics.set_allow_gravity(platform_mobile_v, false);

    PP.physics.set_velocity_y(platform_mobile_v, 80);

    // Piattaforma mobile 2
    platform_mobile_2_v = PP.assets.image.add(s, img_platform_mobile_v, 1440, 300, 0, 0);
    PP.physics.add(s, platform_mobile_2_v, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_mobile_2_v, true);
    PP.physics.set_allow_gravity(platform_mobile_2_v, false);

    PP.physics.set_velocity_x(platform_mobile_2_v, 80);

    // Piattaforma mobile 3
    platform_mobile_3_v = PP.assets.image.add(s, img_platform_mobile_v, 2200, 190, 0, 0);
    PP.physics.add(s, platform_mobile_3_v, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_mobile_3_v, true);
    PP.physics.set_allow_gravity(platform_mobile_3_v, false);

    PP.physics.set_velocity_y(platform_mobile_3_v, 90);

}

function update_platforms_v(s) {

    if (platform_mobile_v.geometry.y >= 240) {
        PP.physics.set_velocity_y(platform_mobile_v, -80);
    }
    else if (platform_mobile_v.geometry.y <= 100) {
        PP.physics.set_velocity_y(platform_mobile_v, 80);
    }

    if (platform_mobile_2_v.geometry.x >= 1490) {
        PP.physics.set_velocity_x(platform_mobile_2_v, -80);
    }
    else if (platform_mobile_2_v.geometry.x <= 1400) {
        PP.physics.set_velocity_x(platform_mobile_2_v, 80);
    }

    if (platform_mobile_3_v.geometry.y >= 270) {
        PP.physics.set_velocity_y(platform_mobile_3_v, -80);
    }
    else if (platform_mobile_3_v.geometry.y <= 150) {
        PP.physics.set_velocity_y(platform_mobile_3_v, 80);
    }
}
