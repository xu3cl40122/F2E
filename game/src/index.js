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

// init player
var player = PIXI.Sprite.fromImage('./pic/body - 3.png')
player.anchor.x = 0.5
player.anchor.y = 0.5//讓定位點置中
// move the sprite to the center of the screen
player.x = app.screen.width / 2;
player.y = app.screen.height / 2;
app.stage.addChild(player);

app.stage.interactive = true
app.stage.hitArea = app.screen;// 設定偵測範圍
var distance = 50 
var offset={x:0,y:0}
app.stage.on("mousedown", function (e) {
    shoot(player.rotation, {
        x: player.position.x + Math.cos(player.rotation) * distance + offset.x,
        y: player.position.y + Math.sin(player.rotation) * distance + offset.y
    });
})
// init shield
var shield = new PIXI.Sprite.fromImage('./pic/shield.png')
shield.anchor.set(0.5)
shield.updatePosition = ()=>{
    shield.rotation = player.rotation
    shield.x = player.position.x - Math.cos(player.rotation) * 40 + offset.x
    shield.y = player.position.y - Math.sin(player.rotation) * 40 + offset.y
} 
app.stage.addChild(shield)

var graphics = new PIXI.Graphics();
graphics.lineStyle(0);
graphics.beginFill(0xFFFF0B, 0.5);
graphics.drawCircle(470, 90, 60);
graphics.endFill();

var monster = new PIXI.Sprite(graphics.generateTexture())
monster.anchor.set(0.5)
monster.x = 200
monster.y = 200 
app.stage.addChild(monster)

var bullets = [];
var bulletSpeed = 5;

function shoot(rotation, startPosition) {
    var bullet = new PIXI.Sprite.fromImage('./pic/bullet.png');
    bullet.anchor.set(0.5)
    bullet.position.x = startPosition.x;
    bullet.position.y = startPosition.y;
    bullet.rotation = rotation;
    app.stage.addChild(bullet);
    bullets.push(bullet);
}
function rotateToPoint(mx, my, px, py) {
    var self = this;
    var dist_Y = my - py;
    var dist_X = mx - px;
    var angle = Math.atan2(dist_Y, dist_X);
    //var degrees = angle * 180/ Math.PI;
    return angle;
}


// start animating
animate();  

function animate() {
    requestAnimationFrame(animate);

    // just for fun, let's rotate mr rabbit a little
    player.rotation = rotateToPoint(app.renderer.plugins.interaction.mouse.global.x, app.renderer.plugins.interaction.mouse.global.y, player.position.x, player.position.y);
    /*shield.rotation = player.rotation
    shield.x = player.position.x - Math.cos(player.rotation) * distance + offset.x
    shield.y = player.position.y - Math.sin(player.rotation) * distance + offset.y*/
    shield.updatePosition()
    for (var b = bullets.length - 1; b >= 0; b--) {
        bullets[b].position.x += Math.cos(bullets[b].rotation) * bulletSpeed;
        bullets[b].position.y += Math.sin(bullets[b].rotation) * bulletSpeed;
    }
    // render the container
    app.renderer.render(app.stage);
}
