/**
 * ============== IDC BASIC JAVA SCRIPT ==============
 * Di kode ini sudah ada beberapa materi mengenai javascript.
 * Jika kamu ingin menjalankan salah satu kode, kamu bisa menambahkan "//" di awal baris kode
 * supaya kamu bisa melihat hasilnya di terminal.
 *
 */

/**
 * CETAK TULISAN HELLO WORLD
 */

console.log("Hello World");

// ============= JANGAN DI UBAH =============
console.log("===============================");
// ============= JANGAN DI UBAH =============

/**
 * VARIABLE
 */

let angkaPertama = 23;
var angkaKedua = 24;
const angkaKetiga = 25;

console.log("Angka Pertama: " + angkaPertama);
console.log("Angka Kedua: " + angkaKedua);
console.log("Angka Ketiga: " + angkaKetiga);

// ============= JANGAN DI UBAH =============
console.log("===============================");
// ============= JANGAN DI UBAH =============

/**
 * FUNCTION
 */

// =========== REGULAR FUNCTION ===========

function cetakAngka() {
  console.log(angkaKedua);
  console.log(80 + 20);
}

cetakAngka();

// =========== ARROW FUNCTION ===========

const cetakNama = () => {
  console.log("Pak Muku");
};

cetakNama();

// =========== ANONYMOUS FUNCTION ===========
(() => {
  console.log("Halo ges");
})();

// ============= JANGAN DI UBAH =============
console.log("===============================");
// ============= JANGAN DI UBAH =============

/**
 * IF ELSE, SWITCH CASE
 */

if (angkaPertama > angkaKedua) {
  console.log("Angka Pertama lebih besar dari angka Kedua");
} else {
  console.log("Angka Pertama lebih kecil dari angka Kedua");
}

// IF ELSE TERNARY
angkaPertama > angkaKedua
  ? console.log("Angka Pertama lebih besar dari angka Kedua")
  : console.log("Angka Pertama lebih kecil dari angka Kedua");

// KETIKA ADA ELSE IF DI TERNARY
angkaPertama > angkaKedua // kondisi pertama
  ? console.log("Angka Pertama lebih besar dari angka Kedua")
  : angkaPertama > angkaKetiga // kondisi kedua
  ? console.log("Angka Pertama lebih besar dari angka Ketiga")
  : console.log("Angka Pertama lebih kecil dari angka Kedua dan Ketiga"); // kondisi ketiga jika tidak ada yang memenuhi

// SWITCH CASE
const nilai = "A";

switch (nilai) {
  case "A":
    console.log("Sangat Bagus");
    break;
  case "B":
    console.log("Bagus");
    break;
  case "C":
    console.log("Cukup");
    break;
  case "D":
    console.log("Kurang");
    break;
  default:
    console.log("Tidak Lulus");
    break;
}

// ============= JANGAN DI UBAH =============
console.log("===============================");
// ============= JANGAN DI UBAH =============

/**
 * Looping
 */

// ============== FOR ==============
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// ============== WHILE ==============
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// ============== DO WHILE ==============
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);

// ============== FOR IN ==============
const buah = ["Apel", "Jeruk", "Mangga", "Pisang"];
for (let index in buah) {
  console.log(buah[index]); // index = 0, 1, 2, 3
}

// ============== FOR OF ==============
const buahKedua = ["Apel", "Jeruk", "Mangga", "Pisang"];
for (let item of buahKedua) {
  console.log(item); // item = "Apel", "Jeruk", "Mangga", "Pisang"
}

// ============= JANGAN DI UBAH =============
console.log("===============================");
// ============= JANGAN DI UBAH =============

/**
 * ARRAY
 *
 * Array adalah tipe data yang berisikan kumpulan data
 * Array bisa berisikan tipe data apapun
 * Array bisa berisikan function
 * Array bisa berisikan object
 *
 * NOTE:
 * Kamu bisa menjalankan "node index.js" di terminal untuk melihat hasilnya
 */

// ============== ARRAY ==============
// ARRAY BERFUNGSI UNTUK MENYIMPAN DATA
const nama = ["Pak Muku", "Pak Moko", "Pak Miku"];
console.log("Nama: " + "[" + nama + "]");

// ============== PUSH ==============
// PUSH BERFUNGSI UNTUK MENAMBAHKAN DATA PALING TERAKHIR
nama.push("Pak Miku");
console.log("MENAMBAHKAN DATA PAK MIKU: " + "[" + nama + "]");

// ============== POP ==============
// POP BERFUNGSI UNTUK MENGHAPUS DATA PALING TERAKHIR
nama.pop();
console.log("MENGHAPUS DATA PAK MIKU: " + "[" + nama + "]");

// ============== SHIFT ==============
// SHIFT BERFUNGSI UNTUK MENGHAPUS DATA PALING AWAL
nama.shift();
console.log("MENGHAPUS DATA PAK MUKU: " + "[" + nama + "]");

// ============== UNSHIFT ==============
// UNSHIFT BERFUNGSI UNTUK MENAMBAHKAN DATA PALING AWAL
nama.unshift("Pak Muku");
console.log("MENAMBAHKAN DATA PAK MUKU: " + "[" + nama + "]");

// ============== SPLICE ==============
// SPLICE BERFUNGSI UNTUK MENGHAPUS DATA
nama.splice(1, 1);
console.log("MENGHAPUS DATA PAK MUKO: " + "[" + nama + "]");

// ============== SPLICE ==============
// SPLICE BERFUNGSI UNTUK MENAMBAHKAN DATA
nama.splice(1, 0, "Pak Moko");
console.log("MENAMBAHKAN DATA PAK MOKO: " + "[" + nama + "]");

