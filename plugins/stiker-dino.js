let fetch = require('node-fetch')
const { Sticker } = require('wa-sticker-formatter')

let handler = async(m, { conn, text, usedPrefix, command }) => {
    let images = `https://api.botcahx.eu.org/api/sticker/dinokuning?apikey=${apichan}`
   try {
   let stiker = await createSticker(images, false, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
} catch (e) {
 m.reply('Erorr: Tidak dapat menemukan media')
 }
}

handler.menu = ['dino']
handler.tags = ['stiker']
handler.command = /^(dino)$/i
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