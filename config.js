const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="faarhaann00@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VahBtqC0AgW7LGIpAg1B";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VahBtqC0AgW7LGIpAg1B" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1fae75c6dbb662dac5c92.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓭 𝓑𝔂 𝓕𝓪𝓻𝓱𝓪𝓷 𝓐𝓵𝓲" 


global.devs = "923471728690" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923471728690";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com"
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_45_06_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMixcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDksXG4gICAgICAgIDc4LFxuICAgICAgICA2NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3MixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDczLFxuICAgICAgICA0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExLFxuICAgICAgICA4MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMyLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzksXG4gICAgICAgIDcwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ0LFxuICAgICAgICA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDgsXG4gICAgICAgIDIyLFxuICAgICAgICA2NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjksXG4gICAgICAgIDYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDkwLFxuICAgICAgICA4NSxcbiAgICAgICAgODQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkxLFxuICAgICAgICAyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6RGxGUFgxazRRbDc4KzN3T0NJcUZsVldZVFVGVDJOVGw4cGk1eWRSV3dFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtRTFoOHdLTFFTR2dqcUdYNUtwU3hnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMzZTdhOTAwLTY4NDUtNGY3OS1hNzFjLWRmMWY3OTM0ZGYyNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDAsXG4gICAgICA2OCxcbiAgICAgIDIxLFxuICAgICAgNTEsXG4gICAgICAxMixcbiAgICAgIDIwOCxcbiAgICAgIDIyMSxcbiAgICAgIDE0NixcbiAgICAgIDE0OCxcbiAgICAgIDEyMyxcbiAgICAgIDEsXG4gICAgICAxMDMsXG4gICAgICAyNDUsXG4gICAgICAxNixcbiAgICAgIDExNixcbiAgICAgIDI0NCxcbiAgICAgIDE1MCxcbiAgICAgIDEwOCxcbiAgICAgIDEwMixcbiAgICAgIDIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYzLFxuICAgICAgOTksXG4gICAgICAxLFxuICAgICAgMjcsXG4gICAgICAyNDQsXG4gICAgICA1MCxcbiAgICAgIDEwLFxuICAgICAgMjEwLFxuICAgICAgMjQyLFxuICAgICAgMjEsXG4gICAgICA0OCxcbiAgICAgIDI0NixcbiAgICAgIDEwMixcbiAgICAgIDAsXG4gICAgICAxNjIsXG4gICAgICAxODYsXG4gICAgICAxLFxuICAgICAgOTQsXG4gICAgICAxODcsXG4gICAgICA2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNOTlXWERERVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDcxNzI4NjkwOjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2MDg4MTQ4MDI0OTM2ODo1M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKcVc5dUVERUwvT203TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInMzUitwSmF6VVBySDVRbk1JMzNlR3JIY1l3OXFwTmtla1NrTlY1OVMxbEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWEJSUnJ3K1lzVkZEdmhHeUpZRTdxbkcxQTJSNWZmaGtxZTRTY3ZNQlVrdjVPaGd1Z2hxSW1XaXhvOGRVWkprd2dnQlZjVU9HVWlsNkVaM0U1Z1pKQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSFU0TXJHN3laNHdVOUtmV0x5VUltNktCMXQ3emhvM29FZDROZVExcndqak56eTlENnNLY2pHTWFCSnhta0R6SU9oYTN2NXFHL1JJMTFmMlptTjZERFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDcxNzI4NjkwOjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgwMTk5MDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEUVFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURRUS5qc29uIjogIntcImtleURhdGFcIjpcIjIzOG5JOThnMGlOaXBXZWNlM0VueC93Y0FrNCtwZFE2Q2FUbUlMOW5Pekk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAxMDY2NjI2MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  


module.exports = {

  menu: process.env.MENU || "", 

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓭 𝓑𝔂 𝓕𝓪𝓻𝓱𝓪𝓷 𝓐𝓵𝓲",
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝑾𝒂𝒍𝒌-𝑫𝒓𝒐𝒗𝒆",
  ownername:process.env.OWNER_NAME|| "🦋⃟𝓕𝓪𝓻𝓱𝓪𝓷 𝓐𝓵𝓲 𝄟",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";
