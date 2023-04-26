const Discord = require('discord.js');

module.exports = {
  name: 'falsesay',
  description: 'Type something to an user say (use with moderation)',
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'user',
      description: 'Mention the user you want to say something',
      type: Discord.ApplicationCommandOptionType.User,
      required: true,
    },
    {
      name: 'message',
      description: 'Type the text you want to the user say.',
      type: Discord.ApplicationCommandOptionType.String,
      required: true,
    },
  ],

  run: async (client, interaction) => {
    const { options } = interaction;

    const member = options.getUser('user');
    const message = options.getString('message');

    interaction.channel.createWebhook({
      name: member.username,
      avatar: member.displayAvatarURL({ dynamic: true }),
    })
      .then((webhook) => {
        webhook.send({ content: message });
        setTimeout(() => {
          webhook.delete();
        }, 3000);
      });

    interaction.reply({ content: 'Fake say done with success!', ephemeral: true });
  },
};
