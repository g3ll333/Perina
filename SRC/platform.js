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
    create_platform_series(s, 380, 450, 3); // Esempio di una piattaforma di 5 blocchi accostati
    create_platform_series(s, 760, 350, 5); // Un'altra piattaforma di 3 blocchi accostati in una posizione diversa
    create_platform_series(s, 1140, 240, 3); // Un'altra piattaforma di 3 blocchi accostati in una posizione diversa

}

function update_platforms(s) {
    // Funzioni di aggiornamento specifiche per le piattaforme possono andare qui
}
