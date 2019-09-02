#!/usr/bin/env node

const inquirer = require('inquirer');

const steps = {
    clone: require('./steps/clone'),
    composer: require('./steps/composer'),
    registration: require('./steps/registration'),
    theme: require('./steps/theme'),
    init: require('./steps/init'),
    preview: require('./steps/preview'),
};

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message:
                'What is the name of your theme? It will be for example displayed in theme selector in admin panel.',
        },
        {
            type: 'input',
            name: 'packageName',
            message: 'What should be the package name for this theme?',
            default: answers => `theme-${answers.name.toLowerCase()}`,
        },
        {
            type: 'input',
            name: 'repository',
            message:
                '[Optional] What is the URL of Git repository for this theme?',
        },
    ])
    .then(answers => {
        return steps
            .clone(answers)
            .then(() => steps.registration(answers))
            .then(() => steps.composer(answers))
            .then(() => steps.theme(answers))
            .then(() => steps.preview(answers))
            .then(() => steps.init(answers))
            .catch(error => console.error(error.message));
    });
