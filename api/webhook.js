// ============================================================
// MUMMYTOKENCOIN TELEGRAM BOT - Cloudflare Pages Function
// Bot Username: @MUMMYTOKENCOIN_bot
// Deployed to: mummytokencoin-bot.pages.dev
// ============================================================

const BOT_TOKEN = '8598861633:AAFqZ2Xm77FSQ6wlxpBJZJ80TpNsb3eAXlo';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

// Contract addresses and links
const CONTRACTS = {
  mtc: {
    address: '0x17b1FBa5f8110929580a015703F2Ab2a1223F99f',
    bscscan: 'https://bscscan.com/token/0x17b1FBa5f8110929580a015703F2Ab2a1223F99f',
    name: '$MTC Token'
  },
  lhopeNft: {
    address: '0x5A3CaDB539b96cC461a5219C956F8106165BC4ae',
    bscscan: 'https://bscscan.com/address/0x5A3CaDB539b96cC461a5219C956F8106165BC4ae',
    name: 'LHOPE Memorial NFT Contract'
  },
  lhopeFund: {
    address: '0x31A589c29b3161A09b4fdea9d941c6BA6077f472',
    bscscan: 'https://bscscan.com/address/0x31A589c29b3161A09b4fdea9d941c6BA6077f472',
    name: 'LHOPE Fund Wallet'
  }
};

// Format contract message with clickable links
function formatContract(contract) {
  return `*${contract.name}:*\n\`${contract.address}\`\n[🔍 View on BscScan](${contract.bscscan})`;
}

// Get start message
function getStartMessage() {
  return `*✨ MUMMYTOKENCOIN ($MTC) ✨*

*Built in memory. Powered by hope.*

Welcome to the official MUMMYTOKENCOIN Telegram Bot. I'm here to help you explore our blockchain project dedicated to liver health awareness.

━━━━━━━━━━━━━━━━━━━━

*📊 Quick Stats*
• Total Supply: 1,000,000,000 MTC
• Network: BNB Smart Chain (BEP-20)
• 70% of NFT mints → LHOPE Fund

━━━━━━━━━━━━━━━━━━━━

*🔗 Important Links*
• 🌐 Main Website: mummytokencoin.com
• 🎨 Mint NFTs: mint.mummytokencoin.com
• 🏦 LHOPE Fund: [View on BscScan](${CONTRACTS.lhopeFund.bscscan})
• 📄 $$MTC Token: [View on BscScan](${CONTRACTS.mtc.bscscan})
• 📄 LHOPE NFT: [View on BscScan](${CONTRACTS.lhopeNft.bscscan})

━━━━━━━━━━━━━━━━━━━━

*📱 Use the buttons below to explore:*`;
}

// Get info message
function getInfoMessage() {
  return `*ℹ️ About MUMMYTOKENCOIN*

MUMMYTOKENCOIN ($MTC) is a premium, purpose-driven blockchain ecosystem designed to unite humanitarian responsibility, ethical finance, and decentralized technology.

━━━━━━━━━━━━━━━━━━━━

*🎯 Mission:*
Transform grief into hope by creating transparent, verifiable funding for liver health research worldwide.

━━━━━━━━━━━━━━━━━━━━

*💛 The Three Pillars:*
1. *Love* — The Foundation (memory of founder's mother)
2. *Hope* — The Mission (LHOPE Initiative)
3. *Business* — The Engine (sustainable tokenomics)

━━━━━━━━━━━━━━━━━━━━

*📊 Verified Contracts:*
• $$MTC Token: [BscScan](${CONTRACTS.mtc.bscscan})
• LHOPE NFT: [BscScan](${CONTRACTS.lhopeNft.bscscan})
• LHOPE Fund: [BscScan](${CONTRACTS.lhopeFund.bscscan})

━━━━━━━━━━━━━━━━━━━━

*Built in memory. Powered by hope.* 🙏`;
}

// Get help message
function getHelpMessage() {
  return `*🤖 Available Commands*

Use these commands to explore MUMMYTOKENCOIN:

━━━━━━━━━━━━━━━━━━━━

*/start* - Welcome message with all links
*/website* - Main website
*/mint* - NFT minting DApp
*/lhope* - LHOPE Fund wallet
*/mtc* - $$MTC token contract
*/contracts* - All contract addresses
*/donate* - Donation instructions
*/info* - Project overview

━━━━━━━━━━━━━━━━━━━━

*📱 Use the buttons below for quick access!*`;
}

