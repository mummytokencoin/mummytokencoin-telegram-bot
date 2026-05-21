// ============================================================
// MUMMYTOKENCOIN TELEGRAM BOT - PRODUCTION VERSION
// Bot: @MUMMYTOKENCOIN_bot
// ============================================================

const fetch = require('node-fetch');

// ==================== CONFIGURATION ====================
const BOT_TOKEN = '8598861633:AAFqZ2Xm77FSQ6wlxpBJZJ80TpNsb3eAXlo';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

// ==================== TOKENOMICS ====================
const TOKENOMICS = {
  totalSupply: '1,000,000,000 MTC',
  network: 'BNB Smart Chain (BEP-20)',
  tax: '0% Buy/Sell Tax',
  liquidity: 'Locked for 5 years',
  nftAllocation: '70% of NFT mint fees → LHOPE Fund',
  charity: '30% to Liver Health Research'
};

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

// ==================== MESSAGES ====================
function getStartMessage() {
  return `*✨ MUMMYTOKENCOIN ($MTC) ✨*

*Built in memory. Powered by hope.*

Welcome to the official MUMMYTOKENCOIN Telegram Bot.

━━━━━━━━━━━━━━━━━━━━

*📊 TOKENOMICS*
• Total Supply: ${TOKENOMICS.totalSupply}
• Network: ${TOKENOMICS.network}
• Tax: ${TOKENOMICS.tax}
• Liquidity: ${TOKENOMICS.liquidity}
• ${TOKENOMICS.nftAllocation}
• Charity: ${TOKENOMICS.charity}

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

function getStepByStepMintInstructions() {
  return `*🎨 HOW TO MINT AN LHOPE MEMORIAL NFT*

*STEP-BY-STEP GUIDE*

━━━━━━━━━━━━━━━━━━━━

*📱 STEP 1:* Install MetaMask or Trust Wallet

*🌐 STEP 2:* Go to https://mint.mummytokencoin.com

*🔌 STEP 3:* Click "Connect Wallet"

*🖼️ STEP 4:* Upload tribute image (PNG/JPG/GIF, max 10MB)

*✍️ STEP 5:* Enter honored person's name

*💬 STEP 6:* Write memorial message

*🌍 STEP 7:* Select country from dropdown

*🎨 STEP 8:* Click "Mint Memorial NFT"

*✅ STEP 9:* Confirm transaction (0.001 BNB ≈ $0.60)

*🎉 STEP 10:* Your NFT is minted permanently!

━━━━━━━━━━━━━━━━━━━━

*💛 70% of mint fees go to the LHOPE Fund*

View NFT Contract: ${CONTRACTS.lhopeNft.bscscan}`;
}

function getStepByStepDonateInstructions() {
  return `*💛 HOW TO DONATE TO LHOPE FUND*

*STEP-BY-STEP GUIDE*

━━━━━━━━━━━━━━━━━━━━

*📱 STEP 1:* Open MetaMask or Trust Wallet

*💰 STEP 2:* Copy LHOPE Fund address:
\`${CONTRACTS.lhopeFund.address}\`

*📋 STEP 3:* Click "Send" or "Transfer"

*📝 STEP 4:* Paste the address

*💸 STEP 5:* Enter amount (any amount helps!)

*⚡ STEP 6:* Choose BNB or $MTC token

*✅ STEP 7:* Confirm the transaction

*🔍 STEP 8:* Verify on BscScan:
${CONTRACTS.lhopeFund.bscscan}

━━━━━━━━━━━━━━━━━━━━

*💛 WHERE DONATIONS GO:*
• Liver Disease Research
• Patient Support Programs
• Medical Equipment

*Every donation saves lives!* 🙏

━━━━━━━━━━━━━━━━━━━━

*🎁 DONOR REWARDS:*
• $10+ → Shoutout in Telegram
• $50+ → Discord donor role
• $100+ → Special NFT airdrop`;
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

function getMainKeyboard() {
  return {
    inline_keyboard: [
      [{ text: "🌐 WEBSITE", callback_data: "website" }, { text: "🎨 MINT NFT", callback_data: "mint" }],
      [{ text: "💰 $MTC", callback_data: "mtc" }, { text: "🏦 LHOPE FUND", callback_data: "lhope" }],
      [{ text: "📜 CONTRACTS", callback_data: "contracts" }, { text: "🎨 HOW TO MINT", callback_data: "howmint" }],
      [{ text: "💛 HOW TO DONATE", callback_data: "howdonate" }, { text: "📱 SOCIAL", callback_data: "social" }],
      [{ text: "ℹ️ INFO", callback_data: "info" }]
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
      reply = `🌐 http://mummytokencoin.com`;
      break;
    case 'mint':
      reply = `🎨 https://mint.mummytokencoin.com\n\nMint fee: 0.001 BNB (~$0.60)`;
      break;
    case 'mtc':
      reply = `💰 $MTC Token:\n${CONTRACTS.mtc.bscscan}`;
      break;
    case 'lhope':
      reply = `🏦 LHOPE Fund Wallet:\n${CONTRACTS.lhopeFund.bscscan}`;
      break;
    case 'contracts':
      reply = getContractsMessage();
      break;
    case 'howmint':
      reply = getStepByStepMintInstructions();
      break;
    case 'howdonate':
      reply = getStepByStepDonateInstructions();
      break;
    case 'social':
      reply = getSocialMessage();
      break;
    case 'info':
      reply = `*ℹ️ MUMMYTOKENCOIN*\n\nBuilt in memory. Powered by hope.\n\nDedicated to liver health worldwide.\n\nWebsite: http://mummytokencoin.com\nMint: https://mint.mummytokencoin.com`;
      break;
    default:
      reply = getStartMessage();
  }
  
  await sendMessage(chatId, reply);
  await answerCallbackQuery(callbackQuery.id);
}

// ==================== VERCEL HANDLER ====================
module.exports = async (req, res) => {
  // Handle GET requests
  if (req.method === 'GET') {
    res.status(200).json({
      status: '✅ MUMMYTOKENCOIN Bot is LIVE!',
      bot: '@MUMMYTOKENCOIN_bot',
      website: 'http://mummytokencoin.com'
    });
    return;
  }

  // Handle POST requests
  if (req.method === 'POST') {
    try {
      const update = req.body;
      
      // Respond immediately to Telegram
      res.status(200).json({ ok: true });

      // Handle callback queries (button clicks)
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
            await sendMessage(chatId, getStepByStepMintInstructions());
            break;
          case '/howdonate':
            await sendMessage(chatId, getStepByStepDonateInstructions());
            break;
          case '/social':
            await sendMessage(chatId, getSocialMessage());
            break;
          default:
            await sendMessage(chatId, 'Send /start to begin!', getMainKeyboard());
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
    return;
  }

  res.status(405).json({ error: 'Method Not Allowed' });
};
