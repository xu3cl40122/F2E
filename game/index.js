//Create a Pixi Application
let app = new PIXI.Application({ width: 800, height: 600 });

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);
const white = '0xFFFFFF'
app.renderer.backgroundColor = 0x001D2E;
app.renderer.autoResize = true;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

var player = PIXI.Sprite.fromImage('./pic/body.png')
player.anchor.set(0.5); //讓定位點置中
// move the sprite to the center of the screen
player.x = app.screen.width / 2;
player.y = app.screen.height / 2;

app.stage.addChild(player);
app.stage.interactive = true
