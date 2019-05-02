// Logic Challenge - Tentukan Deret Aritmatika

function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  var dif = arr[0] - arr[1];
  for (i = 1; i < arr.length - 1; i++) {
    if (dif != (arr[i]-arr[i+1])) {
      return false;
    }
  }
  return true;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
