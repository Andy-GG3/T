var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
	if (!args || !args[0]) throw `✳️ Contoh :\n${usedPrefix + command} https://www.instagram.com/xxxxx`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait) 
    try {
			let res = await fetch(`https://aemt.me/download/igdl?url=${args}`)
  let vas = await res.json()
  let vvas = vas.result[0]
    
    conn.sendFile(m.chat, vvas.url, null, wm, m)
    } catch (e) {
        let res = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${apichan}&url=${text}`)
  let vas = await res.json()
  let vvas = vas.result[0]
    
    conn.sendFile(m.chat, vvas, null, wm, m)
    }
    }

handler.help = ['ig']
handler.tags = ['downloader']
handler.limit = 5
handler.command = /^(Instagram|ig|igdl)$/i

module.exports = handler