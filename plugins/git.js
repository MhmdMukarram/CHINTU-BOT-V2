const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.ibb.co/GsjY7fC/Whats-Alexa.png", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*𝐎𝐖𝐍𝐄𝐑 𝐍𝐀𝐌𝐄:RED ALPHA*
 
◼◼❏❏©CHINTU BOT

*𝐎𝐖𝐍𝐄𝐑 𝐍𝐔𝐌𝐁𝐄𝐑 : wa.me/94740979220?text=Hii%20Red_Alpha%20Bro.%20*

 *𝐁𝐎𝐓 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 𝐆𝐑𝐎𝐔𝐏: https://chat.whatsapp.com/EW96235JKZhLA2XAJsPrf1*

 *𝐁𝐎𝐓 𝐆𝐑𝐎𝐔𝐏 1 : https://chat.whatsapp.com/Jx7f5x3wSU7D8a9ntdFB3j*
     
 *𝐁𝐎𝐓 𝐆𝐑𝐎𝐔𝐏 2 : https://chat.whatsapp.com/E9ISyKEuxKz2pCP5Qz8igM*

 *𝐁𝐎𝐓 𝐆𝐑𝐎𝐔𝐏 3 : https://chat.whatsapp.com/Dvtms6vzTHi7xVYJblRVDn*

 *𝐌𝐔𝐒𝐈𝐂 𝐖𝐎𝐑𝐋𝐃 : https://chat.whatsapp.com/I0PnnkNDYIoHkwimOTJ1KQ*

 *𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌 𝐆𝐑𝐎𝐔𝐏 : https://t.me/redalphachatgroup*

 *𝐆𝐈𝐓𝐇𝐔𝐁 𝐋𝐈𝐍𝐊 : https://github.com/MhmdMukarram/CHINTU-BOT-V2*

 **

 ◼◼❏❏©CHINTU BOT
`}) 

}));
