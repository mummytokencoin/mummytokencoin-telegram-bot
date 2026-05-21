// ============================================================
// MUMMYTOKENCOIN TELEGRAM BOT - FIXED FOR VERCEL TIMEOUTS
// Bot Username: @MUMMYTOKENCOIN_bot
// Platform: Vercel
// ============================================================

const BOT_TOKEN = '8598861633:AAFqZ2Xm77FSQ6wlxpBJZJ80TpNsb3eAXlo';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

// ============================================================
// VERIFIED CONTRACTS
// ============================================================
const CONTRACTS = {
  mtc: {
    name: '💰 $MTC Token',
    address: '0x17b1FBa5f8110929580a015703F2Ab2a1223F99f',
    bscscan: 'https://bscscan.com/token/0x17b1FBa5f8110929580a015703F2Ab2a1223F99f'
  },
  lhopeNft: {
    name: '🎨 LHOPE Memorial NFT Contract',
    address: '0x5A3CaDB539b96cC461a5219C956F8106165BC4ae',
    bscscan: 'https://bscscan.com/address/0x5A3CaDB539b96cC461a5219C956F8106165BC4ae'
  },
  lhopeFund: {
    name: '🏦 LHOPE Fund Wallet',
    address: '0x31A589c29b3161A09b4fdea9d941c6BA6077f472',
    bscscan: 'https://bscscan.com/address/0x31A589c29b3161A09b4fdea9d941c6BA6077f472'
  }
};

function formatContract(contract) {
  return `*${contract.name}:*\n\`${contract.address}\`\n🔗 [View & Verify on BscScan](${contract.bscscan})`;
}

function formatClickableLink(text, url) {
  return `[${text}](${url})`;
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
${formatContract(CONTRACTS.mtc)}

${formatContract(CONTRACTS.lhopeNft)}

${formatContract(CONTRACTS.lhopeFund)}

━━━━━━━━━━━━━━━━━━━━

*🌐 OFFICIAL LINKS*
• ${formatClickableLink('Main Website', 'https://mummytokencoin.com')}
• ${formatClickableLink('NFT Minting DApp', 'https://mint.mummytokencoin.com')}

━━━━━━━━━━━━━━━━━━━━

*📱 Use the buttons below to explore:*`;
}

function getInfoMessage() {
  return `*ℹ️ ABOUT MUMMYTOKENCOIN ($MTC)*

MUMMYTOKENCOIN is a premium blockchain ecosystem uniting humanitarian responsibility, ethical finance, and decentralized technology.

━━━━━━━━━━━━━━━━━━━━

*🎯 MISSION*
Transform grief into hope by creating transparent, verifiable funding for liver health research worldwide.

━━━━━━━━━━━━━━━━━━━━

*💛 THE THREE PILLARS*
1. *Love* — The Foundation
2. *Hope* — The Mission (LHOPE Initiative)
3. *Business* — The Engine

━━━━━━━━━━━━━━━━━━━━

*Built in memory. Powered by hope.* 🙏`;
}

function getHelpMessage() {
  return `*🤖 AVAILABLE COMMANDS*

*/start* — Welcome & all links
*/website* — Main website
*/mint* — NFT minting DApp
*/lhope* — LHOPE Fund wallet
*/mtc* — $$MTC token contract
*/contracts* — All contract addresses
*/donate* — Donation instructions
*/info* — Project overview

Send /start to see the buttons!`;
}

function getMainKeyboard() {
  return {
    inline_keyboard: [
      [{ text: "🌐 WEBSITE", callback_data: "website" }, { text: "🎨 MINT NFT", callback_data: "mint" }],
      [{ text: "🏦 LHOPE FUND", callback_data: "lhope" }, { text: "💰 $MTC TOKEN", callback_data: "mtc" }],
      [{ text: "📜 ALL CONTRACTS", callback_data: "contracts" }, { text: "💛 DONATE", callback_data: "donate" }],
      [{ text: "ℹ️ INFO", callback_data: "info" }, { text: "❓ HELP", callback_data: "help" }]
    ]
  };
}

function getSimpleKeyboard() {
  return {
    inline_keyboard: [
      [{ text: "🌐 WEBSITE", callback_data: "website" }, { text: "🎨 MINT NFT", callback_data: "mint" }],
      [{ text: "🏦 LHOPE FUND", callback_data: "lhope" }, { text: "💰 $MTC", callback_data: "mtc" }]
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
      reply = `🌐 *MUMMYTOKENCOIN MAIN WEBSITE*\n\nhttps://mummytokencoin.com`;
      break;
    case 'mint':
      reply = `🎨 *LHOPE MEMORIAL NFTs*\n\nMint your tribute:\nhttps://mint.mummytokencoin.com\n\n📄 NFT Contract:\n${CONTRACTS.lhopeNft.bscscan}`;
      break;
    case 'lhope':
      reply = `🏦 *LHOPE FUND WALLET*\n\n\`${CONTRACTS.lhopeFund.address}\`\n\n🔍 ${CONTRACTS.lhopeFund.bscscan}`;
      break;
    case 'mtc':
      reply = `📄 *$$MTC TOKEN CONTRACT*\n\n\`${CONTRACTS.mtc.address}\`\n\n🔍 ${CONTRACTS.mtc.bscscan}`;
      break;
    case 'contracts':
      reply = `📜 *ALL CONTRACTS*\n\n${formatContract(CONTRACTS.mtc)}\n\n${formatContract(CONTRACTS.lhopeNft)}\n\n${formatContract(CONTRACTS.lhopeFund)}`;
      break;
    case 'donate':
      reply = `💛 *DONATE TO LHOPE FUND*\n\n\`${CONTRACTS.lhopeFund.address}\`\n\n🔍 ${CONTRACTS.lhopeFund.bscscan}`;
      break;
    case 'info':
      reply = getInfoMessage();
      break;
    default:
      reply = getHelpMessage();
  }

  await sendMessage(chatId, reply);
  await answerCallbackQuery(callbackQuery.id);
}

