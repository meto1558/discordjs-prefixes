import { Client, Message, Snowflake, Collection, MessageActionRowComponent, AwaitMessageCollectorOptionsParams, MappedInteractionTypes, MessageComponentType, AwaitReactionsOptions, ReactionCollectorOptions, ReactionCollector, MessageCollectorOptionsParams, InteractionCollector, MessageEditOptions, MessagePayload, EmojiIdentifierResolvable, MessageReaction, MessageReplyOptions, StartThreadOptions, AnyThreadChannel, MessageCreateOptions } from "discord.js";

export class CommandOptions {
    prefix: string;
    useHelpCommand?: boolean | undefined; 
}

export class CommandContext<InGuild extends boolean = boolean> {
    protected messageObject: Message;

    public constructor(messageObject: Message) {
        this.messageObject = messageObject;
    }

    public get activity() {
        return this.messageObject.activity;
    }

    public get applicationId() {
        return this.messageObject.applicationId;
    }

    public get attachments() {
        return this.messageObject.attachments;
    }

    public get author() {
        return this.messageObject.author;
    }

    public get bulkDeletable() {
        return this.messageObject.bulkDeletable;
    }

    public get channel() {
        return this.messageObject.channel;
    }

    public get channelId() {
        return this.messageObject.channelId;
    }

    public get cleanContent() {
        return this.messageObject.cleanContent;
    }

    public get components() {
        return this.messageObject.components;
    }

    public get content() {
        return this.messageObject.content;
    }

    public get createdAt() {
        return this.messageObject.createdAt;
    }

    public get createdTimestamp() {
        return this.messageObject.createdTimestamp;
    }

    public get crosspostable() {
        return this.messageObject.crosspostable;
    }

    public get deletable() {
        return this.messageObject.deletable;
    }

    public get editable() {
        return this.messageObject.editable;
    }

    public get editedAt() {
        return this.messageObject.editedAt;
    }

    public get editedTimestamp() {
        return this.messageObject.editedTimestamp;
    }

    public get embeds() {
        return this.messageObject.embeds;
    }

    public get groupActivityApplication() {
        return this.messageObject.groupActivityApplication;
    }

    public get guildId() {
        return this.messageObject.guildId;
    }

    public get guild() {
        return this.messageObject.guild;
    }

    public get hasThread() {
        return this.messageObject.hasThread;
    }

    public get id() {
        return this.messageObject.id;
    }

    public get interaction() {
        return this.messageObject.interaction;
    }

    public get member() {
        return this.messageObject.member;
    }

    public get mentions() {
        return this.messageObject.mentions;
    }

    public get nonce() {
        return this.messageObject.nonce;
    }

    public get partial() {
        return this.messageObject.partial;
    }

    public get pinnable() {
        return this.messageObject.pinnable;
    }

    public get pinned() {
        return this.messageObject.pinned;
    }

    public get reactions() {
        return this.messageObject.reactions;
    }

    public get stickers() {
        return this.messageObject.stickers;
    }

    public get position() {
        return this.messageObject.position;
    }

    public get roleSubscriptionData() {
        return this.messageObject.roleSubscriptionData;
    }

    public get resolved() {
        return this.messageObject.resolved;
    }

    public get system() {
        return this.messageObject.system;
    }

    public get thread() {
        return this.messageObject.thread;
    }

    public get tts() {
        return this.messageObject.tts;
    }

    public get poll() {
        return this.messageObject.poll;
    }

    public get type() {
        return this.messageObject.type;
    }

    public get url() {
        return this.messageObject.url;
    }

    public get webhookId() {
        return this.messageObject.webhookId;
    }

    public get flags() {
        return this.messageObject.flags;
    }

    public get reference() {
        return this.messageObject.reference;
    }

    public awaitMessageComponent<ComponentType extends MessageComponentType>(
        options?: AwaitMessageCollectorOptionsParams<ComponentType, InGuild>,
    ): Promise<MappedInteractionTypes<InGuild>[ComponentType]> {
        return this.messageObject.awaitMessageComponent(options);
    }

    public awaitReactions(options?: AwaitReactionsOptions): Promise<Collection<Snowflake | string, MessageReaction>> {
        return this.messageObject.awaitReactions(options);
    }

    public createReactionCollector(options?: ReactionCollectorOptions): ReactionCollector {
        return this.messageObject.createReactionCollector(options);
    }

    public createMessageComponentCollector<ComponentType extends MessageComponentType>(
        options?: MessageCollectorOptionsParams<ComponentType, InGuild>,
    ): InteractionCollector<MappedInteractionTypes<InGuild>[ComponentType]> {
        return this.messageObject.createMessageComponentCollector(options);
    }

    public delete() {
        return this.messageObject.delete();
    }

    public edit(content: string | MessageEditOptions | MessagePayload) {
        return this.messageObject.edit(content);
    }

    public equals(message: Message, rawData: unknown): boolean {
        return this.messageObject.equals(message, rawData);
    }

    public fetchReference() {
        return this.messageObject.fetchReference();
    }

    public fetchWebhook() {
        return this.messageObject.fetchWebhook();
    }

    public crosspost() {
        return this.messageObject.crosspost();
    }

    public fetch(force?: boolean) {
        return this.messageObject.fetch(force);
    }

    public pin(reason?: string) {
        return this.messageObject.pin(reason);
    }

    public react(emoji: EmojiIdentifierResolvable): Promise<MessageReaction> {
        return this.messageObject.react(emoji);
    }

    public removeAttachments() {
        return this.messageObject.removeAttachments();
    }

    public reply(options: string | MessagePayload | MessageReplyOptions) {
        return this.messageObject.reply(options);
    }

    public resolveComponent(customId: string): MessageActionRowComponent | null {
        return this.messageObject.resolveComponent(customId);
    }

    public startThread(options: StartThreadOptions): Promise<AnyThreadChannel> {
        return this.messageObject.startThread(options);
    }

    public suppressEmbeds(suppress?: boolean) {
        return this.messageObject.suppressEmbeds(suppress);
    }

    public toJSON(): unknown {
        return this.messageObject.toJSON();
    }

    public toString(): string {
        return this.messageObject.toString();
    }

    public unpin(reason?: string) {
        return this.messageObject.unpin(reason);
    }

    public inGuild(): this is Message<true> {
        return this.messageObject.inGuild();
    }

    public get me() {
        return this.messageObject.client;
    }

    public send(options: string | MessagePayload | MessageCreateOptions) {
        return this.messageObject.channel.send(options);
    }
}

export class PrefixCommandBuilder {
    public name: string;
    private requiredContext: CommandContext;
    private executor?: (ctx: CommandContext) => void;

    public setContext(context: CommandContext) {
        this.requiredContext = context;
    }

    public setName(name: string) {
        this.name = name;
        return this;
    }

    public runCommand(executor?: (ctx: CommandContext) => void) {
        this.executor = executor;
        return this;
    }

    public prepareCommand() {
        if (this.executor && this.requiredContext)
            this.executor(this.requiredContext);
    }
}

export class CommandManager {
    public client: Client;
    public options: CommandOptions;

    public constructor(client: Client, options: CommandOptions) {
        this.client = client;
        this.options = options;
    }

    public registerCommands(...commands: PrefixCommandBuilder[]) {
        this.client.on("messageCreate", (msg) => {
            for (const command of commands) {
                const context = new CommandContext(msg);
                command.setContext(context);
                if (msg.content.startsWith(`${this.options.prefix}${command.name}`)) {
                    command.prepareCommand();
                }
            }
        })
    }
}