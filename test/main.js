'use strict';

var BunyanRaygun = require('../');
var should = require('should');
require('mocha');

describe('bunyan-raygun', function() {
  describe('constructor()', function() {
    it('should throw unless opt is given', function(done) {
      (function () {
        new BunyanRaygun();
      }).should.throw();
      done();
    });
    it('should throw unless apiKey is given', function(done) {
      (function () {
        new BunyanRaygun({});
      }).should.throw();
      done();
    });
  });

  describe('write()', function(){
    it('should throw if not used as a raw stream', function(done) {
      var logger = new BunyanRaygun({
        apiKey: 'fake'
      });
      should.exist(logger);
      (function () {
        logger.write(JSON.stringify({}));
      }).should.throw();
      done();
    });
  });
});
