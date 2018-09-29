/// <reference path="../p5.global-mode.d.ts" />

var myData,myRows;

function preload() {
  myData = loadTable("data.csv", "header");
}

function setup() {
  // put setup code here
  // console.log(data);
  setupTable(myData);
  noLoop();
}

function draw() {
  // put drawing code here
}
setupTable = function (data) {
  var parentDiv = createDiv();
  var headerDiv = createDiv().parent(parentDiv);
  for (var e of data.columns) {
    createSpan(e).parent(headerDiv);
  }
  myRows = data.getRows();
  for (var i = 0; i < 50; i++) {
    var rowDiv = createDiv().parent(parentDiv);
    for (var e of data.columns) {
      createSpan(myRows[i].obj[e]).parent(rowDiv);
    }
  }

}