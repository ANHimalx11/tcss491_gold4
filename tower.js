//this script contains information for the towers

function Tower(game, x, y, towerType, towerName) {
    this.x = game.mouse.x;
    this.y = game.mouse.y;
    this.boundX = 48;
    this.boundY = 220;
    this.radius = 110;
    this.game = game;
    this.ctx = game.ctx;
    this.type = towerType;
    this.fireRate = 0.5;
    this.level = 1;
    this.upgradeCost = 50 + (5 * towerType);
    this.sellCost = 15 + (30 * level) + (3 * towerType);
    this.target; //= new Enemy1(this.gameEngine, AM.getAsset("./img/level1flying_132w_102h_1pd_8fr.png"));
    this.targetIsSet = 0;
    this.damage = 17 + (3 * towerType);
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
    for (var i = 2; i <= game.entities.length - 1; i++) {
        //alert(game.entities.length);
        if (this.collide(game.entities[i])) {
            if (game.entities[i].name == "enemy") {
                if (this.targetIsSet == 0 && game.entities[i].isDead == 0) { //if the tower has no target and the entity is not dead
                    this.target = game.entities[i];//set the new target
                    this.targetIsSet = 1;
                }

                if (this.target == game.entities[i]) {
                    game.entities[i].health = game.entities[i].health - this.damage;
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

