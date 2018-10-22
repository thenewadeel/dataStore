/// <reference path="../lib/p5.global-mode.d.ts" />
const quranUrls = {
  arabic: 'http://api.alquran.cloud/quran/quran-uthmani',
  en: 'http://api.alquran.cloud/quran/en.asad',
  audio: 'http://api.alquran.cloud/quran/ar.alafasy'
}
var dataset;

function preload() {
  dataset = loadJSON(quranUrls.arabic, receiverFunc);
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noFill();
  background(128, 12, 200);
  noLoop();
}



function draw() {
  background(0, 0, 0, 0.031);
  translate(posX ? posX : 0, posY ? posY : 0)
}

function receiverFunc(stuff) {
  dataset = stuff.data;
  saveJSON(dataset,"masterData")
}