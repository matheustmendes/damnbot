const Discord = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'See the bot latency.',
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    const { ping } = client.ws;

    const embedLoading = new Discord.EmbedBuilder()
      .setAuthor({
        name: client.user.username,
        iconURL: client.user.displayAvatarURL({ dynamic: true }),
      })
      .setDescription(`❗ Hi, ${interaction.user}, my latency is \`loading...\``)
      .setColor('Random');

    const embedSend = new Discord.EmbedBuilder()
      .setAuthor({
        name: client.user.username,
        iconURL: client.user.displayAvatarURL({ dynamic: true }),
      })
      .setDescription(`❗ Hi, ${interaction.user}, my latency is ${ping}ms`)
      .setColor('Random');

    interaction.reply({ embeds: [embedLoading] }).then(() => {
      setTimeout(() => {
        interaction.editReply({ embeds: [embedSend] });
      }, 2000);
    });
  },
};
