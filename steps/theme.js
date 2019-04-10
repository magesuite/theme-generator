const path = require('path');
const fs = require('fs-extra');

module.exports = answers => {
    const themePath = path.resolve(answers.packageName);

    console.log('Adjusting theme.xml file...');

    return fs.outputFile(
        path.join(themePath, 'src/theme.xml'),
        `<theme xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/theme.xsd">
    <title>${answers.name}</title>
    <parent>Creativestyle/theme-creativeshop</parent>
    <media>
        <preview_image>preview.png</preview_image>
    </media>
</theme>
`
    );
};
