// ============================================================
// MUMMYTOKENCOIN TELEGRAM BOT - OFFICIAL VERSION
// Bot: @MUMMYTOKENCOIN_bot
// Website: http://mummytokencoin.com
// ALL INFORMATION IS FACTUAL AND VERIFIED
// ============================================================

const fetch = require('node-fetch');

// ==================== CONFIGURATION ====================
const BOT_TOKEN = '8598861633:AAFqZ2Xm77FSQ6wlxpBJZJ80TpNsb3eAXlo';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

// ==================== FACTUAL TOKEN INFO ====================
const TOKEN_SUPPLY = '1,000,000,000 MTC';
const NETWORK = 'BNB Smart Chain (BEP-20)';
const TAX = '0% Buy/Sell';
const PANCAKESWAP = 'MTC/WBNB Pair available';
const COINSNIPER = 'Free listing on CoinSniper';

// ==================== VERIFIED CONTRACTS ====================
const MTC_ADDRESS = '0x17b1FBa5f8110929580a015703F2Ab2a1223F99f';
const MTC_BSCSCAN = 'https://bscscan.com/token/0x17b1FBa5f8110929580a015703F2Ab2a1223F99f';

const NFT_ADDRESS = '0x5A3CaDB539b96cC461a5219C956F8106165BC4ae';
const NFT_BSCSCAN = 'https://bscscan.com/address/0x5A3CaDB539b96cC461a5219C956F8106165BC4ae';

const LHOPE_ADDRESS = '0x31A589c29b3161A09b4fdea9d941c6BA6077f472';
const LHOPE_BSCSCAN = 'https://bscscan.com/address/0x31A589c29b3161A09b4fdea9d941c6BA6077f472';

// ==================== SOCIAL MEDIA (FACTUAL) ====================
const SOCIALS = [
  { name: '💬 Telegram Community', url: 'https://t.me/mummytokencoin' },
  { name: '🐦 X (Twitter)', url: 'https://x.com/mummytokencoin' },
  { name: '📸 Instagram', url: 'https://instagram.com/mummytokencoin' },
  { name: '▶️ YouTube', url: 'https://youtube.com/@mummytokencoin' },
  { name: '🎵 TikTok', url: 'https://tiktok.com/@mummytokencoin' },
  { name: '📌 Pinterest', url: 'https://pinterest.com/mummytokencoin' }
];

// ==================== FACTUAL WEBSITES ====================
const MAIN_WEBSITE = 'http://mummytokencoin.com';
const MINT_WEBSITE = 'https://mint.mummytokencoin.com';

// ==================== MESSAGES ====================
function getStartMessage() {
  return `*✨ MUMMYTOKENCOIN ($MTC) ✨*

*Built in memory. Powered by hope.*

━━━━━━━━━━━━━━━━━━━━

*📊 TOKEN INFORMATION*

• Total Supply: ${TOKEN_SUPPLY}
• Network: ${NETWORK}
• Tax: ${TAX}
• ${PANCAKESWAP}
• ${COINSNIPER}

━━━━━━━━━━━━━━━━━━━━

*🔗 VERIFIED CONTRACTS*

💰 *$MTC Token*
\`${MTC_ADDRESS}\`
${MTC_BSCSCAN}

🎨 *LHOPE Memorial NFT*
\`${NFT_ADDRESS}\`
${NFT_BSCSCAN}

🏦 *LHOPE Fund Wallet*
\`${LHOPE_ADDRESS}\`
${LHOPE_BSCSCAN}

━━━━━━━━━━━━━━━━━━━━

*🌐 OFFICIAL WEBSITES*

• Main: ${MAIN_WEBSITE}
• NFT Minting: ${MINT_WEBSITE}

━━━━━━━━━━━━━━━━━━━━

*Use the buttons below to explore* 👇`;
}

function getMintGuide() {
  return `*🎨 HOW TO MINT AN LHOPE MEMORIAL NFT*

━━━━━━━━━━━━━━━━━━━━

*Step 1:* Go to ${MINT_WEBSITE}

*Step 2:* Connect your wallet (MetaMask or Trust Wallet)

*Step 3:* Upload a tribute image (PNG, JPG, or GIF, max 10MB)

*Step 4:* Enter the honored person's name

*Step 5:* Write a memorial message

*Step 6:* Select the country from dropdown

*Step 7:* Click "Mint Memorial NFT"

*Step 8:* Confirm the transaction

━━━━━━━━━━━━━━━━━━━━

*💰 MINTING FEE:* 0.001 BNB (approximately $0.60 USD)

*💛 CHARITY:* 70% of every mint fee goes to the LHOPE Fund for liver health research

━━━━━━━━━━━━━━━━━━━━

*NFT Contract:* ${NFT_BSCSCAN}`;
}

