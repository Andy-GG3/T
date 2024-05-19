const axios = require("axios");

let limit = user.premium ? '∞' : user.limit
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Mana prompt nya kak?';

    try {
       conn.reply(m.chat, `*Tunggu Sebentar Ya Kak, Permintaan Anda Lagi di Proses*`, m);
        const response = await axios.get(`https://api.miftahganzz.my.id/api/ai/bing-chat?q=${text}&apikey=IchanZX`);

        // Menangani respons dengan benar
        const result = response.data;

        for (let p of result.image) {
                        conn.sendFile(m.chat, p, null, `*Prompt:* ${text}\n*Decreased Limit: -10*\n*Remaining Limit: ${limit}*`, m)
}
    } catch (err) {
        console.error(err);
        throw 'Terjadi kesalahan saat mengambil data dari server AI Bing.';
    }
};

handler.command = handler.help = ['bingimg'];
handler.premium = false;
handler.limit = 10;
handler.tags = ["ai"]

module.exports = handler;