import { NamingUtil } from './util';
import fs from 'fs';
import path from 'path';

const directory = {
    src: path.join(__dirname, '../src'),
    srcRules: path.join(__dirname, '../src/rules'),
    template: path.join(__dirname, '../script/template'),
};

function scanCustomRules() {
    return fs
        .readdirSync(directory.srcRules)
        .map((file) => {
            const fileBasename = path.basename(file, '.ts');
            console.info(`- ${fileBasename}`);
            return { kebab: fileBasename, camel: NamingUtil.toCamelCase(fileBasename) };
        })
        .filter((_) => _.kebab !== 'index')
        .sort((a, b) => a.camel.localeCompare(b.camel));
}

console.info('Generate src/rules/index.ts');
const rulesIndexFile = path.join(directory.srcRules, 'index.ts');
if (fs.existsSync(rulesIndexFile) && fs.statSync(rulesIndexFile).isFile()) {
    console.info('Removing src/rules/index.ts');
    fs.unlinkSync(rulesIndexFile);
}

const allRules = scanCustomRules();

const output = (function () {
    console.info('Generating src/rules/index.ts');
    const importStatements = allRules
        .map((_) => {
            return `import {rule as ${_.camel}} from "./${_.kebab}";`;
        })
        .join('\n');
    const ruleDefinitions = allRules
        .map((_) => {
            return `"${_.kebab}": ${_.camel},`;
        })
        .join('\n    ');
    const templateFile = path.join(directory.template, 'rules-index.ts');
    return fs
        .readFileSync(templateFile, {
            encoding: 'utf8',
        })
        .replace('// {{TEMPLATE_IMPORT_STATEMENTS}}', importStatements)
        .replace('// {{TEMPLATE_RULE_DEFINITIONS}}', ruleDefinitions);
})();

fs.writeFileSync(rulesIndexFile, output, { encoding: 'utf8' });
