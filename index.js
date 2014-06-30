'use strict';

var Raygun = require('raygun');
var assert = require('assert-plus');
var noop = require('noop');

function BunyanRaygun(opt){
  assert.object(opt, 'options');
  assert.string(opt.apiKey, 'options.apiKey');
  assert.optionalFunc(opt.user, 'options.user');
  assert.optionalFunc(opt.data, 'options.data');

  this._client = new Raygun.Client();
  this._client.init(opt);

  if (opt.user) {
    this._client.user = opt.user;
  }

  this._data = opt.data || noop;
}

BunyanRaygun.prototype.write = function(entry) {
  assert.object(entry, 'entry');

  if (entry.err) {
    this._client.send(entry.err, this._data(entry), undefined, entry.req);
    return true;
  }
  return false;
};

module.exports = BunyanRaygun;
