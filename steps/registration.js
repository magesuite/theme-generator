const path = require('path');
const fs = require('fs-extra');

module.exports = answers => {
    const themePath = path.resolve(answers.packageName);

    console.log('Adjusting registration.php file...');

    return fs.outputFile(
        path.join(themePath, 'src/registration.php'),
        `<?php
\\Magento\\Framework\\Component\\ComponentRegistrar::register(
    \\Magento\\Framework\\Component\\ComponentRegistrar::THEME,
    'frontend/Creativestyle/${answers.packageName}',
    __DIR__
);
`
    );
};
