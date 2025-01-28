const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require('path');
const fs = require('fs-extra');

module.exports = answers => {
    const themePath = path.resolve(answers.packageName);

    console.log('Cloning theme-creativeshop repository to use as a base...');

    return exec(
        `git clone --branch 20.x --single-branch https://github.com/magesuite/theme-creativeshop.git ${themePath}`
    ).then(() =>
        fs
            .remove(path.join(themePath, 'src'))
            .then(() => fs.remove(path.join(themePath, '.git')))
    );
};
