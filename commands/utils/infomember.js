const Discord = require('discord.js');

module.exports = {
  name: 'userinfo',
  description: 'See the information about the mentioned user.',
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'user',
      description: 'Mention the user to see his info.',
      type: Discord.ApplicationCommandOptionType.User,
      required: false,
    },
  ],

  run: async (client, interaction) => {
    const user = interaction.options.getUser('user') || interaction.user;

    const name = user.username;
    const { id } = user;
    const icon = user.displayAvatarURL({ dynamic: true });
    const date = user.createdAt.toLocaleDateString();
    const hour = user.createdAt.toLocaleTimeString();

    const embed = new Discord.EmbedBuilder()
      .setColor('Random')
      .setTimestamp(new Date())
      .setThumbnail(icon)
      .addFields(
        {
          name: '🏷️ Name:', value: `\` ${name[0].toUpperCase() + name.substring(1)}\``, inline: true,
        },
        {
          name: '🆔 ID:', value: `\`${id}\``, inline: true,
        },
        {
          name: '📅 Account Creation Date', value: `${date} | ${hour}`, inline: true,
        },

      );

    interaction.reply({ embeds: [embed] });
  },
};
