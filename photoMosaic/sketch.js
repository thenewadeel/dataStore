/// <reference path="../lib/p5.global-mode.d.ts" />
var mic, fft, barSize, sizeSlider, x;
var range = [];
var electrons = [];
var population = 1024;
var first = true;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noFill();
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  colorMode(HSB);
  range = new Array(1024).fill(height / 2);
  electrons = new Array(population).fill(0);
  electrons = electrons.map(x => new Electron());
}

function draw() {
  translate(posX?posX:0,posY?posY:0)
  var spectrum = fft.analyze();
  background(0, 0, 0, 0.1);
  stroke(129)
  for (i = 0; i < spectrum.length; i++) {
    if(this.first)electrons[i].setIndex(map(i,0,1024,0,360));
    electrons[i].addForce(map(spectrum[i], 0, 255, 0, 1));
    electrons[i].update();
    electrons[i].show();
  }
  // for (var elec of electrons) {


  //   elec.update();
  //   elec.show();
  // }
}
// translate(mouseX,mouseY)
// range = await rangeify(range);
// range = range.map((x) => (random(1) < 0.5) ? x + 1 : x - 1);
// var spectrum = fft.analyze();
// for (i = 0; i < spectrum.length; i++) {
//   var comp = map(i, 0, spectrum.length, 360, 0);
//   stroke(comp, 127, 200);
//   var r = map(spectrum[i], 0, 255, 0.1, 225);
//   x = map(i, 0, spectrum.length, 0, width);
//   ellipse(x, range[i], r)
// }
// }