/// <reference path="../lib/p5.global-mode.d.ts" />

var myData, myRows, myTable;
var myColumns;
var fieldStuff = [];
var summaryDiv;
var dataDiv;
const TESTDATALIMIT = 50;

var binder = [];
var binderObj = {};

sorterRank = function (a, b, aRow, bRow, column, dir, sorterParams) {
  //a, b - the two values being compared
  //aRow, bRow - the row components for the values being compared (useful if you need to access additional fields in the row data for the sort)
  //column - the column component for the column being sorted
  //dir - the direction of the sort ("asc" or "desc")
  //sorterParams - sorterParams object from column definition array
  // console.log('sorter invoked',a,b)
  // if(a=='SM')console.log(RANKS[a])
  return RANKS[a] - RANKS[b]; //you must return the difference between the two values
}
sortSelect = function (columnName) {
  if (columnName == 'Rank')
    return sorterRank;
}
//define custom mutator
// var fieldMutator = function (value, data, type, params, component) {
//   //value - original value of the cell
//   //data - the data for the row
//   //type - the type of mutation occurring  (data|edit)
//   //params - the mutatorParams object from the column definition
//   //component - when the "type" argument is "edit", this contains the cell component for the edited cell, otherwise it is the column component for the column
//   // console.log('val', value, 'data', data)
//   return value; //> mutatorParams.threshold; //return the new value for the cell data.
// }

function preload() {
  myData = loadTable("data2.csv", "header");
  // while(myData===undefined){}
  // console.log('dat now?', await loadTable("data.csv", "header"));
}

function setup() {
  // put setup code here
  // console.log('starting');
  // setupTable(myData)

  // console.log(myData)

  var loadedRows = myData.getRows();
  for (currentRow of loadedRows) {
    name_ = trim(currentRow.obj["Name"]);
    rank_ = trim(currentRow.obj["Rank"]);
    number_ = trim(currentRow.obj["Army No"]);
    var tempProforma = new Proforma(number_, rank_, name_);
    binder.push(tempProforma);
    binderObj[number_] = tempProforma;
    //limits data for faster reloading
    //TODO pagination or OBSERVABLE
    if (binder.length > TESTDATALIMIT) break;
  }

  noLoop();
  summaryDiv = document.getElementById('summaryDiv');
  dataDiv = document.getElementById('dataDiv');
  formatSummaryObj(summarize(myData)).parent(summaryDiv);
  formatBinder(binder).parent(dataDiv);
}

function draw() {
  // put drawing code here
}

formatSummaryObj = function (summaryObj) {
  var parentDiv = createDiv();
  // parentDiv.innerHTML='qqqqq';
  for (var e in summaryObj) {
    createSpan('<br>' + e + " : " + summaryObj[e]).parent(parentDiv);
  }
  // Total records <span id='spanTotalRecords'></span>

  return parentDiv;
}

summarize = function (loadedTable) {
  return {
    "total": myData.rows.length,
    "offrs": "TODO",
    "jcos": "TODO",
    "sldrs": "TODO",
    "civs": "TODO",
  }
}
formatBinder = function (binderArr) {
  var parentDiv = createDiv();
  // parentDiv.innerHTML='qqqqq';
  for (var proformaObj of binderArr) {
    rowDiv = createDiv().parent(parentDiv);
    for (var propX in proformaObj) {
      createSpan(propX + " : " + proformaObj[propX]).parent(rowDiv);
    }
  }
  return parentDiv;
}