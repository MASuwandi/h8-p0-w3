
// Logic Challenge - Mengelompokkan Hewan

function groupAnimals(animals) {
  // you can only write your code here!
  var arrMul = [];
  var arrTemp = [];
  var kamus = 'abcdefghijklmnopqrstuvwxyz';
  for (i = 0; i < kamus.length; i++) {
    for (j = 0; j < animals.length; j++) {
      if (kamus[i] == animals[j][0]) {
      arrTemp.push(animals[j]);
      }
    }
    if (arrTemp.length != 0) {
    arrMul.push(arrTemp);
    }
    arrTemp = [];
  }
  return arrMul;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
