// Logic Challenge - Target Terdekat

function targetTerdekat(arr) {
  // you can only write your code here!
  var count = 0;
  var flag = '';
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 'o' || arr[i] == 'x') {
      flag = arr[i];
      for (j = i + 1; j < arr.length; j++) {
        count++;
        if (arr[j] == 'x' && flag == 'o' || flag == 'x' && arr[j] == 'o') {
          break;
        } else if (arr[j] == 'x' && flag == 'x' || arr[j] == 'o' && flag == 'o' ||  j == arr.length - 1) {
          count = 0;
        }
      }
    }
    if (flag == 'x' || flag == 'o') {
      i = arr.length;
    }
  }
  return count;
}      

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
