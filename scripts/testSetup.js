//this file is not transpiled yet so must use Common Js and ES5

//register babel to transpile before our test runs
require('babel-register')();

//disable webpack features that Mocha doesnt understand
require.extensions['.css'] = function(){};