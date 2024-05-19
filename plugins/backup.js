const fs = require('fs');
const archiver = require('archiver');
const path = require('path');
const scbackup = require('../schedule/backupscs.js')
let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let res = await scbackup(conn)
  let sesi = await fs.readFileSync('./backup.zip')
  await conn.sendMessage(m.chat, { document: sesi, mimetype: 'zip', fileName: 'backup.zip' }, { quoted: m })
  conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
    m.reply('sucsess')
}

handler.help = ['backup']
handler.tags = ['owner']
handler.command = /^backup$/i

handler.owner = true

module.exports = handler