// ============================================================
// MUMMYTOKENCOIN TELEGRAM BOT - VERCEL SERVERLESS FUNCTION
// Bot Username: @MUMMYTOKENCOIN_bot
// Platform: Vercel (Serverless Functions) - NO API FOLDER
// Last Updated: 2026-04-23
// ============================================================

const BOT_TOKEN = '8598861633:AAFqZ2Xm77FSQ6wlxpBJZJ80TpNsb3eAXlo';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

// ============================================================
// VERIFIED CONTRACTS - ALL CLICKABLE & VERIFIABLE ON BSCSCAN
// ============================================================
const CONTRACTS = {
  mtc: {
    name: '💰 $MTC Token',
    address: '0x17b1FBa5f8110929580a015703F2Ab2a1223F99f',
    bscscan: 'https://bscscan.com/token/0x17b1FBa5f8110929580a015703F2Ab2a1223F99f',
    deployer: '0x17b1FBa5f8110929580a015703F2Ab2a1223F99f'
  },
  lhopeNft: {
    name: '🎨 LHOPE Memorial NFT Contract',
    address: '0x5A3CaDB539b96cC461a5219C956F8106165BC4ae',
    bscscan: 'https://bscscan.com/address/0x5A3CaDB539b96cC461a5219C956F8106165BC4ae',
    deployer: '0x5A3CaDB539b96cC461a5219C956F8106165BC4ae'
  },
  lhopeFund: {
    name: '🏦 LHOPE Fund Wallet',
    address: '0x31A589c29b3161A09b4fdea9d941c6BA6077f472',
    bscscan: 'https://bscscan.com/address/0x31A589c29b3161A09b4fdea9d941c6BA6077f472',
    deployer: '0x31A589c29b3161A09b4fdea9d941c6BA6077f472'
  }
};

// ============================================================
// FORMATTING HELPERS
// ============================================================
function formatContract(contract) {
  return `*${contract.name}:*\n\`${contract.address}\`\n🔗 [View & Verify on BscScan](${contract.bscscan})`;
}

function formatClickableLink(text, url) {
  return `[${text}](${url})`;
}

// ============================================================
// MESSAGE TEMPLATES (PREMIUM FORMATTING)
// ============================================================
function getStartMessage() {
  return `*✨ MUMMYTOKENCOIN ($MTC) ✨*

*Built in memory. Powered by hope.*

Welcome to the official MUMMYTOKENCOIN Telegram Bot — your gateway to transparent blockchain-powered liver health awareness.

━━━━━━━━━━━━━━━━━━━━

*📊 ECOSYSTEM STATS*
• Total Supply: 1,000,000,000 MTC
• Network: BNB Smart Chain (BEP-20)
• NFT Mint Price: 0.001 BNB (~$0.60 USD)
• Donation Split: 70% LHOPE Fund / 30% Sustainability

━━━━━━━━━━━━━━━━━━━━

*🔗 VERIFIED CONTRACTS*
${formatContract(CONTRACTS.mtc)}

${formatContract(CONTRACTS.lhopeNft)}

${formatContract(CONTRACTS.lhopeFund)}

━━━━━━━━━━━━━━━━━━━━

*🌐 OFFICIAL LINKS*
• ${formatClickableLink('Main Website', 'https://mummytokencoin.com')}
• ${formatClickableLink('NFT Minting DApp', 'https://mint.mummytokencoin.com')}
• ${formatClickableLink('LHOPE Fund on BscScan', CONTRACTS.lhopeFund.bscscan)}
• ${formatClickableLink('$MTC Token on BscScan', CONTRACTS.mtc.bscscan)}

━━━━━━━━━━━━━━━━━━━━

*📱 Tap the buttons below to explore instantly:*`;
}

function getInfoMessage() {
  return `*ℹ️ ABOUT MUMMYTOKENCOIN ($MTC)*

MUMMYTOKENCOIN is a premium, purpose-driven blockchain ecosystem designed to unite humanitarian responsibility, ethical finance, and decentralized technology.

━━━━━━━━━━━━━━━━━━━━

*🎯 MISSION*
Transform grief into hope by creating transparent, verifiable funding for liver health research worldwide.

━━━━━━━━━━━━━━━━━━━━

*💛 THE THREE PILLARS*
1. *Love* — The Foundation (honoring the founder's mother)
2. *Hope* — The Mission (LHOPE Initiative)
3. *Business* — The Engine (sustainable tokenomics)

━━━━━━━━━━━━━━━━━━━━

*📊 TOKENOMICS (1B Total Supply)*
• Community & Rewards: 30%
• Liquidity Pool: 25%
• LHOPE Fund: 20%
• Marketing & Growth: 10%
• Development & Team: 10%
• Reserve / Exchanges: 5%

━━━━━━━━━━━━━━━━━━━━

*🔗 VERIFIED LINKS*
• ${formatClickableLink('Main Website', 'https://mummytokencoin.com')}
• ${formatClickableLink('Mint DApp', 'https://mint.mummytokencoin.com')}
• ${formatClickableLink('$MTC on BscScan', CONTRACTS.mtc.bscscan)}
• ${formatClickableLink('LHOPE NFT on BscScan', CONTRACTS.lhopeNft.bscscan)}
• ${formatClickableLink('LHOPE Fund on BscScan', CONTRACTS.lhopeFund.bscscan)}

━━━━━━━━━━━━━━━━━━━━

*Built in memory. Powered by hope.* 🙏`;
}

