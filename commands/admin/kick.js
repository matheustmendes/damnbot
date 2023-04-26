const Discord = require('discord.js');

module.exports = {
  name: 'kick',
  description: 'Kick a user.',
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'user',
      description: 'Mention a user to be kicked.',
      type: Discord.ApplicationCommandOptionType.User,
      required: true,
    },
    {
      name: 'reason',
      description: 'Reason for the user to be kicked.',
      type: Discord.ApplicationCommandOptionType.String,
      required: true,
    },
  ],

  run: async (client, interaction) => {
    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.KickMembers)) {
      const embedError = new Discord.EmbedBuilder()
        .setColor('DarkRed')
        .setDescription('❌ You don\'t have permission to use this command.');

      interaction.reply({ embeds: [embedError] });
    } else {
      const userName = interaction.options.getUser('user');
      const user = interaction.guild.members.cache.get(userName.id);
      const reason = interaction.options.getString('reason');

      const embed = new Discord.EmbedBuilder()
        .setColor('Green')
        .setDescription(`❗ The user ${userName} has been kicked out.\nReason: \`${reason}\``);

      const errorEmbed = new Discord.EmbedBuilder()
        .setColor('Red')
        .setDescription('❌ Oops.. Something went wrong!');

      user.kick({ reason: [reason] })
        .then(() => {
          interaction.reply({ embeds: [embed] });
        }).catch(() => {
          interaction.reply({ embeds: [errorEmbed] });
        });
    }
  },
};
