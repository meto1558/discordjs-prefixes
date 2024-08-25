"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrefixCommandManager = exports.PrefixCommandBuilder = exports.CommandContext = exports.ContextOptions = exports.ParameterError = exports.CommandParameterTypes = exports.PrefixCommandBuilderSettings = void 0;
let sharedOptionList = [];
class PrefixCommandBuilderSettings {
}
exports.PrefixCommandBuilderSettings = PrefixCommandBuilderSettings;
var CommandParameterTypes;
(function (CommandParameterTypes) {
    CommandParameterTypes["String"] = "string";
    CommandParameterTypes["Number"] = "number";
    CommandParameterTypes["User"] = "user";
    CommandParameterTypes["Member"] = "member";
    CommandParameterTypes["Channel"] = "channel";
    CommandParameterTypes["Role"] = "role";
})(CommandParameterTypes || (exports.CommandParameterTypes = CommandParameterTypes = {}));
class ParameterError extends Error {
}
exports.ParameterError = ParameterError;
class ContextOptions {
    constructor() {
        this.specialOptionList = [];
    }
    addOptions(...optionList) {
        this.specialOptionList = optionList;
    }
    getStringOption(name) {
        const option = this.getOption(name);
        const type = this.getOptionType(name);
        if (!option || !type)
            return undefined;
        if (type != "string") {
            throw new ParameterError(`The type of the '${name}' option is ${type}, but it is not being called as ${type}. Are you making a mistake?`);
        }
        return String(option);
    }
    getNumberOption(name) {
        const option = this.getOption(name);
        const type = this.getOptionType(name);
        if (!option || !type)
            return undefined;
        if (type != "number") {
            throw new ParameterError(`The type of the '${name}' option is ${type}, but it is not being called as ${type}. Are you making a mistake?`);
        }
        return Number(option);
    }
    getUserOption(name) {
        const option = this.getOption(name);
        const type = this.getOptionType(name);
        if (!option || !type)
            return undefined;
        if (type != "user") {
            throw new ParameterError(`The type of the '${name}' option is ${type}, but it is not being called as ${type}. Are you making a mistake?`);
        }
        return option;
    }
    getMemberOption(name) {
        const option = this.getOption(name);
        const type = this.getOptionType(name);
        if (!option || !type)
            return undefined;
        if (type != "member") {
            throw new ParameterError(`The type of the '${name}' option is ${type}, but it is not being called as ${type}. Are you making a mistake?`);
        }
        return option;
    }
    getChannelOption(name) {
        const option = this.getOption(name);
        const type = this.getOptionType(name);
        if (!option || !type)
            return undefined;
        if (type != "channel") {
            throw new ParameterError(`The type of the '${name}' option is ${type}, but it is not being called as ${type}. Are you making a mistake?`);
        }
        return option;
    }
    getRoleOption(name) {
        const option = this.getOption(name);
        const type = this.getOptionType(name);
        if (!option || !type)
            return undefined;
        if (type != "role") {
            throw new ParameterError(`The type of the '${name}' option is ${type}, but it is not being called as ${type}. Are you making a mistake?`);
        }
        return option;
    }
    getOption(name) {
        if (this.specialOptionList.length < 1)
            return undefined;
        for (const option of this.specialOptionList) {
            if (!option.name.trim())
                throw new ParameterError(`The option name cannot be empty.`);
            if (option.name === name)
                return option.value;
        }
        throw new ParameterError(`There is no such option: '${name}'`);
    }
    getOptionType(name) {
        if (this.specialOptionList.length < 1)
            return undefined;
        for (const option of this.specialOptionList) {
            if (!option.name.trim())
                throw new ParameterError(`The option name cannot be empty.`);
            if (!option.type)
                throw new ParameterError(`The option type cannot be empty.`);
            if (option.name === name)
                return option.type;
        }
        throw new ParameterError(`There is no such option: '${name}'`);
    }
}
exports.ContextOptions = ContextOptions;
class CommandContext {
    constructor(messageObject) {
        this.options = new ContextOptions();
        this.messageObject = messageObject;
        this.options.addOptions(...sharedOptionList);
    }
    // Message Class Proxy
    get activity() {
        return this.messageObject.activity;
    }
    get applicationId() {
        return this.messageObject.applicationId;
    }
    get attachments() {
        return this.messageObject.attachments;
    }
    get author() {
        return this.messageObject.author;
    }
    get bulkDeletable() {
        return this.messageObject.bulkDeletable;
    }
    get channel() {
        return this.messageObject.channel;
    }
    get channelId() {
        return this.messageObject.channelId;
    }
    get cleanContent() {
        return this.messageObject.cleanContent;
    }
    get components() {
        return this.messageObject.components;
    }
    get content() {
        return this.messageObject.content;
    }
    get createdAt() {
        return this.messageObject.createdAt;
    }
    get createdTimestamp() {
        return this.messageObject.createdTimestamp;
    }
    get crosspostable() {
        return this.messageObject.crosspostable;
    }
    get deletable() {
        return this.messageObject.deletable;
    }
    get editable() {
        return this.messageObject.editable;
    }
    get editedAt() {
        return this.messageObject.editedAt;
    }
    get editedTimestamp() {
        return this.messageObject.editedTimestamp;
    }
    get embeds() {
        return this.messageObject.embeds;
    }
    get groupActivityApplication() {
        return this.messageObject.groupActivityApplication;
    }
    get guildId() {
        return this.messageObject.guildId;
    }
    get guild() {
        return this.messageObject.guild;
    }
    get hasThread() {
        return this.messageObject.hasThread;
    }
    get id() {
        return this.messageObject.id;
    }
    get interaction() {
        return this.messageObject.interaction;
    }
    get member() {
        return this.messageObject.member;
    }
    get mentions() {
        return this.messageObject.mentions;
    }
    get nonce() {
        return this.messageObject.nonce;
    }
    get partial() {
        return this.messageObject.partial;
    }
    get pinnable() {
        return this.messageObject.pinnable;
    }
    get pinned() {
        return this.messageObject.pinned;
    }
    get reactions() {
        return this.messageObject.reactions;
    }
    get stickers() {
        return this.messageObject.stickers;
    }
    get position() {
        return this.messageObject.position;
    }
    get roleSubscriptionData() {
        return this.messageObject.roleSubscriptionData;
    }
    get resolved() {
        return this.messageObject.resolved;
    }
    get system() {
        return this.messageObject.system;
    }
    get thread() {
        return this.messageObject.thread;
    }
    get tts() {
        return this.messageObject.tts;
    }
    get poll() {
        return this.messageObject.poll;
    }
    get type() {
        return this.messageObject.type;
    }
    get url() {
        return this.messageObject.url;
    }
    get webhookId() {
        return this.messageObject.webhookId;
    }
    get flags() {
        return this.messageObject.flags;
    }
    get reference() {
        return this.messageObject.reference;
    }
    awaitMessageComponent(options) {
        return this.messageObject.awaitMessageComponent(options);
    }
    awaitReactions(options) {
        return this.messageObject.awaitReactions(options);
    }
    createReactionCollector(options) {
        return this.messageObject.createReactionCollector(options);
    }
    createMessageComponentCollector(options) {
        return this.messageObject.createMessageComponentCollector(options);
    }
    delete() {
        return this.messageObject.delete();
    }
    edit(content) {
        return this.messageObject.edit(content);
    }
    equals(message, rawData) {
        return this.messageObject.equals(message, rawData);
    }
    fetchReference() {
        return this.messageObject.fetchReference();
    }
    fetchWebhook() {
        return this.messageObject.fetchWebhook();
    }
    crosspost() {
        return this.messageObject.crosspost();
    }
    fetch(force) {
        return this.messageObject.fetch(force);
    }
    pin(reason) {
        return this.messageObject.pin(reason);
    }
    react(emoji) {
        return this.messageObject.react(emoji);
    }
    removeAttachments() {
        return this.messageObject.removeAttachments();
    }
    reply(options) {
        return this.messageObject.reply(options);
    }
    resolveComponent(customId) {
        return this.messageObject.resolveComponent(customId);
    }
    startThread(options) {
        return this.messageObject.startThread(options);
    }
    suppressEmbeds(suppress) {
        return this.messageObject.suppressEmbeds(suppress);
    }
    toJSON() {
        return this.messageObject.toJSON();
    }
    toString() {
        return this.messageObject.toString();
    }
    unpin(reason) {
        return this.messageObject.unpin(reason);
    }
    inGuild() {
        return this.messageObject.inGuild();
    }
    // Special properties/methods
    get me() {
        return this.messageObject.client.user;
    }
    send(options) {
        return this.messageObject.channel.send(options);
    }
    purgeChannel(amount) {
        return this.messageObject.channel.bulkDelete(amount);
    }
    prepareOptionValues() {
        const args = this.messageObject.content.trim().split(" ");
        const mentions = this.messageObject.mentions;
        let argIndex = 1;
        sharedOptionList.forEach((option, index) => {
            switch (option.type) {
                case "user":
                    if (mentions.users.size > 0) {
                        option.value = mentions.users.first();
                        return;
                    }
                    break;
                case "member":
                    if (mentions.members.size > 0) {
                        option.value = mentions.members.first();
                        return;
                    }
                    break;
                case "channel":
                    if (mentions.channels.size > 0) {
                        option.value = mentions.channels.first();
                        return;
                    }
                    break;
                case "role":
                    if (mentions.roles.size > 0) {
                        option.value = mentions.roles.first();
                        return;
                    }
                    break;
                case "string":
                    if (option.isLongText) {
                        option.value = args.slice(index, args.length).join(" ");
                        return;
                    }
                    else {
                        option.value = args[argIndex];
                    }
                    break;
                case "number":
                    option.value = Number(args[argIndex]);
                    break;
                default:
                    throw new ParameterError(`Unknown type: ${option.type}`);
            }
            if (!option.isLongText) {
                argIndex++;
            }
        });
    }
}
exports.CommandContext = CommandContext;
class PrefixCommandBuilder {
    setContext(context) {
        this.requiredContext = context;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    runCommand(executor) {
        this.executor = executor;
        return this;
    }
    prepareCommand() {
        if (this.executor && this.requiredContext)
            this.executor(this.requiredContext);
    }
    addOptions(...options) {
        sharedOptionList.push(...options);
        return this;
    }
}
exports.PrefixCommandBuilder = PrefixCommandBuilder;
class PrefixCommandManager {
    constructor(client, options) {
        this.client = client;
        this.options = options;
    }
    registerCommands(...commands) {
        this.client.on("messageCreate", (msg) => {
            for (const command of commands) {
                const context = new CommandContext(msg);
                command.setContext(context);
                const args = msg.content.trim().split(" ");
                if (args.includes(`${this.options.prefix}${command.name}`)) {
                    context.prepareOptionValues();
                    command.prepareCommand();
                }
            }
        });
    }
}
exports.PrefixCommandManager = PrefixCommandManager;
