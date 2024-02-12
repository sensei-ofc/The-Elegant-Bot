require('../main.js') 
const fs = require("fs")
const path = require("path")
const chalk = require("chalk")
const axios = require('axios')
const cheerio = require('cheerio')
const ffmpeg = require('fluent-ffmpeg')
const ffmpegPath = require('ffmpeg-static')
ffmpeg.setFfmpegPath(ffmpegPath)
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js') 

async function stickers(m, command, conn, mime, quoted, args, text, lolkeysapi, fkontak) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (global.db.data.users[m.sender].banned) return m.reply(`_🚫ESTA BANEADO POR MI PROPIETARIO_`) 
if (command == 's' || command == 'sticker') {
if (/image/.test(mime)) {  
conn.fakeReply(m.chat, `${lenguaje.sticker.text}`, '0@s.whatsapp.net', 'No haga spam')
media = await quoted.download()  
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}})
await fs.unlinkSync(encmedia)  
} else if (/video/.test(mime)) {  
if ((quoted.msg || quoted).seconds > 20) return m. reply(lenguaje.sticker.text1)  
media = await quoted.download()  
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}})
await new Promise((resolve) => setTimeout(resolve, 2000))
await fs.unlinkSync(encmedia)  
} else {  
m.reply(lenguaje.sticker.text2)}}

if (command == 's2') {
    if (!args.join(" ")) return m.reply(lenguaje.sticker.text3)
    const [pcknm = global.packname, atnm = global.author] = args.join(" ").split("|")
    if (/image/.test(mime) || /video/.test(mime)) {  
      conn.fakeReply(m.chat, `${lenguaje.sticker.text}`, '0@s.whatsapp.net', 'No haga spam')
      media = await quoted.download()  
      let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}})
      await fs.unlinkSync(encmedia)  
    } else if (/video/.test(mime)) {  
      if ((quoted.msg || quoted).seconds > 20) return m.reply(lenguaje.sticker.text1)  
      media = await quoted.download()  
      let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}})
      await new Promise((resolve) => setTimeout(resolve, 2000))
      await fs.unlinkSync(encmedia)  
    } else {  
      m.reply(lenguaje.sticker.text2)
    }
  }  

if (command == 'wm' || command == 'take') {
if (!args.join(" ")) return m.reply(lenguaje.sticker.text3)
conn.fakeReply(m.chat, `${lenguaje.lengua.espere}`, '0@s.whatsapp.net', 'No haga spam') 
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
conn.downloadAndSaveMediaMessage(quoted, "gifee")
conn.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{ quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}})
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m. reply('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}})
} else {
m.reply(lenguaje.sticker.text2)}}

if (command == 'attp') {
if (!text) return m.reply(lenguaje.sticker.text4)
m.reply(lenguaje.sticker.text5)
let link = `https://api.lolhuman.xyz/api/attp?apikey=${lolkeysapi}&text=${text}`
await conn.sendMessage(m.chat, { sticker: { url: link } }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
db.data.users[m.sender].limit -= 1 }

if (command == 'dado') {
let dir = `https://api.lolhuman.xyz/api/sticker/dadu?apikey=${lolkeysapi}`
conn.sendMessage(m.chat, { sticker: { url: dir } }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
db.data.users[m.sender].limit -= 1
m.reply('1 ' + info.limit)}

if (command == 'llorar') {
  axios.get('https://api.waifu.pics/sfw/cry')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })})}

if (command == 'matar') {
  axios.get('https://api.waifu.pics/sfw/kill')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'acariciar') {
  axios.get('https://api.waifu.pics/sfw/pat')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'lamer') {
  axios.get('https://api.waifu.pics/sfw/lick')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'besar') {
  axios.get('https://api.waifu.pics/sfw/kiss')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'morder') {
  axios.get('https://api.waifu.pics/sfw/bite')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'lanzar' || command == 'arrojar') {
  axios.get('https://api.waifu.pics/sfw/yeet')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'acosar' || command == 'bullying') {
  axios.get('https://api.waifu.pics/sfw/bully')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'bofetada') {
  axios.get('https://api.waifu.pics/sfw/slap')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'sonreir') {
  axios.get('https://api.waifu.pics/sfw/smile')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'awoo') {
  axios.get('https://api.waifu.pics/sfw/awoo')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'sonrojar' || command == 'sonrojarse') {
  axios.get('https://api.waifu.pics/sfw/blush')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}
if (command == 'orgulloso' || command == 'engreido' || command == 'engreida') {
  axios.get('https://api.waifu.pics/sfw/smug')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'abrazar') {
  axios.get('https://api.waifu.pics/sfw/hug')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'golpear') {
  axios.get('https://api.waifu.pics/sfw/bonk')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}
if (command == 'guiñar') {
  axios.get('https://api.waifu.pics/sfw/wink')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'tocar') {
  axios.get('https://api.waifu.pics/sfw/poke')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'comer') {
  axios.get('https://api.waifu.pics/sfw/nom')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'saludar') {
  axios.get('https://api.waifu.pics/sfw/wave')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'glomp') {
  axios.get('https://api.waifu.pics/sfw/glomp')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'estrangulamiento') {
  axios.get('https://api.waifu.pics/sfw/glomp')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'feliz') {
  axios.get('https://api.waifu.pics/sfw/happy')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'bailar') {
  axios.get('https://api.waifu.pics/sfw/dance')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'avergonzarse') {
  axios.get('https://api.waifu.pics/sfw/cringe')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'acurrucar') {
  axios.get('https://api.waifu.pics/sfw/cuddle')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'loscinco') {
  axios.get('https://api.waifu.pics/sfw/highfive')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'shinobu') {
  axios.get('https://api.waifu.pics/sfw/shinobu')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'sujetar') {
  axios.get('https://api.waifu.pics/sfw/handhold')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'ladrido') {
  axios.get('https://nekos.life/api/v2/img/woof')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'bola_8') {
  axios.get('https://nekos.life/api/v2/img/8ball')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'ganso') {
  axios.get('https://nekos.life/api/v2/img/goose')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'gecg') {
  axios.get('https://nekos.life/api/v2/img/gecg')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'alimentar') {
  axios.get('https://nekos.life/api/v2/img/feed')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'chica_zorro') {
  axios.get('https://nekos.life/api/v2/img/fox_girl')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'lagarto') {
  axios.get('https://nekos.life/api/v2/img/lizard')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'nalgada' || command == 'azotar') {
  axios.get('https://nekos.life/api/v2/img/spank')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'maullar') {
  axios.get('https://nekos.life/api/v2/img/meow')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}

if (command == 'cosquillas') {
  axios.get('https://nekos.life/api/v2/img/tickle')
    .then(async response => {
      const media = await axios.get(response.data.url, { responseType: 'arraybuffer' })
      await conn.sendImageAsSticker(m.chat, Buffer.from(media.data, 'binary'), m, { packname: 'Nombre del paquete', author: 'Autor' })
    })
}
}

module.exports = { stickers }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
