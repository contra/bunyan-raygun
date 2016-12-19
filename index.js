'use strict';

var Raygun = require('raygun');
var assert = require('assert-plus');
var omit = require('lodash.omit');

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
}

BunyanRaygun.prototype.write = function(entry) {
  assert.object(entry, 'entry');

  var data;
  if (entry.err) {
    data = omit(entry, ['err', 'req']);
    this._client.send(entry.err, data, undefined, entry.req);
    return true;
  }
  else if (entry.msg) {
    data = omit(entry, ['msg', 'req']);
    this._client.send(entry.msg, data, undefined, entry.req);
    return true;
  }

  return false;
};

module.exports = BunyanRaygun;
