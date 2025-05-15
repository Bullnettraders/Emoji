const { Listener } = require('@sapphire/framework');
const greetings = require('../config/greetings.json');

class MessageCreateListener extends Listener {
  constructor(context, options) {
    super(context, {
      ...options,
      event: 'messageCreate'
    });
  }

  async run(message) {
    if (message.author.bot) return;

    const content = message.content.toLowerCase();

    for (const word of greetings.words) {
      if (content.includes(word)) {
        try {
          await message.react(greetings.emoji); // NUR reagieren mit Emoji
          break;
        } catch (error) {
          console.error('Fehler beim Emoji-Reagieren:', error);
        }
      }
    }
  }
}

module.exports = {
  MessageCreateListener
};
