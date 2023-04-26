# damnbot
Discord Bot made in NodeJS, using Discord.JS V14.


Este é um bot do Discord desenvolvido em Node.js com base na biblioteca Discord.js v14. Ele usa várias APIs auxiliares, como Figlet, The Cat API, Generate Password e OpenAI API. O bot é capaz de executar vários comandos divididos em categorias.

### Comandos do Bot

#### Comandos de Administração:

- `ban`: Este comando é usado para banir um membro do servidor.
- `clear`: Este comando é usado para limpar mensagens do canal.
- `kick`: Este comando é usado para expulsar um membro do servidor.
- `lockChannel`: Este comando é usado para bloquear um canal no servidor.
- `unban`: Este comando é usado para desbanir um membro do servidor.
- `unlockChannel`: Este comando é usado para desbloquear um canal no servidor.

#### Comandos de Jogos:

- `Rock, paper and scissors!`: Este comando permite jogar pedra, papel e tesoura.

#### Comandos de Usuário:

- `asciisay`: Este comando converte o texto em arte ASCII.
- `cat`: Este comando mostra uma imagem aleatória de um gato.
- `falsesay`: Este comando faz o bot enviar uma mensagem como se fosse de outro usuário.
- `genpass`: Este comando gera uma senha aleatória.
- `gpt`: Este comando gera um texto usando a API do OpenAI.
- `say`: Este comando faz o bot dizer algo.
- `sugestions`: Este comando permite aos usuários enviar sugestões para o servidor.

#### Comandos de Utilidades:

- `botinfo`: Este comando mostra informações sobre o bot.
- `help`: Este comando mostra a lista de comandos disponíveis.
- `infomember`: Este comando mostra informações sobre um membro do servidor.
- `infoserver`: Este comando mostra informações sobre o servidor.
- `ping`: Este comando verifica o ping do bot.

### Como executar o Bot

Para executar o bot, é necessário criar um arquivo `config.json` na raiz do projeto com as variáveis de ambiente necessárias. Em seguida, execute o comando `npm install` para instalar as dependências e, por fim, execute o comando `node index.js` para iniciar o bot.



---------------------------------------------------------


This is a Discord bot built with Node.js using the Discord.js v14 library. It uses various helper APIs such as Figlet, The Cat API, Generate Password, and OpenAI API. The bot is capable of executing several commands divided into categories.

### Bot Commands

#### Admin Commands:

- `ban`: This command is used to ban a member from the server.
- `clear`: This command is used to clear messages from a channel.
- `kick`: This command is used to kick a member from the server.
- `lockChannel`: This command is used to lock a channel on the server.
- `unban`: This command is used to unban a member from the server.
- `unlockChannel`: This command is used to unlock a channel on the server.

#### Games Commands:

- `Rock, paper and scissors!`: This command allows playing rock, paper, and scissors.

#### User Commands:

- `asciisay`: This command converts text into ASCII art.
- `cat`: This command shows a random picture of a cat.
- `falsesay`: This command makes the bot send a message as if it was from another user.
- `genpass`: This command generates a random password.
- `gpt`: This command generates text using the OpenAI API.
- `say`: This command makes the bot say something.
- `sugestions`: This command allows users to send suggestions to the server.

#### Utility Commands:

- `botinfo`: This command shows information about the bot.
- `help`: This command shows the list of available commands.
- `infomember`: This command shows information about a member of the server.
- `infoserver`: This command shows information about the server.
- `ping`: This command checks the bot's ping.

### How to Run the Bot

To run the bot, you need to create a `config.json` file in the project's root directory with the necessary environment variables. Then, run the `npm install` command to install the dependencies, and finally, run the `node index.js` command to start the bot.
