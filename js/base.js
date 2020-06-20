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
}