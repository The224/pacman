'use strict';

const BOARD = new Board(500, 500);


const pacgums = Array(300);


const PACGUM_SPACER = 16;

let x = PACGUM_SPACER;
let y = PACGUM_SPACER;

for (let i = 0; i < pacgums.length; i++) {
    const element = pacgums[i];
    pacgums[i] = new Pacgum(x, y);

    x += PACGUM_SPACER;

    if (x > 500) {
        x = 0;
        y += PACGUM_SPACER;
    }
}

const ct = new Pacgum(27, 27);

window.onload = function () {
    BOARD.draw();
    pacgums.forEach(g => g.draw());
}
