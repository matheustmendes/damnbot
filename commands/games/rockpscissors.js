const Discord = require('discord.js');

module.exports = {
  name: 'rps',
  description: 'Play Rock, Paper, Scissors w/ bot.',
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'option',
      description: 'Throw your play',
      type: Discord.ApplicationCommandOptionType.String,
      required: true,
      options: [
        {
          name: 'Rock',
          value: 'rock',
        },
        {
          name: 'Paper',
          value: 'paper',
        },
        {
          name: 'Scissors',
          value: 'scissors',
        },
      ],
    },
  ],

  run: async (client, interaction) => {
    const plays = interaction.options.getString('option');
    const choices = ['rock', 'paper', 'scissors'];

    if (!choices.includes(plays)) {
      interaction.reply('❌ Oops! Please, select rock, paper or scissors');
    } else {
      const botChoice = choices[Math.floor(Math.random() * choices.length)];

      let result;

      if (plays === choices) {
        result = 'Tie!';
      } else if (
        (plays === 'rock' && botChoice === 'scissors')
        || (plays === 'paper' && botChoice === 'rock')
        || (plays === 'scissors' && botChoice === 'paper')) {
        result = '❗You win!';
      } else {
        result = '❌ You lose.';
      }

      const embed = new Discord.EmbedBuilder()
        .setColor('Random')
        .setTimestamp(new Date())
        .setTitle('🪨 Rock, 📜 Paper, ✂️ Scissors')
        .addFields(
          {
            name: '✅ Your play:', value: `${plays}`,
          },
          {
            name: '✅ My play:', value: `${botChoice}`,
          },
          {
            name: '❓ Result', value: `${result}`,
          },
        );

      interaction.reply({ embeds: [embed] });
    }
  },
};
