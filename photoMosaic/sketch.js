/// <reference path="../lib/p5.global-mode.d.ts" />
// var mic, fft, barSize, sizeSlider, x;
// var range = [];
// var electrons = [];
// var population = 1024;
// var first = true;

// Obamathon
// https://github.com/ITPNYU/Obamathon
// YouTube video tutorial: https://youtu.be/nnlAH1zDBDE
// var fs = require('fs');
// Source masterImage
var masterImage;
// Resize it
var smaller;
// Giant array of images
var allImages = [];
// Corresponding brightness value
var brightness = [];
// Images by brightness
var brightImages = [];

// Size of each "cell"
var scl = 64;
var w, h;
var alphabet = "ABCDEFGHIJKLMNOP"
var files;
var filename;
function preload() {
  files = new Array(11).fill(0).map((x, index) => {
    return 'photos/img' + alphabet[index] + '.jpg';
  });
}

function setup() {
  createCanvas(600, 749);
  masterImage = loadImage("shaheen.jpg");

  // Find all the images

  // files = listFiles("./photos");
  //allImages = new PImage[files.length-1];
  // Use a smaller amount just for testing
  allImages = new Array(11);
  // Need brightness average for each image
  brightness = new Array(allImages.length);

  // Only 256 brightness values
  brightImages = new Array(256);

  // Deal with all the images
  for (var i = 0; i < allImages.length; i++) {

    // What's the filename?
    // Should really check to see if it's a JPG
    // Starting at +1 to ignore .DS_Store on Mac
    // console.log(files[1])
     filename = files[i ];

    // Load the image
    var img = loadImage(filename);

    // Shrink it down
    allImages[i] = createImage(scl, scl, RGB);
    allImages[i].copy(img, 0, 0, img.width, img.height, 0, 0, scl, scl);
    allImages[i].loadPixels();

    // Calculate average brightness
    var avg = 0;
    for (var j = 0; j < allImages[i].pixels.length; j++) {
      var b = allImages[i].pixels[j];
      avg += b;
    }
    avg /= allImages[i].pixels.length;


    brightness[i] = avg;
  }

  // Find the closest image for each brightness value
  for (var i = 0; i < brightImages.length; i++) {
    var record = 256;
    for (var j = 0; j < brightness.length; j++) {
      var diff = abs(i - brightness[j]);
      if (diff < record) {
        record = diff;
        brightImages[i] = allImages[j];
      }
    }
  }

  // how many cols and rows
  w = masterImage.width / scl;
  h = masterImage.height / scl;

  smaller = createImage(w, h, RGB);
  smaller.copy(masterImage, 0, 0, masterImage.width, masterImage.height, 0, 0, w, h);
}

function draw() {
  background(0);
  console.log(smaller)
  smaller.loadPixels();
  // Columns and rows
  for (var x = 0; x < w; x++) {
    for (var y = 0; y < h; y++) {
      // Draw an image with equivalent brightness to source pixel
      var index = x + y * w;
      var c = smaller.pixels[index];
      console.log(c)
      var imageIndex = c;
      // fill(brightness(c));
      // noStroke();
      // rect(x*scl, y*scl, scl, scl);
      image(brightImages[imageIndex], x * scl, y * scl, scl, scl);
    }
  }
  noLoop();
}


// // Function to list all the files in a directory
// function listFiles(dir) {

//   var files = fs.readdirSync(dir);
//   console.log(files[0]);
//   return files;



//   // var file = new p5.File(dir);
//   // if (file.isDirectory()) {
//   //   var files = file.listFiles();
//   //   return files;
//   // } else {
//   //   // If it's not a directory
//   //   return null;
//   // }
// }