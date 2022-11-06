const panggilContact = require('./contacts.js');

// Membuat fungsi utama dari Pertanyaan diatas
const main = async () => {
   const namaAnda = await panggilContact.tempatPertanyaan('Masukkan Nama Anda : ');
   const emailAnda = await panggilContact.tempatPertanyaan("Masukkan Email Anda : ");
   const noHP = await panggilContact.tempatPertanyaan("Masukkan No HP Anda : ");
   
   panggilContact.simpanData(namaAnda, emailAnda, noHP);
   console.log("Terimakasih sudah mengisi data anda");

}

main();