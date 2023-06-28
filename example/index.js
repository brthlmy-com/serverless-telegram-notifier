import { Telegram } from '../src/index.js';


const telegram = new Telegram({
  accessToken: '123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11',
})

const telegramMessage = await telegram.sendMessage({
  chat_id: '-123456789',
  text: 'Hello World',
  parse_mode: 'HTML',
  disable_web_page_preview: true,
})

console.log(`telegramMessage: ${JSON.stringify(telegramMessage)}`)
