let handler = async m => m.reply(`Sewa Bot 25k / Bulan\nSewa Bot 35K (permanent) Minat?\n
Chat : https://wa.me/${nomorowner}
Atau Langsung Ke Official Storenya Di:
https://t.me/cszxcoderid_bot
`.trim()) // Tambah sendiri kalo mau
handler.help = ['panel']
handler.tags = ['info']
handler.command = /^sewa$/i

module.exports = handler