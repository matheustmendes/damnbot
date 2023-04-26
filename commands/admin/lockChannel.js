const Discord = require('discord.js');

module.exports = {
  name: 'lock',
  description: 'Lock the mentioned channel.',
  type: Discord.ApplicationCommandType.ChatInput,
  options: [{

    name: 'channel',
    description: 'Mention the channel to be locked',
    type: Discord.ApplicationCommandOptionType.Channel,
    required: true,

  }],

  run: async (client, interaction) => {
    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageChannels)) {
      const embedError = new Discord.EmbedBuilder()
        .setColor('DarkRed')
        .setDescription('❌ You don\'t have permission to use this command.');

      interaction.reply({ embed: [embedError], ephemeral: true });
    } else {
      const channel = interaction.options.getChannel('channel');

      channel.permissionOverwrites.edit(interaction.guild.id, { SendMessages: false }).then(() => {
        interaction.reply({ content: `🔒 The channel ${channel} has been locked.` });
      }).catch(() => {
        interaction.reply('❌ Oops.. something went wrong!');
      });

      setTimeout(() => {
        interaction.deleteReply();
      }, 12000);
    }
  },
};
