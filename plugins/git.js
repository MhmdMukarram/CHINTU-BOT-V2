const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.ibb.co/GsjY7fC/Whats-Alexa.png", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*πππππ ππππ:RED ALPHA*
 
βΌβΌββΒ©CHINTU BOT

*πππππ ππππππ : wa.me/94740979220?text=Hii%20Red_Alpha%20Bro.%20*

 *πππ πππππππ πππππ: https://chat.whatsapp.com/EW96235JKZhLA2XAJsPrf1*

 *πππ πππππ 1 : https://chat.whatsapp.com/Jx7f5x3wSU7D8a9ntdFB3j*
     
 *πππ πππππ 2 : https://chat.whatsapp.com/E9ISyKEuxKz2pCP5Qz8igM*

 *πππ πππππ 3 : https://chat.whatsapp.com/Dvtms6vzTHi7xVYJblRVDn*

 *πππππ πππππ : https://chat.whatsapp.com/I0PnnkNDYIoHkwimOTJ1KQ*

 *ππππππππ πππππ : https://t.me/redalphachatgroup*

 *ππππππ ππππ : https://github.com/MhmdMukarram/CHINTU-BOT-V2*

 **

 βΌβΌββΒ©CHINTU BOT
`}) 

}));
