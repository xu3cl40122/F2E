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
var player = new PIXI.Sprite.fromImage('./pic/player3.png')
player.anchor.x = 0.5
player.anchor.y = 0.5//讓定位點置中
// move the sprite to the center of the screen
player.x = app.screen.width / 2;
player.y = app.screen.height / 2;
player.beHit =()=>{
    console.log('player hit')
}
app.stage.addChild(player);

app.stage.interactive = true
app.stage.hitArea = app.screen;// 設定偵測範圍
var distance = 50 // 發射子彈位置的旋轉半徑
var offset={x:0,y:0}

// init shield
var shield = new PIXI.Sprite.fromImage('./pic/shield2.png')
shield.anchor.set(0.5)
shield.updatePosition = ()=>{
    shield.rotation = player.rotation
    shield.x = player.position.x - Math.cos(player.rotation) * 40 
    shield.y = player.position.y - Math.sin(player.rotation) * 40 
}
shield.beHit = ()=>{
    return
} 
app.stage.addChild(shield)
// init gun 
var gun = new PIXI.Sprite.fromImage('./pic/gun.png')
gun.anchor.set(0.5)
gun.updatePosition=()=>{
    gun.rotation = player.rotation
    gun.x = player.position.x + Math.cos(player.rotation) * 35
    gun.y = player.position.y + Math.sin(player.rotation) * 35
}
gun.beHit=()=>{
    return
}
app.stage.addChild(gun)
// init circle hit area
var graphics = new PIXI.Graphics() 
graphics.drawCircle(470, 90, 60)

//var monster = new PIXI.Sprite(graphics.generateTexture()) 用graphic 產生sprite
var totalWaves = [{ circle: 3, rock: 0 }, { circle: 5, rock: 2 }, { circle: 6, rock: 2}]
var waveIndex = 0
var currentWave = totalWaves[waveIndex]
var livingEnemys = []
var bullets = [];
var enemyBullets = []
var isFirstWave = true
/*
for (let w = 0; w < currentWave.circle; w++){
    createCircleEnemy()
}
*/
app.stage.on("mousedown", function (e) {
    shoot(player.rotation, {
        x: player.position.x + Math.cos(player.rotation) * distance + offset.x,
        y: player.position.y + Math.sin(player.rotation) * distance + offset.y
    },'./pic/bullet.png',bullets);
})
setInterval(function(){
    for (let e in livingEnemys) {
        if(livingEnemys[e]== 'die') continue
        if (Math.random() >0.35) continue
        shoot(livingEnemys[e].rotation, {
            x: livingEnemys[e].position.x + Math.cos(livingEnemys[e].rotation) * 30,
            y: livingEnemys[e].position.y + Math.sin(livingEnemys[e].rotation) * 30
        }, './pic/c_bullet.png', enemyBullets)
    }
},600)



// start game loop
//animate();
app.ticker.add(delta => animate(delta))

function animate(delta) {
    //requestAnimationFrame(animate); HTML內建的動畫 FUNCTION
    // just for fun, let's rotate mr rabbit a little
    player.rotation = rotateToPoint(app.renderer.plugins.interaction.mouse.global.x, app.renderer.plugins.interaction.mouse.global.y, player.position.x, player.position.y);
    gun.updatePosition()
    shield.updatePosition()
    controllWave()
    for (let e in livingEnemys){
        if(livingEnemys[e]== 'die') continue
        livingEnemys[e].updatePosition()
    }
    handleBullets(bullets,livingEnemys,5,null)
    handleBullets(enemyBullets, [player], 3, [shield])
    
    // render the container
    app.renderer.render(app.stage);
}

function shoot(rotation, startPosition,imgURL,array) {
    var bullet = new PIXI.Sprite.fromImage(imgURL);
    bullet.anchor.set(0.5)
    bullet.position.x = startPosition.x;
    bullet.position.y = startPosition.y;
    bullet.rotation = rotation;
    app.stage.addChild(bullet);
    array.push(bullet);
}
function monsterShoot(rotation, startPosition) {
    var bullet = new PIXI.Sprite.fromImage('./pic/c_bullet.png');
    bullet.anchor.set(0.5)
    bullet.position.x = startPosition.x;
    bullet.position.y = startPosition.y;
    bullet.rotation = rotation;
    app.stage.addChild(bullet);
    enemyBullets.push(bullet);
}
function rotateToPoint(mx, my, px, py) {
    var self = this;
    var dist_Y = my - py;
    var dist_X = mx - px;
    var angle = Math.atan2(dist_Y, dist_X);
    //var degrees = angle * 180/ Math.PI;
    return angle;
}
function boxesIntersect(a, b) {
    var ab = a.getBounds();
    var bb = b.getBounds();
    return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
}

function handleBullets(bullets,beShoot,bulletSpeed,shields){
    for (var b = bullets.length - 1; b >= 0; b--) {
        bullets[b].position.x += Math.cos(bullets[b].rotation) * bulletSpeed;
        bullets[b].position.y += Math.sin(bullets[b].rotation) * bulletSpeed;

        // --- 碰撞偵測 ---
        
        alreadyHit = false
        for (var s in shields) {
            if (boxesIntersect(bullets[b], shields[s])) {
                //console.log('block')
                app.stage.removeChild(bullets[b])
                bullets.splice(b, 1)
                alreadyHit = true 
                break
            }
        }
        if(alreadyHit) continue
        for(var t in beShoot){
            if (beShoot[t] == 'die') continue
            if (boxesIntersect(bullets[b], beShoot[t])) {
               //console.log('hit')
                app.stage.removeChild(bullets[b])
                bullets.splice(b, 1)
                beShoot[t].beHit()
                alreadyHit = true
                break
            }
        }
        if (alreadyHit) continue
        if (bullets[b].position.x > window.innerWidth | bullets[b].position.x < 0 | bullets[b].position.y > window.innerHeight | bullets[b].position.y < 0) {
            app.stage.removeChild(bullets[b])
            bullets.splice(b, 1)
        }

    }
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function createCircleEnemy(){
    var monster = new PIXI.Sprite.fromImage('./pic/circle.png')
    monster.anchor.set(0.5)
    var monsterDistance = (app.screen.height / 2)-50
    monster.rotation = randomIntFromInterval(0, 5) + Math.random()
    monster.updatePosition = () => {
        monster.rotation += 0.01
        // 轉一圈就歸零
        if (monster.rotation > Math.PI * 2) {
            monster.rotation = 0
        }
        monster.x = player.position.x - Math.cos(monster.rotation) * monsterDistance
        monster.y = player.position.y - Math.sin(monster.rotation) * monsterDistance
    }
    monster.beHit = function(){ // 用 => this 會是 window
        console.log(this.index)
        app.stage.removeChild(this)
        livingEnemys.splice(this.index,1,'die')
    }
    app.stage.addChild(monster)
    livingEnemys.push(monster)
    monster.index = livingEnemys.length -1
}
function controllWave(){
    if (isFirstWave){
        for (let w = 0; w < currentWave.circle; w++) {
            createCircleEnemy()
        }
        isFirstWave = false
    }
    shouldNextWave = livingEnemys.every((enemy)=>{
        return enemy == 'die'
    })
    if(shouldNextWave){
        if (waveIndex == totalWaves.length -1){
            alert('感謝你這麼有毅力玩到這~~')
        }
        waveIndex +=1
        currentWave = totalWaves[waveIndex]
        livingEnemys=[]
        for (let w = 0; w < currentWave.circle; w++) {
            createCircleEnemy()
        }
       
    }
}