const path = require('path');
const fs = require('fs-extra');

module.exports = answers => {
    const themePath = path.resolve(answers.packageName);

    console.log('Adjusting composer.json file...');

    return fs.outputFile(
        path.join(themePath, 'composer.json'),
        `{
    "name": "creativestyle/${answers.packageName}",
    "description": "${answers.name} Magento Theme",
    "homepage": "https://creativestyle.de",
    "licence": "proprietary",
    "repositories": {
        "type": "vcs",
        "url": "${answers.repository}"
    },
    "require": {
        "creativestyle/theme-creativeshop": "dev-next"
    }
}
`
    );
};
