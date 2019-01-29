var AM = new AssetManager();

function Animation(spriteSheet, frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale) {
    this.spriteSheet = spriteSheet;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.sheetWidth = sheetWidth;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.scale = scale;
}

Animation.prototype.drawFrame = function (tick, ctx, x, y) {
    this.elapsedTime += tick;
    if (this.isDone()) {
        if (this.loop) this.elapsedTime = 0;
    }
    var frame = this.currentFrame();
    var xindex = 0;
    var yindex = 0;
    xindex = frame % this.sheetWidth;
    yindex = Math.floor(frame / this.sheetWidth);

    ctx.drawImage(this.spriteSheet,
                 xindex * this.frameWidth, yindex * this.frameHeight,  // source from sheet
                 this.frameWidth, this.frameHeight,
                 x, y,
                 this.frameWidth * this.scale,
                 this.frameHeight * this.scale);
}

Animation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

Animation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}

// no inheritance
function Background(game, spritesheet) {
    this.x = 0;
    this.y = 0;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
};

Background.prototype.draw = function () {
    this.x = 0;
    this.y = 0;
    var map =  [['-', '-', '-', '-', '-', '-', '-', 'm', '-', '-', '-', '-', '-', '-', '-', '-', ],
                ['-', '-', '-', '-', '-', '-', '-', 'm', '-', '-', '-', '-', '-', '-', '-', '-', ],
                ['-', '-', '-', '-', '-', '-', '-', 'm', '-', '-', '-', '-', '-', '-', '-', '-', ],
                ['-', '-', '-', '-', '-', '-', '-', 'm', '-', '-', '-', '-', '-', '-', '-', '-', ],
                ['-', '-', '-', '-', '-', '-', '-', 'm', '-', '-', '-', '-', '-', '-', '-', '-', ],
                ['-', '-', '-', '-', '-', '-', '-', 'm', '-', '-', '-', '-', '-', '-', '-', '-', ],
                ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', ],
                ['-', '-', '-', '-', '-', '-', '-', 'm', '-', '-', '-', '-', '-', '-', '-', '-', ],
                ['-', '-', '-', '-', '-', '-', '-', 'm', '-', '-', '-', '-', '-', '-', '-', '-', ],
                ['-', '-', '-', '-', '-', '-', '-', 'm', '-', '-', '-', '-', '-', '-', '-', '-', ],
                ['-', '-', '-', '-', '-', '-', '-', 'm', '-', '-', '-', '-', '-', '-', '-', '-', ],
                ['-', '-', '-', '-', '-', '-', '-', 'm', '-', '-', '-', '-', '-', '-', '-', '-', ],
                ['-', '-', '-', '-', '-', '-', '-', 'm', '-', '-', '-', '-', '-', '-', '-', '-', ],
                ['-', '-', '-', '-', '-', '-', '-', 'm', '-', '-', '-', '-', '-', '-', '-', '-', ],
                ];
    var i, j;
    for (i = 0; i < map.length; i++) {
        for (j = 0; j < map[0].length; j++) {
            var temp = map[i][j];
            if (temp == '-') {
                this.ctx.drawImage(AM.getAsset("./img/blue.png"), this.x, this.y);
                this.x = this.x + 50;
            }
            if (temp == 'm') {
                this.ctx.drawImage(AM.getAsset("./img/red.png"), this.x, this.y);
                this.x = this.x + 50;
            }
        }
        this.y = this.y + 50;
        this.x = 0;
    }
};

Background.prototype.update = function () {
};

AM.queueDownload("./img/blue.png");
AM.queueDownload("./img/red.png");

AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");

    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();

    gameEngine.addEntity(new Background(gameEngine, "maptest.txt"));

    console.log("All Done!");
});