//this script contains information for the towers

function Tower(game, x, y, towerType) {

    this.x = game.mouse.x;
    this.y = game.mouse.y;
    this.boundX = 48;
    this.boundY = 120;
    this.radius = 50;
    this.game = game;
    this.ctx = game.ctx;
    this.type = towerType;
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
    towerType = 1; //change value with each different tower
}

function createMagicTower() {
    isBuilding = 1;
    towerType = 2; //change value with each different tower
}

Tower.prototype.update = function() {
    tower[this.type].update;
    Entity.prototype.update.call(this);
}

Tower.prototype.draw = function() {
    tower[this.type].draw(this.game, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

    //////////////Type of towers in an array of objects//////////////// 0 = arrow, 1 = cannonc, 2 = magic
var tower = [
    {
        ////Arrow tower type
        animation: ArrowAnimate = new Animation(AM.getAsset("./img/towers/arrow1.png"), 48, 120, 48, 0.05, 1, true, 1.0, 0),
        cost: 25,
        damage: 20,
        update: function() {

            
            
        },
        draw: function(game, ctx, x, y) {
            ArrowAnimate.drawFrame(game.clockTick, ctx, x, y)
            

        },

        
    },

    {
        ///Cannon tower type
        animation: CannonAnimate = new Animation(AM.getAsset("./img/towers/cannon1.png"), 48, 120, 48, 0.05, 1, true, 1.0, 0),
        cost: 30,
        damage: 35,
        update: function() {

        },
        draw: function(game, ctx, x, y) {
            CannonAnimate.drawFrame(game.clockTick, ctx, x, y)
        },
    },

    {
        ////Magic tower type
        animation: MagicAnimate = new Animation(AM.getAsset("./img/towers/magic1.png"), 48, 120, 48, 0.05, 1, true, 1.0, 0),
        cost: 50,
        damage: 50,
        update: function() {

            
        },
        draw: function(game, ctx, x, y) {
            MagicAnimate.drawFrame(game.clockTick, ctx, x, y)

        },
    }
];////////////////End list of tower types

////////////////////////////////////UTILITY FOR TOWERS

Tower.prototype.checkCollision = function(monster) {

}

Tower.prototype.attack = function(monster) {

}






////////////////////////////END UTILITY FOR TOWERS

