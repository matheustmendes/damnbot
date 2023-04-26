const Discord = require('discord.js');
const figlet = require('figlet');

module.exports = {
  name: 'ascii',
  description: 'Type something to be converted to ASCII',
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'message',
      description: 'Type the message',
      type: Discord.ApplicationCommandOptionType.String,
      required: true,
    },
  ],

  run: async (client, interaction) => {
    const { options } = interaction;
    const message = options.getString('message');

    figlet.text(
      message,
      {
        font: 'Standard',
      },
      async (err, data) => {
        interaction.reply(`\`\`\`${data}\`\`\``);
      },
    );
  },
};
