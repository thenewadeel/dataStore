/// <reference path="p5.global-mode.d.ts" />
var posX = 0;
var posY = 0;
var locked = false;
var xOffset = 0.0;
var yOffset = 0.0;

function mousePressed() {
    locked = true;
    xOffset = mouseX - posX;
    yOffset = mouseY - posY;
}

function mouseDragged() {
    if (locked) {
        posX = mouseX - xOffset;
        posY = mouseY - yOffset;
    }
}

function mouseReleased() {
    locked = false;
}