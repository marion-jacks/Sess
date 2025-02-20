const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: MARION,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function MARION_X_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Malvin_King = Malvin_King({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Malvin_King.ev.on('creds.update', saveCreds)
			Qr_Code_By_Malvin_King.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Malvin_King.sendMessage(Qr_Code_By_Malvin_King.user.id, { text: '' + b64data });
	
				   let MARION_X_TEXT = `
┏━━━━━━━━━━━━━━
┃ᴍᴀʟᴠɪɴ-ᴍᴅ SESSION IS 
┃SUCCESSFULLY
┃CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = 𖥘⚡ JACKS-MARION⚡𖥘
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || https://whatsapp.com/channel/0029Vb58ejm35fLoqYxEhn3r
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❸ || Owner = https://wa.me/254796087764
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❺ || Bot Repo = https://github.com/marion-jacks/marionx
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❻ || OWNER = https://wa.me/254115631681 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©2024-2099 ᴍᴀʟᴠɪɴ-ᴋɪɴɢ_`
	 await Qr_Code_By_MARION_X.sendMessage(Qr_Code_By_MARION_X.user.id,{text:MARION_X_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Malvin_King.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					MARION_X_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await MARION_X_QR_CODE()
});
module.exports = router
