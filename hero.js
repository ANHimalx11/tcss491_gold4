//this script contains the functions for the hero to use on the canvas
// var AM = new AssetManager();
var gameBoard2CanvasConversion = 25;
var pace = 300;
var minStep = -3;
var maxStep = 3;
var currentMoveObj = []; //will contain object of movement info
var pointList = []; // array of points to check 
var moving = false;
var mX = 2;
var mY = 2;



//map of booleans for walking directions
var actionMap = new Map([

    ['wait', true],
    ['n', false],
    ['ne', false],
    ['e', false],
    ['se', false],
    ['s', false],
    ['sw', false],
    ['w', false],
    ['nw', false]

    // hurt : false,
    // dead : false,
    // attack : false,
    // cast : false
]);

//Animation(spriteSheet, frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale, padWidth)
function Hero(game) {
    this.speed = 25;
    this.game = game;
    this.oldX;
    this.oldY;

    //action animations
    this.animation = new Animation(AM.getAsset("./img/hero/hero_battleidle_68w_93h_1pd_6fr.png"), 68, 93, 414, 0.12, 6, true, 1, 1);
    this.anim_n = new Animation(AM.getAsset("./img/hero/hero_walk_n_41w_97h_1pd_8fr.png"), 41, 97, 336, 0.12, 8, false, 1, 1);
    this.anim_ne = new Animation(AM.getAsset("./img/hero/hero_walk_ne_48w_96h_1pd_8fr.png"), 48, 96, 392, 0.12, 8, true, 1, 1);
    this.anim_e = new Animation(AM.getAsset("./img/hero/hero_walk_e_54w_95h_1pd_8fr.png"), 54, 95, 440, 0.12, 8, true, 1, 1);
    this.anim_se = new Animation(AM.getAsset("./img/hero/hero_walk_se_50w_96h_1pd_8fr.png"), 50, 96, 408, 0.12, 8, true, 1, 1);
    this.anim_s = new Animation(AM.getAsset("./img/hero/hero_walk_s_42w_97h_1pd_8fr.png"), 42, 97, 344, 0.12, 8, true, 1, 1);
    this.anim_sw = new Animation(AM.getAsset("./img/hero/hero_walk_sw_50w_96h_1pd_8fr.png"), 50, 96, 404, 0.12, 8, true, 1, 1);
    this.anim_w = new Animation(AM.getAsset("./img/hero/hero_walk_w_54w_95h_1pd_8fr.png"), 54, 95, 440, 0.12, 8, true, 1, 1);
    this.anim_nw = new Animation(AM.getAsset("./img/hero/hero_walk_nw_48w_96h_1pd_8fr.png"), 48, 96, 392, 0.12, 8, true, 1, 1);
    this.anim_hurt = new Animation(AM.getAsset("./img/hero/hero_hurt_2fr_die_4fr_74w_85h_1pd.png"), 74, 85, 300, 0.12, 2, false, 1, 1);
    this.anim_dead = new Animation(AM.getAsset("./img/hero/hero_hurt_2fr_die_4fr_74w_85h_1pd.png"), 74, 85, 300, 0.12, 4, false, 1, 1);
    this.anim_attack = new Animation(AM.getAsset("./img/hero/hero_attack_117w_161h_1pd_7fr.png"), 117, 161, 826, 0.12, 7, false, 1, 1);
    this.anim_cast = new Animation(AM.getAsset("./img/hero/hero_cast_51w_96h_0pd_1fr.png"), 51, 96, 51, .9, 2, false, 1, 0);

    Entity.call(this, game, 250, 300);
}

Hero.prototype = new Entity();
Hero.prototype.constructor = Hero;

////////////////////////UTILITY STUFF FOR HERO////////////////////

//utility to set max and min of a variable
Math.clip = function(number, min, max) {
    return Math.max(min, Math.min(number, max));
  }
