const fetch = require('node-fetch');

const BOT_TOKEN = '8598861633:AAFqZ2Xm77FSQ6wlxpBJZJ80TpNsb3eAXlo';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

// ==================== ALL YOUR CONTRACTS ====================
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

// ==================== ALL SOCIAL LINKS ====================
const SOCIALS = [
  { name: '💬 Telegram', url: 'https://t.me/mummytokencoin' },
  { name: '🐦 X (Twitter)', url: 'https://x.com/mummytokencoin' },
  { name: '📸 Instagram', url: 'https://instagram.com/mummytokencoin' },
  { name: '▶️ YouTube', url: 'https://youtube.com/@mummytokencoin' }
];

// ==================== COMPLETE MESSAGES ====================
function getStartMessage() {
  return `*✨ MUMMYTOKENCOIN ($MTC) ✨*

*Built in memory. Powered by hope.*

━━━━━━━━━━━━━━━━━━━━

*📊 TOKEN INFO*
• Total Supply: 1,000,000,000 MTC
• Network: BNB Smart Chain (BEP-20)
• MTC/WBNB Pair on PancakeSwap
• Free Listing on CoinSniper

━━━━━━━━━━━━━━━━━━━━

*🔗 VERIFIED CONTRACTS*

💰 *$MTC Token:*
\`${CONTRACTS.mtc.address}\`

🎨 *LHOPE NFT:*
\`${CONTRACTS.lhopeNft.address}\`

🏦 *LHOPE Fund:*
\`${CONTRACTS.lhopeFund.address}\`

━━━━━━━━━━━━━━━━━━━━

*🌐 OFFICIAL LINKS*
• Website: http://mummytokencoin.com
• Mint NFT: https://mint.mummytokencoin.com

Use the buttons below 👇`;
}

function getMintGuide() {
  return `*🎨 HOW TO MINT AN NFT*

*STEP BY STEP*

1️⃣ Go to https://mint.mummytokencoin.com
2️⃣ Connect MetaMask or Trust Wallet
3️⃣ Upload tribute image (PNG/JPG/GIF)
4️⃣ Enter honored person's name
5️⃣ Write memorial message
6️⃣ Select country
7️⃣ Click "Mint Memorial NFT"
8️⃣ Confirm transaction (0.001 BNB)

💛 70% of mint fees go to LHOPE Fund

Contract: ${CONTRACTS.lhopeNft.bscscan}`;
}

function getDonateGuide() {
  return `*💛 HOW TO DONATE*

*STEP BY STEP*

1️⃣ Copy LHOPE Fund address:
\`${CONTRACTS.lhopeFund.address}\`

2️⃣ Open MetaMask or Trust Wallet
3️⃣ Send BNB or $MTC tokens
4️⃣ Confirm transaction
5️⃣ Verify on BscScan:
${CONTRACTS.lhopeFund.bscscan}

*Every donation saves lives* 🙏`;
}

function getSocialMessage() {
  let text = `*📱 FOLLOW MUMMYTOKENCOIN*\n\n`;
  for (const s of SOCIALS) {
    text += `${s.name}: ${s.url}\n\n`;
  }
  text += `@mummytokencoin on all platforms`;
  return text;
}

// ==================== BUTTONS ====================
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

// ==================== HELPER FUNCTIONS ====================
async function sendMessage(chatId, text, replyMarkup = null) {
  const payload = {
    chat_id: chatId,
    text: text,
    parse_mode: 'Markdown'
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

// ==================== MAIN HANDLER ====================
module.exports = async (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json({ status: 'Bot is live', bot: '@MUMMYTOKENCOIN_bot' });
    return;
  }

  if (req.method === 'POST') {
    try {
      const update = req.body;
      res.status(200).json({ ok: true });

      // Handle button clicks
      if (update.callback_query) {
        const chatId = update.callback_query.message.chat.id;
        const data = update.callback_query.data;
        
        let reply = '';
        switch(data) {
          case 'website': reply = '🌐 http://mummytokencoin.com'; break;
          case 'mint': reply = '🎨 https://mint.mummytokencoin.com'; break;
          case 'mtc': reply = `💰 $MTC Token\n${CONTRACTS.mtc.bscscan}`; break;
          case 'lhope': reply = `🏦 LHOPE Fund\n${CONTRACTS.lhopeFund.bscscan}`; break;
          case 'contracts': reply = `📜 Contracts:\n$MTC: ${CONTRACTS.mtc.bscscan}\nNFT: ${CONTRACTS.lhopeNft.bscscan}\nFund: ${CONTRACTS.lhopeFund.bscscan}`; break;
          case 'howmint': reply = getMintGuide(); break;
          case 'howdonate': reply = getDonateGuide(); break;
          case 'social': reply = getSocialMessage(); break;
          case 'info': reply = 'MUMMYTOKENCOIN transforms grief into hope through blockchain technology, supporting liver health worldwide.'; break;
          default: reply = getStartMessage();
        }
        
        await sendMessage(chatId, reply);
        await answerCallbackQuery(update.callback_query.id);
        return;
      }

      // Handle text messages
      if (update.message && update.message.text) {
        const chatId = update.message.chat.id;
        const text = update.message.text.toLowerCase();

        if (text === '/start') {
          await sendMessage(chatId, getStartMessage(), getMainKeyboard());
        } else if (text === '/website') {
          await sendMessage(chatId, '🌐 http://mummytokencoin.com');
        } else if (text === '/mint') {
          await sendMessage(chatId, '🎨 https://mint.mummytokencoin.com');
        } else if (text === '/mtc') {
          await sendMessage(chatId, `💰 $MTC Token\n${CONTRACTS.mtc.bscscan}`);
        } else if (text === '/lhope') {
          await sendMessage(chatId, `🏦 LHOPE Fund\n${CONTRACTS.lhopeFund.bscscan}`);
        } else if (text === '/contracts') {
          await sendMessage(chatId, `📜 All Contracts\n$MTC: ${CONTRACTS.mtc.bscscan}\nNFT: ${CONTRACTS.lhopeNft.bscscan}\nFund: ${CONTRACTS.lhopeFund.bscscan}`);
        } else if (text === '/howmint') {
          await sendMessage(chatId, getMintGuide());
        } else if (text === '/howdonate') {
          await sendMessage(chatId, getDonateGuide());
        } else if (text === '/social') {
          await sendMessage(chatId, getSocialMessage());
        } else {
          await sendMessage(chatId, 'Send /start to begin');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
    return;
  }

  res.status(405).json({ error: 'Method not allowed' });
};
