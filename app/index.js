'use strict';

const Generator = require('yeoman-generator');
const decamelize = require('decamelize');
const upperCamelCase = require('uppercamelcase');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log('Initializing...');
  }

  start() {
    this.prompt([
        {
          type    : 'input',
          name    : 'name',
          message : 'Enter a name for the new component (i.e.: myNewComponent): '
        }
      ]).then( (answers) => {
        // create destination folder
        const nameDecamelized = decamelize(answers.name, '-');
        this.destinationRoot(nameDecamelized);
        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath(nameDecamelized + '.component.html'),
            { 
                selector: nameDecamelized
            }
          );
        this.fs.copyTpl(
            this.templatePath('component.ts'),
            this.destinationPath(nameDecamelized + '.component.ts'),
            { 
                className: upperCamelCase(answers.name),
                selector: nameDecamelized
            }
          );

        this.fs.copyTpl(
            this.templatePath('component.scss'),
            this.destinationPath(nameDecamelized + '.component.scss'),
            { 
                selector: nameDecamelized
            }
          );

        this.fs.copyTpl(
            this.templatePath('component.spec.ts'),
            this.destinationPath(nameDecamelized + '.component.spec.ts'),
            { 
                className: upperCamelCase(answers.name),
                selector: nameDecamelized
            }
          );
      });
  }
};