function getHelpMessage() {
  return `*🤖 AVAILABLE COMMANDS*

━━━━━━━━━━━━━━━━━━━━

*/start* — Welcome & all links
*/website* — Main website
*/mint* — NFT minting DApp
*/lhope* — LHOPE Fund wallet
*/mtc* — $$MTC token contract
*/contracts* — All contract addresses
*/donate* — Donation instructions
*/info* — Project overview

━━━━━━━━━━━━━━━━━━━━

*📱 QUICK LINKS*
• ${formatClickableLink('Main Website', 'https://mummytokencoin.com')}
• ${formatClickableLink('Mint NFTs', 'https://mint.mummytokencoin.com')}

━━━━━━━━━━━━━━━━━━━━

*Tap a command above or use the buttons below!*`;
}

// ============================================================
// INLINE KEYBOARDS
// ============================================================
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

// ============================================================
// TELEGRAM API HELPERS
// ============================================================
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

// ============================================================
// CALLBACK HANDLER (BUTTON CLICKS)
// ============================================================
async function handleCallbackQuery(callbackQuery) {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;
  let reply = '';
  
  switch(data) {
    case 'website':
      reply = `🌐 *MUMMYTOKENCOIN MAIN WEBSITE*\n\nExplore our complete ecosystem:\n\n🔗 ${formatClickableLink('Click Here to Visit', 'https://mummytokencoin.com')}\n\n📱 Follow us for updates:\n• Telegram: @mummytokencoin\n• X: @mummytokencoin\n• Instagram: @mummytokencoin`;
      break;
      
    case 'mint':
      reply = `🎨 *LHOPE MEMORIAL NFTs*\n\nCreate a permanent blockchain tribute honoring loved ones affected by liver disease.\n\n✨ *FEATURES:*\n• Upload tribute images (IPFS permanent storage)\n• Write personal memorial messages\n• Select from 195+ countries\n• Forever on BSC Mainnet\n\n💰 *PRICING:*\n• Mint: 0.001 BNB (~$0.60 USD)\n• 70% → LHOPE Fund\n• 30% → Project sustainability\n\n🔗 ${formatClickableLink('Start Minting Now', 'https://mint.mummytokencoin.com')}\n\n📄 ${formatClickableLink('Verify NFT Contract', CONTRACTS.lhopeNft.bscscan)}`;
      break;
      
    case 'lhope':
      reply = `🏦 *LHOPE FUND WALLET*\n\nThe LHOPE Fund is the humanitarian heart of MUMMYTOKENCOIN. **70% of every NFT mint** goes directly to this wallet.\n\n📮 *WALLET ADDRESS:*\n\`${CONTRACTS.lhopeFund.address}\`\n\n🔍 ${formatClickableLink('VERIFY ON BSCSCAN', CONTRACTS.lhopeFund.bscscan)}\n\n📊 *FUND PURPOSE:*\n• 🏥 Liver treatment institutes\n• 🔬 Medical research\n• 🌍 Global awareness campaigns\n• 🤖 AI-driven early detection\n\n✅ *100% TRANSPARENT* | *VERIFIABLE ON-CHAIN*`;
      break;
      
    case 'mtc':
      reply = `📄 *$$MTC TOKEN CONTRACT*\n\n*Token Name:* MUMMYTOKENCOIN\n*Symbol:* $$MTC\n*Network:* BNB Smart Chain (BEP-20)\n*Total Supply:* 1,000,000,000 (Fixed)\n\n📮 *CONTRACT ADDRESS:*\n\`${CONTRACTS.mtc.address}\`\n\n🔍 ${formatClickableLink('VERIFY ON BSCSCAN', CONTRACTS.mtc.bscscan)}\n\n📊 *TOKENOMICS:*\n• Community & Rewards: 30%\n• Liquidity Pool: 25%\n• LHOPE Fund: 20%\n• Marketing & Growth: 10%\n• Development & Team: 10%\n• Reserve / Exchanges: 5%`;
      break;
      
    case 'contracts':
      reply = `📜 *ALL MUMMYTOKENCOIN CONTRACTS*\n\n${formatContract(CONTRACTS.mtc)}\n\n${formatContract(CONTRACTS.lhopeNft)}\n\n${formatContract(CONTRACTS.lhopeFund)}\n\n━━━━━━━━━━━━━━━━━━━━\n\n✅ *All contracts are verified on BscScan.*\n🔍 *Click any link above to verify instantly.*`;
      break;
      
    case 'donate':
      reply = `💛 *CONTRIBUTE TO LHOPE FUND*\n\nEvery contribution, no matter how small, helps fight liver disease worldwide.\n\n📮 *LHOPE FUND WALLET:*\n\`${CONTRACTS.lhopeFund.address}\`\n\n🔍 ${formatClickableLink('VERIFY ON BSCSCAN', CONTRACTS.lhopeFund.bscscan)}\n\n🎨 *ALTERNATIVE: MINT AN NFT*\nInstead of donating directly, mint an LHOPE Memorial NFT:\n🔗 ${formatClickableLink('https://mint.mummytokencoin.com', 'https://mint.mummytokencoin.com')}\n\n*70% of every mint automatically goes to the LHOPE Fund!*\n\n━━━━━━━━━━━━━━━━━━━━\n*Thank you for supporting liver health research!* 💛`;
      break;
      
    case 'info':
      reply = getInfoMessage();
      break;
      
    case 'help':
      reply = getHelpMessage();
      break;
      
    default:
      reply = getHelpMessage();
  }
  
  await sendMessage(chatId, reply);
  await answerCallbackQuery(callbackQuery.id);
}

