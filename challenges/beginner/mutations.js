
function mutation(arr) {
	  var test = arr[1].toLowerCase();
	    var target = arr[0].toLowerCase();
	      for (i=0;i<test.length;i++) {
		          if (target.indexOf(test[i]) < 0)
				        return false;
			    }
	        return true;
		 }

mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.
mutation(["voodoo", "no"]) should return false.
