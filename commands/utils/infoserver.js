const Discord = require('discord.js');

module.exports = {
  name: 'serverinfo',
  description: 'See the information about server.',
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    const { guild } = interaction;
    const { name } = guild;
    const { id } = guild;
    const icon = guild.iconURL({ dynamic: true });
    const roles = guild.roles.cache.size;
    const channels = guild.channels.cache.size;
    const members = guild.memberCount;
    const emojis = guild.emojis.cache.size;
    const owner = guild.ownerId;
    const date = guild.createdAt.toLocaleDateString();
    const hour = guild.createdAt.toLocaleTimeString();
    const embedGuild = new Discord.EmbedBuilder()
      .setColor('Random')
      .setFields(
        { name: '🏷️ Name:', value: `\`${name}\``, inline: true },
        { name: '🆔 ID:', value: `\`${id}\``, inline: true },
        { name: '👑 Owner:', value: `<@${owner}>`, inline: true },
        { name: '👥 Members:', value: `\`${members}\``, inline: true },
        { name: '🙂 Emojis:', value: `\`${emojis}\``, inline: true },
        { name: '💻 Channels:', value: `\`${channels}\``, inline: true },
        { name: '👜 Roles:', value: `\`${roles}\``, inline: true },
        { name: '📅 Server Creation Date:', value: `\`${date} | ${hour}\``, inline: true },
      )
      .setThumbnail(icon);

    interaction.reply({ embeds: [embedGuild] });
  },
};
