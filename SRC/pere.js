let img_pera;
let pera;
let pera_2;
let pera_3;
let pera_4;
let pera_5;
let pere_raccolte = 0;


function preload_pere(s) {
    // Load delle immagini della pera
    img_pera = PP.assets.image.load(s, "assets/images/pera.png");
}

function collision_pera(s, player, pera) {
    // In caso di collisione procedo come segue:

    //incremento pere raccolte
    pere_raccolte++;
    console.log("Pere raccolte:", pere_raccolte);

    // distruggo la pera
    PP.assets.destroy(pera);

    //richiamo funzione cambio cestino
    change_cestino(s);

}

function create_pere(s) {
    // Ora creo la pera, la aggiungo alla fisica e imposto la funzione
    // di collisione
    pera = PP.assets.image.add(s, img_pera, 450, 375, 0, 0);
    pera_2 = PP.assets.image.add(s, img_pera, 1380, 500, 0, 0);
    pera_3 = PP.assets.image.add(s, img_pera, 1450, 130, 0, 0);
    pera_4 = PP.assets.image.add(s, img_pera, 1850, 500, 0, 0);
    pera_5 = PP.assets.image.add(s, img_pera, 2760, 300, 0, 0);

    PP.physics.add(s, pera, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, pera, collision_pera);

    PP.physics.add(s, pera_2, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, pera_2, collision_pera);

    PP.physics.add(s, pera_3, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, pera_3, collision_pera);

    PP.physics.add(s, pera_4, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, pera_4, collision_pera);

    PP.physics.add(s, pera_5, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, pera_5, collision_pera);
}


function update_pere(s) {
    // Nothing to do...
}