// ============================================================
// MAIN VERCEL FUNCTION - FIXED TIMEOUT PATTERN
// ============================================================
module.exports = async (req, res) => {
  // Handle GET requests (testing)
  if (req.method === 'GET') {
    res.status(200).json({
      status: '✅ MUMMYTOKENCOIN Telegram Bot is LIVE!',
      bot: '@MUMMYTOKENCOIN_bot',
      contracts: {
        mtc: CONTRACTS.mtc.bscscan,
        lhopeNft: CONTRACTS.lhopeNft.bscscan,
        lhopeFund: CONTRACTS.lhopeFund.bscscan
      }
    });
    return;
  }

  // Handle POST requests (Telegram webhook)
  if (req.method === 'POST') {
    try {
      const update = req.body;
      
      // ✅ CRITICAL FIX: Respond to Telegram IMMEDIATELY (within 1 second)
      // This prevents Telegram's "Read timeout expired" error
      res.status(200).json({ ok: true });
      
      // ⚠️ IMPORTANT: Do NOT use `return` here. Let the function continue running.
      // The HTTP response has already been sent. Now process the update asynchronously.
      
      // Handle callback queries (button clicks)
      if (update.callback_query) {
        await handleCallbackQuery(update.callback_query);
        return;
      }
      
      // Handle text messages
      if (update.message && update.message.text) {
        const chatId = update.message.chat.id;
        const text = update.message.text.toLowerCase();
        let reply = '';
        let replyMarkup = null;
        
        switch(text) {
          case '/start':
            reply = getStartMessage();
            replyMarkup = getMainKeyboard();
            break;
          case '/website':
            reply = `🌐 *MUMMYTOKENCOIN MAIN WEBSITE*\n\nhttps://mummytokencoin.com`;
            break;
          case '/mint':
            reply = `🎨 *LHOPE MEMORIAL NFTs*\n\nhttps://mint.mummytokencoin.com\n\n📄 NFT Contract:\n${CONTRACTS.lhopeNft.bscscan}`;
            break;
          case '/lhope':
            reply = `🏦 *LHOPE FUND WALLET*\n\n\`${CONTRACTS.lhopeFund.address}\`\n\n🔍 ${CONTRACTS.lhopeFund.bscscan}`;
            break;
          case '/mtc':
            reply = `📄 *$$MTC TOKEN CONTRACT*\n\n\`${CONTRACTS.mtc.address}\`\n\n🔍 ${CONTRACTS.mtc.bscscan}`;
            break;
          case '/contracts':
            reply = `📜 *ALL CONTRACTS*\n\n${formatContract(CONTRACTS.mtc)}\n\n${formatContract(CONTRACTS.lhopeNft)}\n\n${formatContract(CONTRACTS.lhopeFund)}`;
            break;
          case '/donate':
            reply = `💛 *DONATE TO LHOPE FUND*\n\n\`${CONTRACTS.lhopeFund.address}\`\n\n🔍 ${CONTRACTS.lhopeFund.bscscan}`;
            break;
          case '/info':
            reply = getInfoMessage();
            break;
          default:
            reply = getHelpMessage();
            replyMarkup = getSimpleKeyboard();
        }
        
        const payload = {
          chat_id: chatId,
          text: reply,
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
    } catch (error) {
      console.error('Webhook error:', error);
      // Error already handled, response already sent
    }
    return;
  }
  
  res.status(405).json({ error: 'Method Not Allowed' });
};
