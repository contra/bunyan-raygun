'use strict';

var Raygun = require('raygun');
var assert = require('assert-plus');

function BunyanRaygun(opt){
  assert.object(opt, 'options');
  assert.string(opt.apiKey, 'options.apiKey');
  assert.optionalFunc(opt.user, 'options.user');

  this._client = new Raygun.Client();
  this._client.init(opt);

  if (opt.user) {
    this._client.user = opt.user;
  }
}

BunyanRaygun.prototype.write = function(entry) {
  assert.object(entry, 'entry');

  if (entry.err) {
    this._client.send(entry.err || entry, undefined, undefined, entry.req);
  }
};

module.exports = BunyanRaygun;
