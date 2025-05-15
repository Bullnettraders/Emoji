const { Listener } = require('@sapphire/framework');

class ReadyListener extends Listener {
  constructor(context, options) {
    super(context, {
      ...options,
      once: true,
      event: 'ready'
    });
  }

  run(client) {
    console.log(`✅ Bot ist online als ${client.user.tag}`);
  }
}

module.exports = {
  ReadyListener
};
