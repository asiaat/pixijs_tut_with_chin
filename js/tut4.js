let app;


window.onload = function () {
    app = new PIXI.Application(
        {
            width: 700,
            height: 400,
            backgroundColor: 'blue'
        }
    );

    document.body.appendChild(app.view);

    //preload assets
    app.loader.baseUrl = "images/screenshots";
    app.loader
    .add("s1","01.png")
    .add("s2","02.png")
    .add("s3","03.png")
    .add("s4","04.png")
    .add("s5","05.png")
    .add("s6","06.png")
    .add("s7","07.png")
    .add("s8","08.png")
    .add("s9","09.png")
    .add("s10","10.png")
    .add("s11","11.png")
    .add("s12","12.png")
    .add("s13","13.png")
    .add("s14","14.png")
    .add("player","blob.png");

    app.loader.onProgress.add(showProgress);
    app.loader.onComplete.add(doneLoading);
    app.loader.onError.add(reportError);

    app.loader.load();


}

function showProgress(e) {
    console.log(e.progress)
}

function reportError(e) {
    console.log("ERROR: " + e.message);
}

function doneLoading(e) {
    console.log("DONE LOADING!");

    player = PIXI.Sprite.from(app.loader.resources.player.texture);
    player.anchor.set(0.5);
    player.x = app.view.width / 2;
    player.y = app.view.height / 2;  

    app.stage.addChild(player);
}

