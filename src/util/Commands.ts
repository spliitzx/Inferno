export const COMMANDS: Array<Command> = [
    {
        name: 'help',
        description: 'Get a list of available commands.',
        level: 'everyone'
    },
    {
        name: 'warn @user [reason]',
        description: 'Warn a user.',
        level: 'moderator'
    },
    {
        name: 'cases @user|userId',
        description: 'Get all cases for a user.',
        level: 'moderator'
    },
    {
        name: 'case [id]',
        description: 'Get a specific case by ID.',
        level: 'moderator'
    },
    {
        name: 'removecase [id]',
        description: 'Remove a case by it\'s ID',
        level: 'moderator'
    },
    {
        name: 'note @user [note]',
        description: 'Add a note to a user.',
        level: 'moderator'
    },
    {
        name: 'notes @user|userId',
        description: 'Get notes for a user.',
        level: 'moderator'
    },
    {
        name: 'removenote [id]',
        description: 'Remove a note by it\'s ID',
        level: 'moderator'
    },
    {
        name: 'settings',
        description: 'Change the guild settings.',
        level: 'admin'
    },
    {
        name: 'serverinfo',
        description: 'Get all information for the guild.',
        level: 'admin'
    },
    {
        name: 'addcommand [trigger] [response]',
        description: 'Add a custom command.',
        level: 'admin'
    },
    {
        name: 'commands',
        description: 'Get all available custom commands.',
        level: 'everyone'
    }
];

export type PermissionLevels = 'admin' | 'moderator' | 'everyone';

export interface Command {
    name: string;
    description: string;
    level: PermissionLevels;
}
