const assert = require('chai').assert;

const validateCode = require('../app2').validateCode;

describe('App', function () {

    it('returns error Please enter a five digit zip code', function () {
        let result = validateCode(567);
        assert.equal(result, "Please enter a five digit zip code");
    });

    it('returns error Please enter a number', function () {
        let result = validateCode("gb");
        assert.equal(result, "Please enter a number");
    });

    it('returns valid ', function () {
        let result = validateCode(55355);
        assert.equal(result, "Valid");
    });

    it('returns Please enter a number" ', function () {
        let result = validateCode(4-5-2);
        assert.equal(result, "Please enter a five digit zip code");
    });

    it('returns Please enter a five digit zip code" ', function () {
        let result = validateCode(42);
        assert.equal(result, "Please enter a five digit zip code");
    });

    it('returns String not allowed', function () {
        let result = validateCode("fredd");
        assert.equal(result, "Please enter a number");
    });
    it('returns Please enter a number ', function () {
        let result = validateCode("-");
        assert.equal(result, "Please enter a number");
    });

    it('returns Please enter a five digit zip code" ', function () {
        let result = validateCode(123);
        assert.equal(result, "Please enter a five digit zip code");
    });

    it('returns valid ', function () {
        let result = validateCode(56365);
        assert.equal(result, "Valid");
    });

    it('returns Please enter a five digit zip code" ', function () {
        let result = validateCode(1);
        assert.equal(result, "Please enter a five digit zip code");
    });

    it('returns Please enter a number ', function () {
        let result = validateCode(" ");
        assert.equal(result, "Please enter a number");
    });

 it('returns Please enter 0-9', function () {
        let result = validateCode("5674A");
        assert.equal(result, "Please enter a number");
    });

    it('returns "Not a valid zip code', function () {
        let result = validateCode(4566678);
        assert.equal(result, "Not a valid zip code");
    });

    it('returns "Not a valid zip code', function () {
        let result = validateCode(789543);
        assert.equal(result, "Not a valid zip code");
    });
    it('returns valid ', function () {
        let result = validateCode(00501);
        assert.equal(result, "Please enter a five digit zip code");
    });

 it('returns Please enter a number ', function () {
        let result = validateCode(00);
        assert.equal(result, "Please enter a number");
    });

    it('returns Please enter a number ', function () {
        let result = validateCode(0);
        assert.equal(result, "Please enter a number");
    });

    it('returns Please enter  a number', function () {
        let result = validateCode("+++++");
        assert.equal(result, "Please enter a number");
    });
});
