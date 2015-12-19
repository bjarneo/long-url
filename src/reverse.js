'use strict';

var http = require('http');
var objToStr = Object.prototype.toString;

module.exports = function reverseUrlShortener(url, callback) {
    if (objToStr.call(url) !== '[object String]') {
        throw new TypeError('URL is not set or is not a string.');
    }

    if (objToStr.call(callback) !== '[object Function]') {
        throw new TypeError('Callback is not set or is not a function.');
    }

    var req = http.get(url, function getHeaderLocation(res) {
        if (res.headers && res.headers.location && res.statusCode === 301) {
            return callback(null, res.headers.location);
        }

        return callback('Couldn\'t reverse the url');
    }).on('error', function onError(error) {
        return callback(error);
    });

    req.end();
};
