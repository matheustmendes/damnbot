/* eslint-disable no-lonely-if */
const Discord = require('discord.js');

module.exports = {
  name: 'clear',
  description: 'Clear the messages of the channel.',
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'amount',
      description: '❓ Set the amount of messages to be cleared',
      type: Discord.ApplicationCommandOptionType.Number,
      required: true,
    },
  ],

  run: async (client, interaction) => {
    const number = interaction.options.getNumber('amount');

    if (
      !interaction.member.permissions.has(
        Discord.PermissionFlagsBits.ManageMessages,
      )
    ) {
      interaction.reply({
        content: '❌ You are not allowed to use this command.',
        ephemeral: true,
      });
    } else {
      if (parseInt(number) > 99 || parseInt(number) < 1) {
        const embed = new Discord.EmbedBuilder()
          .setColor('Random')
          .setDescription('`❓ Choose a number between [1-99]`');
        interaction.reply({ embeds: [embed] });
      } else {
        interaction.channel.bulkDelete(parseInt(number));

        const embed = new Discord.EmbedBuilder()
          .setColor('Random')
          .setAuthor({
            name: interaction.guild.name,
            iconURL: interaction.guild.iconURL({ dynamic: true }),
          })
          .setDescription(
            `❗ The channel ${interaction.channel}, had \`${number}\` messages deleted by \`@${interaction.user.username}\``,
          );

        interaction.reply({ embeds: [embed] });
        const deleteMessage = 'yes';

        if (deleteMessage === 'yes') {
          setTimeout(() => {
            interaction.deleteReply();
          }, 3000);
        } else if (deleteMessage === 'no') {

        }
      }
    }
  },
};
