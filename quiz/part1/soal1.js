//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
   if (angka <= 2) {
      return false;
   }
   
   let cekAngka = Math.floor(Math.sqrt(angka));
   
   for (let i = 2; i <= cekAngka; i++) {
      let hasil = angka % i;
      if (hasil == 0) {
         return false;
      }
   }
   return true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false