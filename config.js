/*=========== GLOBAL CONFIG ===========*/
// SCRIPT BY andyxd ID
// SORRY MASIH PEMULA KALO CODE NYA CACAD XIXI
// @_fake.story46
/*=========== GLOBAL CONFIG ===========*/
let fs = require('fs') 
let chalk = require('chalk')
let { andyxd } = require('./lib/AndyXD.js')
// TEMPAT APIKEY BY andyxd
andyxd().then(response => {
  global.apichan = response
})
.catch(error => {
 // console.error('Error:', error.response.data);
})
global.Apisichan = 'https://api.miftah.xyz'
// owner
global.namaowner = `々 AndyXD || 乂`
global.nomorowner = '6285784902529'
global.pairingNumber = "6285784902529"
global.namabot = 'HoshinoBoTz'
global.owner = JSON.parse(fs.readFileSync('./database/owner.json')) // ubah nomor owner nya di database agar bisa addowner pake fitur
global.thumb2 = "https://telegra.ph/file/3439a1e520ac4032cbe78.jpg" //FILES HARUS DIBAWAH 5MB // HARUS BERUPA URL KALO PAKE FOTO ERORR NGEYEL FIX SENDIRI
global.intro = 'https://telegra.ph/file/b45f15e5fb8e37692c544.jpg'
global.fotobotnya = 'https://btch.pages.dev/file/ce7e6187c822496cb96d6.jpg' // tempat foto tampilan menu
let cover = [ 'https://telegra.ph/file/e561c6103d25b8f7164e8.jpg', 'https://telegra.ph/file/e8d3feee0e8f06b6620a0.jpg', 'https://telegra.ph/file/e49f5c34dcd0bd7946e9f.jpg'
]
global.thumb = pickRandom(cover);
global.qris = 'https://btch.pages.dev/file/94284ad48d1d50065fabb.jpg' // QRIS PAYMENT LU MAU DANA / ORKUT
// BACA UNTUK MENJADIKAN FOTO JADI URL KIRIM .TOURL PADA BOT!!
global.wait = '––––––『 ⎔ 𝙇𝙤𝙖𝙙𝙞𝙣𝙜... 』––––––\n\n⚡Jangan Spam Ya Om'
global.mods = [] // Want some help?
global.prems = ['6285784902529'] // Premium user has unlimited limit
/*=========== Panel ===========*/
global.domain = 'https://ichanzx.zxcoderid.xyz' // Domain
global.apikey = 'ptla_z9cfq5qFHebbgPWNt0dlu9PUCgjtjwcPJhxixcDQKeO'; // Key PTLA
global.c_apikey = 'ptlc_Jga62bR6FXEF87FtBgLMZokjwUqMOXF9LtSJ4ep4EqH' // Key PTLC
global.eggs = '15'
global.locs = '1'
/*=========== deposit otomatis ===========*/
global.apikeyhost = 'slkxFjTPqATbQgsHaaCKd8unS6rY0AQTRHGZoJknSiSRDeSRapi4YvO2t3p2ebzM9q42hnwjkjUi1lq7QXcguv69zUarexN9MVaV' // atlantich2h baca >> https://telegra.ph/NIH-TUTORIAL-BIAR-LU-DAPAT-CUAN-04-09
/*=========== store send testi ===========*/
global.jb1 = '120363163655682468' // ID GRUP LU CEK DI GROUPLIST
global.jb2 = '120363044850236202' // ID GRUP LU CEK DI GROUPLIST
/*=========== Harga reseller panel ===========*/
global.harga1gb = '10000'
global.harga2gb = '15000'
global.harga3gb = '20000'
global.harga4gb = '25000'
global.harga5gb = '30000'
global.harga6gb = '35000'
global.harga7gb = '40000'
global.hargaunli = '30000'
/*=========== Harga nokos wa ===========*/
global.nokosindo = '7000'
global.nokosusa = '8000'
global.nokosmalay = '12000'
global.apiotp = 'd3fBA5KtVsH8RL1kpu9Gxjmvl7cN4C' // api otp nokos lu
/*=========== HIASAN MENU ===========*/
global.dmenut = '❏═┅═━–〈' // atas
global.dmenub = '┊•' // badan
global.dmenub2 = '┊' // bada pada default prefix nya
global.dmenuf = '┗––––––––––✦' // akhiran body
global.hiasan = '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷꒦'
global.cmenut = '––––––『' // Atas / atap
global.cmenuh = '』––––––' // Bawah body
global.cmenub = '┊☃︎ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '' //after
global.pmenus = '☃︎' //pembatas menu selector
global.htki = '––––『' 
global.htka = '』––––' 
global.lopr = 'Ⓟ'
global.lolm = 'Ⓛ'
global.htjava = '❃' 

// Sosial Media
global.sig = 'https://instagram.com/'
global.syt = 'https://youtube.com/@AndyMod404'
global.sgh = 'https://github.com/'
global.sgc = 'https://chat.whatsapp.com/LQ7WmCERmUUKLMzVJbIiIo'
global.swa = 'https://wa.me/+6285784902529'
global.swb = 'kancelsbm@gmail.com'
global.snh = 'https://nhentai.net/g/365296/' //Make ini aja gausah di ganti.

// Pembayaran
global.pdana = '6285852925586'
global.povo = '-'
global.pgopay = '6285852925586'
global.pulsa = '6285852925586'
global.pulsa2 = '-'
global.psaweria = 'https://saweria.co/AndyXD'
global.ptrakteer = 'https://trakteer.id/-'
global.psbuzz = 'https://socialbuzz.com/'

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = namabot
  var sticker_author = '々 AndyXD || 乂'
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}
// Sticker WM
packname = sticker_name
author = sticker_author
wm = '© HoshinoBoTz'

Intervalmsg = 1800 //detik
multiplier = 1000 // Tinggi Level Up
/*============== API ==============*/
APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  bcil: 'https://75.119.137.248:21587',
  neoxr: 'https://api.neoxr.eu.org/',
  zeks: 'https://api.zeks.me',
  gimez: 'https://masgimenz.my.id/',
  melcanz: 'https://melcanz.com',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  restapi: 'https://x-restapi.herokuapp.com',
  erdwpe : 'https://api.erdwpe.com',
  males: 'https://malesin.xyz'
}

APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'apikeyaine',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.neoxr.eu.org/': 'jVEMyB2ITJ',
  'https://api.zeks.me': 'apikeyaine',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'ZZBk7EBb',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://x-restapi.herokuapp.com': 'BETA',
}

//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})
rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}