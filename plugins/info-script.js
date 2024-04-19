import moment from 'moment-timezone';
import fetch from 'node-fetch';
const handler = async (m, { conn, args }) => {
   const res = await fetch('https://github.com/diegojadibot/Multiverse-MD');
   const json = await res.json();
   let txt = `           *🧸 𝗕𝗼𝘁 - 𝗦𝗰𝗿𝗶𝗽𝘁 📍*\n\n`;
      txt += `◦  *𝐑𝐞𝐩𝐨:* ${json?.name || '🧸 Multiverse-MD'}\n`;
      txt += `◦  *𝐕𝐢𝐬𝐢𝐭𝐚𝐧𝐭𝐞𝐬:* ${json?.watchers_count || '-'}\n`;
      txt += `◦  *𝐓𝐚𝐦𝐚𝐧̃𝐨:* ${(json?.size / 1024).toFixed(2) || '-'} MB\n`;
      txt += `◦  *𝐀𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐜𝐢𝐨𝐧:* ${moment(json?.updated_at).format('DD/MM/YY - HH:mm:ss') || '-'}\n`;
      txt += `◦  *Url:* ${json?.html_url || 'https://github.com/diegojadibot/Multiverse-MD'}\n\n`;
      txt += `         ${json?.forks_count || '-'} Forks · ${json?.stargazers_count || '-'} Stars · ${json?.open_issues_count || '-'} Issues`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.packname, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen4, "mediaUrl": `https://github.com/diegojadibot/Multiverse-MD`, "sourceUrl": `https://github.com/diegojadibot/Multiverse-MD`}}}, {quoted: m});
};
handler.help = ['scbot'];
handler.tags = ['info'];
handler.command = /^(sc|scbot|scrip|script)$/i;
handler.register = true
//handler.premium = true
export default handler;