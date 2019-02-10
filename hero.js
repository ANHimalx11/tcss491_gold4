//this script contains the functions for the hero to use on the canvas


//Animation(spriteSheet, frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale, padWidth)
function Hero(game) {
    this.currentX = 300;
    this.currentY = 300; 
    this.animation = new Animation(AM.getAsset("./img/hero/hero_battleidle_68w_93h_1pd_6fr.png"), 68,93,414,0.12,6,true,1,1);
    this.anim_n = new Animation(AM.getAsset("./img/hero/hero_walk_n_41w_97h_1pd_8fr.png"), 41,97,414,0.02,8,true,1,1);
    this.anim_ne = new Animation(AM.getAsset("./img/hero/hero_walk_ne_48w_96h_1pd_8fr.png"), 48,96,414,0.02,8,true,1,1);
    this.anim_e = new Animation(AM.getAsset("./img/hero/hero_walk_e_54w_95h_1pd_8fr.png"), 54,95,414,0.02,8,true,1,1);
    this.anim_se = new Animation(AM.getAsset("./img/hero/hero_walk_se_50w_96h_1pd_8fr.png"), 50,96,414,0.02,8,true,1,1);
    this.anim_s = new Animation(AM.getAsset("./img/hero/hero_walk_s_42w_97h_1pd_8fr.png"), 42,97,414,0.02,8,true,1,1);
    this.anim_sw = new Animation(AM.getAsset("./img/hero/hero_walk_sw_50w_96h_1pd_8fr.png"), 50,96,414,0.02,8,true,1,1);
    this.anim_w = new Animation(AM.getAsset("./img/hero/hero_walk_w_54w_95h_1pd_8fr.png"), 54,95,414,0.02,8,true,1,1);
    this.anim_nw = new Animation(AM.getAsset("./img/hero/hero_walk_nw_48w_96h_1pd_8fr.png"), 48,96,414,0.02,8,true,1,1);
    this.anim_hurt = new Animation(AM.getAsset("./img/hero/hero_hurt_2fr_die_4fr_74w_85h_1pd.png"), 74,85,414,0.02,2,false,1,1);
    this.anim_dead = new Animation(AM.getAsset("./img/hero/hero_hurt_2fr_die_4fr_74w_85h_1pd.png"), 74,85,414,0.02,4,false,1,1);
    this.anim_attack = new Animation(AM.getAsset("./img/hero/hero_attack_117w_161h_1pd_7fr.png"), 117,161,414,0.02,7,false,1,1);
    this.anim_cast = new Animation(AM.getAsset("./img/hero/hero_cast_51w_96h_0pd_1fr.png"), 51,96,51,0.5,1,false,1,1);
    Entity.call(this, game, baseX, baseY);

}
Hero.prototype = new Entity();
Hero.prototype.constructor = Hero;

// Hero.prototype.update = function () {
//     // if (this.game.click) {

//     // }
//     Entity.prototype.update.call(this);
// }

Hero.prototype.draw = function (ctx) {
    this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}