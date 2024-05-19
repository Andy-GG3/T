const moment = require("moment-timezone");
const fetch = require('node-fetch')
const axios = require('axios')
const crypto = require('crypto')
const fs = require('fs')
const toqrcode = require("../lib/AndyXD.js");
const { sizeFormatter } = require('human-readable')
const { fetchJson, sleep } = require("../functions.js")
const { merchant, secret, signature, digiuser, digiapi, OpenAikey, nomorKu } = require("../lib/apikey.js")
let handler = async (m, { conn, args, isGroup, text, usedPrefix: _p, isPrems, command, isROwner }) => {
    const apikeyhost = digiuser // APIKEY LU OTPWEB.COM
    const sender = m.sender.split('@')[0]
    const admin = `${Math.floor(Math.random() * 500)}`
    const _type = (args[1] || '').toLowerCase()
    const jualbeli = (args[0] || '').toLowerCase()
    
    // WAKTU TIMES ZONE JAKARTA
             let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh}:${wibm}:${wibs}`
   
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    const date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const calender = d.toLocaleDateString("id", {
day: 'numeric',
month: 'long',
year: 'numeric'
})
    
    const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
    const capt = `╭─「 *DEPOSIT INFO* 」
│Otomatis: ON 24JAM (Saldo Langsung masuk)
│Manual: ON (Tergantung Owner Aktif)
╰────
Apakah Kamu Ingin deposit manual atau otomatis?
Ketik /deposit otomatis (Untuk Lanjut)
Ketik /deposit manual (Untuk Lanjut)`
    if(!jualbeli) m.reply(Styles(capt))
 //   try {
    switch (jualbeli) {
                case "otomatis" : {
                let q = args[1]
if (!q) throw 'Lengkapi Command kamu !\n\n_Contoh: .deposit otomatis 2000_'
                let jumlah = `${q}+${admin}`
                let val = jumlah
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  let format = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×')
  try {
    console.log(val)
    let result = (new Function('return ' + val))()
    if (!result) throw result
      var deponya = result
  //  m.reply(`*${format}* = _${result}_`)
  } catch (e) {
    if (e == undefined) throw 'Isinya?'
    throw 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport'
  }
                
            if (fs.existsSync(`./database/datasaldo/${sender}.json`)) throw 'Selesaikan pembelian anda sebelumnya'
// let [method, nomor] = q.split(" ")
  let axios = require('axios')
  let ref = Math.floor(Math.random() * 100000000)
  let h2hkey = apikeyhost
  
  var config = {
      method: 'POST',
      url: 'https://atlantich2h.com/deposit/create',
      data: new URLSearchParams(Object.entries({
      api_key: h2hkey,
      reff_id: ref,
      nominal: deponya,
     type: 'ewallet',
     metode: 'qrisfast'
    }))
  };
                
  
  /*axios('https://atlantich2h.com/deposit/create',{
    method: 'POST',
    data: new URLSearchParams(Object.entries({
      api_key: h2hkey,
      reff_id: ref,
      nominal: text,
     type: 'ewallet',
     metode: 'qris'
    }))})*/
  axios(config)
  .then(async res => {
        if (res.data.status == false) {
          m.reply(`*_${res.data.status}_*`)// Biar tau apa yang salah cuyyy
            }
      m.reply(`*「 DEPOSIT PENDING 」*\n\n_Mohon Tunggu Pesanan Anda Sedang Diproses_`)
                    let obj = { id: sender, ref: res.data.data.id, status: res.data.data.status }
fs.writeFileSync(`./database/datasaldo/${sender}.json`, JSON.stringify(obj))
       let anu = `https://api.lolhuman.xyz/api/qrcode?apikey=${apichan}&text=${res.data.data.qr_string}`
              let abc = `*_── 「 DEPOSIT」 ──_*
           
 *_⚡Id: ${res.data.data.id}_*
  _⚡Nominal: ${res.data.data.nominal}_
  _⚡Di Buat: ${res.data.data.created_at}_
  _⚡Status: ${res.data.data.status}_
 
 *BATAS MINIMAL TRANSFER 1JAM DAN KETIKA LEWAT SISTEM AKAN OTOMATIS MEMBATALKAN TOPUP INI*

 *_${namabot}_*`
