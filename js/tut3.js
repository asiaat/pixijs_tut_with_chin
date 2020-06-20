let app;
let player;
let keys = {};
let keysDiv;

window.onload = function () {
    app = new PIXI.Application(
        {
            width: 700,
            height: 300,
            backgroundColor: 'blue'
        }
    );

    document.body.appendChild(app.view);

    //player object
    player = new PIXI.Sprite.from("images/cat.png");
    player.anchor.set(0.5);
    player.x = app.view.width / 2;
    player.y = app.view.height / 2;  

    app.stage.addChild(player);

    // keyboard event handlers
    window.addEventListener("keydown",keysDown);
    window.addEventListener("keyup",keysUp);

    app.ticker.add(gameLoop);
    keysDiv = document.querySelector("#keys");

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