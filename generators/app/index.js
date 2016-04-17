var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({
  // Ask for user input
  prompting: function () {
    var done = this.async();

    this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Name of your documentation site',
      default: this.appname
    }, {
      type: 'input',
      name: 'description',
      message: 'Description',
      default: 'My awesome documentation site'
    }, {
      type: 'input',
      name: 'source',
      message: 'What folder would you like your source files to exist',
      default: 'src'
    }, {
      type: 'input',
      name: 'output',
      message: 'What folder would you like to build your docs to',
      default: 'dist'
    }], function (answers) {
      this.props = answers;
      done();
    }.bind(this));
  },

  writing: {
    config: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        { 
          name: this.props.name,
          description: this.props.description
        }
      );

      this.fs.copyTpl(
        this.templatePath('_swanky.config.yaml'),
        this.destinationPath('swanky.config.yaml'), {
          name: this.props.name,
          source: this.props.source,
          output: this.props.output
        }
      );

      // Create the output folder
      mkdirp(this.props.source, function (err) {
        if (err) {
          console.error(err);
        }
      });
    }
  },

  install: function () {
    this.installDependencies();
  }
});
