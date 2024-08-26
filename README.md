# Discord.js Prefix Command Helper
Why? Actually, I developed this library because I don't like slash commands and prefix commands are not officially supported. Have fun.

## Usage
First, install discord.js and this package using **npm**.
```bash
npm install discord.js discordjs-prefixes
```
You can write commands in a single file or categorize them. I recommend categorizing them, it is easier to manage.
Next, write your bot code and integrate prefix commands.
```js
// This is an example, I will code the categorized command example later.
const { Client, GatewayIntentBits } = require("discord.js");
const { PrefixCommandManager, PrefixCommandBuilder, CommandParameterTypes } = require("discordjs-prefixes");

// Initialize the Discord client with the necessary intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Initialize the command manager with a custom prefix
const cmdManager = new PrefixCommandManager(client, {
    prefix: "?" // You can change this
});

// Ready event, triggered when the bot is logged in and ready
client.on("ready", () => {
    console.log(`${client.user.tag} is ready and online!`);
});

// Create a basic command without parameters (options)
const helloCommand = new PrefixCommandBuilder()
    .setName("hello")
    .runCommand((ctx) => {
        ctx.send("This is a prefix command written with meto1558's command manager!");
    });

// Create a command with parameters (options)
const meCommand = new PrefixCommandBuilder()
    .setName("me")
    .addOptions(
        { name: "myName", type: "string" },
        { name: "myAge", type: "number" }
    )
    .runCommand((ctx) => {
        const name = ctx.options.getStringOption("myName");
        const age = ctx.options.getNumberOption("myAge");
        if (!name || !age) {
            ctx.reply("Please enter your name and age!");
            return;
        }
        ctx.send(`Hi, my name is ${name} and I am ${age} years old!`);
    });

// Example of long text option
// Note: Long text must be of type string and can only be added as the last option.
const messageCommand = new PrefixCommandBuilder()
    .setName("message")
    .addOptions(
        { name: "message", type: CommandParameterTypes.String, isLongText: true }
    )
    .runCommand((ctx) => {
        const userMessage = ctx.options.getStringOption("message");
        if (!userMessage) {
            ctx.reply("Please enter a message!"); // For example 'This command manager is so beautiful!'
            return;
        }
        ctx.send(userMessage);
    });

// Register the commands with the command manager
cmdManager.registerCommands(helloCommand, meCommand, messageCommand);

// Login the Discord client with your bot's token
client.login("DISCORD_BOT_TOKEN");
```
Run the bot.
```bash
node your_app.js
```
![Test command](https://cdn.discordapp.com/attachments/1103629924549541930/1275123317535277167/image.png?ex=66c4bea1&is=66c36d21&hm=38e0d921ba59330fd842c3e0eb3235ea0cfb3b4f2cef647f224b8cb12d3789c4&)

## Option Types
Supported parameter (option) types are:
```js
CommandParameterTypes.String // Example usage : if it is long text : ?command This is long text type | if it isn't long text : ?command Lora
CommandParameterTypes.Number // Example usage : ?command 25
CommandParameterTypes.Channel // Example usage : ?command #channel
CommandParameterTypes.Member // Example usage : ?command @guildMember
CommandParameterTypes.User // Example usage : ?command @user
CommandParameterTypes.Role // Example usage : ?command @guildRole
```

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
