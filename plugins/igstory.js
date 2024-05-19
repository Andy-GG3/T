let fetch = require('node-fetch')

let handler = async(m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Example: ${usedPrefix + command} _fake.story46`
if (text.includes("www.instagram.com")) {
  m.reply(`harus berupa username akun instagram!! ${usedPrefix + command} _fake.story46`);
} else {
    m.reply(wait)
  try {
    let anu = await fetchJson(`https://api.botcahx.eu.org/api/dowloader/igdowloader?url=https://instagram.com/stories/${text}&apikey=${apichan}`)
        let tess = anu.result
        tess.forEach(tess => {
   conn.sendFile(m.chat, tess.url, null, wm, m)
});
 } catch (e) {
     m.reply('Erorr: Tidak ada story Di instagram tersebut')
 }
}
}

handler.menu = ['igstory <text>']
handler.tags = ['download']
handler.command = /^((ig|instagram)story)$/i

handler.premium = false
handler.limit = true

module.exports = handler