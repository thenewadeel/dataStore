/// <reference path="../lib/p5.global-mode.d.ts" />
// const quranUrls = {
//   arabic: 'http://api.alquran.cloud/quran/quran-uthmani',
//   en: 'http://api.alquran.cloud/quran/en.asad',
//   audio: 'http://api.alquran.cloud/quran/ar.alafasy'
// }
var dataset;
var surahNames;
var myMeta = {
  "titles": [],
  "spiders": [],
  "lengths": []
};
const fontSizeMin = 15;
const fontSizeMax = 125;

function preload() {
  dataset = loadJSON('./masterData.json');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // var sss = dataset.surahs.reduce((fehrist, suraObj) => fehrist["titles"].push(suraObj.name),accx)
  var sss = dataset.surahs.map((suraObj) => {
    myMeta["titles"].push(suraObj.name);
    myMeta["lengths"].push(suraObj.ayahs.length);
    myMeta["spiders"].push(new Spider());
  })
  // noLoop();
}



function draw() {
  background(28, 12, 20);
  // noFill();
  fill(200)
  noStroke()
  // stroke(128)
  translate(posX ? posX : 0, posY ? posY : 0);
  myMeta.titles.forEach((title, index) => {
    textSize(map(myMeta.lengths[index], 3, 286, fontSizeMin, fontSizeMax));
    text(title, myMeta.spiders[index].position.x, myMeta.spiders[index].position.y);
  })
  // myMeta.spiders.map(x => x.move());
}

// function receiverFunc(stuff) {
//   dataset = stuff.data;
//   saveJSON(dataset,"masterData")
// }