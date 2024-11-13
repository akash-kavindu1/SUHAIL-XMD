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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94774155386";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_27_11_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA1NixcbiAgICAgICAgNTYsXG4gICAgICAgIDEwLFxuICAgICAgICA0OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDc4LFxuICAgICAgICA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTksXG4gICAgICAgIDg4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDY0LFxuICAgICAgICA4NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDkwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA4LFxuICAgICAgICA4OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAxOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDgwLFxuICAgICAgICA1MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTksXG4gICAgICAgIDM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDczLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA5NyxcbiAgICAgICAgODQsXG4gICAgICAgIDU2LFxuICAgICAgICA1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDU3LFxuICAgICAgICAyMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMixcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTczLFxuICAgICAgICAxOTAsXG4gICAgICAgIDgxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAyNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUjVZWCtwL1p2dUJrOG9NejhBUUQyRXl3dGt1eFZMODZrVXJhWElQN0pyST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWVVIZk9FR0JUcS1VZXBZZlZ2S2JrUVwiLFxuICBcInBob25lSWRcIjogXCJmMDM4MWE0YS1mNWM5LTRhZWYtODNjMS1jZTVlYTVjZTk2MDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDYsXG4gICAgICAxMzYsXG4gICAgICAxNDksXG4gICAgICAxMDIsXG4gICAgICAxNTIsXG4gICAgICAzMixcbiAgICAgIDIxMixcbiAgICAgIDI1NSxcbiAgICAgIDIzMixcbiAgICAgIDc2LFxuICAgICAgOTEsXG4gICAgICA2NCxcbiAgICAgIDYyLFxuICAgICAgODQsXG4gICAgICA2MyxcbiAgICAgIDc4LFxuICAgICAgMjE2LFxuICAgICAgNjEsXG4gICAgICA1NCxcbiAgICAgIDE4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzQsXG4gICAgICA5MCxcbiAgICAgIDE0NCxcbiAgICAgIDE5LFxuICAgICAgMTI3LFxuICAgICAgMTYsXG4gICAgICAxMyxcbiAgICAgIDQ1LFxuICAgICAgNDUsXG4gICAgICAyMDQsXG4gICAgICAyNDIsXG4gICAgICA1NyxcbiAgICAgIDI0LFxuICAgICAgMyxcbiAgICAgIDE1MyxcbiAgICAgIDIzNCxcbiAgICAgIDQ0LFxuICAgICAgMjA2LFxuICAgICAgNDMsXG4gICAgICAxNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMURSNEVBRU1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzc0MTU1Mzg2OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzkwNDEzNzg5NTEyNDc6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGZhMDZnRkVOVHUwcmtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJuWWwycDQ5dFJ3eE1OZTBaMU1JUld3UE1vN0JkQUY1V1VwaDVEYjE1RjNZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIktjR3Q2UTRSUDhQbjV3V3hqTGVLTE9SWlloOGR4cU1xbHJUTEVSSjA3OWh2M1Ezdmg0YWl4d3ZsUFU1ZzNxL0w2eUpYUmVsM3lMODdCdXJQNGk4NUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVTbFRwb09Id2FQYkd6Qk1qNjNmYlNsYlV2ajVtTFZ6MkJQT29hUElKVjR2VUZ1WkJWNUhJWVFEdmpXYnBUNjVyc3ZwbS9oWEhBTGRZdHd2YlExeURRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzc0MTU1Mzg2OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTUwODA1NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZUQVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRlRBLmpzb24iOiAie1wia2V5RGF0YVwiOlwic0paVTZYZURUVE8yaEh3QVp0M1hHU3l0MEprdFQ4Wm1kMVlhNHgzcHB0ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDI3NDM0ODcwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMxNDYwNzQxOTg1XCJ9Igp9"  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