function getDonateGuide() {
  return `*💛 HOW TO DONATE TO LHOPE FUND*

━━━━━━━━━━━━━━━━━━━━

*Step 1:* Copy the LHOPE Fund wallet address:

\`${LHOPE_ADDRESS}\`

*Step 2:* Open your Web3 wallet (MetaMask, Trust Wallet, etc.)

*Step 3:* Make sure you are on BNB Smart Chain (BEP-20)

*Step 4:* Send any amount of BNB or $MTC tokens to the address above

*Step 5:* Confirm the transaction

*Step 6:* Verify your donation on BscScan:

${LHOPE_BSCSCAN}

━━━━━━━━━━━━━━━━━━━━

*💛 YOUR DONATION HELPS:*
• Liver Disease Research
• Patient Support Programs
• Medical Equipment
• Public Health Awareness

*Every contribution, no matter how small, saves lives.* 🙏`;
}

function getContractsMessage() {
  return `*📜 VERIFIED CONTRACTS*

━━━━━━━━━━━━━━━━━━━━

💰 *$MTC TOKEN*
Address: \`${MTC_ADDRESS}\`
BscScan: ${MTC_BSCSCAN}

━━━━━━━━━━━━━━━━━━━━

🎨 *LHOPE MEMORIAL NFT*
Address: \`${NFT_ADDRESS}\`
BscScan: ${NFT_BSCSCAN}
Mint Fee: 0.001 BNB

━━━━━━━━━━━━━━━━━━━━

🏦 *LHOPE FUND WALLET*
Address: \`${LHOPE_ADDRESS}\`
BscScan: ${LHOPE_BSCSCAN}

━━━━━━━━━━━━━━━━━━━━

⚠️ *Always verify contract addresses on BscScan before sending any funds.*`;
}

function getSocialMessage() {
  let text = `*📱 FOLLOW MUMMYTOKENCOIN*\n\n━━━━━━━━━━━━━━━━━━━━\n\n`;
  for (const s of SOCIALS) {
    text += `${s.name}: ${s.url}\n\n`;
  }
  text += `━━━━━━━━━━━━━━━━━━━━\n\n*All official handles:* @mummytokencoin\n\n*Built in memory. Powered by hope.* 💛`;
  return text;
}

function getInfoMessage() {
  return `*ℹ️ ABOUT MUMMYTOKENCOIN ($MTC)*

━━━━━━━━━━━━━━━━━━━━

*🎯 MISSION*

Transform grief into hope through blockchain technology, supporting liver health awareness worldwide.

━━━━━━━━━━━━━━━━━━━━

*💛 THREE PILLARS*

• *LOVE* - Memorial NFTs honoring loved ones
• *HOPE* - LHOPE Fund for liver health resources
• *BUSINESS* - Sustainable ecosystem with 0% tax token

━━━━━━━━━━━━━━━━━━━━

*🔗 OFFICIAL LINKS*

• Main Website: ${MAIN_WEBSITE}
• NFT Minting: ${MINT_WEBSITE}
• Telegram: https://t.me/mummytokencoin
• X (Twitter): https://x.com/mummytokencoin

━━━━━━━━━━━━━━━━━━━━

*Built in memory. Powered by hope.* 🙏

*Dedicated to liver health worldwide.*`;
}

// ==================== KEYBOARD BUTTONS ====================
function getMainKeyboard() {
  return {
    inline_keyboard: [
      [{ text: "🌐 WEBSITE", callback_data: "website" }, { text: "🎨 MINT NFT", callback_data: "mint" }],
      [{ text: "💰 $MTC TOKEN", callback_data: "mtc" }, { text: "🏦 LHOPE FUND", callback_data: "lhope" }],
      [{ text: "📜 CONTRACTS", callback_data: "contracts" }, { text: "🎨 HOW TO MINT", callback_data: "howmint" }],
      [{ text: "💛 HOW TO DONATE", callback_data: "howdonate" }, { text: "📱 SOCIAL", callback_data: "social" }],
      [{ text: "ℹ️ INFO", callback_data: "info" }]
    ]
  };
}

