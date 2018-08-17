// findIndex definition:
// returns the index of the first element in the array for which the callback
// returns a truthy value. -1 is returned if the callback never returns a truthy
// value

function findIndex(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
}

// function callback(curElement, curIndex, array) {
//   // callback implemented by caller of the function
// }

// Example
// var arr = [3,4,6,2,1];
//
// findIndex(arr, function(num, index, array) {
//   return num === 6;
// });
