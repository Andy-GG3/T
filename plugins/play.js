const ytdl = require('ytdl-core');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const yts = require('yt-search');
const fetch = require('node-fetch')
const { fetchJson, sleep } = require("../functions.js")
const { youtubedl, youtubedlv2 } = require('../scrape/dl-ytplay')
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!args || !args[0]) throw `contoh:\n ${usedPrefix}${command} dj terbaru`
    m.reply(wait)
    conn.sendMessage(m.chat, {
        react: {
            text: "⏳",
            key: m.key, }})
     try {
let res = await fetch(`${Apisichan}/api/downloader/youtube-play-video?api_key=${apichan}&video_title=${args}`)
let hi = await res.json()
let json = hi.data
let sce = json.url
let tmb = json.thumb
/**await conn.sendButton(m.chat, 'Tiktod Downloader', 'Done', json.noWatermark, [["Donasi", '/donasi']], m)
}**/
let captvid = `${htki} *Y O U T U B E* ${htka}
-------- ---------
┊☃︎ Judul: ${json.title}
┊☃︎ channel: ${json.channel}
┊☃︎ Views: ${json.views}
┊☃︎ Upload: ${json.published}
┊☃︎ By: ${namabot}
-------- ---------
┊☃︎ kirim .tomp3 untuk mengubah video menjadi mp3
┊☃︎ kirim .tovn untuk mengubah video menjadi vn
-------- ---------
┊☃︎ by @${namaowner}
${cmenuf}`

conn.sendMessage(m.chat, {
                audio: {
                    url: sce
                },
                mimetype: 'audio/mpeg',
                contextInfo: {
                    externalAdReply: {
                        title: json.title,
                        body: "",
                        thumbnailUrl: tmb,
                        sourceUrl: syt,
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            }, {
                quoted: m
            });

    conn.sendFile(m.chat, json.url, 'yt.mp3', captvid, m);
         conn.sendMessage(m.chat, {
        react: {
            text: "✅",
            key: m.key, }})
      //   m.reply(`––––––『 ⎔ 𝙇𝙤𝙖𝙙𝙞𝙣𝙜... 』––––––\n\n*Sedang Mencari [ ${text} 🔍]*`);
 //   conn.sendMessage(m.chat, { document: { url: json.url}, mimetype: 'document', fileName: `${json.title}.mp3`}, {quoted: m})
  //  await conn.sendMessage(m.chat, { video: { url: json.video }, caption: wm}, {quoted: m})
//await conn.sendFile(m.chat, hi.data.nowm, 'video.mp4', ` Nih Jangan Spam Ya\n Reply Video Ini dengan caption #tomp3 untuk convert to mp3
} catch (e) {
     m.reply(`––––––『 ⎔ 𝙇𝙤𝙖𝙙𝙞𝙣𝙜... 』––––––\n\n*Sedang Mencari [ ${text} 🔍]*`);
  try {
      let search = await yts(`${text}`)
      let id = search.videos[0].videoId;
                //if (isUrl(text)) return reply(`Kirim perintah:\n${prefix+command} judul lagu\n\nContoh penggunaan:\n${prefix+command} bot WhatsApp Zeeoneofc`)
               // m.reply(lang.wait)
              /*  let res = await fetch(`https://api.sanzy.bar/api/download?type=playMp3&q=${args}`)
           //     if (!res.ok) throw await res.text()
                var result = await res.json()
                var {
                    channel,
                    title,
                    url,
                    thumb
                } = result.result
               // let get = result.result
              //  let hasilnya = get.video
             //   await sleep(1000)
                let vap = `*「 YOUTUBE PLAY 」*

🆔 Channel : ${channel}
💬 Title : ${title}
🔗 Link : -

*WAITING SEND AUDIO MESSAGE PLEASE WAIT 3MINUTE.......*
`*/
                const url = 'https://www.youtube.com/watch?v=' + id
                console.log(url)
                            const yt = await youtubedl(url).catch(async () => await youtubedlv2(url))
const linknya = await yt.audio['128kbps'].download()
const thumbnailUrl = search.videos[0].thumbnail;
const title = search.videos[0].title;
              /*  conn.sendMessage(m.chat, {
text: vap,
contextInfo: {
externalAdReply: {
title: 'ヅ 𝐘 𝐎 𝐔 𝐓 𝐔 𝐁 𝐄\nᴅᴏᴡɴʟᴏᴀᴅᴇʀ',
thumbnailUrl: thumb,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) */
                  let doc = { 
  audio: 
  { 
    url:  linknya
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: sgc,
title: title,
body: namabot,
sourceUrl: syt,
thumbnail: await(await conn.getFile(thumbnailUrl)).data                                                                     
                                                                                                                 }
                       }
  }
                  conn.sendMessage(m.chat, {
        react: {
            text: "✅",
            key: m.key, }})
  return conn.sendMessage(m.chat, doc, { quoted: m })
  } catch (e) {
    //  console.log(e)
      m.reply(`––––––『 ⎔ Waduh Error... 』––––––\n\n*Fitur Terbaru ketik .playv2*`);
    conn.reply(m.chat, `Error: ${e}`, m);
  }
};
/*let res = await fetch(`https://restapis.zxcoderid.xyz/api/downloader/youtube-play-video?q=${args}&apikey=Ichanzx`)
let hi = await res.json()
let json = hi.data
let captvid = `${htki} *Y O U T U B E* ${htka}
-------- ---------
┊☃︎ kirim .tomp3 untuk mengubah video menjadi mp3
┊☃︎ kirim .tovn untuk mengubah video menjadi vn
-------- ---------
┊☃︎ by @${namaowner}
${cmenuf}`
m.reply(`––––––『 ⎔ 𝙇𝙤𝙖𝙙𝙞𝙣𝙜... 』––––––\n\n*Fitur Terbaru ketik .playv2*`);
    conn.sendFile(m.chat, json.url, 'yt.mp3', captvid, m)
    conn.sendMessage(m.chat, {
        react: {
            text: "✅",
            key: m.key, }})*/
    }

handler.help = ['play'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(play)$/i

handler.limit = 5

module.exports = handler