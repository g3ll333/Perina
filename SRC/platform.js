let img_platform;

function preload_platforms(s) {
    // Load dell'immagine della piattaforma
    img_platform = PP.assets.image.load(s, "ASSETS/IMAGES/blocco.png");
}

function collision_platform(s, player, platform) {
    // Funzione di collisione con le piattaforme.
    if (player.geometry.x >= platform.geometry.x &&
        player.geometry.x <= platform.geometry.x + platform.geometry.display_width) {
        player.is_on_platform = true;
    }
}

function create_platform_series(s, startX, startY, numBlocks) {
    let platformWidth = 60;  // Larghezza del blocco della piattaforma

    for (let i = 0; i < numBlocks; i++) {
        let platform = PP.assets.image.add(s, img_platform, startX + i * platformWidth, startY, 0, 0);
        PP.physics.add(s, platform, PP.physics.type.STATIC);
        PP.physics.add_collider_f(s, player, platform, collision_platform);
    }
}

function create_platforms(s) {
    // Crea piattaforme utilizzando la funzione create_platform_series
    create_platform_series(s, 380, 450, 3);
    create_platform_series(s, 760, 350, 5);
    create_platform_series(s, 1140, 240, 3);
    create_platform_series(s, 1440, 340, 3);
    create_platform_series(s, 1740, 140, 5);
    create_platform_series(s, 2200, 190, 3);
    create_platform_series(s, 2600, 480, 4);
    create_platform_series(s, 2780, 140, 6);
    create_platform_series(s, 3300, 400, 2);
}

function update_platforms(s) {
    // Funzioni di aggiornamento specifiche per le piattaforme possono andare qui
}
