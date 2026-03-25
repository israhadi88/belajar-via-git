//const hargaApel = 5000;
//const jumlahApel = 3;
//const hargaPisang = 10000;
//const jumlahPisang = 2;
//const coupon = 0.1; // 10% discount
//const totalHargaApel = hargaApel * jumlahApel;
//const totalHargaPisang = hargaPisang * jumlahPisang;
//const totalHarga = totalHargaApel + totalHargaPisang;
//const finalHarga = totalHarga - totalHarga * coupon;

//console.log("Total Harga Apel: " + totalHargaApel);
//console.log("Total Harga Pisang: " + totalHargaPisang);
//console.log("Total Harga Sebelum Diskon: " + totalHarga);
//console.log("Final Harga Setelah Diskon: " + finalHarga);
//console.log("Anda mendapatkan diskon sebesar: " + totalHarga * coupon);
//console.log("Terima kasih telah berbelanja!");

//const isTall = true;
//const canCook = false;
//const hasSister = true;
//if (isTall && canCook) {
//  console.log("Anda tinggi dan bisa memasak.");
//} else if (isTall && !canCook) {
//  console.log("Anda tinggi tetapi tidak bisa masak.");
//}

//const hasPassport = false;

//if (hasPassport) {
//  console.log("Anda memiliki paspor, silahkan lewat imigrasi.");
//} else {
//  console.log(
//    "Anda tidak memiliki paspor, silahkan urus paspor terlebih dahulu.",
//  );
//}

//const isSoldout = true;

//if (isSoldout) {
//  console.log("Maaf, Produk ini sudah habis.");
//} else {
//  console.log("Produk tersedia");
//}

//const stock = 200;

//if (stock !== 1 && stock > 0) {
//  console.log("Produk tersedia");
//} else if (stock === 1) {
//  console.log("Produk tersisa hanya 1 unit!!!!");
//} else {
//  console.log("Produk habis.");
//}

////perbandingan angka
//const test = 2 < 5;
//console.log(test);

////Else if traffic light
//const trafficLight = "pink";
//if (trafficLight === "red") {
//  console.log("Berhenti!!!");
//} else if (trafficLight === "yellow") {
//  console.log("Hati-hati!!!");
//} else if (trafficLight === "green") {
//  console.log("Jalan!!!");
//} else {
//  console.log("Lampu lalu lintas tidak valid.");
//}

//const nilai = 1000;

//if (nilai < 10) {
//  console.log("Nilai anda: Satuan.");
//} else if (nilai < 100) {
//  console.log("Nilai anda: Puluhan.");
//} else if (nilai < 1000) {
//  console.log("Nilai anda: Ratusan.");
//} else {
//  console.log("Coba lagi!");
//}

//learn object

const book = {
  title: "Kalibree",
  Author: "Mahuina",
  Year: 2026,
  Publisher: "Intermedia",
};

console.log(`Judul Buku: ${book.title}`);
console.log(`Penulis: ${book.Author}`);
console.log(`Tahun Terbit: ${book.Year}`);
console.log(`Penerbit: ${book.Publisher}`);

const person = {
  name: "Mahuina",
  age: 30,
  city: "Depok",
};

const greeting =
  person.name +
  " adalah seorang yang berusia " +
  person.age +
  " tahun dan tinggal di " +
  person.city +
  ".";
console.log(greeting);
