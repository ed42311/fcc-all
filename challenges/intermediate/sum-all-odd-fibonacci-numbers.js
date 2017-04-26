var tests = [1,1000,4000000,4,75024,75025];

function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

   console.log(result);
}

// test here
for(var i = 0; i < tests.length; i++) {
   sumFibs(tests[i]);  
}
