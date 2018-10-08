/// <reference path="../lib/p5.global-mode.d.ts" />

var myData, myRows, myTable;
var myColumns;
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
  return RANKS[b] - RANKS[a]; //you must return the difference between the two values
}
sortSelect = function (columnName) {
    if (columnName == 'Rank')
      return sorterRank;
  } 
  // {
  //   title: "Gender",
  //   field: "gender",
  //   editor: "select",
  //   editorParams: {
  //     "male": "Male",
  //     "female": "Female"
  //   },
  //   headerFilter: true,
  //   headerFilterParams: {
  //     "male": "Male",
  //     "female": "Female"
  //   }
  // },
  function preload() {
    myData = loadTable("data2.csv", "header")
    // while(myData===undefined){}
    // console.log('dat now?', await loadTable("data.csv", "header"));
  }

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
      ...rawTableData.columns.map(x => {
        // console.log('rawElem', x)
        // if(x!=='Ser')
        return {
          "title": x,
          "field": x,
          "sorter": "string",
          // "width": 200,
          "editor": true,
          headerFilter: true,
          sorter: sortSelect(x),
          // "align": "right",
          // "formatter": "progress",
          "cellClick": function (e, cell) {
            console.log("cell click", cell)
          },
        }
      }, ).filter(y => {
        if (y.title !== 'Ser') return y;
      })
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