//this script contains information for the towers

function Tower(game, x, y, towerType, towerName) {
    this.x = game.mouse.x; ///game board coordinates
    this.y = game.mouse.y;
    this.boundX = 48; ///canvas coordinates
    this.boundY = 220;
    this.radius = 100;
    this.game = game;
    this.ctx = game.ctx;
    this.type = towerType;
    this.fireRate = 0.5 + (0.05 * towerType);
    this.level = 1;
    this.upgradeCost = 15 + (5 * towerType);
    this.sellCost = 10 + (3 * towerType);
    this.target; //= new Enemy1(this.gameEngine, AM.getAsset("./img/level1flying_132w_102h_1pd_8fr.png"));
    this.targetIsSet = 0;
    this.damage = 7 + (3 * towerType);
    this.spawnTime = game.timer.gameTime;
    this.fireRateCount = 0;
    this.name = towerName;
    Entity.call(this, game, x, y);

}
Tower.prototype = new Entity();
Tower.prototype.constructor = Tower;

function createArrowTower() {
    isBuilding = 1;
    towerType = 0; //change value with each different tower
}
function createCannonTower() {
    isBuilding = 1;
    towerType = 3; //change value with each different tower
}

function createMagicTower() {
    isBuilding = 1;
    towerType = 6; //change value with each different tower
}
Tower.prototype = new Entity();
Tower.prototype.constructor = Tower;  

Tower.prototype.update = function () {
    var time = this.game.timer.gameTime - this.spawnTime;
    if (time >= this.fireRate * this.fireRateCount) {
        this.checkCC(this.game);
        this.fireRateCount = this.fireRateCount + 1;
    }
    if(this.targetIsSet == 1) {
        if(this.target.isDead == 1 || !this.collide(this.target)) {
            this.targetIsSet = 0;
        }
    }

    if(this.targetIsSet != 0) {
        if (this.target.isDead == 1 || !this.collide(this.target)) {
            this.checkTarget(this.game);
        }
    }
    Entity.prototype.update.call(this);
}

