function smallestCommons(array) {
  var lower = array[0];
  var higher = array[1];

  if (lower > higher) {
    lower = array[1];
    higher = array[0];
  }
  return doIt(lower, higher);
}

function doIt(lower, higher) {
  var multiple = 1;
  var isDone = false;
  while (!isDone) {
    var isThisLoopGood = true;
    var targetForComparison = multiple * higher;
    for (var number = lower; number < higher && isThisLoopGood; number++) {
      isThisLoopGood = ((targetForComparison % number) === 0);
    }

    if (!isThisLoopGood) {
      multiple += 1;
    } else {
      isDone = true;
    }
  }
  return higher * multiple;
}
smallestCommons([1, 5]) 
smallestCommons([1, 5]) 
smallestCommons([5, 1]) 
smallestCommons([1, 13]) 
smallestCommons([23, 18])
