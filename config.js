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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://images.app.goo.gl/W62y7o7o5YFSNJFU6" || "https://images.app.goo.gl/W62y7o7o5YFSNJFU6" ; // SET LOGO FOR IMAGE 
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
global.userImages= process.env.USER_IMAGES || "https://images.app.goo.gl/W62y7o7o5YFSNJFU6" // "image" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_32_11_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NixcbiAgICAgICAgMixcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU0LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgODksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA3MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMixcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTksXG4gICAgICAgIDM4LFxuICAgICAgICA0NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODIsXG4gICAgICAgIDU2LFxuICAgICAgICA0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYwLFxuICAgICAgICA5NixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAzLFxuICAgICAgICAzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDUzLFxuICAgICAgICAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDc2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAwLFxuICAgICAgICA0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODAsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICA5NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDk4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDM4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDYzLFxuICAgICAgICA3MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImpwaWFUK1QwbFlheDE5Y0ttbWY0K3RvbHo0T2JIRjhsUHU0bHN0K0dGUGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjN2YVZXcWVFVEZ1OUdjVjlwSm9Va3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2Q4NDdhNDQtOTU5ZS00YzQ5LTllNjYtYjYwN2NjZWUzYjkyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxLFxuICAgICAgMjA3LFxuICAgICAgOTksXG4gICAgICAxLFxuICAgICAgMjU0LFxuICAgICAgMTA0LFxuICAgICAgMjU0LFxuICAgICAgMjU1LFxuICAgICAgMjQ2LFxuICAgICAgMjA3LFxuICAgICAgMTk1LFxuICAgICAgMTU1LFxuICAgICAgMjQ0LFxuICAgICAgMjI2LFxuICAgICAgMTUyLFxuICAgICAgMTc4LFxuICAgICAgOTYsXG4gICAgICAxNjksXG4gICAgICAxNTgsXG4gICAgICAxMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE1LFxuICAgICAgMjQ0LFxuICAgICAgMTQ2LFxuICAgICAgNyxcbiAgICAgIDk4LFxuICAgICAgMjQzLFxuICAgICAgMjEwLFxuICAgICAgMTQsXG4gICAgICAyNDAsXG4gICAgICAyMzcsXG4gICAgICAyMzQsXG4gICAgICAxNTgsXG4gICAgICAxMTQsXG4gICAgICAxNSxcbiAgICAgIDExOSxcbiAgICAgIDIxNyxcbiAgICAgIDMwLFxuICAgICAgMTc0LFxuICAgICAgMjE1LFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNEQlc2QkFFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3MTgxMDY5ODoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuG0ouG0gMm04bSb4bSA44Wkyp/JquG0oOG0h+OFpOODpFwiLFxuICAgIFwibGlkXCI6IFwiODM3NTE4NjI4ODc3MDoyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKL2xuNzRHRUk3cjFya0dHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNxa0Y4WGY0dzQxSDdZVytzMDFzbFRvY1duUUpkMHI0eHhiVUV5R2I3RDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZHAxNlBUZmFxSTFCUmpPbW1BdU5VN2JlMjBsVFBEV3YzbFpxVmZWZ1FJQko2cU1PSkw2TUF0cEVjSjFmWDgxd1pnSmxOS3oySEpiN0Qvc2RXVG5aQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiLzZmUkxwS2NUZSt2MGFWditJWWhpNkt4TFk3WllNVUZtbm5ReE9MRW5IeElPZ0R6aG5rcXdxZ2ZHU2l1S2JiZHQzdVlsaWhMNVdPNHd1cU5WazlCaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzE4MTA2OTg6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNTczMTM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRE03XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFETTcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyTENSdkpGNTZoejJOZTlNakJZdi8vbE5JS3haeW9obnRLY1lFN2x6OWxZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NDExNTcwMjMsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMyw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ZANTA",
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