conn.sendMessage(m.chat, { image: { url: anu }, caption: abc })
let status = res.data.data.status;
      
      var topup = {
      method: 'POST',
      url: 'https://atlantich2h.com/deposit/status',
      data: new URLSearchParams(Object.entries({
      api_key: h2hkey,
      id: res.data.data.id
    }))
  };
      
      while (status !== 'processing') {
              await sleep(1000); 
              const response = await axios(topup);
              status = response.data.data.status;
              console.log(status)
          if (status == 'cancel') 
              {
               m.reply('Transaksi Dibatalkan')
                  fs.unlinkSync(`./database/datasaldo/${sender}.json`)
              break;
              }
          if (status == 'expired') 
              {
               m.reply('Transaksi Dibatalkan')
                  fs.unlinkSync(`./database/datasaldo/${sender}.json`)
              break;
              }
        if (status == 'success') 
              {
                  
          db.data.users[m.sender].saldo += res.data.data.nominal * 1
      // addSaldo(sender, Number(res.data.data.nominal), db_saldo)
      let anjay = `*_── 「 DEPOSIT 」 ──_*
           
 *_⚡Nominal: ${res.data.data.nominal}_*
  _⚡Reff Id: ${res.data.data.reff_id}_
  _⚡Id: ${res.data.data.id}_
  _⚡ Status: SUKSES_
 
 
 *_${wm}_*`
      conn.sendMessage(m.chat, {text: anjay })
      fs.unlinkSync(`./database/datasaldo/${sender}.json`)
                  
              break;
              }
            }
      
      })
}
            break
        case 'batal':
            case 'cancel':{
                if (!args[1]) throw 'kirim .canceldepo id transaksi tadi\ncontoh: .canceldepo X1ha86HA'
                if(!fs.existsSync(`./database/datasaldo/${sender}.json`)) return m.reply('Kamu tidak melakukan pembelian')
                  let axios = require('axios')
  let ref = Math.floor(Math.random() * 100000000)
  let h2hkey = apikeyhost
  
  var config = {
      method: 'POST',
      url: 'https://atlantich2h.com/deposit/cancel',
      data: new URLSearchParams(Object.entries({
      api_key: h2hkey,
      id: args[1]
    }))
  };
                axios(config)
// if (!isGroup) throw 'Fitur Tidak Dapat Digunakan Untuk Group!'
fs.unlinkSync(`./database/datasaldo/${sender}.json`)
        m.reply('Sukses Cancel Depsoit ✅')
            }
        case "manual" : {
            let q = args[1]
    if (!args[1]) throw `Minimal Deposit 1000 || *cara depositnya* :
.deposit 1000`
    if (q < 1000) {
 m.reply('Minimal Depo 1000')
 } else if(q > 950) {
     const db_Deposit = JSON.parse(fs.readFileSync("./database/userdepo.json"));
        const { addDeposit } = require("../lib/deposit");
     
 //   const prem = JSON.parse(fs.readFileSync("./lib/ichan/deposit.json"))
    let qris = 'https://telegra.ph/file/e6bb2ee11bd8074eefe96.jpg' // ISI QRIS LU
  let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg')
  let user = global.db.data.users[m.sender]
  let thm = 'https://telegra.ph/file/5e52b6e8ab1ed136705ad.jpg'
  let admin = `${Math.floor(Math.random() * 500)}`
  let id = `${Math.floor(Math.random() * 99999)}`
  let tg = `${m.sender.split('@')[0]}@s.whatsapp.net`
  //let kata = `${pickRandom('1291912', '12177819', '928192', '12919929', '12729890', '7625410', '272829', '7524136', '2712514', '121872756' )}`
  let cpt = `*ADA TRANSAKSI MASUK*\n*SEJUMLAH Rp${toRupiah(q)} DARI @${m.sender.split('@')[0]}*\n\nDENGAN ID DEPOSIT : ${id}\n*Tunggu sampai dia tf hihi*`
  let capt = `*───◆⧽ TRANSAKSI DIBUAT ⧼◆───*
💸 NOMINAL: Rp.${toRupiah(q)}
💳 PAYMENT: QRIS
⚙️ SISTEM: DIRECT
id transaksi : ${id}

*MOHON DIBACA YA!!*
*DIMOHON JIKA SUDAH TOP UP SALDO ATAU TRANSFER JANGAN LUPA KONFIRMASI*
*BERIKUT DENGAN CARA PERINTAH: /bukti ${id}*`
  let lastsald = global.db.data.users[m.sender].saldo
            global.data = db_Deposit
  
  global.data.users[m.sender.split('@')[0]] = {
        name: m.name,
            nowa: sender,
      		id: id,
            date: calender,
            lastsaldo: lastsald,
			deposit: q,
      		limitdepo: 1
    }

     const databaseFilePath = './database/userdepo.json';

// Fungsi untuk membaca data dari file JSON
const readDatabase = () => {
    let userData = {};
    try {
        const data = fs.readFileSync(databaseFilePath, 'utf8');
        userData = JSON.parse(data);
    } catch (err) {
        console.error('Error reading database file:', err);
    }
    return userData;
};

// Fungsi untuk menulis data kembali ke file JSON
const writeDatabase = (data) => {
    try {
        fs.writeFileSync(databaseFilePath, JSON.stringify(data, null, 2));
       // console.log('Database updated successfully.');
    } catch (err) {
        console.error('Error writing database file:', err);
    }
}; 
     writeDatabase(global.data)
    await conn.sendFile(m.chat, qris, 'order.jpg', `${capt}`, m)
    return conn.sendFile(nomorowner + '@s.whatsapp.net', thm, 'order.jpg', `${cpt}`, m)
} }
}
 //   } catch (e) {
   //     conn.reply(m.chat, Styles(capt), m)
     //   console.log(e)
  //  } 
}
handler.command = handler.help = [
"deposit",
"confirm",
"canceldepo",
"transfer"
]
handler.premium = false
handler.register = false
handler.limit = 5
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}