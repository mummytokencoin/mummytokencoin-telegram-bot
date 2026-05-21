// ============================================================
// MUMMYTOKENCOIN TELEGRAM BOT - CORRECT VERCEL FORMAT
// Bot Username: @MUMMYTOKENCOIN_bot
// ============================================================

const BOT_TOKEN = '8598861633:AAFqZ2Xm77FSQ6wlxpBJZJ80TpNsb3eAXlo';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

// Contract addresses
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
  return `*${contract.name}:*\n\`${contract.address}\`\n🔗 [View on BscScan](${contract.bscscan})`;
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
• Main Website: https://mummytokencoin.com
• NFT Minting DApp: https://mint.mummytokencoin.com

━━━━━━━━━━━━━━━━━━━━

*📱 Use the buttons below to explore:*`;
}

function getMainKeyboard() {
  return {
    inline_keyboard: [
      [{ text: "🌐 WEBSITE", callback_data: "website" }, { text: "🎨 MINT NFT", callback_data: "mint" }],
      [{ text: "🏦 LHOPE FUND", callback_data: "lhope" }, { text: "💰 $MTC TOKEN", callback_data: "mtc" }],
      [{ text: "📜 ALL CONTRACTS", callback_data: "contracts" }, { text: "💛 DONATE", callback_data: "donate" }],
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
      reply = `🌐 *Main Website*\nhttps://mummytokencoin.com`;
      break;
    case 'mint':
      reply = `🎨 *Mint NFTs*\nhttps://mint.mummytokencoin.com\n\nNFT Contract: ${CONTRACTS.lhopeNft.bscscan}`;
      break;
    case 'lhope':
      reply = `🏦 *LHOPE Fund*\n${CONTRACTS.lhopeFund.bscscan}`;
      break;
    case 'mtc':
      reply = `📄 *$MTC Token*\n${CONTRACTS.mtc.bscscan}`;
      break;
    case 'contracts':
      reply = `📜 *All Contracts*\n\n$MTC: ${CONTRACTS.mtc.bscscan}\nLHOPE NFT: ${CONTRACTS.lhopeNft.bscscan}\nLHOPE Fund: ${CONTRACTS.lhopeFund.bscscan}`;
      break;
    case 'donate':
      reply = `💛 *Donate*\n${CONTRACTS.lhopeFund.address}`;
      break;
    case 'info':
      reply = `ℹ️ MUMMYTOKENCOIN is a blockchain project supporting liver health awareness. 70% of NFT mints go to the LHOPE Fund.`;
      break;
  }
  await sendMessage(chatId, reply);
  await answerCallbackQuery(callbackQuery.id);
}

// ============================================================
// CORRECT VERCEL EXPORT FORMAT
// ============================================================
export default async function handler(req, res) {
  // Handle GET requests (testing)
  if (req.method === 'GET') {
    res.status(200).json({
      status: '✅ MUMMYTOKENCOIN Bot is LIVE!',
      bot: '@MUMMYTOKENCOIN_bot',
      message: 'Webhook is working. Send /start to your bot on Telegram.'
    });
    return;
  }

  // Handle POST requests (Telegram webhook)
  if (req.method === 'POST') {
    try {
      const update = req.body;

      // Respond IMMEDIATELY to Telegram
      res.status(200).json({ ok: true });

      // Process the update asynchronously
      if (update.callback_query) {
        await handleCallbackQuery(update.callback_query);
        return;
      }

      if (update.message && update.message.text) {
        const chatId = update.message.chat.id;
        const text = update.message.text.toLowerCase();
        
        if (text === '/start') {
          await sendMessage(chatId, getStartMessage(), getMainKeyboard());
        } else if (text === '/website') {
          await sendMessage(chatId, `🌐 https://mummytokencoin.com`);
        } else if (text === '/mint') {
          await sendMessage(chatId, `🎨 https://mint.mummytokencoin.com`);
        } else if (text === '/lhope') {
          await sendMessage(chatId, `🏦 ${CONTRACTS.lhopeFund.bscscan}`);
        } else if (text === '/mtc') {
          await sendMessage(chatId, `📄 ${CONTRACTS.mtc.bscscan}`);
        } else {
          await sendMessage(chatId, `Send /start to begin!`);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
    return;
  }

  res.status(405).json({ error: 'Method Not Allowed' });
}
