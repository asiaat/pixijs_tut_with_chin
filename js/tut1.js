let app;

window.onload = function () {
    app = new PIXI.Application(
        {
            width: 700,
            height: 400,
            backgroundColor: 0xAAAAAAA
        }
    );

    document.body.appendChild(app.view);
}