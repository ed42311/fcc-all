
function largestOfFour(arr) {
   var retArr = arr.map((v)=>Math.max(...v));
   console.log(retArr);
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
