const Discord = require('discord.js');

module.exports = {
  name: 'suggestion',
  description: 'Do a suggestion.',
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'text',
      description: 'Type your suggestion',
      type: Discord.ApplicationCommandOptionType.String,
      required: true,
    },
  ],

  run: async (client, interaction) => {
    const channel = interaction.guild.channels.cache.get('1079380528341471283');

    if (!channel) {
      interaction.reply({ content: `❌ Oops, ${interaction.user}. This isn't the suggestion channel.` });
    } else {
      const suggestion = interaction.options.getString('text');

      const embed = new Discord.EmbedBuilder()
        .setTitle('✅ New Suggestion')
        .setColor('Green')
        .addFields(
          {
            name: '❗Suggestion:', value: `${suggestion}`,
          },
          {
            name: 'Author:', value: `${interaction.user}`,
          },
        )
        .setFooter(interaction.guild.iconURL({ dynamic: true }))
        .setTimestamp(new Date());

      channel.send({ embeds: [embed] }).then(() => {
        interaction.reply(`❗ Hi, ${interaction.user}, your suggestion was sent in ${channel} sucessfully.`);
      }).catch(() => {
        interaction.reply('❌ Oops, something went wrong.');
      });

      setTimeout(() => {
        interaction.deleteReply();
      }, 5500);
    }
  },
};
