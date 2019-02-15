//this script contains information for the towers

function Tower(game, x, y, towerType) {

    this.x = game.mouse.x;
    this.y = game.mouse.y;
    this.boundX = 48;
    this.boundY = 220;
    this.radius = 100;
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

    //////////////Type of towers in an array of objects//////////////// 0 = arrow, 1 = cannon, 2 = magic
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
        cost: 25,
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
        cost: 40,
        damage: 50,
        update: function() {

            
        },
        draw: function(game, ctx, x, y) {
            MagicAnimate.drawFrame(game.clockTick, ctx, x, y)

        },
    }
];////////////////End list of tower types

////////////////////////////////////UTILITY FOR TOWERS

Tower.prototype.checkCC = function(game) {
    for (var i = 2; i <= game.entities.length - 1; i++) {
               if(this.collide(game.entities[i])) {
                   console.log('i am here yo!');
               }
}
}


Tower.prototype.collide = function(monster) {

    var myCircle = {'x': this.recenterBoundX(), 'y': this.recenterBoundY(), 'r': this.radius};
    var otherCirle = {'x': monster.recenterBoundX(), 'y': monster.recenterBoundY(), 'r': monster.radius};
    var dx = myCircle.x - otherCirle.x;
    var dy = myCircle.y - otherCirle.y;
    var distance = Math.sqrt(dx*dx + dy*dy);
    
    return (distance < myCircle.r + otherCirle.r);
}





////////////////////////////END UTILITY FOR TOWERS

