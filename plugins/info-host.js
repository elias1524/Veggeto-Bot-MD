let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `🚀` 
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363276986902836@newsletter', 
serverMessageId: '', 
newsletterName: '☁️' }, 
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🔮`,
body: `🔮`,
"previewType": "PHOTO",
thumbnailUrl: 'https://telegra.ph/file/551d3d544d7bc607fd337.jpg', 
sourceUrl: redeshost}}},
{ quoted: fkontak})
} 
handler.tags = ['main'] 
handler.help = ['host', 'hosting'] 
handler.command = ['host', 'corin', 'corinplus', 'hosting']
export default handler