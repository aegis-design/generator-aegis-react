'use strict';
const utils = require('../../utils');
const chalk = require('chalk');

module.exports = options => [
  {
    type: 'input',
    name: 'appName',
    message: 'Please choose your application name',
    default: utils.yeoman.getAppName()
  },
  {
    when: !options.language,
    type: 'list',
    name: 'language',
    message: 'Which code language do you want to use?',
    default: 'babel',
    choices: [
      {name: 'Babel + es6', value: 'babel'},
      {name: chalk.gray('Typescript'), value: 'ts', disabled: chalk.gray('Will support in next deploy.')}
    ]
  },
  {
    type: 'list',
    name: 'style',
    message: 'Which style language do you want to use?',
    choices: utils.config.getChoices('style'),
    default: utils.config.getDefaultChoice('style')
  },
  {
    when: !options.router,
    type: 'list',
    name: 'router',
    message: 'Would you like a router?',
    default: 'react-router',
    choices: [
      {name: 'React router', value: 'react-router'},
      {name: chalk.gray('React Routing'), value: 'react-routing', disabled: chalk.gray('Wished. Contributors welcome.')},
      {name: chalk.gray('Universal Router'), value: 'universal-router', disabled: chalk.gray('Wished. Contributors welcome.')},
      {name: 'None', value: 'none'}
    ]
  },
  {
    when: !options.flux,
    type: 'list',
    name: 'flux',
    message: 'Would you like a flux?',
    default: 'redux',
    choices: [
      {name: 'Redux', value: 'redux'},
      {name: chalk.gray('Relay'), value: 'relay', disabled: chalk.gray('Wished. Contributors welcome.')},
      {name: chalk.gray('Reflux'), value: 'reflux', disabled: chalk.gray('Wished. Contributors welcome.')},
      {name: chalk.gray('None'), value: 'none', disabled: chalk.gray('Wished. Contributors welcome.')}
    ]
  },
  {
    when: !options.server,
    type: 'list',
    name: 'server',
    message: 'Which server do you want to use?',
    default: 'express',
    choices(responses) {
      const choices = [
        {name: 'express', value: 'express'},
        {name: 'koa', value: 'koa'}
      ];
      if (responses.flux !== 'relay') {
        choices.unshift({name: 'webpack dev server', value: 'webpack'});
      }
      return choices;
    }
  }
];