Tower.prototype.draw = function () {
    tower[this.type].draw(this.game, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

//////////////Type of towers in an array of objects//////////////// 0 = arrow, 1 = cannon, 2 = magic
var tower = [
    {
        ////Arrow tower type
        animation: ArrowAnimate = new Animation(AM.getAsset("./img/towers/tower_a1_48w_107h.png"), 48, 107, 48, 0.05, 1, true, 1.0, 0),
        //cost: 25,
        //damage: 20,
        attack: function () {
        },
        draw: function (game, ctx, x, y) {
            ArrowAnimate.drawFrame(game.clockTick, ctx, x, y)
        },


    },

    {
        ////Arrow tower type
        animation: ArrowAnimate2 = new Animation(AM.getAsset("./img/towers/tower_a2_48w_111h.png"), 48, 111, 48, 0.05, 1, true, 1.0, 0),
        //cost: 50,
        //damage: 20,
        attack: function () {
        },
        draw: function (game, ctx, x, y) {
            ArrowAnimate2.drawFrame(game.clockTick, ctx, x, y)


        },


    },

    {
        ////Arrow tower type
        animation: ArrowAnimate3 = new Animation(AM.getAsset("./img/towers/tower_a3_48w_116h.png"), 48, 116, 48, 0.05, 1, true, 1.0, 0),
        //cost: 50,
        //damage: 20,
        attack: function () {
        },
        draw: function (game, ctx, x, y) {
            ArrowAnimate3.drawFrame(game.clockTick, ctx, x, y)


        },


    },

    {
        ///Cannon tower type
        animation: CannonAnimate1 = new Animation(AM.getAsset("./img/towers/tower_c1_48w_96h.png"), 48, 107, 48, 0.05, 1, true, 1.0, 0),
        //cost: 25,
        //damage: 35,
        attack: function () {
        },
        draw: function (game, ctx, x, y) {
            CannonAnimate1.drawFrame(game.clockTick, ctx, x, y)
        },
    },

    {
        ///Cannon tower type
        animation: CannonAnimate2 = new Animation(AM.getAsset("./img/towers/tower_c2_48w_96h.png"), 48, 107, 48, 0.05, 1, true, 1.0, 0),
        //cost: 25,
        //damage: 35,
        attack: function () {
        },
        draw: function (game, ctx, x, y) {
            CannonAnimate2.drawFrame(game.clockTick, ctx, x, y)
        },
    },


    {
        ///Cannon tower type
        animation: CannonAnimate3 = new Animation(AM.getAsset("./img/towers/tower_c3_48w_100h.png"), 48, 107, 48, 0.05, 1, true, 1.0, 0),
        //cost: 25,
        //damage: 35,
        attack: function () {
        },
        draw: function (game, ctx, x, y) {
            CannonAnimate3.drawFrame(game.clockTick, ctx, x, y)
        },
    },

    {
        ////Magic tower type
        animation: MagicAnimate1 = new Animation(AM.getAsset("./img/towers/tower_m1_48w_102h.png"), 48, 102, 48, 0.05, 1, true, 1.0, 0),
        //cost: 40,
        //damage: 50,
        attack: function () {
        },
        draw: function (game, ctx, x, y) {
            MagicAnimate1.drawFrame(game.clockTick, ctx, x, y)

        },

        
    }, 


    {
        ////Magic tower type
        animation: MagicAnimate2 = new Animation(AM.getAsset("./img/towers/tower_m2_48w_102h.png"), 48, 102, 48, 0.05, 1, true, 1.0, 0),
        //cost: 40,
        //damage: 50,
        attack: function () {
        },
        draw: function (game, ctx, x, y) {
            MagicAnimate2.drawFrame(game.clockTick, ctx, x, y)

        },

        
    },


    {
        ////Magic tower type
        animation: MagicAnimate3 = new Animation(AM.getAsset("./img/towers/tower_m3_48w_108h.png"), 48, 108, 48, 0.05, 1, true, 1.0, 0),
        //cost: 40,
        //damage: 50,
        attack: function () {
        },
        draw: function (game, ctx, x, y) {
            MagicAnimate3.drawFrame(game.clockTick, ctx, x, y)

        },

        
    }

    
];////////////////End list of tower types

////////////////////////////////////UTILITY FOR TOWERS

Tower.prototype.checkCC = function (game) {
    var that = this;
    for (var i = 2; i <= game.entities.length - 1; i++) {
        //alert(game.entities.length);
        if (this.collide(game.entities[i])) {
            if (game.entities[i].name == "enemy") {
                if (this.targetIsSet == 0 && game.entities[i].isDead == 0) { //if the tower has no target and the entity is not dead
                    this.target = game.entities[i];//set the new target
                    this.targetIsSet = 1;
                }

                if (this.target == game.entities[i]) {
                    //this is where we call a flag to fire
                    switch (this.type) {
                        case 0: //make arrow
                            break;
                        case 3: //make cannon
                            var boomBoom = new cannonBall(that.game, that.x, that.y, that, game.entities[i]);
                            game.addTower(boomBoom);
                            boomBoom.fire = true;
                            console.log('we make a boom boom');
                            break;
                        case 6: //make magic
                            break;

                    }
                    // game.entities[i].health = game.entities[i].health - this.damage;            /////moved this to projectiles
                }
            }
            console.log('towers for days!');
        }
    }
}

Tower.prototype.checkTarget = function (game) {
    
    var furthestEntity, furthestDistance = -1;
    for (var i = 2; i <= game.entities.length - 1; i++) {
        if (this.collide(game.entities[i])) {
            var dist = this.getDistance(game.entities[i]);
            if (dist > furthestDistance) {
                furthestDistance = dist;
                furthestEntity = game.entities[i];
            }
        }
    }

    if (distance == -1) {
        this.targetIsSet = 0;
    } else {
        this.target = furthestEntity;
        this.targetIsSet = 1;
    }
    
}

Tower.prototype.collide = function (monster) {

    var myCircle = { 'x': this.recenterBoundX(), 'y': this.recenterBoundY(), 'r': this.radius };
    var otherCirle = { 'x': monster.recenterBoundX(), 'y': monster.recenterBoundY(), 'r': monster.radius };
    var dx = myCircle.x - otherCirle.x;
    var dy = myCircle.y - otherCirle.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    return (distance < myCircle.r + otherCirle.r);
}

Tower.prototype.getDistance = function (monster) {
    var myCircle = { 'x': this.recenterBoundX(), 'y': this.recenterBoundY(), 'r': this.radius };
    var otherCirle = { 'x': monster.recenterBoundX(), 'y': monster.recenterBoundY(), 'r': monster.radius };
    var dx = myCircle.x - otherCirle.x;
    var dy = myCircle.y - otherCirle.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    return distance;
}





////////////////////////////END UTILITY FOR TOWERS

/////////////////////////////////////////END 
//Animation(spriteSheet, frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale, padWidth)
//////////projectiles
function cannonBall(game, x, y, tower, monster) { 
    this.game = game;
    this.fire = false;
    this.hit = false;
    this.done = false;
    this.x = x;
    this.y = y;
    this.boundX = 0;
    this.boundY = 0;
    this.radius = 20;
    this.towerInfo = tower;
    this.cTarget = monster;
    this.totalDistance = this.getDistance(this.cTarget);
    this.speed = 10;
    this.onFire = new Animation(AM.getAsset("./img/towers/p_cannon_86w_86h_onFire_1fr_onHit1to10fr_1pd.png"), 86, 86, 870, 0.16, 2, true, .8, 1);
    this.cannonCollidedWithMonster = new Animation(AM.getAsset("./img/towers/p_cannon_86w_86h_onFire_1fr_onHit1to10fr_1pd.png"), 86, 86, 870, 0.12, 10, false, 1, 1);
    Entity.call(this, game, x, y);
}

cannonBall.prototype = new Entity();
cannonBall.prototype.constructor = cannonBall;

cannonBall.prototype.update = function () {
    if (this.fire) {
        this.isShot(this.totalDistance, this.ctarget);
    }
    if (this.hit) {
        //take out damage from target
        // game.entities[i].health = game.entities[i].health - this.damage;  
        this.cTarget.health = this.cTarget - this.towerInfo.damage; 
    }
    if (this.done) {
        this.reload();
    }
    
    //x and y velocity based on range
    //call isshot, then trigger onHit flag to true
    
    Entity.prototype.update.call(this);
}


cannonBall.prototype.draw = function () {

    if (this.fire) {
        //animation to onFire
        this.onFire.drawFrame(this.game.clockTick, this.game.ctx, this.x, this.y);
        if (this.hit) {
            this.cannonCollidedWithMonster.drawFrame(this.game.clockTick, this.game.ctx, this.x, this.y);
            if (this.cannonCollidedWithMonster.isDone()) {
                this.done = true;
            }
        }
        //animation to explode at monster
        //onHit.isdone then set on fire flag back to false
    }


    

    Entity.prototype.draw.call(this);
}

cannonBall.prototype.isShot = function () {


    var vx = this.totalDistance /(this.game.clockTick*this.speed) / 1000;
    var midPoint = this.totalDistance / 2;
    var vy = 2 * Math.sin(vx);
    var vy2 = 2 * Math.cos(vx); //after midpoint, switch this.y to vy2

    if (this.x <= this.cTarget.x) {
        this.x += vx * this.game.clockTick /this.speed;
        this.y += vy * this.game.clockTick /this.speed;

        if (this.x >= midPoint) {
            this.x += vx * this.game.clockTick * this.speed;
            this.y += vy2 * this.game.clockTick * this.speed;
        }
        if (this.x >= this.cTarget.x) {
            this.hit = true;
        }
    }


    //when onHit, set this.Hit to true
}

cannonBall.prototype.reload = function () {
    this.removeFromWorld = true;
}
cannonBall.prototype.getDistance = function (monster) {

    var myCircle = { 'x': this.towerInfo.recenterBoundX(), 'y': this.towerInfo.recenterBoundY(), 'r': this.towerInfo.radius };
    var otherCirle = { 'x': monster.recenterBoundX(), 'y': monster.recenterBoundY(), 'r': monster.radius };
    var dx = myCircle.x - otherCirle.x;
    var dy = myCircle.y - otherCirle.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    return (distance);
}