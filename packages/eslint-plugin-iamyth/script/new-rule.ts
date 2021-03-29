import fs from 'fs';
import path from 'path';
import yargs from 'yargs';
import { NamingUtil } from './util';

const directory = {
    src: path.join(__dirname, '../src'),
    srcRules: path.join(__dirname, '../src/rules'),
    template: path.join(__dirname, '../script/template'),
};

const newRuleName = yargs.argv._[0];
if (typeof newRuleName !== 'string') {
    throw new Error('Missing Positional CLI argument (new rule name), usage: yarn new-rule custom-new-rule-name');
}

const newRuleFile = path.join(directory.srcRules, `${newRuleName}.ts`);

console.info('Check pre condition');
if (!NamingUtil.isKebabCase(newRuleName)) {
    throw new Error(`Rule name should be in kebab-case, but received "${newRuleName}"`);
}
if (fs.existsSync(newRuleFile)) {
    throw new Error(`Rule "${newRuleName}" already exists at "${newRuleFile}".`);
}

console.info('generate src file');
const templateFile = path.join(directory.template, 'new-rule.ts');
const output = fs
    .readFileSync(templateFile, {
        encoding: 'utf8',
    })
    .replaceAll('// {{KEBAB_CASE_RULE_NAME}}', newRuleName)
    .replaceAll('// {{CAMEL_CASE_RULE_NAME}}', NamingUtil.toCamelCase(newRuleName));
fs.writeFileSync(newRuleFile, output, { encoding: 'utf8' });
require('./codegen');
