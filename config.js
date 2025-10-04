const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUo5MnRsSnhFUUVnNWNUbDFCcHAwYzdZR2lCQkZMMklMSVJZQ0hKVUFVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3Mwd0xGWUt0R1RkTDMvWE5ESEV5UlJRd1dKZER4RnlJMXg1b3pPZDJHdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFQVE1aytwQ3BvNjIzbStQMFIzMy8zRGpUSXYyM0J6blBjN25DZGpidjJJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBK0ZYemc5ZzBscDZ1ejhKSEhoSTZDL1BQRUF0RkNHMTBCUFJEZU0wMTNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldGMWxSajJDeUs5WmU1a0hmek4xVTBiNW9XdVF2VEF0a2FudDVsT0dsRVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InF2aHVMNlg3ZGlBSlIvR2dMcGxNRkZndlNkVW4zdnRsLzE2bjFGdDVzalk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMElITWk4YStBcGNvWXpYUWFFdnpMdm44ejA0M3hUSFpRWElrTlJVZ1Uwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVdLa1V0aG1LWXF2amgwM2xIRjlTYnIrZE1aVm5IT1d6YjhwNTZEcFdSbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRBMkpxdGxRTENINDhSamFDd1FQeTlUYW05WWhOWUxNMDVWcE15b0J2NU5qOFBibTlXM2VscGpodXd1M2NQeTV2SFVVWG9TZzlqWHlvZFhSQzVDWENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjksImFkdlNlY3JldEtleSI6IjVNdWtUbytxdWNQUUtKeU0xOWd1Mi96N1hoc0E1U2lIWHlvajVMK09UQVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzM3NTA1MDg3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDOUQxRTU5OTRCQTFEODg5ODQ4N0Y0MEM2QzMwMzk2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk2MTY4MjJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMzNzUwNTA4N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzFBM0REQTcyMzJCNzgyQkJDRDg3MUVFMkJERkM4RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU5NjE2ODIzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJLQ0M1UjQ1TSIsIm1lIjp7ImlkIjoiOTIzMzM3NTA1MDg3OjZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMzM5NDMwOTM3ODQ4MTM6NkBsaWQiLCJuYW1lIjoi4p6z4bS54bS/4a2EQmFsb2NoIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLT214c3NFRUxHK2hzY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5Y1AreWx5WHZldTd0cjlNOWtGOGsxVWZ6bGlwMGpady9LZDBldVBZYkVnPSIsImFjY291bnRTaWduYXR1cmUiOiJkWnlmLzNMN0MzbVVFbWlBWUdaU0YxL3ZKQWZZY0x4blU1dTlDdHZQY3dMSXBHZ2FpNis2QUVFQkFnOEFQNDR2cVhCS1hMT2p3YndCalppeGQ3RkpCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiK3ptU3BkYytacUFIMmdHQndOaWs2QjZQL0R2TWthZVhURTEyRkl1YXNGc0M2UVhtQzdCUmJ0cXFuV0Z3OTV5dmxKd2xSdWhJRTNPeWxxVXhiQUd5Q3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzMzc1MDUwODc6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjbkQvc3BjbDczcnU3YS9UUFpCZkpOVkg4NVlxZEkyY1B5bmRIcmoyR3hJIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTk2MTY4MTksImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSGtaIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/lcpy9f.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Arslan_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/lcpy9f.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