// ==================== HELPER FUNCTIONS ====================
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
    body: JSON.stringify(payload)
  });
}

async function answerCallbackQuery(callbackQueryId) {
  await fetch(`${TELEGRAM_API}/answerCallbackQuery`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ callback_query_id: callbackQueryId })
  });
}

async function handleCallbackQuery(callbackQuery) {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;
  let reply = '';

  switch(data) {
    case 'website':
      reply = `🌐 ${MAIN_WEBSITE}`;
      break;
    case 'mint':
      reply = `🎨 ${MINT_WEBSITE}\n\nMinting fee: 0.001 BNB (~$0.60)\n\nNFT Contract: ${NFT_BSCSCAN}`;
      break;
    case 'mtc':
      reply = `💰 $MTC TOKEN\n\nAddress: \`${MTC_ADDRESS}\`\n\nBscScan: ${MTC_BSCSCAN}`;
      break;
    case 'lhope':
      reply = `🏦 LHOPE FUND WALLET\n\nAddress: \`${LHOPE_ADDRESS}\`\n\nBscScan: ${LHOPE_BSCSCAN}\n\n70% of NFT mint fees go to this wallet.`;
      break;
    case 'contracts':
      reply = getContractsMessage();
      break;
    case 'howmint':
      reply = getMintGuide();
      break;
    case 'howdonate':
      reply = getDonateGuide();
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

// ==================== VERCEL WEBHOOK HANDLER ====================
module.exports = async (req, res) => {
  // Handle GET request (health check)
  if (req.method === 'GET') {
    res.status(200).json({
      status: '✅ MUMMYTOKENCOIN Bot is LIVE!',
      bot: '@MUMMYTOKENCOIN_bot',
      website: MAIN_WEBSITE,
      mint: MINT_WEBSITE,
      contracts: {
        mtc: MTC_ADDRESS,
        nft: NFT_ADDRESS,
        lhope: LHOPE_ADDRESS
      }
    });
    return;
  }

  // Handle POST request (Telegram webhook)
  if (req.method === 'POST') {
    try {
      const update = req.body;
      
      // Respond immediately to Telegram (prevents timeout)
      res.status(200).json({ ok: true });

      // Handle button clicks (callback queries)
      if (update.callback_query) {
        await handleCallbackQuery(update.callback_query);
        return;
      }

      // Handle text messages
      if (update.message && update.message.text) {
        const chatId = update.message.chat.id;
        const text = update.message.text.toLowerCase();

        switch(text) {
          case '/start':
            await sendMessage(chatId, getStartMessage(), getMainKeyboard());
            break;
          case '/website':
            await sendMessage(chatId, `🌐 ${MAIN_WEBSITE}`);
            break;
          case '/mint':
            await sendMessage(chatId, `🎨 ${MINT_WEBSITE}\n\nMint fee: 0.001 BNB (~$0.60)`);
            break;
          case '/mtc':
            await sendMessage(chatId, `💰 $MTC Token\n\nAddress: \`${MTC_ADDRESS}\`\n\nBscScan: ${MTC_BSCSCAN}`);
            break;
          case '/lhope':
            await sendMessage(chatId, `🏦 LHOPE Fund Wallet\n\nAddress: \`${LHOPE_ADDRESS}\`\n\nBscScan: ${LHOPE_BSCSCAN}`);
            break;
          case '/contracts':
            await sendMessage(chatId, getContractsMessage());
            break;
          case '/howmint':
            await sendMessage(chatId, getMintGuide());
            break;
          case '/howdonate':
            await sendMessage(chatId, getDonateGuide());
            break;
          case '/social':
            await sendMessage(chatId, getSocialMessage());
            break;
          case '/info':
            await sendMessage(chatId, getInfoMessage());
            break;
          default:
            await sendMessage(chatId, 
              `*Welcome to MUMMYTOKENCOIN!* 🐪\n\nSend /start to see all features.\n\nBuilt in memory. Powered by hope. 💛`,
              getMainKeyboard());
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
    return;
  }

  res.status(405).json({ error: 'Method Not Allowed' });
};
