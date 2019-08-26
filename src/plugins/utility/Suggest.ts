import { Inferno } from '../InfernoPlugin';
import { Client, Message, GuildChannel, TextChannel } from 'discord.js';
import Log from 'api/vendor/astro/util/Logger';

const SUGGESTION_CHANNEL_ID = '615388340543553554';

export class SuggestCommand extends Inferno.InfernoCommand implements Inferno.InfernoPlugin {

    constructor(client: Client, message: Message) {
        super({
            name: 'Suggest',
            description: 'Send a suggestion to the developers',
            usage: 'suggest [message]',
            category: 'utility'
        }, message, client);
    }

    async run() {
        if (!this.args[1]) { return this.error('Please enter a suggestion.'); }
        let suggestion: string = this.args.slice(1).join(' ');

        let channel: any;
        try {
            channel = this.client.guilds.get('613737296528801832').channels.get(SUGGESTION_CHANNEL_ID);
            if (!channel) { return this.error('Failed to send suggestion, try again later.'); }
            if (!((channel): channel is TextChannel => channel.type === 'text')(channel)) { return Log('Channel not a typeof TextChannel', 'warn'); }
            await channel.send(`**Suggestion** by ${this.message.author.username}#${this.message.author.discriminator}: ${suggestion}`);
            return this.success('Successfully sent suggestion. Thanks for your feedback!');
        } catch (e) {
            Log(e, 'error');
        }
    }
}
