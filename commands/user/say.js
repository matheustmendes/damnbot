const Discord = require('discord.js');

module.exports = {
  name: 'say',
  description: 'Type something for me to say.',
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'message',
      description: 'Type your message.',
      type: Discord.ApplicationCommandOptionType.String,
      required: true,
    },
  ],

  run: async (client, interaction) => {
    const message = interaction.options.getString('message');
    const { channel } = interaction;
    const user = interaction.user.username;
    const embed = new Discord.EmbedBuilder()
      .setColor('Gold')
      .setDescription('✅ Your message has been sent successfully');

    interaction.reply({ embeds: [embed] });
    setTimeout(() => {
      interaction.deleteReply();
    }, 5000);

    const embedMessage = new Discord.EmbedBuilder()
      .setColor('Blurple')
      .setDescription(`${message}`)
      .setFooter({
        text: `Command Requested by: ${interaction.user.tag}`,
        iconURL: interaction.user.displayAvatarURL(),
      });

    channel.send({ embeds: [embedMessage] });
  },
};
