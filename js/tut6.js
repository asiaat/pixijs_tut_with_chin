let app;
let player;
let enemy;
let speed  = 4;

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
    player.x = 16;
    player.y = app.view.height / 2;  

    app.stage.addChild(player);

    //enemy object
    enemy = new PIXI.Sprite.from("images/blob.png");
    enemy.anchor.set(0.5);
    enemy.x = app.view.width - 16;
    enemy.y = app.view.height / 2;  

    app.stage.addChild(enemy);

    app.ticker.add(gameLoop);
    
}

function gameLoop(delta) {
    player.x += 10;
    enemy.x  -= 10;

    if(rectsIntersect(player,enemy)) {
        speed = 0;
    }

}

function rectsIntersect(a,b) {
    let aBox = a.getBounds();
    let bBox = b.getBounds();

    return aBox.x + aBox.width > bBox.x &&
           aBox.x < bBox.x + bBox.width &&
           aBox.y + aBox.height > bBox.y &&
           aBox.y < bBox.y + bBox.height;
}



