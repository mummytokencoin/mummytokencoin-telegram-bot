// ============================================================
// MUMMYTOKENCOIN TELEGRAM BOT - COMPLETE SOCIAL LINKS
// Bot Username: @MUMMYTOKENCOIN_bot
// ============================================================

const BOT_TOKEN = '8598861633:AAFqZ2Xm77FSQ6wlxpBJZJ80TpNsb3eAXlo';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

// Social Media Links (All @mummytokencoin)
const SOCIALS = {
  telegram: { name: '💬 Telegram', url: 'https://t.me/mummytokencoin', handle: '@mummytokencoin' },
  twitter: { name: '🐦 X (Twitter)', url: 'https://x.com/mummytokencoin', handle: '@mummytokencoin' },
  instagram: { name: '📸 Instagram', url: 'https://instagram.com/mummytokencoin', handle: '@mummytokencoin' },
  youtube: { name: '▶️ YouTube', url: 'https://youtube.com/@mummytokencoin', handle: '@mummytokencoin' },
  tiktok: { name: '🎵 TikTok', url: 'https://tiktok.com/@mummytokencoin', handle: '@mummytokencoin' },
  pinterest: { name: '📌 Pinterest', url: 'https://pinterest.com/mummytokencoin', handle: '@mummytokencoin' }
};

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

function getSocialLinksText() {
  return `*📱 FOLLOW US ON SOCIAL MEDIA*

${SOCIALS.telegram.name}: ${SOCIALS.telegram.url}
${SOCIALS.twitter.name}: ${SOCIALS.twitter.url}
${SOCIALS.instagram.name}: ${SOCIALS.instagram.url}
${SOCIALS.youtube.name}: ${SOCIALS.youtube.url}
${SOCIALS.tiktok.name}: ${SOCIALS.tiktok.url}
${SOCIALS.pinterest.name}: ${SOCIALS.pinterest.url}

*All handles:* @mummytokencoin`;
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

${getSocialLinksText()}

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

${getSocialLinksText()}

━━━━━━━━━━━━━━━━━━━━

*Built in memory. Powered by hope.* 🙏`;
}

function getMainKeyboard() {
  return {
    inline_keyboard: [
      [{ text: "🌐 WEBSITE", callback_data: "website" }, { text: "🎨 MINT NFT", callback_data: "mint" }],
      [{ text: "🏦 LHOPE FUND", callback_data: "lhope" }, { text: "💰 $MTC TOKEN", callback_data: "mtc" }],
      [{ text: "📜 ALL CONTRACTS", callback_data: "contracts" }, { text: "💛 DONATE", callback_data: "donate" }],
      [{ text: "📱 SOCIAL MEDIA", callback_data: "social" }, { text: "ℹ️ INFO", callback_data: "info" }]
    ]
  };
}

function getSimpleKeyboard() {
  return {
    inline_keyboard: [
      [{ text: "🌐 WEBSITE", callback_data: "website" }, { text: "🎨 MINT NFT", callback_data: "mint" }],
      [{ text: "🏦 LHOPE FUND", callback_data: "lhope" }, { text: "💰 $MTC", callback_data: "mtc" }],
      [{ text: "📱 SOCIAL MEDIA", callback_data: "social" }]
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
    case 'social':
      reply = getSocialLinksText();
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
// VERCEL EXPORT
// ============================================================
export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      status: '✅ MUMMYTOKENCOIN Bot is LIVE!',
      bot: '@MUMMYTOKENCOIN_bot',
      social: '@mummytokencoin on all platforms'
    });
    return;
  }

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
            await sendMessage(chatId, `🎨 https://mint.mummytokencoin.com\n\nNFT Contract: ${CONTRACTS.lhopeNft.bscscan}`);
            break;
          case '/lhope':
            await sendMessage(chatId, `🏦 LHOPE Fund:\n${CONTRACTS.lhopeFund.bscscan}`);
            break;
          case '/mtc':
            await sendMessage(chatId, `📄 $MTC Token:\n${CONTRACTS.mtc.bscscan}`);
            break;
          case '/contracts':
            await sendMessage(chatId, `📜 ALL CONTRACTS:\n\n$MTC: ${CONTRACTS.mtc.bscscan}\nLHOPE NFT: ${CONTRACTS.lhopeNft.bscscan}\nLHOPE Fund: ${CONTRACTS.lhopeFund.bscscan}`);
            break;
          case '/donate':
            await sendMessage(chatId, `💛 Donate to LHOPE Fund:\n${CONTRACTS.lhopeFund.address}`);
            break;
          case '/info':
            await sendMessage(chatId, getInfoMessage());
            break;
          case '/social':
            await sendMessage(chatId, getSocialLinksText());
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
}
