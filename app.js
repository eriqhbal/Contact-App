const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

// membuat folder jika directory tidak ada
const dirPath = './data';
if(!fs.existsSync(dirPath)) {
   fs.mkdirSync(dirPath);
}

// apakah ada file Contacts.json
const filePath = './data/contacts.json';
if(!fs.existsSync(filePath)) {
   fs.writeFileSync(filePath, '[]', 'utf-8');
}

// Membuat Pertanyaan 
const masukkanNama = () => {
   return new Promise((resolve,reject) => {
      rl.question('Masukkan Nama Anda : ', (nama) => {
         resolve(nama);
      })
   })
}

const masukkanNomerHp = () => {
  return new Promise((resolve, reject) => {
    rl.question("Masukkan Nomer HP : ", (noHP) => {
      resolve(noHP);
    });
  });
};

// Membuat fungsi utama dari Pertanyaan diatas
const main = async () => {
   const namaAnda = await masukkanNama();
   const noHpAnda = await masukkanNomerHp();

   const contact = { namaAnda, noHpAnda };
   const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
   const contacts = JSON.parse(fileBuffer);

   contacts.push(contact);

   fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

   console.log('Terimakasih sudah mengisi data anda');
}

main();