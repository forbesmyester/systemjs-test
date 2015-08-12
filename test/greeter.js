"use strict";

var expect = require('expect.js'),
    lib = require('../src/greeter.esm');

describe('it', function() {
    it('can do', function() {
        expect(lib.enter({first_name: "bob", last_name: "smith", id: 2})).to.eql("Hi bob smith you have id 2");
    });
});

