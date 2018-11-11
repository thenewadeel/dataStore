/** https://ourcodeworld.com/articles/read/278/how-to-split-an-array-into-chunks-of-the-same-size-easily-in-javascript
 * Returns an array with arrays of the given size.
 *
 * @param myArray {Array} Array to split
 * @param chunkSize {Integer} Size of every group
 */
function arrayChunk(myArray, chunk_size) {
    var results = [];

    while (myArray.length) {
        results.push(myArray.splice(0, chunk_size));
    }

    return results;
}


  // <span class="badge badge-pill badge-primary">Primary</span>
// <span class="badge badge-pill badge-secondary">Secondary</span>
// <span class="badge badge-pill badge-success">Success</span>
// <span class="badge badge-pill badge-danger">Danger</span>
// <span class="badge badge-pill badge-warning">Warning</span>
// <span class="badge badge-pill badge-info">Info</span>
// <span class="badge badge-pill badge-light">Light</span>
// <span class="badge badge-pill badge-dark">Dark</span>



// <button type="button" class="btn btn-primary">Primary</button>
// <button type="button" class="btn btn-secondary">Secondary</button>
// <button type="button" class="btn btn-success">Success</button>
// <button type="button" class="btn btn-danger">Danger</button>
// <button type="button" class="btn btn-warning">Warning</button>
// <button type="button" class="btn btn-info">Info</button>
// <button type="button" class="btn btn-light">Light</button>
// <button type="button" class="btn btn-dark">Dark</button>

// <button type="button" class="btn btn-link">Link</button>







// <div class="card border-success mb-3" style="max-width: 18rem;">
//   <div class="card-header bg-transparent border-success">Header</div>
//   <div class="card-body text-success">
//     <h5 class="card-title">Success card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
//   <div class="card-footer bg-transparent border-success">Footer</div>
// </div>





 







// <div id="accordion">
//   <div class="card">
//     <div class="card-header" id="headingOne">
//       <h5 class="mb-0">
//         <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//           Collapsible Group Item #1
//         </button>
//       </h5>
//     </div>

//     <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
//       <div class="card-body">
//         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//       </div>
//     </div>
//   </div>
//   <div class="card">
//     <div class="card-header" id="headingTwo">
//       <h5 class="mb-0">
//         <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//           Collapsible Group Item #2
//         </button>
//       </h5>
//     </div>
//     <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
//       <div class="card-body">
//         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//       </div>
//     </div>
//   </div>
//   <div class="card">
//     <div class="card-header" id="headingThree">
//       <h5 class="mb-0">
//         <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//           Collapsible Group Item #3
//         </button>
//       </h5>
//     </div>
//     <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
//       <div class="card-body">
//         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//       </div>
//     </div>
//   </div>
// </div>