import { spawn, joinRoot } from '../util';

spawn(
    'rollup',
    ['--config', joinRoot('tools/eslint-config-iamyth/rollup.config.js'), '--watch'],
    'Cannot Build eslint-config-iamyth with rollup',
);
