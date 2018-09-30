var mic, fft, barSize, sizeSlider, x;
var range = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noFill();
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  colorMode(HSB);
  range = new Array(1024).fill(0);
  range = range.map(x => random(height));
}

function draw() {
  background(0, 0, 0, 0.15);
  var spectrum = fft.analyze();
  for (i = 0; i < spectrum.length; i++) {
    var comp = map(i, 0, spectrum.length, 360, 0);
    stroke(comp, 127, 200);
    var r = map(spectrum[i], 0, 255, 0.1, 225);
    x = map(i, 0, spectrum.length, 0, width);
    ellipse(x, range[i], r)
  }
}
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