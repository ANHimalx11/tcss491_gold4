//this script contains the functions for the hero to use on the canvas
var gameBoard2CanvasConversion = 25;

//map of booleans for walking directions

var directionMap = new Map([
    ['n' , false],
    ['ne' , false],
    ['e' , false],
    ['se' , false],
    ['s' , false],
    ['sw', false],
    ['w' , false],
    ['nw' , false]
    // hurt : false,
    // dead : false,
    // attack : false,
    // cast : false
]);

//Animation(spriteSheet, frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale, padWidth)
function Hero(game) {
    this.x = 300;
    this.y = 300;
    this.nextX;
    this.nextY;
    this.speed = 1000;
    this.game = game;
    this.ctx = game.ctx;

    this.animation = new Animation(AM.getAsset("./img/hero/hero_battleidle_68w_93h_1pd_6fr.png"), 68, 93, 414, 0.12, 6, true, 1, 1);
    this.anim_n = new Animation(AM.getAsset("./img/hero/hero_walk_n_41w_97h_1pd_8fr.png"), 41, 97, 336, 0.12, 8, true, 1, 1);
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
    this.anim_cast = new Animation(AM.getAsset("./img/hero/hero_cast_51w_96h_0pd_1fr.png"), 51, 96, 51, .9, 1, false, 1, 0);

    Entity.call(this, game, this.x, this.y);
};

Hero.prototype = new Entity();
Hero.prototype.constructor = Hero;

// function linePoints(x1, y1, x2, y2, frames) {
//     var dx = x2 - x1;
//     var dy = y2 - y1;
//     var length = Math.sqrt(dx * dx + dy * dy);
//     var incrementX = dx / frames;
//     var incrementY = dy / frames;
//     var a = new Array();

//     a.push({
//         x: x1,
//         y: y1
//     });
//     for (var frame = 0; frame < frames - 1; frame++) {
//         a.push({
//             x: x1 + (incrementX * frame),
//             y: y1 + (incrementY * frame)
//         });
//     }
//     a.push({
//         x: x2,
//         y: y2
//     });
//     return (a);
// }

Hero.prototype.prepareWalk = function(mouseX, mouseY) {

    // points = linePoints(currentX, currentY, mouseX, mouseY, frameCount);
    // currentFrame = 0;
    // currentX = mouseX;
    // currentY = mouseY;
    
    var currentX = this.x;
    var currentY = this.y;
    var nextX = mouseX * gameBoard2CanvasConversion;
    var nextY = mouseY * gameBoard2CanvasConversion;

    var dx = currentX - nextX;
    var dy = currentY - nextY;

    if (dx == 0 && dy > 0) {
        directionMap.set("n",true);
        this.y -= this.game.clockTick * this.speed;
        this.x = this.x;
        
    }
    if (dx == 0 && dy < 0) {
        directionMap.set("s",true);
        this.x = this.x;
        this.y += this.game.clockTick * this.speed;
        
    }
    if (dx < 0 && dy == 0) {
        directionMap.set("e",true);
        this.y = this.y;
        this.x += this.game.clockTick * this.speed;
        
    }
    if (dx > 0 && dy == 0) {
        directionMap.set("w",true);
        this.y = this.y;
        this.x -= this.game.clockTick * this.speed;
        
    }
    if (dx > 0 && dy > 0) {
        directionMap.set("nw",true);
        this.x -= this.game.clockTick * this.speed;
        this.y -= this.game.clockTick * this.speed;
        
    }
    if (dx < 0 && dy < 0) {
        directionMap.set("se",true);
        this.y += this.game.clockTick * this.speed;
        this.x += this.game.clockTick * this.speed;
        
    }
    if (dx < 0 && dy > 0) {
        directionMap.set("ne",true);
        this.y -= this.game.clockTick * this.speed;
        this.x += this.game.clockTick * this.speed;
       
    }
    if (dx > 0 && dy < 0) {
        directionMap.set("sw",true);
        this.x -= this.game.clockTick * this.speed;
        this.y += this.game.clockTick * this.speed;
        
    }
}
 var mapIter = directionMap.keys();
Hero.prototype.update = function () {

    if (this.game.click) {
        this.prepareWalk(this.game.mouse.x, this.game.mouse.y);
    }
    //go through the map and if there is a true Boolean, reset interface.
   
    // directionMap.forEach(resetDirections);

    Entity.prototype.update.call(this);
}

function resetDirections(value, key, map) {
    
    if (map.get(key) == true) {
     checkAnime(mapIter.next().value);
     map.set(key, false);   
    } else {mapIter.next().value;
        map.set(key, false);
    }
}

function checkAnime(string) {
    switch (string) {
        case 'n':
        if (this.anim_n) {
            if (this.anim_n.isDone()) {
                this.anim_n.elapsedTime = 0;
            }}
        break;
        case 'ne' : 
        if (this.anim_ne) {
            if (this.anim_ne.isDone()) {
                this.anim_ne.elapsedTime = 0;
            }}
        break;
        case 'e' :
        if (this.anim_e) {
            if (this.anim_e.isDone()) {
                this.anim_e.elapsedTime = 0;
            }}
        break;
        case 'nw' :
        if (this.anim_nw) {
            if (this.anim_nw.isDone()) {
                this.anim_nw.elapsedTime = 0;
            }}
        break;
        case 's' :
        if (this.anim_s) {
            if (this.anim_s.isDone()) {
                this.anim_s.elapsedTime = 0;
            }}
        break;
        case 'se' :
        if (this.anim_se) {
            if (this.anim_se.isDone()) {
                this.anim_se.elapsedTime = 0;
            }}
        break;
        case 'w':
        if (this.anim_w) {
            if (this.anim_w.isDone()) {
                this.anim_w.elapsedTime = 0;
            }}
        break;

    }
}


//Animation.prototype.move = function(tick, ctx, currentX, currentY, mouseX, mouseY)
Hero.prototype.draw = function (ctx) {
    
    if (directionMap.get('n')) {
        this.anim_n.drawFrame(this.game.clockTick, ctx, this.x, this.y);    
    }

    if (directionMap.get('ne')) {
        this.anim_ne.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }

    if (directionMap.get('e')) {
        this.anim_e.drawFrame(this.game.clockTick, ctx, this.x, this.y);   
    }

    if (directionMap.get('se')) {
        this.anim_se.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }

    if (directionMap.get('s')) {
        this.anim_s.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }
    if (directionMap.get('sw')) {
        this.anim_sw.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }

    if (directionMap.get('w')) {
        this.anim_w.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }

    if (directionMap.get('nw')) {
        this.anim_nw.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }
    else {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }
    Entity.prototype.draw.call(this);
}






