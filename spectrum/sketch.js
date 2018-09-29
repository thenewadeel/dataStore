var mic, fft, barSize, sizeSlider;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noFill();

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  colorMode(HSB);
  // rectMode(CENTER);
  // sizeSlider = createSlider(0, 100);
}

function draw() {
  background(0);
  // stroke()
  var spectrum = fft.analyze();
  // barSize = sizeSlider.value();
  barSize = width / spectrum.length;
  //  beginShape();
  //  for (i = 0; i<spectrum.length; i++) {
  //   vertex(i, map(spectrum[i], 0, 255, height, 0) );
  //  }
  //  endShape();
  for (i = 0; i < spectrum.length; i++) {
    var comp = map(i, 0, spectrum.length, 360, 0);
    stroke(comp, 127, 200);
    var y = map(spectrum[i], 0, 255, height,0);

    // vertex(i, map(spectrum[i], 0, 255, height, 0) );
    rect(i * barSize, y, barSize, height);
  }
}