//this script contains information for the towers

function tower(x,y) {
    Entity.call(this);
    this.x = x;
    this.y = y;
}
tower.prototype = new Entity();
tower.prototype.constructor = tower;


tower.types = {};


tower.types.Arrow = {
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
        
    }
}

tower.types.Cannon = {
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
        
    }

}

tower.types.Magic = {
    cost: 35,
    range: 10,
    damage: 20,
	upgrades: [
		{ damage: 5, rate: 38, range: 62 },
		{ damage: 10, rate: 36, range: 64 },
        { damage: 15, rate: 34, range: 66 },
    ],

    fire: function(monster){

    }
}