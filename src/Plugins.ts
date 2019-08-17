interface Plugin {
    trigger: string;
    component: any
    canActivate?: any
}

/**
 * Import plugins
 */

import { TestCommand } from 'src/plugins/test';
import { SettingsCommand } from 'src/plugins/admin/Settings';
import { WarnCommand } from 'src/plugins/moderation/Warn';

/**
 * Middleware
 */
import { IsAdmin } from 'src/util/middleware/IsAdmin';

export const plugins: Array<Plugin> = [
    {
        trigger: 'test',
        component: TestCommand,
        canActivate: IsAdmin
    },
    {
        trigger: 'settings',
        component: SettingsCommand
    },
    {
        trigger: 'warn',
        component: WarnCommand
    }
];
