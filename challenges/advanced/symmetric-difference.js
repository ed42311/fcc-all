function sym(args) {
  let ret = Array.from(arguments).reduce((a, b) => {
   if(Array.isArray(a)) {
     console.log(a);
   }
 });
}

// function sym() {
// 	return Array.prototype.slice.call(arguments).reduce((a0, c0) => {
// 		c0 = c0.reduce((a, c) => {
// 			if (!a.includes(c)) a.push(c);
// 			return a;
// 		}, []);
// 		a0 = a0.concat(c0);
// 		let multiples = {};
// 		a0 = a0.reduce((a, c, i) => {
// 			if (a0.slice(i+1).includes(c)) multiples[c] = true;
// 			if (!multiples[c]) a.push(c);
// 			return a;
// 		}, []);
// 		return a0;
// 	}, []).sort();
// }

sym([1, 2, 3], [5, 2, 1, 4]);
 sym([1, 2, 3], [5, 2, 1, 4]);
// sym([1, 2, 3], [5, 2, 1, 4]);
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