// Get inline keyboard for start message
function getInlineKeyboard() {
  return {
    inline_keyboard: [
      [
        { text: "🌐 Website", callback_data: "website" },
        { text: "🎨 Mint NFT", callback_data: "mint" }
      ],
      [
        { text: "🏦 LHOPE Fund", callback_data: "lhope" },
        { text: "📄 $MTC", callback_data: "mtc" }
      ],
      [
        { text: "📄 All Contracts", callback_data: "contracts" },
        { text: "💰 Donate", callback_data: "donate" }
      ],
      [
        { text: "ℹ️ Info", callback_data: "info" }
      ]
    ]
  };
}

// Get help keyboard
function getHelpKeyboard() {
  return {
    inline_keyboard: [
      [
        { text: "🌐 Website", callback_data: "website" },
        { text: "🎨 Mint NFT", callback_data: "mint" }
      ],
      [
        { text: "🏦 LHOPE Fund", callback_data: "lhope" },
        { text: "📄 $MTC", callback_data: "mtc" }
      ]
    ]
  };
}

// Send message to Telegram
async function sendMessage(chatId, text, parseMode = 'Markdown', replyMarkup = null) {
  const payload = {
    chat_id: chatId,
    text: text,
    parse_mode: parseMode,
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

// Answer callback query
async function answerCallbackQuery(callbackQueryId) {
  await fetch(`${TELEGRAM_API}/answerCallbackQuery`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ callback_query_id: callbackQueryId })
  });
}

// Handle callback queries
async function handleCallbackQuery(callbackQuery) {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;
  let reply = '';
  
  switch(data) {
    case 'website':
      reply = `🌐 *MUMMYTOKENCOIN Main Website*\n\nhttps://mummytokencoin.com`;
      break;
    case 'mint':
      reply = `🎨 *LHOPE Memorial NFTs*\n\nMint your tribute:\nhttps://mint.mummytokencoin.com\n\n📄 NFT Contract:\n${CONTRACTS.lhopeNft.bscscan}`;
      break;
    case 'lhope':
      reply = `🏦 *LHOPE Fund Wallet*\n\n\`${CONTRACTS.lhopeFund.address}\`\n\n🔍 ${CONTRACTS.lhopeFund.bscscan}`;
      break;
    case 'mtc':
      reply = `📄 *$$MTC Token Contract*\n\n\`${CONTRACTS.mtc.address}\`\n\n🔍 ${CONTRACTS.mtc.bscscan}`;
      break;
    case 'contracts':
      reply = `📄 *All MUMMYTOKENCOIN Contracts*\n\n${formatContract(CONTRACTS.mtc)}\n\n${formatContract(CONTRACTS.lhopeNft)}\n\n${formatContract(CONTRACTS.lhopeFund)}`;
      break;
    case 'donate':
      reply = `💰 *Donate to LHOPE Fund*\n\nSend BNB or any token to:\n\`${CONTRACTS.lhopeFund.address}\`\n\n🔍 ${CONTRACTS.lhopeFund.bscscan}`;
      break;
    case 'info':
      reply = await getInfoMessage();
      break;
  }
  
  await sendMessage(chatId, reply, 'Markdown');
  await answerCallbackQuery(callbackQuery.id);
}

