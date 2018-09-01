
function returnTrueIf (thisNumberIsPrime)
{
    if (thisNumberIsPrime < 2) return false;
    var squareRootOfNumber = Math.floor(Math.sqrt(thisNumberIsPrime));
    for (var i = 2; i <= squareRootOfNumber; i++) {
        if (thisNumberIsPrime % i == 0) {
            return false;
        }
    }
    return true;
}

function checkInput (input) {
    var result = [1,2]
    for(var i = 0; i < input; i++){
        if(returnTrueIf(i)) {
          result.push(i);
        }
    }
    console.log(result.reduce(function(a,b) {
      return a+b;
    }, 0));
}    

checkInput(2000000);
