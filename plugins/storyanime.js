let fetch = require('node-fetch')
const { Sticker } = require('wa-sticker-formatter')
const { fetchJson, sleep } = require("../functions.js")

let handler = async(m, { conn, text, usedPrefix, command }) => {
    let res = await fetchJson('https://aemt.me/download/storyanime')
    let x = res.result
    m.reply(wait)
  //  let x = 'https://mobstatus.com/wp-content/uploads/2023/01/ONE-KISS-X-I-WAS-NEVER-THERE-__-ANIME-__-__LOVE__-WHATSAPP-STATUS-720P_HD.mp4'
    conn.sendMessage(m.sender, { video: { url: x.url } }, { quoted : m })
    
}

handler.menu = ['storyanime']
handler.tags = ['download']
handler.command = /^(storyanime)$/i
handler.premium = false
handler.limit = true
module.exports = handler
async function createSticker(img, url, packName, authorName, quality) {
	let stickerMetadata = {
		type: 'full',
		pack: global.packname,
		author: global.author,
		quality
	}
	return (new Sticker(img ? img : url, stickerMetadata)).toBuffer()
}
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}