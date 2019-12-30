let assert = require('assert');
let length = require('../main/Length');
let unit = require('../main/unit');
describe('length to length', function() {
    it('should return true if 0inch and 0inch passed', function() {
        inch1 = new length(unit.INCH,0);
        inch2 = new length(unit.INCH,0);
        let inchObj = inch1.equal(inch1,inch2);
        assert.equal(inchObj,true);
    });

    it('should return true if 1inch and 1inch passed', function() {
        inch1 = new length(unit.INCH,null);
        inch2 = new length(unit.INCH,1);
        let inchObj = inch1.equal(inch1,inch2);
        assert.equal(inchObj,false);
    });

    it('should return false if 1inch and 1.5inch passed', function() {
        inch1 = new length(unit.INCH,1);
        inch2 = new length(unit.INCH,1.5);
        let inchObj = inch1.equal(inch1,inch2);
        assert.equal(inchObj,false);
    });
});

describe('feet to feet', function() {
    it('should return true if 0feet and 0feet passed', function() {
        feet1 = new length(unit.FEET,0);
        feet2 = new length(unit.FEET,0);
        let feetObj = feet1.equal(feet1,feet2);
        assert.equal(feetObj,true);
    });

    it('should return false if null and 1feet passed', function() {
        feet1 = new length(unit.FEET,null);
        feet2 = new length(unit.FEET,0);
        let feetObj = feet1.equal(feet1,feet2);
        assert.equal(feetObj,false);
    });

    it('should return false if 1feet and 1.5feet passed', function() {
        feet1 = new length(unit.FEET,1);
        feet2 = new length(unit.FEET,1.5);
        let feetObj = feet1.equal(feet1,feet2);
        assert.equal(feetObj,false);
    });
});

 describe('feet to inch', ()=> {
    it('should return false if 2 different unit type sent', () => {
        length1 = new length(unit.FEET,0);
        length2 = new length(unit.INCH,0);
        let lengthObj = length1.equal(length1,length2);
        assert.equal(lengthObj,false);
    })
 })