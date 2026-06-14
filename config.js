const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA5VU246iShT9lU69ao6goELSyUFARAG5SIuezEMJBRZyEwoFJz7Nl8y3zY+cYHdPT04ykz48FZtir7X3Wnt/BVmOK7RCLeC/gqLEF0hQdyRtgQAPZnUYohL0QQAJBDzQzZ2W2OYW76fryGDcyyYPY0++qBO1N+vZV71MemvU9K6n/Bnc+6CoDwn2/5AQa2LvWutbL1q5GYuanldP26K3mxxwthCG8XifTeztkKgu8wzuXUaIS5xFcnFEKSphskKtCXH5OfrO4lYOgkrEI8q8Sda5icpozh6PEqWpXtsUnLWIB7vQHm/lz9Efm2V9zq1Tq8VUc9OdCbveukkGaeVMafHRNVahuTrJdSoIr/QrHGUoUAOUEUzaT/e9XR6ohXisg9vhbJF4iOlElHrrhf2iJHm2zirK3G5iPSmU0+eIz7XGVNNEm8vDazOA15auaB9pe38qRWv99gKvOSsarrht1V+Jm+W7V07/p+9b1Z+PHTPfpBq38YgUFOtaoRNnzQ7RVco4LgrbelrZxlz9HP3ZGR7HHrV0wp05pKfK/LjgIk+WaGuVZjIpJpd94u+Whpi6H/Qhqcs/sZQlKXHt2U4NrsN0kCrObGtYFjV28tgO4Gmnq5tpIEmMNz3ZQYUPngHNIzcqzHpK6GDryPHlTIdeMD2hXnoosrNi53H0/KjohFo1ADx974MSRbgiJSQ4zx4xmuoDGFwc5JeIPNoL1Ni3rJdt3msKzqDnmtazpXwuNURd+XiwTSMzKdO5OjZV9xn0QVHmPqoqFCxwRfKy1VFVwQhVgP/nSx9kqCGvwnVwU3rUByEuK+JmdZHkMHiX9edX6Pt5nRGnzXyxO6AS8NRHGBGCs6jqOllnsPSP+ILEIyQV4EOYVOhnjahEAeBJWaOfcyvmQdd6Q2QXzMQzQB+kD0lwAHjA0eMhR40ZajKm+BH3d/XXtUsLi+KvDBHQB8nj2oRihhwzpjiWYximu9jF+yCDXS7w49v3J+dJfdKe5CfjafP049v3ToE39h1YgAjESQV4IK4vGoMEUVbhtuZkRRHkSBAjAXxU+26cV2FWOlUpQ2+89067g5biEFO2ymbW3s8p49TeQlvhmIVGvWwewvw3CeDBMpb9GRQC2jkP2DncOPsmp9dLTkwuSjWwnVkCLWpF3MpyRqQ5bqI0gaQxzmqh6+4LVIXVxBpH/m2XsMtRvZxm5mk9s547tABdsI9+BWMHUXFWLgopbP0wT5VzUVsrPR5OhEUqePZVOxJGP6mDZpzSliRl/nQk3tz0iOZKoA0DtKS9gBTQ3x3bW70vPFkYbeLrq6UfI5W8rTL8MFunY/caYvTYDG+K/E6wV76d7ah7/5df31bM72bfiQ1tRpJe+sIqSsvmGUNkZ72nFG9lSHu9GlH2Bc1abu7S4H7/0gdFAkmYlyngAcyCMn+Al3nd2VjNwvwPYKJwUoUo0rqCE1gR4WM0NjhFFYFpAXh6MqUZlmZHwz5IW6EoHALJ+0gBoXtmzgzc/wUKFVoXbwcAAA==",  // Your bot's session ID (keep it secure)
    PREFIX: getConfig("PREFIX") || ".",  // Command prefix (e.g., "., / ! * - +")
    CHATBOT: getConfig("CHATBOT") || "on", // on/off chat bot 
    BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "KHAN-MD",  // Bot's display name
    MODE: getConfig("MODE") || process.env.MODE || "public",        // Bot mode: public/private/group/inbox
    REPO: process.env.REPO || "https://github.com/JawadTechXD/KHAN-MD",  // Bot's GitHub repo
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",  // Bot's BAILEYS

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923427582273",  // Owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "Jᴀᴡᴀᴅ TᴇᴄʜX",           // Owner's name
    DEV: process.env.DEV || "923427582273",                     // Developer's contact number
    DEVELOPER_NUMBER: '923427582273@s.whatsapp.net',            // Developer's WhatsApp ID

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "false",              // Enable/disable auto-reply
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",// Reply to status updates?
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*KHAN MD VIEWED YOUR STATUS 🤖*",  // Status reply message
    READ_MESSAGE: process.env.READ_MESSAGE || "false",          // Mark messages as read automatically?
    REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "false",              // Auto-react to messages?
    OWNER_REACT: process.env.OWNER_REACT || "false",              // Auto-react to messages?
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",          // Use custom emoji reactions?
    CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",  // set custom reacts
    STICKER_NAME: process.env.STICKER_NAME || "ᴋʜᴀɴ-ᴍᴅ",     // Sticker pack name
    AUTO_STICKER: process.env.AUTO_STICKER || "false",          // Auto-send stickers?
    // ===== MEDIA & AUTOMATION =====
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",      // Auto-record voice notes?
    AUTO_TYPING: process.env.AUTO_TYPING || "false",            // Show typing indicator?
    MENTION_REPLY: process.env.MENTION_REPLY || "false",   // reply on mentioned message 
    MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/7zfdcq.jpg",  // Bot's "alive" menu mention image

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // true antidelete to recover deleted messages 
    ANTI_CALL: process.env.ANTI_CALL || "false", // enble to reject calls automatically 
    ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",    // Block bad words?
    ANTI_LINK: process.env.ANTI_LINK || "true",    // Block links in groups
    ANTI_VV: process.env.ANTI_VV || "true",   // Block view-once messages
    DELETE_LINKS: process.env.DELETE_LINKS || "false",          // Auto-delete links?
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", // inbox deleted messages (or 'same' to resend)
    ANTI_BOT: process.env.ANTI_BOT || "true",
    PM_BLOCKER: process.env.PM_BLOCKER || "true",

    // ===== BOT BEHAVIOR & APPEARANCE =====
    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX*",  // Bot description
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",              // Allow public commands?
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",        // Show bot as always online?
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // React to status updates?
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true", // VIEW to status updates?
    AUTO_BIO: process.env.AUTO_BIO || "false", // ture to get auto bio 
    WELCOME: process.env.WELCOME || "false", // true to get welcome in groups 
    GOODBYE: process.env.GOODBYE || "false", // true to get goodbye in groups 
    ADMIN_ACTION: process.env.ADMIN_ACTION || "false", // true if want see admin activity 
};
        
