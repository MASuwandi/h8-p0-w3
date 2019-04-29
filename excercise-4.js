function dataHandling2 (input) {
  var arr = input;

  // splice
  arr.splice(1, 1, arr[1] + 'Elsharawy');
  arr.splice(2, 1, 'Provinsi ' + arr[2]);
  arr.splice(4, 1, 'Pria');
  arr.splice(5, 1, 'SMA Internasional Metro');
  console.log(arr);

  // split
  var tgl = arr[3].split('/');
  var bulan = tgl[1];

  switch(bulan) {
    case '01': { bulan = 'Januari'; break; }
    case '02': { bulan = 'Februari'; break; }
    case '03': { bulan = 'Maret'; break; }
    case '04': { bulan = 'April'; break; }
    case '05': { bulan = 'Mei'; break; }
    case '06': { bulan = 'Juni'; break; }
    case '07': { bulan = 'Juli'; break; }
    case '08': { bulan = 'Agustus'; break; }
    case '09': { bulan = 'September'; break; }
    case '10': { bulan = 'October'; break; }
    case '11': { bulan = 'November'; break; }
    case '12': { bulan = 'Desember'; break; }
    default : { bulan = 'angka bulan tidak terdaftar!'; }
  }
  console.log(bulan);

  // sort
  tgl.sort(function (a, b) {
    return b - a;
  });
  console.log(tgl)

  // join
  var tgl2 = arr[3].split('/');
  console.log(tgl2.join('-'));

  // slice
  var newName = arr[1].slice(0, 15);
  console.log(newName);
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
