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
const { Client, GatewayIntentBits } = require("discord.js");
const { Comm
