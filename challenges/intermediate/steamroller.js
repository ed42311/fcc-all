function steamrollArray(arr) {
  var retArr = [];

  function steam(check) {
    if(!Array.isArray(check)) {
      retArr.push(check);
    } else  {
      check.map(function(v){
        steam(v);
      });
    }
  }
  arr.forEach(steam);
  return retArr;
}
