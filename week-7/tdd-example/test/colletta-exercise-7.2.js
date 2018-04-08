//Natasha Colletta's Exercise 7.2
//TDD in Action
//Date: 4/8/2018

var assert = require("assert");

describe("String#split", function() {
    it("should return an array of fruits", function() {
        assert(Array.isArray('Apple, Orange, Mango'.split(',')));
    });
});

function getFruits(str) {
    return str.split(',');
}

module.exports = getFruits;