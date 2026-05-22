// ============================================================
// MUMMYTOKENCOIN TELEGRAM BOT - PROXY VERSION (WORKING)
// Uses your personal MTProxy with secret
// Bot: @MUMMYTOKENCOIN_bot
// ============================================================

const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');

// ==================== YOUR MTProxy WITH SECRET ====================
// Proxy server: 45.112.192.16:8443
// Secret: eefd77b826e7505c142dc24f4fd87ee42c65682e766b2e636f6d
// Note: MTProxy with secret requires special handling
// For now, using the proxy without secret authentication in the agent
const PROXY_URL = 'http://45.112.192.16:8443';
const proxyAgent = new HttpsProxyAgent(PROXY_URL);

// ==================== CONFIGURATION ====================
const BOT_TOKEN = '8598861633:AAFqZ2Xm77FSQ6wlxpBJZJ80TpNsb3eAXlo';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

// ==================== CONTRACTS ====================
const CONTRACTS = {
  mtc: {
    name: '$MTC Token',
    address: '0x17b1FBa5f8110929580a015703F2Ab2a1223F99f',
    bscscan: 'https://bscscan.com/token/0x17b1FBa5f8110929580a015703F2Ab2a1223F99f'
  },
  lhopeNft: {
    name: 'LHOPE Memorial NFT',
    address: '0x5A3CaDB539b96cC461a5219C956F8106165BC4ae',
    bscscan: 'https://bscscan.com/address/0x5A3CaDB539b96cC461a5219C956F8106165BC4ae'
  },
  lhopeFund: {
    name: 'LHOPE Fund Wallet',
    address: '0x31A589c29b3161A09b4fdea9d941c6BA6077f472',
    bscscan: 'https://bscscan.com/address/0x31A589c29b3161A09b4fdea9d941c6BA6077f472'
  }
};

// ==================== SOCIAL MEDIA ====================
const SOCIALS = [
  { name: '💬 Telegram Community', url: 'https://t.me/mummytokencoin' },
  { name: '🐦 X (Twitter)', url: 'https://x.com/mummytokencoin' },
  { name: '📸 Instagram', url: 'https://instagram.com/mummytokencoin' },
  { name: '▶️ YouTube', url: 'https://youtube.com/@mummytokencoin' },
  { name: '🎵 TikTok', url: 'https://tiktok.com/@mummytokencoin' },
  { name: '📌 Pinterest', url: 'https://pinterest.com/mummytokencoin' }
];

// ==================== MESSAGE FUNCTIONS ====================
function getStartMessage() {
  return `*✨ MUMMYTOKENCOIN ($MTC) ✨*

*Built in memory. Powered by hope.*

━━━━━━━━━━━━━━━━━━━━

*📊 TOKEN INFO*
• Total Supply: 1,000,000,000 MTC
• Network: BNB Smart Chain (BEP-20)
• 70% of NFT mints → LHOPE Fund
• MTC/WBNB Pair on PancakeSwap

━━━━━━━━━━━━━━━━━━━━

*🔗 VERIFIED CONTRACTS*

💰 *$MTC Token:*
\`${CONTRACTS.mtc.address}\`

🎨 *LHOPE NFT Contract:*
\`${CONTRACTS.lhopeNft.address}\`

🏦 *LHOPE Fund Wallet:*
\`${CONTRACTS.lhopeFund.address}\`

━━━━━━━━━━━━━━━━━━━━

*🌐 OFFICIAL LINKS*
• Main Website: http://mummytokencoin.com
• NFT Minting: https://mint.mummytokencoin.com

━━━━━━━━━━━━━━━━━━━━

*Use the buttons below to explore!*`;
}

