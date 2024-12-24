require('dotenv').config(); // Load environment variables

module.exports = {
    prefix: process.env.PREFIX || '.', // Command prefix
    ownerName: process.env.OWNER_NAME || 'ᴬʳᶜᵃⁿᵉ𝐉𝐎𝐇𝐍𝐋𝐄𝐎 𝐒𝐌𝐈𝐓𝐇', // Owner name
    ownerNumber: process.env.OWNER_NUMBER || '2349118300204', // Your WhatsApp number
    mode: process.env.MODE || 'private', // Bot mode: 'public' or 'private'
    region: process.env.REGION || 'Nigeria', // Region
    botName: process.env.BOT_NAME || 'Rias Gremory V3', // Bot name
    exifPack: process.env.EXIF_PACK || 'RIAS V3 LOVES', // Sticker pack name
    exifAuthor: process.env.EXIF_AUTHOR || 'Toxxic', // Author of the sticker pack
    timeZone: process.env.TIME_ZONE || 'Africa/Lagos', // Time zone
    presenceStatus: process.env.PRESENCE_STATUS || 'recording', // Bot presence status
    autoRead: process.env.AUTO_READ === 'false', // Auto-read messages (true or false)
    autoViewStatus: process.env.AUTO_VIEW_STATUS === 'true', // Auto-view statuses (true or false)
    autoReact: process.env.AUTO_REACT === 'true', // Auto-react (true or false)
    sessionId: process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"qEAvEWzL/NIfOc54wAkeOLn2WeA8yo9074ZvKISLI1w="},"public":{"type":"Buffer","data":"HmQAY7hDnnvbGj/sUDSO4qkxnEj34LZpSQapS+8El2U="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"oJqX54cAs3Fzr/txI9lJP8GR3pU9+7iyOxRibo42cXo="},"public":{"type":"Buffer","data":"OnURhoWzUM7dr1vTIQAjCXu/mfFKEd9W35jL58qZxDs="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"0MVEuNbuMrxyniLhQVgxNBd33i6WCTwWMMogdaR1kE4="},"public":{"type":"Buffer","data":"pGIg44GaXGcXHpP31Ud1OynvXs1jMYfMb7imqkMKlTo="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"oHNwmfLCBzvSc4uJ7grbngcXVsz1Xbstpqd/StDbdHE="},"public":{"type":"Buffer","data":"tgcSBhbeFvnEE6K3ytLLjlWEodOuXtg3P7QSmBGB4wE="}},"signature":{"type":"Buffer","data":"wTZP1/Xo5T1FQrJikMcxST+eD+ZBnzJ/PY6Nez9kT8BjgN1jb9aopW5h5bUlvvJ8Pi0K2MNG3ZvHjWb2CFvTig=="},"keyId":1},"registrationId":110,"advSecretKey":"RnUvbWiC9j+dKlO39/M9CKY9XX573HFpGtfB+eK+RhQ=","processedHistoryMessages":[{"key":{"remoteJid":"2349118300204@s.whatsapp.net","fromMe":true,"id":"C2645EF3AEC860D980F2A41250DC7FCA"},"messageTimestamp":1735048233}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"PgNFa8Q7TkuOJb0pqa0UGw","phoneId":"b836e355-7c4f-4ffc-bd2f-61b957da04ca","identityId":{"type":"Buffer","data":"hjHlMj+s6oiz9QRHVvjt3Viz/7s="},"registered":true,"backupToken":{"type":"Buffer","data":"z0BWjtmB6NBiLMv/yyC16T5ngO8="},"registration":{},"pairingCode":"NBNTA7R2","me":{"id":"2349118300204:13@s.whatsapp.net","name":"ᴬʳᶜᵃⁿᵉ𝐉𝐎𝐇𝐍𝐋𝐄𝐎 𝐒𝐌𝐈𝐓𝐇"},"account":{"details":"CNLanpQDEJP4qrsGGAwgACgA","accountSignatureKey":"Gl1sc14ZgZq/ZeS/GbmlBoJzW0Xe+4rxq3gZSwwf910=","accountSignature":"RGTS18gsmZpBsDVDVrIVQuLxW7Sqojjqqg78QMLr/gJklKwO/Gw7F3hHLKAnGNaIpfApakZae6JDnh3lWxGdCA==","deviceSignature":"HrztxWsvB1+j72ghTeMn0SOhlkNPx7vJ5DKk3Mf81lB9la+idAtgsilfGuyMbzlvah/a4wggYSJikgLe17DdhQ=="},"signalIdentities":[{"identifier":{"name":"2349118300204:13@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BRpdbHNeGYGav2Xkvxm5pQaCc1tF3vuK8at4GUsMH/dd"}}],"platform":"smba","lastAccountSyncTimestamp":1735048224,"myAppStateKeyId":"AAAAALPb"}'// Add Your Session ID here
};
