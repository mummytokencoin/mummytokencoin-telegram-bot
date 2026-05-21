// ============================================================
// MUMMYTOKENCOIN TELEGRAM BOT - WORKING VERSION
// Bot Username: @MUMMYTOKENCOIN_bot
// ============================================================

const BOT_TOKEN = '8598861633:AAFqZ2Xm77FSQ6wlxpBJZJ80TpNsb3eAXlo';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

// Social Media Links
const SOCIALS = [
  { name: '💬 Telegram', url: 'https://t.me/mummytokencoin' },
  { name: '🐦 X (Twitter)', url: 'https://x.com/mummytokencoin' },
  { name: '📸 Instagram', url: 'https://instagram.com/mummytokencoin' },
  { name: '▶️ YouTube', url: 'https://youtube.com/@mummytokencoin' },
  { name: '🎵 TikTok', url: 'https://tiktok.com/@mummytokencoin' },
  { name: '📌 Pinterest', url: 'https://pinterest.com/mummytokencoin' }
];

// Contracts
const CONTRACTS = {
  mtc: {
    address: '0x17b1FBa5f8110929580a015703F2Ab2a1223F99f',
    bscscan: 'https://bscscan.com/token/0x17b1FBa5f8110929580a015703F2Ab2a1223F99f'
  },
  lhopeNft: {
    address: '0x5A3CaDB539b96cC461a5219C956F8106165BC4ae',
    bscscan: 'https://bscscan.com/address/0x5A3CaDB539b96cC461a5219C956F8106165BC4ae'
  },
  lhopeFund: {
    address: '0x31A589c29b3161A09b4fdea9d941c6BA6077f472',
    bscscan: 'https://bscscan.com/address/0x31A589c29b3161A09b4fdea9d941c6BA6077f472'
  }
};

function getSocialText() {
  let text = '*📱 FOLLOW US ON SOCIAL MEDIA*\n\n';
  for (const s of SOCIALS) {
    text += `${s.name}: ${s.url}\n`;
  }
  text += '\n*All handles:* @mummytokencoin';
  return text;
}

function getDonateInstructions() {
  return `*💛 HOW TO DONATE TO LHOPE FUND*

*Step 1:* Copy the LHOPE Fund wallet address:
\`${CONTRACTS.lhopeFund.address}\`

*Step 2:* Open your Web3 wallet (MetaMask, Trust Wallet, etc.)

*Step 3:* Make sure you are on BNB Smart Chain (BEP-20)

*Step 4:* Send any amount of BNB or $MTC tokens to the address above

*Step 5:* 70% of all NFT mint fees also go directly to this wallet

*Step 6:* Verify your donation on BscScan:
${CONTRACTS.lhopeFund.bscscan}

*Every contribution, no matter how small, saves lives.* 💛`;
}

function getMintInstructions() {
  return `*🎨 HOW TO MINT AN LHOPE MEMORIAL NFT*

*Step 1:* Go to https://mint.mummytokencoin.com

*Step 2:* Connect your Web3 wallet (MetaMask, Trust Wallet)

*Step 3:* Click on BSC Mainnet network

*Step 4:* Upload a tribute image (PNG, JPG, GIF up to 10MB)

*Step 5:* Enter the honored person's name

*Step 6:* Write a memorial message

*Step 7:* Select your country from the dropdown

*Step 8:* Enter an NFT title (optional)

*Step 9:* Click "Mint Memorial NFT"

*Step 10:* Confirm the transaction (0.001 BNB ≈ $0.60 USD)

*Step 11:* Your NFT will be minted on blockchain permanently!

*70% of every mint goes to the LHOPE Fund.*`;
}

function getStartMessage() {
  return `*✨ MUMMYTOKENCOIN ($MTC) ✨*

*Built in memory. Powered by hope.*

Welcome to the official MUMMYTOKENCOIN Telegram Bot.

━━━━━━━━━━━━━━━━━━━━

*📊 ECOSYSTEM STATS*
• Total Supply: 1,000,000,000 MTC
• Network: BNB Smart Chain (BEP-20)
• 70% of NFT mints → LHOPE Fund

━━━━━━━━━━━━━━━━━━━━

*🔗 VERIFIED CONTRACTS*

💰 $MTC Token:
\`${CONTRACTS.mtc.address}\`

🎨 LHOPE NFT:
\`${CONTRACTS.lhopeNft.address}\`

🏦 LHOPE Fund:
\`${CONTRACTS.lhopeFund.address}\`

━━━━━━━━━━━━━━━━━━━━

*🌐 OFFICIAL LINKS*
• Main Website: https://mummytokencoin.com
• NFT Minting: https://mint.mummytokencoin.com

━━━━━━━━━━━━━━━━━━━━

${getSocialText()}

━━━━━━━━━━━━━━━━━━━━

*📱 Use the buttons below to explore:*`;
}

