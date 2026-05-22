// ============================================================
// MUMMYTOKENCOIN TELEGRAM BOT - COMPLETE PRODUCTION VERSION
// Bot: @MUMMYTOKENCOIN_bot
// Website: http://mummytokencoin.com
// ============================================================

const fetch = require('node-fetch');

// ==================== PROXY SUPPORT FOR PAKISTAN ====================
// Free MTProxy - Pakistan friendly
// Source: https://github.com/Grim1313/mtproto-for-telegram
const HttpsProxyAgent = require('https-proxy-agent');
const proxyAgent = new HttpsProxyAgent('http://45.112.192.16:8443');

// ==================== CONFIGURATION ====================
const BOT_TOKEN = '8598861633:AAFqZ2Xm77FSQ6wlxpBJZJ80TpNsb3eAXlo';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

// ==================== TOKENOMICS (FACTUAL ONLY - NO FAKE CLAIMS) ====================
const TOKENOMICS = {
  totalSupply: '1,000,000,000 MTC',
  network: 'BNB Smart Chain (BEP-20)',
  tax: '0% Buy/Sell Tax',
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

// ==================== MESSAGE FUNCTIONS ====================
function getStartMessage() {
  return `*✨ MUMMYTOKENCOIN ($MTC) ✨*

*Built in memory. Powered by hope.*

Welcome to the official MUMMYTOKENCOIN Telegram Bot.

━━━━━━━━━━━━━━━━━━━━

*📊 TOKEN INFO*
• Total Supply: ${TOKENOMICS.totalSupply}
• Network: ${TOKENOMICS.network}
• Tax: ${TOKENOMICS.tax}
• ${TOKENOMICS.nftAllocation}
• ${TOKENOMICS.charity}
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

function getTokenomicsMessage() {
  return `*📊 MUMMYTOKENCOIN TOKENOMICS*

━━━━━━━━━━━━━━━━━━━━

*💰 TOKEN METRICS*
• Total Supply: 1,000,000,000 MTC
• Network: BNB Smart Chain (BEP-20)
• Token Type: Utility & Charity
• Buy/Sell Tax: 0%

━━━━━━━━━━━━━━━━━━━━

*💛 ALLOCATION*
• 40% - Public Sale
• 20% - LHOPE Fund
• 15% - Marketing
• 10% - Liquidity
• 10% - Team (Vested)
• 5% - Airdrops & Rewards

━━━━━━━━━━━━━━━━━━━━

*🎨 NFT UTILITY*
• 70% of mint fees → LHOPE Fund
• 30% → Liver Health Research
• 0.001 BNB per mint (~$0.60)

━━━━━━━━━━━━━━━━━━━━

*Built in memory. Powered by hope.* 💛`;
}

function getStepByStepMintInstructions() {
  return `*🎨 HOW TO MINT AN LHOPE MEMORIAL NFT*

*COMPLETE STEP-BY-STEP GUIDE*

━━━━━━━━━━━━━━━━━━━━

*📱 STEP 1: PREPARATION*
• Install MetaMask or Trust Wallet
• Add BNB Smart Chain network
• Buy at least 0.005 BNB (gas + mint fee)

━━━━━━━━━━━━━━━━━━━━

*🌐 STEP 2: ACCESS DAPP*
• Go to: https://mint.mummytokencoin.com
• Click "Connect Wallet" (top right)
• Select your wallet provider
• Approve connection

━━━━━━━━━━━━━━━━━━━━

*🖼️ STEP 3: UPLOAD IMAGE*
• Click "Upload Tribute Image"
• Select PNG, JPG, or GIF
• Max file size: 10MB
• Wait for preview to load

━━━━━━━━━━━━━━━━━━━━

*✍️ STEP 4: FILL DETAILS*
• Honored Person's Name (required)
• Memorial Message (max 500 chars)
• Select Country from dropdown
• NFT Title (optional, max 100 chars)

━━━━━━━━━━━━━━━━━━━━

*🖼️ STEP 5: PREVIEW & MINT*
• Review all details
• Click "Mint Memorial NFT"
• Confirm transaction in wallet
• Mint fee: 0.001 BNB (~$0.60)

━━━━━━━━━━━━━━━━━━━━

*✅ STEP 6: CONFIRMATION*
• Wait for blockchain confirmation
• Your NFT appears in gallery
• View on BscScan:
${CONTRACTS.lhopeNft.bscscan}
• Share your tribute!

━━━━━━━━━━━━━━━━━━━━

*💛 HOW YOUR MINT HELPS*
• 70% → LHOPE Fund (liver health)
• 30% → Research & Operations

*🎁 BONUS:* First 1,000 mints get a FREE $MTC airdrop!`;
}

function getStepByStepDonateInstructions() {
  return `*💛 HOW TO DONATE TO LHOPE FUND*

*COMPLETE STEP-BY-STEP GUIDE*

━━━━━━━━━━━━━━━━━━━━

*📱 STEP 1: PREPARATION*
• Install MetaMask or Trust Wallet
• Add BNB Smart Chain network
• Fund wallet with BNB or $MTC tokens

━━━━━━━━━━━━━━━━━━━━

*💰 STEP 2: COPY ADDRESS*
• LHOPE Fund Wallet:
\`${CONTRACTS.lhopeFund.address}\`
• Tap to copy or write it down

━━━━━━━━━━━━━━━━━━━━

*💸 STEP 3: SEND DONATION*
• Open your Web3 wallet
• Click "Send" or "Transfer"
• Paste the LHOPE Fund address
• Enter amount (any amount helps!)
• Choose BNB or $MTC

━━━━━━━━━━━━━━━━━━━━

*⚡ STEP 4: SET GAS (BNB ONLY)*
• Gas limit: 21,000
• Gas price: Auto or ~5 Gwei
• Total: ~0.0005 BNB for gas

━━━━━━━━━━━━━━━━━━━━

*✅ STEP 5: CONFIRM*
• Double-check address
• Click "Confirm" or "Send"
• Wait for blockchain confirmation

━━━━━━━━━━━━━━━━━━━━

*🔍 STEP 6: VERIFY*
• View on BscScan:
${CONTRACTS.lhopeFund.bscscan}
• Search your transaction hash
• Save TX ID for records

━━━━━━━━━━━━━━━━━━━━

*💛 WHERE DONATIONS GO*
• Liver Disease Research
• Patient Support Programs
• Medical Equipment for Clinics
• Public Health Awareness

*Every donation, no matter how small, saves lives.* 🙏

━━━━━━━━━━━━━━━━━━━━

*🎁 DONOR REWARDS*
• $10+ → Shoutout in Telegram
• $50+ → Discord donor role
• $100+ → Special NFT airdrop
• $500+ → Name on memorial wall`;
}

function getContractsMessage() {
  return `*📜 ALL VERIFIED CONTRACTS*

━━━━━━━━━━━━━━━━━━━━

💰 *$MTC TOKEN*
• Address: \`${CONTRACTS.mtc.address}\`
• BscScan: ${CONTRACTS.mtc.bscscan}
• Decimals: 18
• Supply: 1B MTC

━━━━━━━━━━━━━━━━━━━━

🎨 *LHOPE MEMORIAL NFT*
• Address: \`${CONTRACTS.lhopeNft.address}\`
• BscScan: ${CONTRACTS.lhopeNft.bscscan}
• Standard: ERC-721
• Mint Fee: 0.001 BNB

━━━━━━━━━━━━━━━━━━━━

🏦 *LHOPE FUND WALLET*
• Address: \`${CONTRACTS.lhopeFund.address}\`
• BscScan: ${CONTRACTS.lhopeFund.bscscan}
• Use: Charity & Operations

━━━━━━━━━━━━━━━━━━━━

*⚠️ ALWAYS verify addresses on BscScan before sending!*`;
}

function getSocialMessage() {
  let text = `*📱 FOLLOW MUMMYTOKENCOIN*

*Join our community on all platforms!*

━━━━━━━━━━━━━━━━━━━━\n\n`;
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

*LOVE* - Memorial NFTs honoring loved ones lost to liver disease

*HOPE* - LHOPE Fund providing resources for liver health

*BUSINESS* - Sustainable ecosystem with 0% tax token

━━━━━━━━━━━━━━━━━━━━

*🌍 GLOBAL IMPACT*
• 1.5B people affected by liver disease
• 2M deaths annually
• Our mission: Reduce by 25% by 2030

━━━━━━━━━━━━━━━━━━━━

*🔗 OFFICIAL LINKS*
• Main: http://mummytokencoin.com
• Mint: https://mint.mummytokencoin.com
• Telegram: https://t.me/mummytokencoin
• X: https://x.com/mummytokencoin

━━━━━━━━━━━━━━━━━━━━

*Built in memory. Powered by hope.* 🙏

*Dedicated to liver health worldwide.*`;
}

// ==================== KEYBOARDS ====================
function getMainKeyboard() {
  return {
    inline_keyboard: [
      [{ text: "🌐 WEBSITE", callback_data: "website" }, { text: "🎨 MINT NFT", callback_data: "mint" }],
      [{ text: "💰 $MTC", callback_data: "mtc" }, { text: "🏦 LHOPE FUND", callback_data: "lhope" }],
      [{ text: "📜 CONTRACTS", callback_data: "contracts" }, { text: "📊 TOKENOMICS", callback_data: "tokenomics" }],
      [{ text: "🎨 HOW TO MINT", callback_data: "howmint" }, { text: "💛 HOW TO DONATE", callback_data: "howdonate" }],
      [{ text: "📱 SOCIAL MEDIA", callback_data: "social" }, { text: "ℹ️ INFO", callback_data: "info" }]
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
  const response = await fetch(`${TELEGRAM_API}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    agent: proxyAgent,
    body: JSON.stringify(payload)
  });
  return response.json();
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
  let keyboard = null;

  switch(data) {
    case 'website':
      reply = `🌐 *MUMMYTOKENCOIN MAIN WEBSITE*\n\nhttp://mummytokencoin.com\n\n*Built in memory. Powered by hope.*`;
      break;
    case 'mint':
      reply = `🎨 *LHOPE MEMORIAL NFT MINTING DAPP*\n\nhttps://mint.mummytokencoin.com\n\nNFT Contract: ${CONTRACTS.lhopeNft.bscscan}\n\nMint fee: 0.001 BNB (~$0.60)`;
      break;
    case 'mtc':
      reply = `💰 *$MTC TOKEN*\n\nAddress: \`${CONTRACTS.mtc.address}\`\n\nBscScan: ${CONTRACTS.mtc.bscscan}\n\nTotal Supply: 1,000,000,000 MTC\nNetwork: BNB Smart Chain`;
      break;
    case 'lhope':
      reply = `🏦 *LHOPE FUND WALLET*\n\nAddress: \`${CONTRACTS.lhopeFund.address}\`\n\nBscScan: ${CONTRACTS.lhopeFund.bscscan}\n\nUse: 70% of NFT mints + donations go here to support liver health worldwide.`;
      break;
    case 'contracts':
      reply = getContractsMessage();
      break;
    case 'tokenomics':
      reply = getTokenomicsMessage();
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
      reply = getInfoMessage();
      break;
    default:
      reply = getInfoMessage();
  }
  
  await sendMessage(chatId, reply, keyboard);
  await answerCallbackQuery(callbackQuery.id);
}

// ==================== VERCEL HANDLER ====================
module.exports = async (req, res) => {
  // Handle GET requests (health check)
  if (req.method === 'GET') {
    res.status(200).json({
      status: '✅ MUMMYTOKENCOIN Bot is LIVE!',
      bot: '@MUMMYTOKENCOIN_bot',
      website: 'http://mummytokencoin.com',
      mint: 'https://mint.mummytokencoin.com',
      social: '@mummytokencoin on all platforms'
    });
    return;
  }

  // Handle POST requests (Telegram webhook)
  if (req.method === 'POST') {
    try {
      const update = req.body;

      // Respond IMMEDIATELY to Telegram (before processing)
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
            await sendMessage(chatId, `🌐 http://mummytokencoin.com`);
            break;
          case '/mint':
            await sendMessage(chatId, `🎨 https://mint.mummytokencoin.com\n\nMint fee: 0.001 BNB`);
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
          case '/tokenomics':
            await sendMessage(chatId, getTokenomicsMessage());
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
