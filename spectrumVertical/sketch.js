/// <reference path="../p5.global-mode.d.ts" />
var mic, fft, barSize, sizeSlider, x;
var range = [];
var song, amp, noise;
var population = 230;
var accumulator = 0;
var ants = [];

function preload() {
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noFill();
  // song.play();
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  // amp = new p5.Amplitude();
  // noise = new p5.Noise();
  colorMode(HSB);
  range = new Array(1024).fill(0);
  range = range.map(x => random(width));
  ants = new Array(population).fill(0);
  ants = ants.map(x => new Ant());
}

//TODO add mousedragged panning system

function draw() {
  background(0, 0, 0, 0.15);
  translate(posX ? posX : 0, posY ? posY : 0)
  stroke(78, 255, 255)
  rect(0.9 * width, 0, 10, accumulator);

  // fft.smooth();
  // fft.log
  // noise.start();
  var spectrum = fft.analyze();
  for (i = 0; i < spectrum.length; i++) {
    if (i < population) {
      var comp = map(i, 0, population, 360, 0);
      stroke(comp, 255, 255);
      var r = map(spectrum[i], 0, 255, 0.1, 225);
      x = map(i, 0, population, 0, width);
      y = map(i, 0, population, height, 0);
      ellipse(width / 2 + ants[i].dist, y, r);
      ants[i].move();
    } else {
      accumulator += spectrum[i];
    }
  }
}
// var waveform = fft.waveform();  // analyze the waveform
// beginShape();
// stroke(map(mouseX,0,width,0,360), 127, 200);
// // strokeWeight(5);
// for (var i = 0; i < waveform.length; i++){
//   var wx = map(i, 0, waveform.length, 0, width);
//   var wy = map(waveform[i], -1, 1, height, 0);
//   vertex(wx, wy);
// }
// endShape();


function drawFuzzy() {
  background(0, 0, 0, 90);
  var spectrum = fft.analyze();
  barSize = width / spectrum.length;
  for (i = 0; i < spectrum.length; i++) {
    var comp = map(i, 0, spectrum.length, 360, 0);
    stroke(comp, 127, 200);
    var y = map(spectrum[i], 0, 255, 1, 125);
    var x = map(spectrum[i], 0, 255, 0, width);
    ellipse(x, range[i], y)
  }
}