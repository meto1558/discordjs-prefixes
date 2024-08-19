"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandManager = exports.PrefixCommandBuilder = exports.CommandContext = exports.CommandOptions = void 0;
class CommandOptions {
}
exports.CommandOptions = CommandOptions;
class CommandContext {
    constructor(messageObject) {
        this.messageObject = messageObject;
    }
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
    get me() {
        return this.messageObject.client;
    }
    send(options) {
        return this.messageObject.channel.send(options);
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
}
exports.PrefixCommandBuilder = PrefixCommandBuilder;
class CommandManager {
    constructor(client, options) {
        this.client = client;
        this.options = options;
    }
    registerCommands(...commands) {
        this.client.on("messageCreate", (msg) => {
            for (const command of commands) {
                const context = new CommandContext(msg);
                command.setContext(context);
                if (msg.content.startsWith(`${this.options.prefix}${command.name}`)) {
                    command.prepareCommand();
                }
            }
        });
    }
}
exports.CommandManager = CommandManager;
