let app;
let titleScreen;
let mainScreen;
let endScreen;

window.onload = function () {
    app = new PIXI.Application(
        {
            width: 700,
            height: 400,
            backgroundColor: 0xAAAAAB
        }
    );

    document.body.appendChild(app.view);
    window.addEventListener("keydown",switchContainer);

    // Create screens
    titleScreen = new PIXI.Container();
    mainScreen  = new PIXI.Container();
    endScreen   = new PIXI.Container();

    mainScreen.visible  = false;
    endScreen.visible   = false;

    app.stage.addChild(titleScreen);
    app.stage.addChild(mainScreen);
    app.stage.addChild(endScreen);

    // setup title screen
    let redRect = new PIXI.Graphics();
    redRect.beginFill(0xFF0000);
    redRect.drawRect(0,0,app.view.width,app.view.height);
    titleScreen.addChild(redRect);

    text1 = new PIXI.Text("Welcome To your doom!");
    text1.x = app.view.width/2;
    text1.y = app.view.height/2;
    text1.anchor.set(0.5);
    text1.style = new PIXI.TextStyle({
        fill: 0x000000,
        fontSize: 40,
        fontFamily: "Arial",
        fontStyle: "bold",
        stroke: 0xFFFFFF,
        strokeThickness: 3

    });
    titleScreen.addChild(text1);

    // set main screen
    let greenRect = new PIXI.Graphics();
    greenRect.beginFill(0x00FF00);
    greenRect.drawRect(0,0,app.view.width,app.view.height);
    mainScreen.addChild(greenRect);

    let text2 = new PIXI.Text("Main Screen");
    text2.x = app.view.width/2;
    text2.y = app.view.height/2;
    text2.anchor.set(0.5);
    text2.style = new PIXI.TextStyle({
        fill: 0x000000,
        fontSize: 40,
        fontFamily: "Arial",
        fontStyle: "bold",
        stroke: 0xFFFFFF,
        strokeThickness: 3

    });
    mainScreen.addChild(text2);

    // set end screen
    let blueRect = new PIXI.Graphics();
    blueRect.beginFill(0x0000FF);
    blueRect.drawRect(0,0,app.view.width,app.view.height);
    endScreen.addChild(blueRect);


    let text3 = new PIXI.Text("End Screen");
    text3.x = app.view.width/2;
    text3.y = app.view.height/2;
    text3.anchor.set(0.5);
    text3.style = new PIXI.TextStyle({
        fill: 0x000000,
        fontSize: 40,
        fontFamily: "Arial",
        fontStyle: "bold",
        stroke: 0xFFFFFF,
        strokeThickness: 3

    });
    endScreen.addChild(text3);
}

function switchContainer(e){
    console.log(e.key);
    switch (e.key) {
        case "1":
            titleScreen.visible = true;
            mainScreen.visible  = false;
            endScreen.visible   = false;
            break;
            
        case "2":
            titleScreen.visible = false;
            mainScreen.visible  = true;
            endScreen.visible   = false;
            break;
        case "3":
            titleScreen.visible = false;
            mainScreen.visible  = false;
            endScreen.visible   = true;
            break;
    }
}