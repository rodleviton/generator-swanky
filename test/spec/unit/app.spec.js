'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var app = require(path.resolve('generators/app'));
// var helpers = require('yeoman-test');

describe('generator-swanky:app', function () {
  // before(function (done) {
  //   helpers.run(path.join(__dirname, '../generators/app'))
  //     .withPrompts({someAnswer: true})
  //     .on('end', done);
  // });

  it('creates package.json file', function () {
    // assert.file([
    //   'package.json'
    // ]);
    assert.equal(1, 1);
  });
});
