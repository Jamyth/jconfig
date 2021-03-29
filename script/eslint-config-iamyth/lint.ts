import { spawn, joinRoot } from '../util';

spawn('eslint', ['--ext', '.js,.ts', joinRoot('packages/eslint-config-iamyth')], 'Lint Error, please fix !');
