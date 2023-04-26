const Discord = require('discord.js');
const generator = require('generate-password');

module.exports = {
  name: 'password',
  description: 'Generate a random password for the user.',
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    const { user } = interaction;
    const password = generator.generate({
      length: 12,
      numbers: true,
    });
    const embed = new Discord.EmbedBuilder()
      .setColor('Random')
      .setDescription('✅ The password has been generated, look at your DM.');

    const embedPass = new Discord.EmbedBuilder()
      .setColor('Random')
      .setDescription(
        `❗Here is your generated password: \`${password}\`, keep in a safe place. `,
      );

    try {
      user.send({ embeds: [embedPass] }).then(() => {
        interaction.reply({ embeds: [embed], ephemeral: true });
      });
    } catch (err) {
      const emb = new Discord.EmbedBuilder()
        .setColor('Red')
        .setDescription(
          '❌ Oops! Something went wrong',
        );

      interaction.reply({ embeds: [emb] });
    }
  },
};
