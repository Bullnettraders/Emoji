const { SapphireClient } = require('@sapphire/framework');
const { GatewayIntentBits, Partials } = require('discord.js');

const client = new SapphireClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});

client.login(process.env.TOKEN);
