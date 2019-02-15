//this script contains information for the towers

function Tower(game, towerType) {

    this.x = game.mouse.x;
    this.y = game.mouse.y;
    this.boundX = 48;
    this.boundY = 120;
    this.radius = 50;
    this.game = game;
    this.ctx = game.ctx;
    this.type = tower[towerType];
    Entity.call(this);
    
}
Tower.prototype = new Entity();
Tower.prototype.constructor = tower;  ////what is this used for?

    //////////////Type of towers in an array of objects//////////////// 0 = arrow, 1 = cannonc, 2 = magic
var tower = [
    {
        ////Arrow tower type
        cost: 25,
        damage: 20,
        update: function() {

            Entity.prototype.update.call(this);
            
        },
        draw: function() {

            Entity.prototype.draw.call(this);

        },

        
    },
    {
        ///Cannon tower type
        cost: 30,
        damage: 35,
        update: function() {



            Entity.prototype.update.call(this);
            
        },
        draw: function() {

            Entity.prototype.draw.call(this);
        },
    },
    {
        ////Magic tower type
        cost: 50,
        damage: 50,
        update: function() {

            Entity.prototype.update.call(this);
            
        },
        draw: function() {

            Entity.prototype.draw.call(this);

        },
    }
];////////////////End list of tower types

////////////////////////////////////UTILITY FOR TOWERS

Tower.prototype.checkCollision = function(monster) {

}

Tower.prototype.attack = function(monster) {

}






////////////////////////////END UTILITY FOR TOWERS

