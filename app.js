const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

// membuat folder jika directory tidak ada
const dirPath = './data';
if(!fs.existsSync(dirPath)) {
   fs.mkdirAsync(dirPath);
}

// apakah ada file Contacts.json
const filePath = './data/contacts.json';
if(!fs.existsSync(filePath)) {
   fs.writeFileAsync(filePath,[], 'utf-8');
}