const https = require('https');
let fs = require('fs')
var { fg } = require('api-dylux')
let fetch = require('node-fetch')
const ytdl = require ("ytdl-core")
const axios = require('axios')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
const { fetchJson, sleep } = require("../functions.js")
let limit = 350 
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
    if (!args || !args[0]) throw `✳️ Contoh :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`
    if (!args[0].match(/youtu/gi)) throw `❎ Memverifikasi bahwa link YouTube`
    
    m.reply(wait) 
    
    try {
        const data = await axios.get(`https://api.botcahx.eu.org/api/dowloader/yt?url=${args}&apikey=${apichan}`)
        if (data.data.status == 403) return m.reply(data.data.message)
        let mp4 = data.data.result.mp4
        let cap = `${htki}  *PLAY YTDL* ${htka}
  
▢ *☃️Titel* : ${data.data.result.title}
▢ *☃️ Ext* : mp4
▢ *☃️ Channel* : -
▢ *☃️ Views* : ${data.data.result.view}

KETIK .ytmp3 JIKA INGIN MENDOWNLOAD AUDIO
${dmenuf}
`
        conn.sendFile(m.chat, mp4.result, 'yt.mp4', `${cap}`, m)
    } catch (e) {
      //  console.error(e)
        try {
            let Ytdl = await ytmp4(args[0])
            const webpPath = './tmp/video.webp';
            fs.writeFileSync(webpPath, Ytdl.buffer);
            conn.sendFile(m.chat, './tmp/video.webp', 'yt.mp4', wm, m)
        } catch (e) {
            console.error(e)
            m.reply(`––––––『 ⎔ 𝙇𝙤𝙖𝙙𝙞𝙣𝙜... 』––––––\n\nMencari Server Fresh`)
            try {
                let res = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apichan}&url=${args}`)
                let json = await res.json()
                let v = json.result
                conn.sendFile(m.chat, v.link, null, wm, m)
                conn.sendMessage(m.chat, { audio: { url: v.link}, mimetype: "audioMessage", ptt: true, fileLength: 88738, }, { quoted: m })
            } catch (e) {
                console.error(e)
                m.reply('Terjadi kesalahan saat memproses permintaan Anda')
            }
        }
    }
}

handler.help = ['mp4', 'v', ''].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
module.exports = handler

async function ytmp4(url) {
    try {
        const { videoDetails } = await ytdl.getInfo(url, { lang: "id" });

        const stream = ytdl(url, { filter: "audioandvideo", quality: "highest" });
        const chunks = [];

        stream.on("data", (chunk) => {
            chunks.push(chunk);
        });

        await new Promise((resolve, reject) => {
            stream.on("end", resolve);
            stream.on("error", reject);
        });

        const buffer = Buffer.concat(chunks);

        return {
            meta: {
                title: videoDetails.title,
                channel: videoDetails.author.name,
                seconds: videoDetails.lengthSeconds,
                description: videoDetails.description,
                image: videoDetails.thumbnails.slice(-1)[0].url,
            },
            buffer: buffer,
            size: buffer.length,
        };
    } catch (error) {
        throw error;
    }
};
async function convertToUrl(buffer) {
    const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');
    try {
        // Mengunduh gambar dari URL
      //  const response = await fetch(imageUrl);
      //  const buffer = await response.buffer();
		const buffer = buffer
        // Membuat objek FormData dan menambahkan file ke dalamnya
        const form = new FormData();
        form.append('file', buffer, { filename: 'video.mp4' });

        // Kirim permintaan untuk mengunggah file ke tmpfiles.org
        const uploadResponse = await fetch('https://tmpfiles.org/api/v1/upload', {
            method: 'POST',
            body: form
        });

        // Mendapatkan respons JSON
        const data = await uploadResponse.json();

        // Cek jika respons sukses
        if (uploadResponse.ok) {
          //  console.log(data.data.url)
            // Kembalikan URL file yang diunggah
            const modifiedUrl = data.data.url.replace('org/', 'org/dl/');
            return modifiedUrl;
        } else {
            throw new Error(data.error || 'Failed to upload file');
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle error accordingly
        return null;
    }
}