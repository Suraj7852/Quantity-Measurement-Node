let assert = require('assert');
let inch = require('../main/inch');
let feet = require('../main/feet');
describe('Inch to Inch', function() {
    it('should return true if 0inch and 0inch passed', function() {
        inch1 = new inch(0);
        inch2 = new inch(0);
        let inchObj = inch1.equal(inch1,inch2);
        assert.equal(inchObj,true);
    });

    it('should return true if 1inch and 1inch passed', function() {
        inch1 = new inch(null);
        inch2 = new inch(1);
        let inchObj = inch1.equal(inch1,inch2);
        assert.equal(inchObj,false);
    });

    it('should return false if 1inch and 1.5inch passed', function() {
        inch1 = new inch(1);
        inch2 = new inch(1.5);
        let inchObj = inch1.equal(inch1,inch2);
        assert.equal(inchObj,false);
    });
});

describe('feet to feet', function() {
    it('should return true if 0feet and 0feet passed', function() {
        feet1 = new feet(0);
        feet2 = new feet(0);
        let feetObj = feet1.equal(feet1,feet2);
        assert.equal(feetObj,true);
    });

    it('should return false if null and 1feet passed', function() {
        feet1 = new feet(null);
        feet2 = new feet(0);
        let feetObj = feet1.equal(feet1,feet2);
        assert.equal(feetObj,false);
    });

    it('should return false if 1feet and 1.5feet passed', function() {
        feet1 = new feet(1);
        feet2 = new feet(1.5);
        let feetObj = feet1.equal(feet1,feet2);
        assert.equal(feetObj,false);
    });
})