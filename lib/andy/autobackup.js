const fs = require('fs')
module.exports = (conn) => {
  setInterval(async () => {
    const q = {
      "key": {
        "remoteJid": "status@broadcast",
        "participant": "0@s.whatsapp.net",
        "fromMe": false,
        "id": ""
      },
      "message": {
        "conversation": "Berhasil mencadangkan Seluruh File Backup Script"
      }
    }
    let sesi = await fs.readFileSync('./backup.zip')
    await conn.sendMessage(global.nomorowner + '@s.whatsapp.net', { document: sesi, mimetype: 'application/json', fileName: 'database.json' }, { quoted: q })
  }, 50 * 60 * 1000)
}