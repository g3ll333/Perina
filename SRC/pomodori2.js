let img_pomodoro;
let pomodoro;
let pomodoro_2;
let pomodoro_3;

let pomodori_raccolti = 0;

function preload_pomodori(s) {
    // Load delle immagini della pera
    img_pomodoro = PP.assets.image.load(s, "assets/images/pomodoro.png");
}

function collision_pomodori(s, player1, pomodoro) {
    // In caso di collisione procedo come segue:

   //incremento pere raccolte
   pomodori_raccolti++;
   console.log("pomodori raccolti:", pomodori_raccolti);

   // distruggo la pera
   PP.assets.destroy(pomodoro);

   //richiamo funzione cambio cestino
   change_cestino2(s);

}

function create_pomodori(s) {
    // Ora creo la pera, la aggiungo alla fisica e imposto la funzione
    // di collisione
    pomodoro = PP.assets.image.add(s, img_pomodoro, 170, 585, 0, 0);
    pomodoro_2 = PP.assets.image.add(s, img_pomodoro, 740, 1295, 0, 0);
    pomodoro_3 = PP.assets.image.add(s, img_pomodoro, 1120, 1295, 0, 0);
    
    
    PP.physics.add(s, pomodoro, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player1, pomodoro, collision_pomodori);

    PP.physics.add(s, pomodoro_2, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player1, pomodoro_2, collision_pomodori);

    PP.physics.add(s, pomodoro_3, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player1, pomodoro_3, collision_pomodori);

}

function update_pomodori(s) {
    // Nothing to do...
}