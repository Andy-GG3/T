const fetch = require('node-fetch');
const fs = require('fs');

let handler = async (m, { conn, text }) => {
  if (!text) {
    m.reply('*Example*: .spotifydl https://open.spotify.com/track/xxxxx');
    return;
  }

  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });

  let apikey = `e44b45586da3baffb69728a57a04b4cb44e3c144`;
  let url = `https://otpweb.com/api?api_key=${apikey}&action=balance`;

  try {
    let res = await fetch(url);
    if (!res.ok) throw await res.text();
    let json = await res.json();
    if (json.status !== 200) throw json.message;

    let result = json.result;

    let audioBuffer = await fetch(result.link).then(response => response.buffer());
    fs.writeFileSync('audio.mp3', audioBuffer);

    conn.sendFile(m.chat, 'audio.mp3', 'audio.mp3', '', m);

    fs.unlinkSync('audio.mp3');

  } catch (error) {
    m.reply(`Error: ${error}`);
  }
};

handler.command = ['spotifydl'];
handler.tags = ['downloader'];
handler.help = ['spotifydl'];
handler.group = false;
handler.register = true;

module.exports = handler;