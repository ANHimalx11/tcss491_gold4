var AM = new AssetManager();


var spawnX = 0;
var spawnY = 0;
var baseX = 0;
var baseY = 0;
var lastX, lastY;
var distance = 24;
var level = 1;
var isBuilding = 0;
var towerType;
var spawnInterval = 1.0;
var playerGold = 40;
var playerHealth = 100;
var arrowTowerPrice = 15;
var cannonTowerPrice = 25;
var magicTowerPrice = 40;

var map =  [['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'p', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'm', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'm', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'm', '-'],
            ['s', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'm', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'm', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'm', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'm', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'm', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'm', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'm', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'm', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'm', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'm', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'm', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'm', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'm', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
            ];

var level1spawn = ['1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '1', '2', '2'];
var level2spawn = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];

/////////////////////////////////////////ANIMATION CLASS
function Animation(spriteSheet, frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale, padWidth) {
    this.spriteSheet = spriteSheet;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.sheetWidth = sheetWidth;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.scale = scale;
    this.padWidth = padWidth;

}

Animation.prototype.drawFrame = function (tick, ctx, x, y) {
    this.elapsedTime += tick;
    if (this.loop) {
        if (this.isDone()) {
            this.elapsedTime = 0;
        }
    } else if (this.isDone()) {
        return;
    }
    var xOffset = this.padWidth;
    var frame = this.currentFrame();
    var xindex = 0;
    var yindex = 0;
    
    xindex = frame % this.sheetWidth;
    yindex = Math.floor(frame / this.sheetWidth);
    var drawXpx = xindex * this.frameWidth + xOffset*xindex + xOffset;

    ctx.drawImage(this.spriteSheet,
                 drawXpx, yindex * this.frameHeight,  // source from sheet
                 this.frameWidth, this.frameHeight,
                 x, y,
                 this.frameWidth * this.scale,
                 this.frameHeight * this.scale);
}

Animation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

Animation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}

/////////////////////////////////////////END 
//Animation(spriteSheet, frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale, padWidth)

function base(game) {
    this.state = 0;
    this.animation = new Animation(AM.getAsset("./img/crystal_standing_35w_84h_1pd_6fr.png"), 35, 84, 216, .08, 6, true, 1, 1);
    this.ani_hurt = new Animation(AM.getAsset("./img/crystal_hurt_35w_84h_1pd_4fr.png"), 35, 84, 144, 2.0, 4, false, 1, 1);
    this.ani_dead = new Animation(AM.getAsset("./img/crystal_death_54w_84h_1pd_21fr.png"), 54, 84, 1155, 0.12, 21, false, 1, 1);
    this.ctx = game.ctx;
    this.name = "base";
    this.x = baseX;
    this.y = baseY;
    this.radius = 60;
    this.boundX = 35;
    this.boundY = 84;
    this.game = game;
    this.isDead = 0;
    Entity.call(this, game, baseX, baseY);
}



base.prototype = new Entity();
base.prototype.constructor = base;

base.prototype.update = function () {
    this.checkCC(this.game);

    Entity.prototype.update.call(this);
}

base.prototype.draw = function (ctx) {
    if (this.state == 1) {
        this.ani_hurt.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }
    else if (this.state == 2) {
        this.ani_dead.drawFrame(this.game.clockTick, ctx, this.x - 25, this.y);
    }
    else if (this.state == 0) {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }
    Entity.prototype.draw.call(this);
}

base.prototype.checkCC = function (game) {
    for (var i = 0; i <= game.entities.length - 1; i++) {
        if (this.collide(game.entities[i]) && playerHealth > 0) {
            console.log('what');
            this.state = 1;
            playerHealth = playerHealth - game.entities[i].damage;
            playerGold = playerGold + game.entities[i].reward;
            UpdateUI();
            game.entities[i].removeFromWorld = true;
            return;
        }
        else if (this.collide(game.entities[i]) && playerHealth <= 0) {
            console.log('already dead');
            this.state = 2;
            playerHealth = playerHealth - game.entities[i].damage;
            playerGold = playerGold + game.entities[i].reward;
            UpdateUI();
            game.entities[i].removeFromWorld = true;
        }
        else if (playerHealth > 0){
            this.state = 0;
        }

    }

}


base.prototype.collide = function(monster) {
    var myCircle = {'x': this.recenterBoundX(), 'y': this.recenterBoundY(), 'r': this.radius};
    var otherCirle = {'x': monster.recenterBoundX(), 'y': monster.recenterBoundY(), 'r': monster.radius};
    var dx = myCircle.x - otherCirle.x;
    var dy = myCircle.y - otherCirle.y;
    var distance = Math.sqrt(dx*dx + dy*dy);
    return (distance < myCircle.r + otherCirle.r);
}


//////////////////////////////////SPAWN MACHINE FOR MONSTERS
function spawner(game, spritesheet, gameEngine) {
    this.animation = new Animation(spritesheet, 50, 50, 1, 0.15, 1, true, 1);
    this.ctx = game.ctx;
    this.gameEngine = gameEngine;
    this.name = "spawner";
    this.gameEngine = game;
    this.radius = 25;
    this.isDead = 0;
    this.index = 0;
    Entity.call(this, game, spawnX, spawnY);
}

spawner.prototype = new Entity();
spawner.prototype.constructor = spawner;

spawner.prototype.update = function () {
    var time = this.gameEngine.timer.gameTime;
    if (this.index < level1spawn.length) {
        if(level1spawn[this.index] == '1' && time >= spawnInterval * this.index) {
            this.gameEngine.addEntity(new Enemy1(this.gameEngine, AM.getAsset("./img/monsters/level1flying_132w_102h_1pd_8fr.png")));
            this.index = this.index + 1;
        }
        
        if (level1spawn[this.index] == '2' && time >= spawnInterval * this.index) {
            this.gameEngine.addEntity(new Enemy1(this.gameEngine, AM.getAsset("./img/monsters/level1flying_132w_102h_1pd_8fr.png")));
            this.index = this.index + 1;
        }
		if(level1spawn[this.index] == "boss1" && time >= level1spawn.length * spawnInterval + 5) {//or if all enemies are dead spawn the boss
			this.gameEngine.addEntity(new boss1(this.gameEngine, AM.getAsset("./img/boss1.png")));
			this.index = this.index + 1;
		}
    }

    Entity.prototype.update.call(this);
}

spawner.prototype.draw = function () {
    
    Entity.prototype.draw.call(this);
}

function Enemy1(game, spritesheet) {
    this.animation = new Animation(spritesheet, 132, 102, 1064, 0.11, 8, true, .8,1);
    this.speed = 25;
    this.ctx = game.ctx;
    this.game = game;
    this.damage = 10;
    this.sizeX = 132 * this.animation.scale;
    this.sizeY = 102 * this.animation.scale;
    this.radius = 25;
    this.boundX = 132;
    this.boundY = 102;
    this.reward = 5;
    this.isDead = 0;
    this.name = "enemy1";
    this.visited = [['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
                    ];
    Entity.call(this, game, spawnX, spawnY);
}



Enemy1.prototype = new Entity();
Enemy1.prototype.constructor = Enemy1;

function distance(a, b) {
    var difX = a.x - b.x;
    var difY = a.y - b.y;
    return Math.sqrt(difX * difX + difY * difY);
};

Enemy1.prototype.collide = function(other) {
    var difX = this.x - other.x;
    var difY = this.y - other.y;
    return Math.sqrt(difX * difX + difY * difY) < this.radius + other.radius;
};
Enemy1.prototype.update = function () {
    if(this.isDead != 1) {
        for(var i = 0; i < this.game.entities.length; i++) {
            var ent = this.game.entities[i];
            if (ent.name == "base") {
                if(this.collide(ent)) {
                    playerHealth = playerHealth - this.damage;
                    playerGold = playerGold + this.reward;
                    this.isDead = 1;
                    UpdateUI();
                    //alert(ent.health + " " + gold);
                    //this.game.entities.splice(i, 1);
                }

                //if enemy collides with a projectile or hero ability then...
            }
        }
        var currentXFrame = Math.floor((this.x) / (800 / map[0].length));
        var currentYFrame = Math.floor((this.y) / (700 / map.length));

        if((map[currentYFrame][currentXFrame + 1] == 'm' || map[currentYFrame][currentXFrame + 1] == 'p')   && this.visited[currentYFrame][currentXFrame + 1] == '0') {
            this.x += this.game.clockTick * this.speed;
            this.visited[currentYFrame][currentXFrame] = '1';
         }
        if((map[currentYFrame][currentXFrame - 1] == 'm' || map[currentYFrame][currentXFrame - 1] == 'p')   && this.visited[currentYFrame][currentXFrame - 1] == '0') {
            this.x -= this.game.clockTick * this.speed;
            this.visited[currentYFrame][currentXFrame] = '1';
        }
     
        if((map[currentYFrame - 1][currentXFrame] == 'm' || map[currentYFrame - 1][currentXFrame] == 'p') && this.visited[currentYFrame - 1][currentXFrame] == '0') {
              this.y -= this.game.clockTick * this.speed;
              this.visited[currentYFrame][currentXFrame] = '1';
        }
         
         
        if((map[currentYFrame + 1][currentXFrame] == 'm' || map[currentYFrame + 1][currentXFrame] == 'p') && this.visited[currentYFrame + 1][currentXFrame] == '0') {
             this.y += this.game.clockTick * this.speed;
             this.visited[currentYFrame][currentXFrame] = '1';
        }
        //if the enemy is in the player's base die and decrease the base health
        Entity.prototype.update.call(this);
    } else {
        for (var i = this.game.entities.length - 1; i >= 0; --i) {
            if (this.game.entities[i].isDead == 1) {
                //this.entities.splice(i, 1);
                //splice currently freezes the game
            }
        }
        //need to remove entity 
        this.x = -100;
        this.y = -100;
    }
    
}

Enemy1.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}


function Enemy2(game, spritesheet) {
    this.animation = new Animation(spritesheet, 100, 55, 6, 0.05, 6, true, 1.0);
    this.speed = 50;
    this.ctx = game.ctx;
    this.game = game;
    this.damage = 10;
    this.sizeX = 50;
    this.sizeY = 50;
    this.radius = 25;
    this.isDead = 0;
    this.name = "enemy1";
    this.visited = [['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
                    ];
    Entity.call(this, game, spawnX, spawnY);
}



Enemy2.prototype = new Entity();
Enemy2.prototype.constructor = Enemy2;


Enemy2.prototype.collide = function(other) {
    var difX = this.x - other.x;
    var difY = this.y - other.y;
    return Math.sqrt(difX * difX + difY * difY) < this.radius + other.radius;
};
Enemy2.prototype.update = function () {
    if(this.isDead != 1) {
        for(var i = 0; i < this.game.entities.length; i++) {
            var ent = this.game.entities[i];
            if (ent.name == "base") {
                if(this.collide(ent)) {
                    this.isDead = 1;
                    //this.game.entities.splice(this, i);
                }

                //if enemy collides with a projectile or hero ability then...
            }
        }
        var currentXFrame = Math.floor((this.x) / (800 / map[0].length));
        var currentYFrame = Math.floor((this.y) / (700 / map.length));
        if((map[currentYFrame][currentXFrame + 1] == 'm' || map[currentYFrame][currentXFrame + 1] == 'p')   && this.visited[currentYFrame][currentXFrame + 1] == '0') {
            this.x += this.game.clockTick * this.speed;
            this.visited[currentYFrame][currentXFrame] = '1';
         }
        if((map[currentYFrame][currentXFrame - 1] == 'm' || map[currentYFrame][currentXFrame - 1] == 'p')   && this.visited[currentYFrame][currentXFrame - 1] == '0') {
            this.x -= this.game.clockTick * this.speed;
            this.visited[currentYFrame][currentXFrame] = '1';
        }
     
        if((map[currentYFrame - 1][currentXFrame] == 'm' || map[currentYFrame - 1][currentXFrame] == 'p') && this.visited[currentYFrame - 1][currentXFrame] == '0') {
              this.y -= this.game.clockTick * this.speed;
              this.visited[currentYFrame][currentXFrame] = '1';
        }
         
         
        if((map[currentYFrame + 1][currentXFrame] == 'm' || map[currentYFrame + 1][currentXFrame] == 'p') && this.visited[currentYFrame + 1][currentXFrame] == '0') {
             this.y += this.game.clockTick * this.speed;
             this.visited[currentYFrame][currentXFrame] = '1';
        }
        //if the enemy is in the player's base die and decrease the base health
        Entity.prototype.update.call(this);
    } else {
        //need to remove entity 
        this.x = -100;
        this.y = -100;
    }
    
}

Enemy2.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}





function boss1(game, spritesheet) {
    this.animation = new Animation(spritesheet, 168, 165, 4, 0.15, 4, true, 1.0);
    this.speed = 50;
    this.ctx = game.ctx;
    this.game = game;
    this.damage = 100;
	this.health = 500;
    this.sizeX = 165;
    this.sizeY = 168;
    this.radius = 25;
    this.isDead = 0;
    this.name = "boss1";
    this.visited = [['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
                    ];
    Entity.call(this, game, spawnX, spawnY);
}



boss1.prototype = new Entity();
boss1.prototype.constructor = boss1;


boss1.prototype.collide = function(other) {
    var difX = this.x - other.x;
    var difY = this.y - other.y;
    return Math.sqrt(difX * difX + difY * difY) < this.radius + other.radius;
};
boss1.prototype.update = function () {
    if(this.isDead != 1) {
        for(var i = 0; i < this.game.entities.length; i++) {
            var ent = this.game.entities[i];
            if (ent.name == "base") {
                if(this.collide(ent)) {
                    this.isDead = 1;
                    //this.game.entities.splice(this, i);
                }

                //if enemy collides with a projectile or hero ability then...
            }
        }
        var currentXFrame = Math.floor((this.x) / (800 / map[0].length));
        var currentYFrame = Math.floor((this.y) / (700 / map.length));
        if((map[currentYFrame][currentXFrame + 1] == 'm' || map[currentYFrame][currentXFrame + 1] == 'p')   && this.visited[currentYFrame][currentXFrame + 1] == '0') {
            this.x += this.game.clockTick * this.speed;
            this.visited[currentYFrame][currentXFrame] = '1';
         }
        if((map[currentYFrame][currentXFrame - 1] == 'm' || map[currentYFrame][currentXFrame - 1] == 'p')   && this.visited[currentYFrame][currentXFrame - 1] == '0') {
            this.x -= this.game.clockTick * this.speed;
            this.visited[currentYFrame][currentXFrame] = '1';
        }
     
        if((map[currentYFrame - 1][currentXFrame] == 'm' || map[currentYFrame - 1][currentXFrame] == 'p') && this.visited[currentYFrame - 1][currentXFrame] == '0') {
              this.y -= this.game.clockTick * this.speed;
              this.visited[currentYFrame][currentXFrame] = '1';
        }
         
         
        if((map[currentYFrame + 1][currentXFrame] == 'm' || map[currentYFrame + 1][currentXFrame] == 'p') && this.visited[currentYFrame + 1][currentXFrame] == '0') {
             this.y += this.game.clockTick * this.speed;
             this.visited[currentYFrame][currentXFrame] = '1';
        }
        //if the enemy is in the player's base die and decrease the base health
        Entity.prototype.update.call(this);
    } else {
        //need to remove entity 
        this.x = -100;
        this.y = -100;
    }
    
}

boss1.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}


//////////////////////////////////////////////////GAME BOARD CODE, used for enemy path and placing towers
function GameBoard(game) {
    
    Entity.call(this, game, 0, 0);
    this.grid = false;

    this.player = 1;
    this.board = [];
    this.size = 25;
    this.offset = -65;
    for (var i = 0; i < map.length; i++) {
        this.board.push([]);
        for (var j = 0; j < map[0].length; j++) {
            this.board[i].push(0);
        }
    }
}

GameBoard.prototype = new Entity();
GameBoard.prototype.constructor = GameBoard;

GameBoard.prototype.update = function () {
    if (this.game.click && isBuilding != 0) {
        isBuilding = 0;
        this.board[this.game.click.x][this.game.click.y] = towerType;
        if(towerType == 0){
            // this.game.addTower(new Tower(this.game, AM.getAsset("./img/towers/arrow1.png"), this.game.mouse.x * this.size, this.game.mouse.y * this.size + this.offset, towerType));
            this.game.addTower(new Tower(this.game, this.game.mouse.x * this.size, this.game.mouse.y * this.size + this.offset, towerType));
            playerGold = playerGold - arrowTowerPrice;
        } else if(towerType == 1) {
            // this.game.addTower(new Tower(this.game, AM.getAsset("./img/towers/cannon1.png"), this.game.mouse.x * this.size, this.game.mouse.y * this.size + this.offset, towerType));
            this.game.addTower(new Tower(this.game, this.game.mouse.x * this.size, this.game.mouse.y * this.size + this.offset, towerType));
            playerGold = playerGold - cannonTowerPrice;
        } else if(towerType == 2) {
            // this.game.addTower(new Tower(this.game, AM.getAsset("./img/towers/magic1.png"), this.game.mouse.x * this.size, this.game.mouse.y * this.size + this.offset, towerType));
            this.game.addTower(new Tower(this.game, this.game.mouse.x * this.size, this.game.mouse.y * this.size + this.offset, towerType));
            playerGold = playerGold - magicTowerPrice;
        }
        UpdateUI();
    }
    Entity.prototype.update.call(this);
}

GameBoard.prototype.draw = function (ctx) {

    //make the game board draw the background yo.
    ctx.drawImage(AM.getAsset("./img/maps/Map002.png"),this.x,this.y,800,700);


    if(isBuilding == 1) {

        // draw mouse shadow
        if (this.game.mouse && towerType == 0) {
            ctx.save();
            ctx.globalAlpha = 0.5;
            ctx.drawImage(AM.getAsset("./img/towers/arrow1.png"), this.game.mouse.x * this.size, this.game.mouse.y * this.size + this.offset, 48, 120);
            ctx.restore();
        }

        if (this.game.mouse && towerType == 1) {
            ctx.save();
            ctx.globalAlpha = 0.5;
            ctx.drawImage(AM.getAsset("./img/towers/cannon1.png"), this.game.mouse.x * this.size, this.game.mouse.y * this.size + this.offset, 48, 120);
            ctx.restore();
        }

        if (this.game.mouse && towerType == 2) {
            ctx.save();
            ctx.globalAlpha = 0.5;
            ctx.drawImage(AM.getAsset("./img/towers/magic1.png"), this.game.mouse.x * this.size, this.game.mouse.y * this.size + this.offset, 48, 120);
            ctx.restore();
        }
    }


    Entity.prototype.draw.call(this);
}



function setSpawnPoint() {
    for (i = 0; i < map.length; i++) {
        for (j = 0; j < map[0].length; j++) {
            var temp = map[i][j];
            if(temp == 's') {
                spawnX = j * 800 / map[0].length;
                spawnY = i * 700 / map.length;
            }
            if(temp == 'p') {
                baseX = j * 800 / map[0].length;
                baseY = i * 700 / map.length;
            }
        }
    }
}


function UpdateUI() {
    var gold = document.getElementById("Gold");
    gold.innerHTML = "$" + playerGold;

    var health = document.getElementById("Health");
    health.innerHTML = "" + playerHealth;

    //do the same with the other tower buttons
    if(playerGold < arrowTowerPrice) {
        document.getElementById("ArrowTowerButton").disabled = true;
    }
    if(playerGold >= arrowTowerPrice) {
        document.getElementById("ArrowTowerButton").disabled = false;
    }

    if(playerGold < cannonTowerPrice) {
        document.getElementById("CannonTowerButton").disabled = true;
    }
    if(playerGold >= cannonTowerPrice) {
        document.getElementById("CannonTowerButton").disabled = false;
    }

    if(playerGold < magicTowerPrice) {
        document.getElementById("MagicTowerButton").disabled = true;
    }
    if(playerGold >= magicTowerPrice) {
        document.getElementById("MagicTowerButton").disabled = false;
    }


}



AM.queueDownload("./img/maps/Map002.png");
AM.queueDownload("./img/towers/arrow1.png");
AM.queueDownload("./img/towers/cannon1.png");
AM.queueDownload("./img/towers/magic1.png");
AM.queueDownload("./img/monsters/level1flying_132w_102h_1pd_8fr.png");
AM.queueDownload("./img/crystal_standing_35w_84h_1pd_6fr.png");
AM.queueDownload("./img/hero/hero_battleidle_68w_93h_1pd_6fr.png");
AM.queueDownload("./img/hero/hero_attack_74w_92h_1pd_7fr.png");
AM.queueDownload("./img/hero/hero_attack_117w_161h_1pd_7fr.png");
AM.queueDownload("./img/hero/hero_battleidle_68w_93h_1pd_6fr.png");
AM.queueDownload("./img/hero/hero_cast_51w_96h_0pd_1fr.png");
AM.queueDownload("./img/hero/hero_hurt_2fr_die_4fr_74w_85h_1pd.png");
AM.queueDownload("./img/hero/hero_walk_e_54w_95h_1pd_8fr.png");
AM.queueDownload("./img/hero/hero_walk_n_41w_97h_1pd_8fr.png");
AM.queueDownload("./img/hero/hero_walk_ne_48w_96h_1pd_8fr.png");
AM.queueDownload("./img/hero/hero_walk_nw_48w_96h_1pd_8fr.png");
AM.queueDownload("./img/hero/hero_walk_s_42w_97h_1pd_8fr.png");
AM.queueDownload("./img/hero/hero_walk_se_50w_96h_1pd_8fr.png");
AM.queueDownload("./img/hero/hero_walk_sw_50w_96h_1pd_8fr.png");
AM.queueDownload("./img/hero/hero_walk_w_54w_95h_1pd_8fr.png");
AM.queueDownload("./img/crystal_death_54w_84h_1pd_21fr.png");
AM.queueDownload("./img/crystal_hurt_35w_84h_1pd_4fr.png")
AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");
    var gameEngine = new GameEngine();
    var gameBoard = new GameBoard(gameEngine);
    var hero = new Hero(gameEngine);
    gameEngine.addEntity(gameBoard);
    gameEngine.addTower(hero);
    gameEngine.init(ctx);
    
    gameEngine.start();
    setSpawnPoint();
    document.getElementById("ArrowTowerButton").addEventListener("click", createArrowTower);
    document.getElementById("CannonTowerButton").addEventListener("click", createCannonTower);
    document.getElementById("MagicTowerButton").addEventListener("click", createMagicTower);
    UpdateUI();
    gameEngine.addTower(new base(gameEngine));
    gameEngine.addEntity(new spawner(gameEngine, AM.getAsset("./img/base2.png")));
    

    
    console.log("All Done!");
});