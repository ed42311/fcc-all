
function largestOfFour(arr) {
  var largestNum = 0;
  var braceNum = [];
  
  arr.map( 
    largestNum = Number.MIN_SAFE_INTEGER;
    for (var j = 0; j < arr.length; j++) {
      if (arr[i][j] > largestNum) {
        largestNum = arr[i][j];
      }
    }   
    braceNum.push(largestNum);
  } 
  console.log(braceNum);
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
