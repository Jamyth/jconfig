import { spawnSync } from 'child_process';
import chalk from 'chalk';
import path from 'path';

export const joinRoot = (p: string) => path.join(__dirname, '../', p);

export const spawn = (command: string, args: string[], errorMessage: string, ignoreError: boolean = false) => {
    const isWindow = process.platform === 'win32';

    const result = spawnSync(isWindow ? command + '.cmd' : command, args);

    if (result.error) {
        console.error(result.error);
        process.exit(1);
    }
    if (result.status !== 0 && !ignoreError) {
        console.error(chalk`{red.bold ${errorMessage}}`);
        console.error(`non-zero exit code returned, code=${result.status}, command=${command} ${args.join(' ')}`);
        process.exit(1);
    }
};
