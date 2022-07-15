const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require('path');

module.exports = answers => {
    const themePath = path.resolve(answers.packageName);

    console.log('Initializing new Git repository...');

    return exec(`cd ${themePath} && git init --initial-branch=1.x`).then(() => {
        if (answers.repository) {
            console.log(
                `Adding "${
                    answers.repository
                }" as a remote and pushing all files...`
            );
            return exec(
                `cd ${themePath} && git remote add origin ${
                    answers.repository
                } && git add . && git commit -m "Initial commit" && git push -u origin 1.x`
            );
        } else {
            console.log(
                'No repository URL provided, be sure to do that manually.'
            );
        }
    });
};
