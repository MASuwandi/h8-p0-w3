
// Logic Challenge - Number Palindrome

function angkaPalindrome(num) {
  // you can only write your code here!
  for (j = num; j >=0; ) {
    j++;
    var strNum = String(j);
    var palindrome = '';
    for (i = strNum.length - 1; i >= 0; i-- ) {
      palindrome += strNum[i];
      }
    if (strNum == palindrome) {
      return parseInt(strNum);
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
