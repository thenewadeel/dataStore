/// <reference path="../lib/p5.global-mode.d.ts" />

var myData, myRows, myTable;
var myColumns;

function preload() {
  myData = loadTable("data2.csv", "header")
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
        // "width": 200,
        "editor": true,
        headerFilter:true,
        // "align": "right",
        // "formatter": "progress",
        "cellClick": function (e, cell) {
          console.log("cell click", cell)
        },
      }
    },),
    // height:"100%",
    pagination:"local", //enable local pagination.
    paginationSize:20, // this option can take any positive integer value (default = 10)
    placeholder:"No Data Available", //display message to user on empty table
    // virtualDomBuffer:300 //set virtual DOM buffer to 300px
  });
  myTable.setData(myData.getRows().map(x=>{
    return x.obj;
  }));
  // for (var r = 0; r < myData.getRowCount(); r++)
  //   for (var c = 0; c < myData.getColumnCount(); c++) {
  //     document.appendChild(createDiv(myData.getString(r, c)));
  //   }

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