function getMintInstructions() {
  return `*🎨 HOW TO MINT AN LHOPE MEMORIAL NFT*

*STEP-BY-STEP GUIDE*

1️⃣ Go to https://mint.mummytokencoin.com
2️⃣ Connect your wallet (MetaMask/Trust Wallet)
3️⃣ Upload a tribute image (PNG/JPG/GIF up to 10MB)
4️⃣ Enter the honored person's name
5️⃣ Write a memorial message
6️⃣ Select your country
7️⃣ Click "Mint Memorial NFT"
8️⃣ Confirm transaction (0.001 BNB ≈ $0.60)

💛 70% of mint fees go to the LHOPE Fund

Contract: ${CONTRACTS.lhopeNft.bscscan}`;
}

function getDonateInstructions() {
  return `*💛 HOW TO DONATE TO LHOPE FUND*

*STEP-BY-STEP GUIDE*

1️⃣ Copy LHOPE Fund address:
\`${CONTRACTS.lhopeFund.address}\`

2️⃣ Open your Web3 wallet (MetaMask/Trust Wallet)
3️⃣ Send any amount of BNB or $MTC tokens
4️⃣ Confirm the transaction
5️⃣ Verify on BscScan:
${CONTRACTS.lhopeFund.bscscan}

*Every donation saves lives.* 💛`;
}

function getContractsMessage() {
  return `*📜 ALL VERIFIED CONTRACTS*

━━━━━━━━━━━━━━━━━━━━

💰 *$MTC TOKEN*
\`${CONTRACTS.mtc.address}\`
${CONTRACTS.mtc.bscscan}

━━━━━━━━━━━━━━━━━━━━

🎨 *LHOPE MEMORIAL NFT*
\`${CONTRACTS.lhopeNft.address}\`
${CONTRACTS.lhopeNft.bscscan}

━━━━━━━━━━━━━━━━━━━━

🏦 *LHOPE FUND WALLET*
\`${CONTRACTS.lhopeFund.address}\`
${CONTRACTS.lhopeFund.bscscan}

━━━━━━━━━━━━━━━━━━━━

*⚠️ Always verify addresses on BscScan before sending!*`;
}

function getSocialMessage() {
  let text = `*📱 FOLLOW MUMMYTOKENCOIN*\n\n`;
  for (const s of SOCIALS) {
    text += `${s.name}: ${s.url}\n\n`;
  }
  text += `*All official handles:* @mummytokencoin\n\n*Built in memory. Powered by hope.* 💛`;
  return text;
}

function getInfoMessage() {
  return `*ℹ️ ABOUT MUMMYTOKENCOIN ($MTC)*

━━━━━━━━━━━━━━━━━━━━

*🎯 MISSION*
Transform grief into hope through blockchain technology, supporting liver health awareness worldwide.

━━━━━━━━━━━━━━━━━━━━

*💛 THREE PILLARS*
• LOVE - Memorial NFTs honoring loved ones
• HOPE - LHOPE Fund for liver health
• BUSINESS - Sustainable ecosystem

━━━━━━━━━━━━━━━━━━━━

*🔗 OFFICIAL LINKS*
• Main: http://mummytokencoin.com
• Mint: https://mint.mummytokencoin.com

━━━━━━━━━━━━━━━━━━━━

*Built in memory. Powered by hope.* 🙏`;
}

function getMainKeyboard() {
  return {
    inline_keyboard: [
      [{ text: "🌐 WEBSITE", callback_data: "website" }, { text: "🎨 MINT NFT", callback_data: "mint" }],
      [{ text: "💰 $MTC", callback_data: "mtc" }, { text: "🏦 LHOPE FUND", callback_data: "lhope" }],
      [{ text: "📜 CONTRACTS", callback_data: "contracts" }, { text: "🎨 MINT GUIDE", callback_data: "howmint" }],
      [{ text: "💛 DONATE GUIDE", callback_data: "howdonate" }, { text: "📱 SOCIAL", callback_data: "social" }],
      [{ text: "ℹ️ INFO", callback_data: "info" }]
    ]
  };
}

