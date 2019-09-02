const path = require('path');
const fs = require('fs-extra');

module.exports = answers => {
    const themePath = path.resolve(answers.packageName);

    console.log('Adding default preview file...');

    return fs.copy('./preview.png', path.join(themePath, 'src/preview.png'));
};
