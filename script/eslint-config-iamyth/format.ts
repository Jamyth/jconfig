import { joinRoot, spawn } from '../util';

spawn('prettier', ['--write', joinRoot('packages/eslint-config-iamyth')], 'Cannot Format');
