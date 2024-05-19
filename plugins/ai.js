var fetch = require('node-fetch');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
//await m.reply(wait)
  var apii = await fetch(`https://aemt.me/openai?text=${text}`)
  var js = await apii.json()
  await m.reply(js.result)
}      
handler.command = handler.help = ['ai2','aiturbo','chatgpt','ai','openai'];
handler.tags = ['internet','tools'];
handler.limit = 4
handler.premium = false
module.exports = handler;