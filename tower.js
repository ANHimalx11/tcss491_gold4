//this script contains information for the towers

var towertype = [];



function ArrowTower(game, spritesheet, Xcoor, Ycoor) {
    this.animation = new Animation(spritesheet, 48, 120, 48, 0.05, 1, true, 1.0, 0);
    this.ctx = game.ctx;
    this.game = game;
    this.damage = 10;
    this.sizeX = 48;
    this.sizeY = 120;
    this.radius = 24;
    this.name = "ArrowTower";

    Entity.call(this, game, Xcoor, Ycoor);
}


function CannonTower(game, spritesheet, Xcoor, Ycoor) {
    this.animation = new Animation(spritesheet, 48, 120, 48, 0.05, 1, true, 1.0, 0);
    this.ctx = game.ctx;
    this.game = game;
    this.damage = 10;
    this.sizeX = 48;
    this.sizeY = 120;
    this.radius = 24;
    this.name = "CannonTower";

    Entity.call(this, game, Xcoor, Ycoor);
}

function MagicTower(game, spritesheet, Xcoor, Ycoor) {
    this.animation = new Animation(spritesheet, 48, 120, 48, 0.05, 1, true, 1.0, 0);
    this.ctx = game.ctx;
    this.game = game;
    this.damage = 10;
    this.sizeX = 48;
    this.sizeY = 120;
    this.radius = 24;
    this.name = "Magic";

    Entity.call(this, game, Xcoor, Ycoor);
}


// ArrowTower.prototype = new Entity();
// ArrowTower.prototype.constructor = ArrowTower;


// ArrowTower.prototype.collide = function(other) {
//     var difX = this.x - other.x;
//     var difY = this.y - other.y;
//     return Math.sqrt(difX * difX + difY * difY) < this.radius + other.radius;
// };

// ArrowTower.prototype.update = function () {
    

// }

// ArrowTower.prototype.draw = function () {
//     this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
//     Entity.prototype.draw.call(this);
// }



// // tower.prototype.update = function() {

// //     var index, len;
// //     var tower = this;

// //     for (index = 0, len = monsterList.length; index < len; ++index) {
// //         // console.log(monsterList[index]);

// //        if( tower.collision(monster) !== false && monster.health >= 0) {

// //             tower.fire(monster);

// //        } else {
// //            removeMonsterFromList(monster);
// //        }
// //     }
// //     Entity.prototype.update.call(this);
// // }

// // tower.prototype.draw = function(number) {
// //     this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
// //     Entity.prototype.draw.call(this);
// // }

// // tower.prototype.removeMonsterFromList() = function(monster) {
// //     monsterList.splice(monster);
// //     Entity.prototype.update.call(this);
// // }

// // //taken from lecture
// // tower.prototype.collision = function(monster) {
// //     var myCircle = {radius:20, x:24, y:120};
// //     var monster = {radius:monster.radius, x:monster.x, y:monster.y};
// //     var dx = myCircle.x - monster.x;
// //     var dy = myCircle.y - monster.y;
// //     var distance = Math.sqrt(dx * dx + dy * dy);

// //     if(distance < myCircle.radius + monster.radius){   // collision detected!}

// //     //add to monster list
// //     monsterList.push(monster);
// //     Entity.prototype.update.call(this);
// //     return true;
// // }
// //     else return false;
// // }
