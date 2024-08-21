import { Client, Message, Snowflake, Collection, MessageActionRowComponent, AwaitMessageCollectorOptionsParams, MappedInteractionTypes, MessageComponentType, AwaitReactionsOptions, ReactionCollectorOptions, ReactionCollector, MessageCollectorOptionsParams, InteractionCollector, MessageEditOptions, MessagePayload, EmojiIdentifierResolvable, MessageReaction, MessageReplyOptions, StartThreadOptions, AnyThreadChannel, MessageCreateOptions, User, GuildMember, Channel, Role, ClientUser } from "discord.js";
export declare class PrefixCommandBuilderSettings {
    prefix: string;
    useHelpCommand?: boolean | undefined;
}
export type CommandParameterType = "string" | "number" | "user" | "member" | "channel" | "role";
export interface CommandParameterOptions {
    name: string | undefined;
    type: CommandParameterType | undefined;
    isLongText?: boolean | undefined;
    value?: any | undefined;
}
export declare class ParameterError extends Error {
}
export declare let sharedOptionList: CommandParameterOptions[];
export declare class CommandParameters {
    private options;
    addOptions(...options: CommandParameterOptions[]): void;
    getStringOption(name: string): string | undefined;
    getNumberOption(name: string): number | undefined;
    getUserOption(name: string): User | ClientUser | undefined;
    getMemberOption(name: string): GuildMember | ClientUser | undefined;
    getChannelOption(name: string): Channel | undefined;
    getRoleOption(name: string): Role | undefined;
    private getOption;
    private getOptionType;
}
export declare class CommandContext<InGuild extends boolean = boolean> {
    protected messageObject: Message;
    options: CommandParameters;
    constructor(messageObject: Message);
    get activity(): import("discord.js").MessageActivity;
    get applicationId(): string;
    get attachments(): Collection<string, import("discord.js").Attachment>;
    get author(): User;
    get bulkDeletable(): boolean;
    get channel(): import("discord.js").DMChannel | import("discord.js").PartialDMChannel | import("discord.js").NewsChannel | import("discord.js").StageChannel | import("discord.js").TextChannel | import("discord.js").PrivateThreadChannel | import("discord.js").PublicThreadChannel<boolean> | import("discord.js").VoiceChannel;
    get channelId(): string;
    get cleanContent(): string;
    get components(): import("discord.js").ActionRow<MessageActionRowComponent>[];
    get content(): string;
    get createdAt(): Date;
    get createdTimestamp(): number;
    get crosspostable(): boolean;
    get deletable(): boolean;
    get editable(): boolean;
    get editedAt(): Date;
    get editedTimestamp(): number;
    get embeds(): import("discord.js").Embed[];
    get groupActivityApplication(): import("discord.js").ClientApplication;
    get guildId(): string;
    get guild(): import("discord.js").Guild;
    get hasThread(): boolean;
    get id(): string;
    get interaction(): import("discord.js").MessageInteraction;
    get member(): GuildMember;
    get mentions(): import("discord.js").MessageMentions<boolean>;
    get nonce(): string | number;
    get partial(): false;
    get pinnable(): boolean;
    get pinned(): boolean;
    get reactions(): import("discord.js").ReactionManager;
    get stickers(): Collection<string, import("discord.js").Sticker>;
    get position(): number;
    get roleSubscriptionData(): import("discord.js").RoleSubscriptionData;
    get resolved(): import("discord.js").CommandInteractionResolvedData<import("discord.js").CacheType>;
    get system(): boolean;
    get thread(): AnyThreadChannel<boolean>;
    get tts(): boolean;
    get poll(): import("discord.js").Poll;
    get type(): import("discord.js").MessageType;
    get url(): string;
    get webhookId(): string;
    get flags(): Readonly<import("discord.js").MessageFlagsBitField>;
    get reference(): import("discord.js").MessageReference;
    awaitMessageComponent<ComponentType extends MessageComponentType>(options?: AwaitMessageCollectorOptionsParams<ComponentType, InGuild>): Promise<MappedInteractionTypes<InGuild>[ComponentType]>;
    awaitReactions(options?: AwaitReactionsOptions): Promise<Collection<Snowflake | string, MessageReaction>>;
    createReactionCollector(options?: ReactionCollectorOptions): ReactionCollector;
    createMessageComponentCollector<ComponentType extends MessageComponentType>(options?: MessageCollectorOptionsParams<ComponentType, InGuild>): InteractionCollector<MappedInteractionTypes<InGuild>[ComponentType]>;
    delete(): Promise<Message<boolean>>;
    edit(content: string | MessageEditOptions | MessagePayload): Promise<Message<boolean>>;
    equals(message: Message, rawData: unknown): boolean;
    fetchReference(): Promise<Message<boolean>>;
    fetchWebhook(): Promise<import("discord.js").Webhook<import("discord.js").WebhookType>>;
    crosspost(): Promise<Message<boolean>>;
    fetch(force?: boolean): Promise<Message<boolean>>;
    pin(reason?: string): Promise<Message<boolean>>;
    react(emoji: EmojiIdentifierResolvable): Promise<MessageReaction>;
    removeAttachments(): Promise<Message<boolean>>;
    reply(options: string | MessagePayload | MessageReplyOptions): Promise<Message<boolean>>;
    resolveComponent(customId: string): MessageActionRowComponent | null;
    startThread(options: StartThreadOptions): Promise<AnyThreadChannel>;
    suppressEmbeds(suppress?: boolean): Promise<Message<boolean>>;
    toJSON(): unknown;
    toString(): string;
    unpin(reason?: string): Promise<Message<boolean>>;
    inGuild(): this is Message<true>;
    get me(): ClientUser;
    send(options: string | MessagePayload | MessageCreateOptions): Promise<Message<true>> | Promise<Message<false>>;
    prepareOptionValues(): void;
}
export declare class PrefixCommandBuilder {
    name: string;
    private requiredContext;
    private executor?;
    setContext(context: CommandContext): void;
    setName(name: string): this;
    runCommand(executor?: (ctx: CommandContext) => void): this;
    prepareCommand(): void;
    addOptions(...options: CommandParameterOptions[]): this;
}
export declare class PrefixCommandManager {
    client: Client;
    options: PrefixCommandBuilderSettings;
    constructor(client: Client, options: PrefixCommandBuilderSettings);
    registerCommands(...commands: PrefixCommandBuilder[]): void;
}
