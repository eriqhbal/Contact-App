const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// membuat folder jika directory tidak ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// apakah ada file Contacts.json
const filePath = "./data/contacts.json";
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]", "utf-8");
}

// Membuat Pertanyaan
const tempatPertanyaan = (isiPertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(isiPertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

const simpanData = (namaUser, emailUser, nomerUser) => {
  const contact = { Nama: namaUser, Email: emailUser, Nomer: nomerUser };
  const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(fileBuffer);

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  rl.close();
};

module.exports = { tempatPertanyaan, simpanData };
