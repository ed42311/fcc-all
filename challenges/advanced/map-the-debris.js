
function orbitalPeriod(arr) {
  let retArr = [];
  for (let i=0; i<arr.length; i++) {
    retArr.push(periodFor(arr[i]));
  }
  return retArr;
}

function periodFor(sat) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var a = earthRadius + sat.avgAlt;
  var T = Math.round(2*Math.PI*Math.sqrt(Math.pow(a, 3)/GM));
  // t in secs = 2 pi
  // . add the radius of the erath to the altitude of the thing and then double that
  var obj = {};
  obj.name =  sat.name;
  obj.orbitalPeriod = T;
  return obj;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
