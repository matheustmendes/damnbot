const Discord = require('discord.js');

module.exports = {
  name: 'ban',
  description: 'Ban a user.',
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'user',
      description: 'Mention the user to be banned.',
      type: Discord.ApplicationCommandOptionType.User,
      required: true,
    },
    {
      name: 'reason',
      description: 'Tell the reason for ban the user.',
      type: Discord.ApplicationCommandOptionType.String,
      required: true,
    },
  ],

  run: async (client, interaction) => {
    if (
      !interaction.member.permissions.has(
        Discord.PermissionFlagsBits.BanMembers,
      )
    ) {
      interaction.reply("❌ You don't have permission to ban a member.");
    } else {
      const userName = interaction.options.getUser('user');
      const user = interaction.guild.members.cache.get(userName.id);
      const reason = interaction.options.getString('reason');

      const embed = new Discord.EmbedBuilder()
        .setColor('Random')
        .setDescription(`❗ The user ${userName} (\`${user.id}\`) has been banned.`);

      const embedError = new Discord.EmbedBuilder()
        .setColor('Red')
        .setDescription('❌ Oops.. Something went wrong!');

      user
        .ban({ reason: [reason] })
        .then(() => {
          interaction.reply({ embeds: [embed] });
        })
        .catch((err) => {
          interaction.reply({ embeds: [embedError] });
        });
    }
  },
};
