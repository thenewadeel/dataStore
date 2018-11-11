/// <reference path="lib/p5.global-mode.d.ts" />

//Will be generated 1/person
var RANKS = [
    "Lt Col",
    "Maj",
    "Capt",
    "Lt",
    "2/Lt",

    "SM",
    "Sub",
    "N/Sub",
    "Hav",
    "L/Hav",
    "Nk",
    "L/Nk",
    "Sig",
    "Civ",
]

function Proforma(number, rank, name) {
    this.Rank = rank ? rank : RANKS[Math.floor(random(RANKS.length))];
    this.ArmyNo = number ? number : "99999" + random(999);
    this.Name = name ? name : "Mr " + RANKS[Math.floor(random(RANKS.length))];
}
/* this.loc = createVector(random(width), random(height));
 this.vel = createVector(0, 0.01);
 this.acc = createVector();
 this.maxForce=0.5;
 this.maxVel=5;
 this.stuffing = 0.5;
 this.index=0;
 this.show = function () {
     stroke(this.index,255/this.stuffing,200)
     ellipse(this.loc.x, this.loc.y, this.stuffing * 100);
 }
 this.update = function () {
     this.vel = this.vel.add(this.acc);
     this.vel.mult(3*this.stuffing);
     this.vel.limit(this.maxVel);
     this.loc = this.loc.add(this.vel);
     this.acc.mult(0);
     this.cleanup();
 }
 this.cleanup = function () {
     this.loc.x %= width;
     this.loc.y %= height;
     if (this.loc.x < 0) {
         this.loc.x = width //- this.x;
     }
     if (this.loc.y < 0) {
         this.loc.y = height //- this.x;
     }
 }
 this.addForce=function(f){
     this.acc.add(f*    this.maxForce);
     this.stuffing=f;
 }
 this.setIndex=function(i){
     this.index=i;
 }*/
// this.show = function () {
// var thick = map(this.z, 0, 20, 1, 3);
// strokeWeight(thick);
// stroke(138, 43, 226);
// line(this.x, this.y, this.x, this.y + this.len);
// }
// this.y = random(height);

// this.z = random(0, 20);
// this.len = map(this.z, 0, 20, 10, 20);
// this.yspeed = map(this.z, 0, 20, 1, 20);

// this.fall = function() {
//   this.y = this.y + this.yspeed;
//   var grav = map(this.z, 0, 20, 0, 0.2);
//   this.yspeed = this.yspeed + grav;

//   if (this.y > height) {
//     this.y = random(-200, -100);
//     this.yspeed = map(this.z, 0, 20, 4, 10);
//   }
// }