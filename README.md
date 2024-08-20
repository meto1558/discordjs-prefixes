# Discord.js Prefix Command Helper
Why? Actually, I developed this library because I don't like slash commands and prefix commands are not officially supported. Have fun.

## Usage
First install discord.js and this package using **npm**.
```bash
npm install discord.js discordjs-prefixes
```
You can write commands in a single file or categorize them. I recommend categorizing them, it is easier to manage.
Next, write your bot code and integrate prefix commands.
```js
// This is an example, I will code the categorized command example later.
const { Client, GatewayIntentBits } = require("discord.js");
const { CommandManager, PrefixCommandBuilder } = require("discordjs-prefixes");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const cmdManager = new CommandManager(client, {
    prefix: "?" // You can change this
});

// Create a command
const myCommand = new PrefixCommandBuilder()
    .setName("hello")
    .runCommand((ctx) => {
        ctx.send("This is a prefix command written with meto1558's command manager!");
    });

// Registering command(s)
cmdManager.registerCommands(myCommand); // and more...

// Login the Discord Gateway
client.login("YOUR_DISCORD_BOT_TOKEN");
```
Run the bot.
```bash
node your_app.js
```
![Test command](https://cdn.discordapp.com/attachments/1103629924549541930/1275123317535277167/image.png?ex=66c4bea1&is=66c36d21&hm=38e0d921ba59330fd842c3e0eb3235ea0cfb3b4f2cef647f224b8cb12d3789c4&)

**Have fun**.

# Reminder
This project is subject to [MIT](https://mit-license.org/) license. Please use the project within the license rules.

## Contributing
I really need some help :c Anyway, feel free to contribute to this project, I always accept help from nice people.
### Steps
- Create a new fork.
- Open the project in a code editor (like VS Code).
- Add/modify some code.
- Commit and push your changes to your forked repository.
- Create a new pull request using your forked repository.
- Wait for your pull request to be accepted.
- Done!