function getInfoMessage() {
  return `*ℹ️ ABOUT MUMMYTOKENCOIN ($MTC)*

MUMMYTOKENCOIN is a premium blockchain ecosystem for liver health awareness.

*🎯 MISSION:* Transform grief into hope.

*💛 THREE PILLARS:* Love, Hope, Business.

━━━━━━━━━━━━━━━━━━━━

${getSocialText()}

━━━━━━━━━━━━━━━━━━━━

*Built in memory. Powered by hope.* 🙏`;
}

function getMainKeyboard() {
  return {
    inline_keyboard: [
      [{ text: "🌐 WEBSITE", callback_data: "website" }, { text: "🎨 MINT NFT", callback_data: "mint" }],
      [{ text: "🏦 LHOPE FUND", callback_data: "lhope" }, { text: "💰 $MTC", callback_data: "mtc" }],
      [{ text: "📜 CONTRACTS", callback_data: "contracts" }, { text: "💛 DONATE", callback_data: "donate" }],
      [{ text: "📱 SOCIAL", callback_data: "social" }, { text: "ℹ️ INFO", callback_data: "info" }],
      [{ text: "❓ HOW TO MINT", callback_data: "howmint" }, { text: "💝 HOW TO DONATE", callback_data: "howdonate" }]
    ]
  };
}

function getSimpleKeyboard() {
  return {
    inline_keyboard: [
      [{ text: "🌐 WEBSITE", callback_data: "website" }, { text: "🎨 MINT NFT", callback_data: "mint" }],
      [{ text: "📱 SOCIAL", callback_data: "social" }, { text: "ℹ️ INFO", callback_data: "info" }]
    ]
  };
}

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
      reply = `🌐 https://mummytokencoin.com`;
      break;
    case 'mint':
      reply = `🎨 https://mint.mummytokencoin.com\n\nNFT Contract: ${CONTRACTS.lhopeNft.bscscan}`;
      break;
    case 'lhope':
      reply = `🏦 LHOPE Fund:\n${CONTRACTS.lhopeFund.bscscan}`;
      break;
    case 'mtc':
      reply = `📄 $MTC Token:\n${CONTRACTS.mtc.bscscan}`;
      break;
    case 'contracts':
      reply = `📜 ALL CONTRACTS:\n\n$MTC: ${CONTRACTS.mtc.bscscan}\nLHOPE NFT: ${CONTRACTS.lhopeNft.bscscan}\nLHOPE Fund: ${CONTRACTS.lhopeFund.bscscan}`;
      break;
    case 'donate':
      reply = `💛 Donate to:\n${CONTRACTS.lhopeFund.address}\n\n🔍 ${CONTRACTS.lhopeFund.bscscan}`;
      break;
    case 'howdonate':
      reply = getDonateInstructions();
      break;
    case 'howmint':
      reply = getMintInstructions();
      break;
    case 'social':
      reply = getSocialText();
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

// ============================================================
// VERCEL HANDLER - USING module.exports (WORKING FORMAT)
// ============================================================
module.exports = async (req, res) => {
  // Handle GET requests
  if (req.method === 'GET') {
    res.status(200).json({
      status: '✅ MUMMYTOKENCOIN Bot is LIVE!',
      bot: '@MUMMYTOKENCOIN_bot',
      social: '@mummytokencoin on all platforms'
    });
    return;
  }

  // Handle POST requests (Telegram webhook)
  if (req.method === 'POST') {
    try {
      const update = req.body;

      // Respond IMMEDIATELY to Telegram
      res.status(200).json({ ok: true });

      // Process asynchronously
      if (update.callback_query) {
        await handleCallbackQuery(update.callback_query);
        return;
      }

      if (update.message && update.message.text) {
        const chatId = update.message.chat.id;
        const text = update.message.text.toLowerCase();

        switch(text) {
          case '/start':
            await sendMessage(chatId, getStartMessage(), getMainKeyboard());
            break;
          case '/website':
            await sendMessage(chatId, `🌐 https://mummytokencoin.com`);
            break;
          case '/mint':
            await sendMessage(chatId, `🎨 https://mint.mummytokencoin.com`);
            break;
          case '/lhope':
            await sendMessage(chatId, `🏦 ${CONTRACTS.lhopeFund.bscscan}`);
            break;
          case '/mtc':
            await sendMessage(chatId, `📄 ${CONTRACTS.mtc.bscscan}`);
            break;
          case '/contracts':
            await sendMessage(chatId, `📜 ALL CONTRACTS:\n$MTC: ${CONTRACTS.mtc.bscscan}\nLHOPE NFT: ${CONTRACTS.lhopeNft.bscscan}\nLHOPE Fund: ${CONTRACTS.lhopeFund.bscscan}`);
            break;
          case '/donate':
            await sendMessage(chatId, `💛 Donate to LHOPE Fund:\n${CONTRACTS.lhopeFund.address}`);
            break;
          case '/info':
            await sendMessage(chatId, getInfoMessage());
            break;
          case '/social':
            await sendMessage(chatId, getSocialText());
            break;
          default:
            await sendMessage(chatId, `Send /start to begin!`, getSimpleKeyboard());
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
    return;
  }

  res.status(405).json({ error: 'Method Not Allowed' });
};