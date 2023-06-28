import {sendMessage} from './lib/telegram.js';

class Telegram {
  constructor({accessToken}) {
    if (!accessToken) {
      throw new Error('Please provide Telegram bot access token');
    }
    this.accessToken = accessToken;
  }
  sendMessage = ({chat_id, text, ...options}) => {
    if (!this.accessToken) {
      throw new Error('Please provide Telegram bot access token first');
    }
    return sendMessage({
      accessToken: this.accessToken,
      chat_id,
      text,
      ...options,
    });
  };
}

export {Telegram};
