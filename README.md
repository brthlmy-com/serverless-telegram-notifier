# @brthlmy/serverless-telegram-notifier

Serverless netlify plugin to send notifications via telegram

## Prerequisite

* How to create and setup bot for Telegram see here <https://core.telegram.org/bots/api#authorizing-your-bot>.

## Usage:

```javascript
import { Telegram } from "@brthlmy/serverless-telegram-notifier"

// initialize with authorization access token for telegram bot
const telegram = new Telegram({
  accessToken: '123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11',
})
```

### Send message

```javascript
// for sending messages to Telegram required options are "chat_id" and "text"
// other options which provide to use Telegram API are optional

const telegramMessage = await telegram.sendMessage({
  chat_id: '-123456789',
  text: 'Hello World',
  parse_mode: 'HTML',
  disable_web_page_preview: true,
})

console.log(`telegramMessage: ${JSON.stringify(telegramMessage)}`)
```