// ============================================================
// VERCEL SERVERLESS FUNCTION HANDLER (NO API FOLDER)
// ============================================================
module.exports = async (req, res) => {
  // Handle GET requests (browser visits for testing)
  if (req.method === 'GET') {
    res.status(200).json({
      status: '✅ MUMMYTOKENCOIN Telegram Bot is LIVE!',
      bot: '@MUMMYTOKENCOIN_bot',
      version: '2.0.0',
      contracts: {
        mtc: CONTRACTS.mtc.bscscan,
        lhopeNft: CONTRACTS.lhopeNft.bscscan,
        lhopeFund: CONTRACTS.lhopeFund.bscscan
      },
      links: {
        website: 'https://mummytokencoin.com',
        mintDapp: 'https://mint.mummytokencoin.com'
      },
      commands: ['/start', '/website', '/mint', '/lhope', '/mtc', '/contracts', '/donate', '/info']
    });
    return;
  }

  // Handle POST requests (Telegram webhook)
  if (req.method === 'POST') {
    try {
      const update = req.body;
      
      // Handle callback queries (button clicks)
      if (update.callback_query) {
        await handleCallbackQuery(update.callback_query);
        res.status(200).json({ ok: true });
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
            reply = `🌐 *MUMMYTOKENCOIN MAIN WEBSITE*\n\n🔗 ${formatClickableLink('Click Here to Visit', 'https://mummytokencoin.com')}`;
            break;
          case '/mint':
            reply = `🎨 *LHOPE MEMORIAL NFTs*\n\n🔗 ${formatClickableLink('Start Minting Now', 'https://mint.mummytokencoin.com')}\n\n📄 ${formatClickableLink('Verify NFT Contract', CONTRACTS.lhopeNft.bscscan)}`;
            break;
          case '/lhope':
            reply = `🏦 *LHOPE FUND WALLET*\n\n\`${CONTRACTS.lhopeFund.address}\`\n\n🔍 ${formatClickableLink('Verify on BscScan', CONTRACTS.lhopeFund.bscscan)}`;
            break;
          case '/mtc':
            reply = `📄 *$$MTC TOKEN CONTRACT*\n\n\`${CONTRACTS.mtc.address}\`\n\n🔍 ${formatClickableLink('Verify on BscScan', CONTRACTS.mtc.bscscan)}`;
            break;
          case '/contracts':
            reply = `📜 *ALL CONTRACTS*\n\n${formatContract(CONTRACTS.mtc)}\n\n${formatContract(CONTRACTS.lhopeNft)}\n\n${formatContract(CONTRACTS.lhopeFund)}`;
            break;
          case '/donate':
            reply = `💛 *DONATE TO LHOPE FUND*\n\n\`${CONTRACTS.lhopeFund.address}\`\n\n🔍 ${formatClickableLink('Verify on BscScan', CONTRACTS.lhopeFund.bscscan)}`;
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
      
      res.status(200).json({ ok: true });
    } catch (error) {
      console.error('Webhook error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
    return;
  }
  
  res.status(405).json({ error: 'Method Not Allowed' });
};