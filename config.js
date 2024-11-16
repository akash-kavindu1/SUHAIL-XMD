const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://images.app.goo.gl/a6JXYmnFMfe97nFa7" || "https://images.app.goo.gl/a6JXYmnFMfe97nFa7" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94771810698";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://images.app.goo.gl/75J3uUyvtug2kCNLA" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_41_11_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxLFxuICAgICAgICAxODEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDcyLFxuICAgICAgICA2OCxcbiAgICAgICAgNyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDc3LFxuICAgICAgICA1LFxuICAgICAgICAyMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkxLFxuICAgICAgICA0MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwLFxuICAgICAgICAzMCxcbiAgICAgICAgMixcbiAgICAgICAgODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgODMsXG4gICAgICAgIDM4LFxuICAgICAgICA3NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDIzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA1LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0LFxuICAgICAgICA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjQsXG4gICAgICAgIDEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTczLFxuICAgICAgICA0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICA5MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDkwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY2LFxuICAgICAgICA5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM5LFxuICAgICAgICAyNixcbiAgICAgICAgMjMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgODQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInFncWVDVEg5TU9DeER0WUFuOXJjUUJLRFBWZFA4Njk2Tjc4djNzQ2IxZFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRCTVNoMU9pVGFDQkVTMnZBbG90LUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWM1MDM4ODUtNDY2MS00ZDNmLWJmYTQtMDcwMjI0MDc3OGIxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NixcbiAgICAgIDkyLFxuICAgICAgMTQyLFxuICAgICAgMjUwLFxuICAgICAgOTAsXG4gICAgICA1NCxcbiAgICAgIDEyMyxcbiAgICAgIDUsXG4gICAgICA2MixcbiAgICAgIDE4LFxuICAgICAgMTA2LFxuICAgICAgODQsXG4gICAgICAyMyxcbiAgICAgIDIwOSxcbiAgICAgIDIzNCxcbiAgICAgIDExMSxcbiAgICAgIDEzOCxcbiAgICAgIDEwMSxcbiAgICAgIDUsXG4gICAgICA3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAxNjUsXG4gICAgICAyNTQsXG4gICAgICAxLFxuICAgICAgMTQwLFxuICAgICAgNjksXG4gICAgICA3MixcbiAgICAgIDUsXG4gICAgICAyMDUsXG4gICAgICA1MSxcbiAgICAgIDc4LFxuICAgICAgMTM2LFxuICAgICAgMjQ3LFxuICAgICAgMjQyLFxuICAgICAgMTMzLFxuICAgICAgNTgsXG4gICAgICAxNCxcbiAgICAgIDEwOCxcbiAgICAgIDIxMyxcbiAgICAgIDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRlRMQ0tDOFhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzcxODEwNjk4OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4bSi4bSAybThtJvhtIDjhaTKn8mq4bSg4bSH44Wk44OkXCIsXG4gICAgXCJsaWRcIjogXCI4Mzc1MTg2Mjg4NzcwOjMwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tEbG43NEdFSzd3MzdrR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic3FrRjhYZjR3NDFIN1lXK3MwMXNsVG9jV25RSmQwcjR4eGJVRXlHYjdEMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHZWdhL0R5ZGo3SVJZZWhCM3djR1cwVDFyU0tKRkVKRnNHbXJRU3JKNVpWNzlpdWF3UkM0aWY3RWhJSStRZzdBRFB4UCtXYW95V01LN2R3SXF3LzZCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRNkE0TFNEaW1Rb1V6aVBWZE1FMTdhd0RpNnpsR1ZicUNWOVRwOTBGS0o0TGpBZWVTbG1EVXV3TmR2TXBDRk5CV0xMK3QxNDJsN1U4Z1Ruc0g1L2JDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3MTgxMDY5ODozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE3MjEyNjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMK2RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUwrZC5qc29uIjogIntcImtleURhdGFcIjpcIlhxTXFkeFFTK2ZqcWxPMVNhM1BiU0xyQTVmc3B4OXdmR3RBWlZXdURlSzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc0MTE1NzAyNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxNjc0NTUyMDUwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ZANTA_BOT",
  ownername:process.env.OWNER_NAME|| "ZANTA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "ZANTA"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
