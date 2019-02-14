//this script contains information for the towers

var getXmouse;
var getYmouse;



function tower(game, x, y) {

    this.x = x; //always going to be 24
    this.y = y; //always going to be 120
    this.radius = 
    this.game = game;
    this.ctx = game.ctx;
    this.list = tower.types[2];

    var monsterList = [];

    //////////////Type of towers in an array of object////////////////
tower.types = [];


tower.types.Arrow = {
    path: "./img/towers/arrow1.png",
    x = 48,
    y = 120,
    cost: 20,
    range: 10,
    damage: 10,
    rateOfFire: 10,
    upgrades: [
		{ damage: 15, rate: 38, range: 85 },
		{ damage: 25, rate: 36, range: 90 },
		{ damage: 50, rate: 34, range: 95 },
    ],

    fire: function (monster) {
        var monster = monster[0];
        var _health = monster.health;
        var tower = this;

        if ((monster.health -= tower.damage) <= 0 && _health > 0) {
            return monster.health = monster.health - tower.damage;
        }
        
    }
}

tower.types.Cannon = {
    path: "./img/towers/cannon1.png",
    x = 48,
    y = 120,
    cost: 25,
    damage: 15,
    range: 8,
    rateOfFire: 8,
    upgrades: [
		{ damage: 20, rate: 57, range: 125 },
		{ damage: 30, rate: 54, range: 130 },
        { damage: 40, rate: 51, range: 135 },
    ],

    fire: function (monster) {
        var monster = monster[0];
        var _health = monster.health;
        var tower = this;

        if ((monster.health -= tower.damage) <= 0 && _health > 0) {
            return monster.health - tower.damage;
        }
        
    }
}

tower.types.Magic = {
    path: "./img/towers/magic1.png",
    x = 48,
    y = 120,
    cost: 35,
    range: 10,
    damage: 20,
	upgrades: [
		{ damage: 5, rate: 38, range: 62 },
		{ damage: 10, rate: 36, range: 64 },
        { damage: 15, rate: 34, range: 66 },
    ],

    fire: function (monster) {
        var monster = monster[0];
        var _health = monster.health;
        var tower = this;

        if ((monster.health -= tower.damage) <= 0 && _health > 0) {
            return monster.health - tower.damage;
        }
        
    }
}
    Entity.call(this);
}

tower.prototype = new Entity();
tower.prototype.constructor = tower;

tower.prototype.update = function() {

    var index, len;
    var tower = this;

    for (index = 0, len = monsterList.length; index < len; ++index) {
        // console.log(monsterList[index]);

       if( tower.collision(monster) !== false && monster.health >= 0) {

            tower.fire(monster);

       } else {
           removeMonsterFromList(monster);
       }
    }
    Entity.prototype.update.call(this);
}

tower.prototype.draw = function(number) {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

tower.prototype.removeMonsterFromList() = function(monster) {
    monsterList.splice(monster);
    Entity.prototype.update.call(this);
}

//taken from lecture
tower.prototype.collision = function(monster) {
    var myCircle = {radius:20, x:24, y:120};
    var monster = {radius:monster.radius, x:monster.x, y:monster.y};
    var dx = myCircle.x - monster.x;
    var dy = myCircle.y - monster.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if(distance < myCircle.radius + monster.radius){   // collision detected!}

    //add to monster list
    monsterList.push(monster);
    Entity.prototype.update.call(this);
    return true;
}
    else return false;
}
//UI and Game Interactions

//taken from go code from class
tower.prototype.startInput = function () {
    console.log('Starting input');
    var that = this;

    var elementId;


    var getXandY = function (e,number) {
        var x = e.clientX - that.ctx.canvas.getBoundingClientRect().left - 25;
        var y = e.clientY - that.ctx.canvas.getBoundingClientRect().top - 25;

        x = Math.floor(x / 39.55);
        y = Math.floor(y / 39.55);

        return{  x: x, y: y };

    }
    this.ctx.getElementById("arrow dropdown",tower(GameEngine));

    this.ctx.canvas.addEventListener("mousemove", function (e) {
        //console.log(getXandY(e));
        that.mouse = getXandY(e);
    }, false);

    this.ctx.canvas.addEventListener("click", function (e) {
        //console.log(getXandY(e));
        that.click = getXandY(e);
    }, false);

    console.log('Input started');
}

focusNoScrollMethod = function getFocusWithoutScrolling() {          
    document.getElementById("myButton").focus({preventScroll:true});
  }

