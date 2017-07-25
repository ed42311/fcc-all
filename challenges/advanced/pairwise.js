
function pairwise(arr, arg) {
	  var sum = 0, pairs = arr.slice(), l = pairs.length;
	    
	    for(var i = 0; i < l; i++) {
		       for(var j = i + 1; j < l; j++) {
			           if(pairs[i] + pairs[j] == arg) {
					         sum += i + j;
						       pairs[i] = pairs[j] = NaN;
						           }
				      }
		         }
	     return sum;
}

pairwise([1,4,2,3,0,5], 7);
