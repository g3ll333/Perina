function preload(s) {

}

function mouse_click(s) {
    PP.scenes.start("parallax");
}

function create(s) {
    PP.shapes.text_styled_add(s,
        PP.game.config.canvas_width / 2, //x
        PP.game.config.canvas_height / 2, //y
        "Game Over",
        100, //font size
        "Helvetica",
        "bold",
        "0xFFFFFF", //foreground color
        null, //background color
        0.5, //pivot x
        0.5 //pivot y
    );

    let goback = PP.shapes.text_styled_add(s,
        1000, 600,
        "Go back",
        40,
        "Helvetica",
        "normal",
        "0xFFFFFF",
        null,
        0.5,
        0.5
    );

    PP.interactive.mouse.add(goback, "pointerdown", mouse_click);
}



function update(s) {

}

function destroy(s) {

}

PP.scenes.add("gameover", preload, create, update, destroy);