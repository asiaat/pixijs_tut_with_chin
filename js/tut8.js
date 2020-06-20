let app;
let player;
let keys = {};
let keysDiv;
let playerSheet = {};

window.onload = function () {
    app = new PIXI.Application(
        {
            width: 700,
            height: 300,
            backgroundColor: 'blue'
        }
    );

    document.body.appendChild(app.view);

    //viking object
    app.loader.add("viking","images/viking.png");
    app.loader.load(doneLoading);    
    

    // keyboard event handlers
    window.addEventListener("keydown",keysDown);
    window.addEventListener("keyup",keysUp);

    
    keysDiv = document.querySelector("#keys");

}

function doneLoading(e) {
    createPlayerSheet();
    app.ticker.add(gameLoop);
}

function createPlayerSheet() {
    let ssheet = new PIXI.BaseTexture.from(app.loader.resources["viking"].url);
    let w = 26;
    let h = 36;

    playerSheet["standSouth"] = [
        new PIXI.Texture(ssheet, new PIXI.Rectangle(1 * w, 0, w, h))
    ]
}

function keysDown(e) {
    
    keys[e.keyCode] = true;
}

function keysUp(e) {
    
    keys[e.keyCode] = false;
}

function gameLoop() {
    keysDiv.innerHTML = JSON.stringify(keys);

    if (keys["87"]) {
        // W
        player.y -= 5;

    } else if(keys["65"]) {
        // A
        player.x -= 5;

    } else if(keys["83"]) {
        // S
        player.y += 5;

    } else if(keys["68"]) {
        // Z
        player.x += 5;

    }

}