// Main webhook handler
export async function onRequest(context) {
  const { request } = context;
  
  // Handle GET requests (browser visits)
  if (request.method === 'GET') {
    return new Response(
      '✅ MUMMYTOKENCOIN Bot is running on Cloudflare Pages!\n\n' +
      'Bot Username: @MUMMYTOKENCOIN_bot\n\n' +
      '📊 Verified Contracts:\n' +
      `• $MTC Token: ${CONTRACTS.mtc.bscscan}\n` +
      `• LHOPE NFT: ${CONTRACTS.lhopeNft.bscscan}\n` +
      `• LHOPE Fund: ${CONTRACTS.lhopeFund.bscscan}\n\n` +
      'Commands:\n' +
      '/start - Welcome message\n' +
      '/website - Main website\n' +
      '/mint - Mint NFTs\n' +
      '/lhope - LHOPE Fund\n' +
      '/mtc - $MTC Contract\n' +
      '/contracts - All contracts\n' +
      '/donate - Donate\n' +
      '/info - Project info',
      { 
        status: 200, 
        headers: { 'Content-Type': 'text/plain' }
      }
    );
  }
  
  // Handle POST requests (Telegram webhook)
  if (request.method === 'POST') {
    try {
      const update = await request.json();
      const message = update.message;
      const callbackQuery = update.callback_query;
      
      // Handle callback queries (inline button clicks)
      if (callbackQuery) {
        await handleCallbackQuery(callbackQuery);
        return new Response('OK', { status: 200 });
      }
      
      if (message && message.text) {
        const chatId = message.chat.id;
        const text = message.text.toLowerCase();
        let reply = '';
        let replyMarkup = null;
        
        switch(text) {
          case '/start':
            reply = getStartMessage();
            replyMarkup = getInlineKeyboard();
            break;
          case '/website':
            reply = `🌐 *MUMMYTOKENCOIN Main Website*\n\nhttps://mummytokencoin.com`;
            break;
          case '/mint':
            reply = `🎨 *LHOPE Memorial NFTs*\n\nCreate a permanent blockchain tribute honoring loved ones affected by liver disease.\n\n✨ *Features:*\n• Upload tribute images (IPFS storage)\n• Write memorial messages\n• Select from 195+ countries\n• Permanent on BSC Mainnet\n\n💰 *Pricing:* 0.001 BNB (~$0.60 USD)\n• 70% → LHOPE Fund\n• 30% → Project sustainability\n\n🔗 *Start minting:*\nhttps://mint.mummytokencoin.com\n\n📄 *NFT Contract:*\n${CONTRACTS.lhopeNft.bscscan}`;
            break;
          case '/lhope':
            reply = `🏦 *LHOPE Fund Wallet*\n\nThe LHOPE Fund is the humanitarian heart of MUMMYTOKENCOIN. 70% of every NFT mint goes directly to this wallet.\n\n📮 *Wallet Address:*\n\`${CONTRACTS.lhopeFund.address}\`\n\n🔍 *Verify on BscScan:*\n${CONTRACTS.lhopeFund.bscscan}\n\n📊 *Purpose:*\n• Liver treatment institutes\n• Medical research\n• Global awareness campaigns\n• AI-driven early detection\n\n✅ 100% Transparent | Verifiable On-Chain`;
            break;
          case '/mtc':
            reply = `📄 *$$MTC Token Contract*\n\n*Token Name:* MUMMYTOKENCOIN\n*Symbol:* $$MTC\n*Network:* BNB Smart Chain (BEP-20)\n*Total Supply:* 1,000,000,000 (Fixed)\n\n📮 *Contract Address:*\n\`${CONTRACTS.mtc.address}\`\n\n🔍 *Verify on BscScan:*\n${CONTRACTS.mtc.bscscan}\n\n📊 *Tokenomics:*\n• Community & Rewards: 30%\n• Liquidity Pool: 25%\n• LHOPE Fund: 20%\n• Marketing & Growth: 10%\n• Development & Team: 10%\n• Reserve / Exchanges: 5%`;
            break;
          case '/contracts':
            reply = `📄 *All MUMMYTOKENCOIN Contracts*\n\n${formatContract(CONTRACTS.mtc)}\n\n${formatContract(CONTRACTS.lhopeNft)}\n\n${formatContract(CONTRACTS.lhopeFund)}`;
            break;
          case '/donate':
            reply = `💰 *Contribute to LHOPE Fund*\n\nYou can donate directly to the LHOPE Fund wallet. Every contribution helps fight liver disease worldwide.\n\n📮 *LHOPE Fund Wallet:*\n\`${CONTRACTS.lhopeFund.address}\`\n\n🎨 *Alternative: Mint an NFT*\nInstead of donating directly, mint an LHOPE Memorial NFT:\nhttps://mint.mummytokencoin.com\n\n*70% of every mint automatically goes to the LHOPE Fund!*\n\nThank you for supporting liver health research! 💛`;
            break;
          case '/info':
            reply = getInfoMessage();
            break;
          default:
            reply = getHelpMessage();
            replyMarkup = getHelpKeyboard();
        }
        
        await sendMessage(chatId, reply, 'Markdown', replyMarkup);
      }
      
      return new Response('OK', { status: 200 });
    } catch (error) {
      console.error('Webhook error:', error);
      return new Response('Error', { status: 500 });
    }
  }
  
  return new Response('Method Not Allowed', { status: 405 });
}
