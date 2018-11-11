/// <reference path="../lib/p5.global-mode.d.ts" />

var myData, myRows, myTable;
var myColumns;
var fieldStuff = [];
var summaryDiv;
var RANKS = {
  "Lt Col": 0,
  "Maj": 1,
  "Capt": 2,
  "Lt": 3,
  "2/Lt": 4,

  "SM": 10,
  "Sub": 11,
  "N/Sub": 12,
  "Hav": 13,
  "L/Hav": 14,
  "Nk": 15,
  "L/Nk": 16,
  "Sig": 17,
  "Civ": 18,
}
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



tableSetup = function (rawTableData) {
  console.log('tableSetup Received:', rawTableData)
  myTable = new Tabulator("#baseTable", {
    columns: [{
        formatter: "responsiveCollapse",
        // width: 30,
        // minWidth: 30,
        // align: "center",
        // resizable: false,
        // headerSort: false
      },
      {
        formatter: "rownum",
        // align: "center",
        // width: 40
      },
      {
        "title": "Army No",
        "field": "Army No",
        "sorter": "string",
        // "width": 200,
        "editor": true,
        headerFilter: true,
        // sorter: sortSelect(x),
        // "align": "right",
        // "formatter": "progress",
        "cellClick": function (e, cell) {
          console.log("cell click", cell)
        },
      },
      {
        "title": "Rank",
        "field": "Rank",
        "sorter": sorterRank,
        // "width": 200,
        "editor": true,
        headerFilter: true,
        // sorter: sortSelect(x),
        // "align": "right",
        // "formatter": "progress",
        // mutator:fieldMutator,
        "cellClick": function (e, cell) {
          console.log("cell click", cell)
        },
      },
      {
        "title": "Name",
        "field": "Name",
        // "sorter": sorterRank,
        // "width": 200,
        "editor": true,
        headerFilter: true,
        // sorter: sortSelect(x),
        // "align": "right",
        // "formatter": "progress",
        // mutator:fieldMutator,
        "cellClick": function (e, cell) {
          console.log("cell click", cell)
        },
      },
      {
        "title": "Company",
        "field": "Coy",
        // "sorter": sorterRank,
        // "width": 200,
        "editor": true,
        headerFilter: true,
        // sorter: sortSelect(x),
        // "align": "right",
        // "formatter": "progress",
        // mutator:fieldMutator,
        "cellClick": function (e, cell) {
          console.log("cell click", cell)
        },
      },
      {
        "title": "Security Clearance Auth",
        "field": "Security Clearance Auth",
        // "sorter": sorterRank,
        // "width": 200,
        "editor": true,
        headerFilter: true,
        // sorter: sortSelect(x),
        // "align": "right",
        // "formatter": "progress",
        // mutator:fieldMutator,
        "cellClick": function (e, cell) {
          console.log("cell click", cell)
        },
      },
      {
        "title": "Date",
        "field": "Date",
        // "sorter": sorterRank,
        // "width": 200,
        "editor": true,
        headerFilter: true,
        // sorter: sortSelect(x),
        // "align": "right",
        // "formatter": "progress",
        // mutator:fieldMutator,
        "cellClick": function (e, cell) {
          console.log("cell click", cell)
        },
      }, {
        "title": "Security initiated",
        "field": "Security initiated",
        // "sorter": sorterRank,
        // "width": 200,
        "editor": true,
        headerFilter: true,
        // sorter: sortSelect(x),
        // "align": "right",
        // "formatter": "progress",
        // mutator:fieldMutator,
        "cellClick": function (e, cell) {
          console.log("cell click", cell)
        },
      }, {
        "title": "dated",
        "field": "dated",
        // "sorter": sorterRank,
        // "width": 200,
        "editor": true,
        headerFilter: true,
        // sorter: sortSelect(x),
        // "align": "right",
        // "formatter": "progress",
        // mutator:fieldMutator,
        "cellClick": function (e, cell) {
          console.log("cell click", cell)
        },
      },

      // ...rawTableData.columns.map(x => {
      //   console.log('rawElem', x)
      //   if (x != 'Trade')
      //     return {
      //       "title": x,
      //       "field": x,
      //       "sorter": "string",
      //       // "width": 200,
      //       "editor": true,
      //       headerFilter: true,
      //       sorter: sortSelect(x),
      //       // "align": "right",
      //       // "formatter": "progress",
      //       "cellClick": function (e, cell) {
      //         console.log("cell click", cell)
      //       },
      //     }
      // }, )
    ],
    // height:"100%",
    pagination: "local", //enable local pagination.
    paginationSize: 20, // this option can take any positive integer value (default = 10)
    placeholder: "No Data Available", //display message to user on empty table
    // virtualDomBuffer:300 //set virtual DOM buffer to 300px
    // layout: "fitDataFill",
    // responsiveLayout: "collapse",
    // responsiveLayoutCollapseStartOpen: false
  });
  myTable.setData(myData.getRows().map(x => {
    return x.obj;
  }));
  // for (var r = 0; r < myData.getRowCount(); r++)
  //   for (var c = 0; c < myData.getColumnCount(); c++) {
  //     document.appendChild(createDiv(myData.getString(r, c)));
  //   }

};

function preload() {
  myData = loadTable("data2.csv", "header");
  // while(myData===undefined){}
  // console.log('dat now?', await loadTable("data.csv", "header"));
}

function setup() {
  // put setup code here
  console.log('starting');
  // setupTable(myData)

  tableSetup(myData)
  noLoop();
  summaryDiv = document.getElementById('summaryDiv');
  formatSummaryObj(summarize(myData)).parent(summaryDiv);
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
    "total": myTable.getRows().length,
    "offrs": "TODO",
    "jcos": "TODO",
    "sldrs": "TODO",
    "civs": "TODO",

  }
}
setupTable = function (data) {
  // myData.getRows()[111].obj
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