// Compare and update the inventory stored in a 2D array against a second 2D array
// of a fresh delivery. Update the current existing inventory item quantities
// (in arr1). If an item cannot be found, add the new item and quantity into the
// inventory array. The returned inventory array should be in alphabetical order
// by item.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program.
// Write your own code.


function updateInventory(arr1, arr2) {
  if (typeof arr2[0] !== 'undefined') {
    currentItems = [];
    newItems = [];

    arr2.map((v,i,a) => {
       arr1.map((x,j,b) => {
        if(v[1] === x[1]) {
          return x[0] += v[0];
        }
       });
    });



    arr1
     .reduce((prv, cur) => currentItems
     .push(cur[1]), 0);

    newItems = arr2
     .filter((item, index) => !currentItems
       .includes(item[1]))
     .reduce((prv, next) => arr1
       .push(next), 0);

    return arr1.sort((a,b) => a[1].toLowerCase().localeCompare(b[1].toLowerCase()));
  } else {
    return arr1.sort((a,b) => a[1].toLowerCase().localeCompare(b[1].toLowerCase()));
  }
}

updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]);

// updateInventory(
//   [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
//    [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]
// );
//
// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []);







// priors
currentItems = [];

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

curInv.sort((a,b) => a[1].toLowerCase().localeCompare(b[1].toLowerCase()));