function calcDist(p1x, p1y, p2x, p2y) {//find distance between two point objects
    var result;

    var dx = p2x - p1x;
    var dy = p2y - p1y;
    result =Math.sqrt(dx * dx + dy * dy)
    return(result);
}
//sets boolean flag for direction animation and returns an object of information
//to move the hero
function makeMovementInfo(currentX, currentY, mouseX, mouseY) {

    Entity.x = currentX;
    Entity.y = currentY;

    var nextX = mouseX * gameBoard2CanvasConversion;
    var nextY = mouseY * gameBoard2CanvasConversion;


    var dx = currentX - nextX; //keep dx and dy as neg and pos
    var dy = currentY - nextY; //for direction animation.

    var ddx = nextX - currentX; //use these for getting intervals
    var ddy = nextY - currentY;


    if (dx == 0 && dy > 0) {
        actionMap.set("n", true);
        mX = 0;
        mY = mY*-1
    }
    if (dx == 0 && dy < 0) {
        actionMap.set("s", true);
        mX = 0;
        mY = Math.abs(mY);
    }
    if (dx < 0 && dy == 0) {
        actionMap.set("e", true);
        mY = 0;
        mX = Math.abs(mX);
    }
    if (dx > 0 && dy == 0) {
        actionMap.set("w", true);
        mY =0;
        mX = mX * -1;
    }
    if (dx > 0 && dy > 0) {
        actionMap.set("nw", true);
        mX = mX * -1;
        mY = mY * -1;
    }
    if (dx < 0 && dy < 0) {
        actionMap.set("se", true);
        mY = Math.abs(mY);
        mX = Math.abs(mX);
    }
    if (dx < 0 && dy > 0) {
        actionMap.set("ne", true);
        mY = mY * -1;
        mX = Math.abs(mX);
    }
    if (dx > 0 && dy < 0) {
        actionMap.set("sw", true);
        mX = mX * -1;
        mY = Math.abs(mY);
    }
    var length = Math.sqrt(ddx * ddx + ddy * ddy);

    var moveObj = []; //using this to store the information about movement

    moveObj.push({
        'newX': nextX,
        'newY': nextY,
        'dist': length
    });
    return (moveObj);
}

//update all the information about the hero here
Hero.prototype.update = function () {

    if (this.game.click && isBuilding != true) { 
        this.oldX = this.x;
        this.oldY = this.y;
        moving = true;//after mouse click
        actionMap.forEach(resetDirections);
        currentMoveObj = makeMovementInfo(this.x, this.y, this.game.mouse.x, this.game.mouse.y);
    } 

    while(moving) { 

        //velocity, change at the top of code
        this.x += mX;
        this.y += mY;

        //TODO call collision check here

        //hero arrived at mouse click
        if(calcDist(this.oldX, this.oldY, this.x, this.y) >= currentMoveObj[0].dist) {
            moving = false;
            //clear other animation
            actionMap.forEach(resetDirections);
            
        }
    }
        //clear list of moveObj
        currentMoveObj.splice(0,currentMoveObj.length);
        
    Entity.prototype.update.call(this);

}

//reset the direction of the hero
function resetDirections(value, key, map) {

    if (map.get(key) == true) {
        map.set(key, false);
    }
}

//use this to draw any animations 
Hero.prototype.draw = function (ctx) {

    if (actionMap.get('n')) {
        this.anim_n.drawFrame(this.game.clockTick, ctx, this.x, this.y);

    }

    if (actionMap.get('ne')) {
        this.anim_ne.drawFrame(this.game.clockTick, ctx, this.x, this.y);

    }

    if (actionMap.get('e')) {
        this.anim_e.drawFrame(this.game.clockTick, ctx, this.x, this.y);

    }

    if (actionMap.get('se')) {
        this.anim_se.drawFrame(this.game.clockTick, ctx, this.x, this.y);

    }

    if (actionMap.get('s')) {
        this.anim_s.drawFrame(this.game.clockTick, ctx, this.x, this.y);

    }
    if (actionMap.get('sw')) {
        this.anim_sw.drawFrame(this.game.clockTick, ctx, this.x, this.y);

    }

    if (actionMap.get('w')) {
        this.anim_w.drawFrame(this.game.clockTick, ctx, this.x, this.y);

    }

    if (actionMap.get('nw')) {
        this.anim_nw.drawFrame(this.game.clockTick, ctx, this.x, this.y);

    } else if (!moving){
        
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }

    Entity.prototype.draw.call(this);
}





