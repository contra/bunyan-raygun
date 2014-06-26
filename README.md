# bunyan-raygun [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Support us][gittip-image]][gittip-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]


## Information

<table>
<tr>
<td>Package</td><td>bunyan-raygun</td>
</tr>
<tr>
<td>Description</td>
<td>Raygun transport for Bunyan</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.10</td>
</tr>
</table>

## Usage

```javascript
var BunyanRaygun = require('bunyan-raygun');

var transport = new BunyanRaygun({
  apiKey: 'your api key',
  user: function(req) {
    // this is optional
    // see https://github.com/MindscapeHQ/raygun4node#unique-user-tracking
  }
});

var logger = bunyan.createLogger({
  name: 'test',
  serializers: bunyan.stdSerializers,
  streams: [{
    type: 'raw',
    level: 'warn',
    stream: transport
  }]
});
```

This will only send if the log includes an error. Optionally include a request in the log to send that information along.

## Like what we do?

[gittip-url]: https://www.gittip.com/WeAreFractal/
[gittip-image]: http://img.shields.io/gittip/WeAreFractal.svg

[downloads-image]: http://img.shields.io/npm/dm/bunyan-raygun.svg
[npm-url]: https://npmjs.org/package/bunyan-raygun
[npm-image]: http://img.shields.io/npm/v/bunyan-raygun.svg

[travis-url]: https://travis-ci.org/wearefractal/bunyan-raygun
[travis-image]: http://img.shields.io/travis/wearefractal/bunyan-raygun.svg

[coveralls-url]: https://coveralls.io/r/wearefractal/bunyan-raygun
[coveralls-image]: http://img.shields.io/coveralls/wearefractal/bunyan-raygun/master.svg
