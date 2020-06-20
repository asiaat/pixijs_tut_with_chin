let app;
let text1;

window.onload = function () {
    app = new PIXI.Application(
        {
            width: 700,
            height: 400,
            backgroundColor: 0xAAAAAAA
        }
    );

    document.body.appendChild(app.view);

    text1 = new PIXI.Text("Welcome To your doom!");
    text1.x = app.view.width/2;
    text1.y = app.view.height/2;
    text1.anchor.set(0.5);
    text1.style = new PIXI.TextStyle({
        fill: 0xFF0000,
        fontSize: 40,
        fontFamily: "Arcade",

    });
    app.stage.addChild(text1);
}