let img_player;
let player;

function preload_player(s) {
    img_player = PP.assets.image.load(s, "ASSETS/IMAGES/spongebob.png", 223, 190);

}

function create_player(s) {
    player = PP.assets.image.add(s, img_player, 150, 620, 0.5, 1);
}

function update_player(s) {

}
