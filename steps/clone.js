const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require('path');
const fs = require('fs-extra');

module.exports = answers => {
    const themePath = path.resolve(answers.packageName);

    console.log('Cloning CreativeShop repository to use as a base...');

    return exec(
        `git clone --branch next --single-branch git@gitlab.creativestyle.pl:m2c/theme-creativeshop.git ${themePath}`
    ).then(() =>
        fs
            .remove(path.join(themePath, 'src'))
            .then(() => fs.remove(path.join(themePath, '.git')))
    );
};
