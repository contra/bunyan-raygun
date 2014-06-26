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

    it('should not throw if used as a raw stream', function(done) {
      var logger = new BunyanRaygun({
        apiKey: 'fake'
      });
      should.exist(logger);
      logger.write({});
      done();
    });

    it('should send logs with errors', function(done) {
      var logger = new BunyanRaygun({
        apiKey: 'fake'
      });
      should.exist(logger);
      logger.write({
        err: new Error('yo')
      }).should.equal(true);
      done();
    });

    it('should send logs with errors and a user getter', function(done) {
      var logger = new BunyanRaygun({
        apiKey: 'fake',
        user: function(req){
          should.exist(req);
          done();
        }
      });
      should.exist(logger);
      logger.write({
        err: new Error('yo'),
        req: {}
      }).should.equal(true);
    });
  });
});
