class Sprite {

    constructor(img, width, height) {
        this.img = img;
        this.width = width;
        this.height = height;
    }

    draw() {
        throw Error('No override of super class \'abstract\' function');
    }
}

class Board extends Sprite {

    constructor(width, height) {
        super(new Image(), width, height);
        this.img.src = './board-1.png';
    }

    draw() {
        ctx.drawImage(this.img, 0, 0, this.width, this.height);
    }
}

class Pacgum extends Sprite {

    constructor(positionX, positionY) {
        super(undefined, positionX, positionY);
        this.isEat = false;
    }

    draw() {
        if (!this.isEat) {
            var radius = PACGUM_SIZE;
            ctx.beginPath();
            ctx.arc(this.width, this.height, radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = PACGUM_COLOR;
            ctx.fill();
            ctx.lineWidth = 1;
            ctx.strokeStyle = PACGUM_BORDER_COLOR;
            ctx.stroke();
        }
    }

    eat() {
        this.isEat = true;
        score += PACGUM_SCORE_VALUE;
        this.draw();
    }
}