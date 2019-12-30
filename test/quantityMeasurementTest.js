let assert = require('assert');
let inch = require('../main/inch');
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
});