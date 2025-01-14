let img_zucca;
let zucca;
let zucca_2;
let zucca_3;
let zucca_4;
let zucche_raccolte = 0;

function preload_zucche(s) {
    // Load delle immagini della pera
    img_zucca = PP.assets.image.load(s, "assets/images/zucca.png");
}

function collision_zucche(s, player2, zucca) {
    // In caso di collisione procedo come segue:

   //incremento pere raccolte
   zucche_raccolte++;
   console.log("zucche raccolte:", zucche_raccolte);

   // distruggo la pera
   PP.assets.destroy(zucca);

   //richiamo funzione cambio cestino
   change_cestino3(s);
}

function create_zucche(s) {
    // Ora creo la pera, la aggiungo alla fisica e imposto la funzione
    // di collisione
    zucca = PP.assets.image.add(s, img_zucca, 3600, 1930, 0, 0);
    zucca_2 = PP.assets.image.add(s, img_zucca, 3350, 1425, 0, 0);
    zucca_3 = PP.assets.image.add(s, img_zucca, 3250, 975, 0, 0);
    zucca_4 = PP.assets.image.add(s, img_zucca, 2800, 555, 0, 0);
    
    
    PP.physics.add(s, zucca, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player2, zucca, collision_zucche);

    PP.physics.add(s, zucca_2, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player2, zucca_2, collision_zucche);

    PP.physics.add(s, zucca_3, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player2, zucca_3, collision_zucche);

    PP.physics.add(s, zucca_4, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player2, zucca_4, collision_zucche);

}

function update_zucche(s) {
    // Nothing to do...
}