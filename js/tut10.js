let app;
const NORMAL = 0xFFFFFF;
const OVER   = 0x00FF00;
const DOWN   = 0xFF0000;
let pointerIsDown = false;
let pointerIsOver = false;


window.onload = function () {
    app = new PIXI.Application(
        {
            width: 700,
            height: 400,
            backgroundColor: 0xAAAFAA
        }
    );

    document.querySelector("#gameDiv").appendChild(app.view);

    let rect = new PIXI.Graphics();
    rect.beginFill(NORMAL);
    rect.drawRect((app.view.width/2)-100,(app.view.height/2)-100,200,200);    
    rect.endFill();
    rect.interactive = true;
    rect.buttonMode  = true;

    rect.on("pointerup",    doPointerUp);
    rect.on("pointerdown",  doPointerDown);
    rect.on("pointerover",  doPointerOver);
    rect.on("pointerout",   doPointerOut);
    rect.on("pointerupoutside", doPointerUpOutside);

    app.stage.addChild(rect);

    app.ticker.add(gameLoop);
}

function gameLoop(delta) {


}


function doPointerUp() {
    console.log("UP");

    if (pointerIsOver) {
        this.tint = OVER;
    } else {
        this.tint = NORMAL;
    }
    pointerIsDown = false;
    
}

function doPointerOver() {
    console.log("Over");

    if(!pointerIsOver) {
        this.tint = OVER;
        pointerIsOver = true;
    }
    
}

function doPointerDown(){
    console.log("Down");
    this.tint = DOWN;
    pointerIsDown = true;
}

function doPointerOut() {
    console.log("Out");

    if(!pointerIsDown) {
        this.tint = NORMAL;
        pointerIsOver = false;
    } 
    
}

function doPointerUpOutside() {
    this.tint = NORMAL;
    pointerIsOver = false;
    pointerIsDown = false;
}
