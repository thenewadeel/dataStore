/// <reference path="../p5.global-mode.d.ts" />

var myData, myRows, myTable;
var myColumns;
function preload() {
  myData = = loadTable("data.csv", "header")
  // while(myData===undefined){}
  // console.log('dat now?', await loadTable("data.csv", "header"));
}

tableSetup = function (rawTableData) {
  console.log('tableSetup Received:', rawTableData)
  myTable = new Tabulator("#baseTable", {
    columns: rawTableData.columns.map(x => {
      // console.log('rawElem', x)
      return {
        "title": x,
        "field": x,
        "sorter": "string",
        "width": 200,
        "editor": true,
        "align": "right",
        "formatter": "progress",
        "cellClick": function (e, cell) {
          console.log("cell click", cell)
        },
      }
    })
  });
  myTable.setData(myData);
};

function setup() {
  // put setup code here
  // console.log(data);
  tableSetup(myData)
  noLoop();
}

function draw() {
  // put drawing code here
}
setupTable = function (data) {
  // var parentDiv = createDiv();
  // var headerDiv = createDiv().parent(parentDiv);
  // for (var e of data.columns) {
  //   createSpan(e).parent(headerDiv);
  // }
  // myRows = data.getRows();
  // for (var r of myRows) {
  //   // var rowDiv = createDiv().parent(parentDiv);    .parent(rowDiv)
  //   for (var e of data.columns) {
  //     createSpan(r.obj[e]);
  //   }
  // }

}