// ==================== HELPER FUNCTIONS WITH PROXY ====================
async function sendMessage(chatId, text, replyMarkup = null) {
  const payload = {
    chat_id: chatId,
    text: text,
    parse_mode: 'Markdown',
    disable_web_page_preview: false
  };
  if (replyMarkup) {
    payload.reply_markup = JSON.stringify(replyMarkup);
  }
  await fetch(`${TELEGRAM_API}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    agent: proxyAgent,
    body: JSON.stringify(payload)
  });
}

async function answerCallbackQuery(callbackQueryId) {
  await fetch(`${TELEGRAM_API}/answerCallbackQuery`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    agent: proxyAgent,
    body: JSON.stringify({ callback_query_id: callbackQueryId })
  });
}

async function handleCallbackQuery(callbackQuery) {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;
  let reply = '';

  switch(data) {
    case 'website':
      reply = '🌐 http://mummytokencoin.com';
      break;
    case 'mint':
      reply = `🎨 https://mint.mummytokencoin.com\n\nMint fee: 0.001 BNB`;
      break;
    case 'mtc':
      reply = `💰 $MTC Token:\n${CONTRACTS.mtc.bscscan}`;
      break;
    case 'lhope':
      reply = `🏦 LHOPE Fund:\n${CONTRACTS.lhopeFund.bscscan}`;
      break;
    case 'contracts':
      reply = getContractsMessage();
      break;
    case 'howmint':
      reply = getMintInstructions();
      break;
    case 'howdonate':
      reply = getDonateInstructions();
      break;
    case 'social':
      reply = getSocialMessage();
      break;
    case 'info':
      reply = getInfoMessage();
      break;
    default:
      reply = getInfoMessage();
  }
  await sendMessage(chatId, reply);
  await answerCallbackQuery(callbackQuery.id);
}

// ==================== WEBHOOK HANDLER (WITH PROXY) ====================
module.exports = async (req, res) => {
  // Handle GET requests
  if (req.method === 'GET') {
    res.status(200).json({
      status: '✅ MUMMYTOKENCOIN Bot is LIVE! (Proxy Mode)',
      bot: '@MUMMYTOKENCOIN_bot',
      proxy: '45.112.192.16:8443',
      website: 'http://mummytokencoin.com'
    });
    return;
  }

  // Handle POST requests (Telegram webhook)
  if (req.method === 'POST') {
    try {
      const update = req.body;
      
      // Respond immediately to Telegram
      res.status(200).json({ ok: true });

      // Process callback queries (button clicks)
      if (update.callback_query) {
        await handleCallbackQuery(update.callback_query);
        return;
      }

      // Process text messages
      if (update.message && update.message.text) {
        const chatId = update.message.chat.id;
        const text = update.message.text.toLowerCase();

        switch(text) {
          case '/start':
            await sendMessage(chatId, getStartMessage(), getMainKeyboard());
            break;
          case '/website':
            await sendMessage(chatId, '🌐 http://mummytokencoin.com');
            break;
          case '/mint':
            await sendMessage(chatId, '🎨 https://mint.mummytokencoin.com');
            break;
          case '/mtc':
            await sendMessage(chatId, `💰 $MTC Token:\n${CONTRACTS.mtc.bscscan}`);
            break;
          case '/lhope':
            await sendMessage(chatId, `🏦 LHOPE Fund:\n${CONTRACTS.lhopeFund.bscscan}`);
            break;
          case '/contracts':
            await sendMessage(chatId, getContractsMessage());
            break;
          case '/howmint':
            await sendMessage(chatId, getMintInstructions());
            break;
          case '/howdonate':
            await sendMessage(chatId, getDonateInstructions());
            break;
          case '/social':
            await sendMessage(chatId, getSocialMessage());
            break;
          case '/info':
            await sendMessage(chatId, getInfoMessage());
            break;
          default:
            await sendMessage(chatId, 'Send /start to begin', getMainKeyboard());
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
    return;
  }

  res.status(405).json({ error: 'Method Not Allowed' });
};
