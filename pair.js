const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: 𝐌𝐀𝐑𝐈𝐎𝐍,    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function 𝐌𝐀𝐑𝐈𝐎𝐍𝐗_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_𝙹𝙰𝙲𝙺𝚂 = Malvin_King({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_𝐌𝐀𝐑𝐈𝐎𝐍 𝐗.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Malvin_King.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_𝙹𝙰𝙲𝙺𝚂_𝙼𝙰𝚁𝙸𝙾𝙽.ev.on('creds.update', saveCreds)
            Pair_Code_By_𝙹𝙰𝙲𝙺𝚂_𝙼𝙰𝚁𝙸𝙾𝙽.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_𝐉𝐀𝐂𝐊𝐒.sendMessage(Pair_Code_By_𝐉𝐀𝐂𝐊𝐒.user.id, { text: '' + b64data });

               let 𝐌𝐀𝐑𝐈𝐎𝐍 𝐗_TEXT = `
┏━━━━━━━━━━━━━━
┃ᴍᴀʟᴠɪɴ-ᴍᴅ SESSION IS 
┃SUCCESSFULLY
┃CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = 𖥘⚡ marion-jacks⚡𖥘
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || https://whatsapp.com/channel/0029Vb58ejm35fLoqYxEhn3r
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❸ || Owner = https://wa.me/254796087764
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❺ || Bot Repo = https://github.com/marion-jacks/marionx 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©2024-2099 ᴍᴀʟᴠɪɴ-ᴋɪɴɢ_`
 await Pair_Code_By_jacks_mario .sendMessage(Pair_Code_By_jacks_marion.user.id,{text:marion_x_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_𝐌𝐀𝐑𝐈𝐎𝐍 𝐗.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    MALVIN_KING_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await 𝐌𝐀𝐑𝐈𝐎𝐍 𝐗_PAIR_CODE()
});
module.exports = router
