const Discord = require('discord.js');

module.exports = {
  name: 'botinfo',
  description: 'See the info of the damnBot.',
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    const owner = '709940317318807583';
    const servers = client.guilds.cache.size;
    const members = client.users.cache.size;
    const channels = client.channels.cache.size;
    const bot = client.user.tag;
    const avatar = client.user.displayAvatarURL({ dynamic: true });
    const language = 'Wrote in Javascript';
    const library = 'Based in D.JS V14';
    const { ping } = client.ws;

    const embed = new Discord.EmbedBuilder()
      .setColor('Random')
      .setAuthor({ name: bot, iconURL: avatar })
      .setTimestamp(new Date())
      .setThumbnail(avatar)
      .setTitle('Hi, see my infos!')
      .addFields(
        {
          name: '🤖 Name',
          value: `${bot}`,
          inline: true,
        },
        {
          name: '🤖 Owner',
          value: `${client.users.cache.get(owner)}`,
          inline: true,
        },
        {
          name: '⚙ Members',
          value: `${members}`,
          inline: true,
        },

      )
      .addFields(
        {
          name: '⚙ Servers', value: `${servers}`, inline: true,
        },
        {
          name: '⚙ Channels', value: `${channels}`, inline: true,
        },

        {
          name: '⚙ Ping', value: `${ping}ms`, inline: true,
        },
      )
      .addFields(
        {
          name: '📚 Language', value: `${language}`, inline: true,
        },
        {
          name: '📚 Library', value: `${library}`, inline: true,
        },
      );

    interaction.reply({ embeds: [embed] });
  },
};
