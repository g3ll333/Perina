let img_platform;

function preload_platforms(s) {
    // Load dell'immagine della piattaforma
    img_platform = PP.assets.image.load(s, "ASSETS/IMAGES/blocco.png");
}

function collision_platform(s, player, platform) {
    // Funzione di collisione con le piattaforme.
    // Qui devo verificare che il giocatore si trovi sopra
    // la piattaforma e in quel caso aggiorno la variabile che
    // abilita il salto (v. player.js)
    if (player.geometry.x >= platform.geometry.x &&
        player.geometry.x <= platform.geometry.x + platform.geometry.display_width) {
        player.is_on_platform = true;
    }
}

function create_platforms(s) {

    // Piattaforma fissa
    let platform = PP.assets.image.add(s, img_platform, 400, 450, 0, 0);
    PP.physics.add(s, platform, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform, collision_platform);

}

function update_platforms(s) {


}