// ============== CONCAT ==============
// CONCAT BERFUNGSI UNTUK MENGABUNGKAN DATA
const namaKedua = ["Pak Miku", "Pak Moko", "Pak Muku"];
const namaGabungan = nama.concat(namaKedua);
console.log("MENGABUNGKAN DATA: " + "[" + namaGabungan + "]");

// ============== SLICE ==============
// SLICE BERFUNGSI UNTUK MEMOTONG DATA
const namaSlice = namaGabungan.slice(1, 3);
console.log("SLICE DATA: " + namaSlice);

// ============== SORT ==============
// SORT BERFUNGSI UNTUK MENGURUTKAN DATA
const namaSort = namaGabungan.sort();
console.log("SORT DATA: " + namaSort);

// ============== REVERSE ==============
// REVERSE BERFUNGSI UNTUK MEMBALIKKAN DATA
const namaReverse = namaGabungan.reverse();
console.log("REVERSE DATA: " + namaReverse);

// ============== JOIN ==============
// JOIN BERFUNGSI UNTUK MENGUBAH ARRAY MENJADI STRING
const namaJoin = namaGabungan.join(", ");
console.log("JOIN DATA: " + namaJoin);

// ============== INDEXOF ==============
// INDEX OF BERFUNGSI UNTUK MENCARI DATA YANG PALING AWAL
const namaIndex = namaGabungan.indexOf("Pak Miku");
console.log("INDEXOF DATA: " + namaIndex);

// ============== LASTINDEXOF ==============
// LAST INDEX OF BERFUNGSI UNTUK MENCARI DATA YANG PALING TERAKHIR
const namaLastIndex = namaGabungan.lastIndexOf("Pak Miku");
console.log("LASTINDEXOF DATA: " + namaLastIndex);

// ============== INCLUDES ==============
// INCLUDES BERFUNGSI UNTUK MENCARI DATA YANG SAMA
const namaIncludes = namaGabungan.includes("Pak Miku");
console.log("INCLUDES DATA: " + namaIncludes);

// ============== FIND ==============
// FIND BERFUNGSI UNTUK MENCARI DATA YANG PERTAMA KALI DITEMUKAN
const namaFind = namaGabungan.find((nama) => nama === "Pak Miku");
console.log("FIND DATA: " + namaFind);

// ============== FINDINDEX ==============
// FINDINDEX BERFUNGSI UNTUK MENCARI INDEX DATA YANG PERTAMA KALI DITEMUKAN
const namaFindIndex = namaGabungan.findIndex((nama) => nama === "Pak Miku");
console.log("FINDINDEX DATA: " + namaFindIndex);

// ============== FILTER ==============
// FILTER BERFUNGSI UNTUK MENCARI DATA YANG SAMA
const namaFilter = namaGabungan.filter((nama) => nama === "Pak Miku");
console.log("FILTER DATA: " + namaFilter);

// ============== MAP ==============
// MAP BERFUNGSI UNTUK MENGUBAH DATA ARRAY
const namaMap = namaGabungan.map((nama) => nama + " S.Kom");
console.log("MAP DATA: " + namaMap);

// ============== REDUCE ==============
// REDUCE BERFUNGSI UNTUK MENGURANGI DATA ARRAY MENJADI SATU DATA SAJA
const angka = [1, 2, 3, 4, 5];
const angkaReduce = angka.reduce((total, angka) => total + angka);
console.log("REDUCE DATA: " + angkaReduce);

// ============== EVERY ==============
// EVERY BERFUNGSI UNTUK MENGECEK SEMUA DATA ARRAY MEMENUHI SYARAT ATAU TIDAK (TRUE/FALSE)
const angkaEvery = angka.every((angka) => angka > 0);
console.log("EVERY DATA: " + angkaEvery);

// ============== SOME ==============
// SOME BERFUNGSI UNTUK MENGECEK BEBERAPA DATA ARRAY MEMENUHI SYARAT ATAU TIDAK (TRUE/FALSE)
const angkaSome = angka.some((angka) => angka > 0);
console.log("SOME DATA: " + angkaSome);

/**
 * Object
 */

// ============== OBJECT ==============
// OBJECT BERFUNGSI UNTUK MENYIMPAN DATA DENGAN KEY DAN VALUE

const siswa = {
  nama: "Pak Muku",
  umur: 20,
  alamat: "Jl. Pak Muku",
};

// ============== GET VALUE ==============
// GET VALUE BERFUNGSI UNTUK MENGAMBIL VALUE DARI KEY YANG DIINGINKAN
const namaSiswa = siswa["nama"];
console.log("GET VALUE: " + namaSiswa);

// ============== SET VALUE ==============
// SET VALUE BERFUNGSI UNTUK MENAMBAHKAN VALUE DARI KEY YANG DIINGINKAN
siswa["hobi"] = "Makan";
console.log("SET VALUE: " + siswa);

// ============== DELETE VALUE ==============
// DELETE VALUE BERFUNGSI UNTUK MENGHAPUS VALUE DARI KEY YANG DIINGINKAN
delete siswa["hobi"];

// ============== GET KEYS ==============
// GET KEYS BERFUNGSI UNTUK MENGAMBIL SEMUA KEY DARI OBJECT
const keys = Object.keys(siswa);
console.log("GET KEYS: " + keys);

// ============== GET VALUES ==============
// GET VALUES BERFUNGSI UNTUK MENGAMBIL SEMUA VALUE DARI OBJECT
const values = Object.values(siswa);
console.log("GET VALUES: " + values);

// ============== GET ENTRIES ==============
// GET ENTRIES BERFUNGSI UNTUK MENGAMBIL SEMUA KEY DAN VALUE DARI OBJECT MENJADI ARRAY DUA DIMENSI (MULTIDIMENSIONAL ARRAY)
const entries = Object.entries(siswa);
console.log("GET ENTRIES: " + entries);
