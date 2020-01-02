let assert = require('assert');
let QuantityMeasurement = require('../main/QuantityMeasurement');
let unit = require('../main/Unit');
describe('QuantityMeasurement to QuantityMeasurement', function () {
    it('should return true if 0inch and 0inch passed', function () {
        inch1 = new QuantityMeasurement(unit.length.INCH, 0);
        inch2 = new QuantityMeasurement(unit.length.INCH, 0);
        let inchObj = inch1.equal(inch1, inch2);
        assert.equal(inchObj, true);
    });

    it('should return true if 1inch and 1inch passed', function () {
        inch1 = new QuantityMeasurement(unit.length.INCH, null);
        inch2 = new QuantityMeasurement(unit.length.INCH, 1);
        let inchObj = inch1.equal(inch1, inch2);
        assert.equal(inchObj, false);
    });

    it('should return false if 1inch and 1.5inch passed', function () {
        inch1 = new QuantityMeasurement(unit.length.INCH, 1);
        inch2 = new QuantityMeasurement(unit.length.INCH, 1.5);
        let inchObj = inch1.equal(inch1, inch2);
        assert.equal(inchObj, false);
    });
});

describe('feet to feet', function () {
    it('should return true if 0feet and 0feet passed', function () {
        feet1 = new QuantityMeasurement(unit.length.FEET, 0);
        feet2 = new QuantityMeasurement(unit.length.FEET, 0);
        let feetObj = feet1.equal(feet1, feet2);
        assert.equal(feetObj, true);
    });

    it('should return false if null and 1feet passed', function () {
        feet1 = new QuantityMeasurement(unit.length.FEET, null);
        feet2 = new QuantityMeasurement(unit.length.FEET, 0);
        let feetObj = feet1.equal(feet1, feet2);
        assert.equal(feetObj, false);
    });

    it('should return false if 1feet and 1.5feet passed', function () {
        feet1 = new QuantityMeasurement(unit.length.FEET, 1);
        feet2 = new QuantityMeasurement(unit.length.FEET, 1.5);
        let feetObj = feet1.equal(feet1, feet2);
        assert.equal(feetObj, false);
    });
});

describe('feet to inch', () => {
    it('should return false if 2 different unit.length type sent', () => {
        QuantityMeasurement1 = new QuantityMeasurement(unit.length.FEET, 1);
        QuantityMeasurement2 = new QuantityMeasurement(unit.length.INCH, 1);
        let QuantityMeasurementObj = QuantityMeasurement1.equal(QuantityMeasurement1, QuantityMeasurement2);
        assert.equal(QuantityMeasurementObj, false);
    })

    it('should return true if 12inch and 1 feet sent', () => {
        QuantityMeasurement1 = new QuantityMeasurement(unit.length.FEET, 1);
        QuantityMeasurement2 = new QuantityMeasurement(unit.length.INCH, 12);
        let QuantityMeasurementObj = QuantityMeasurement1.equal(QuantityMeasurement1, QuantityMeasurement2);
        assert.equal(QuantityMeasurementObj, true);
    })

    it('should return false if 1inch and 1 feet sent', () => {
        QuantityMeasurement1 = new QuantityMeasurement(unit.length.INCH, 1);
        QuantityMeasurement2 = new QuantityMeasurement(unit.length.FEET, 1);
        let QuantityMeasurementObj = QuantityMeasurement1.equal(QuantityMeasurement1, QuantityMeasurement2);
        assert.equal(QuantityMeasurementObj, false);
    })
})

describe('inch to feet', () => {
    it('should return true if 12inch and 1 feet sent', () => {
        QuantityMeasurement1 = new QuantityMeasurement(unit.length.INCH, 12);
        QuantityMeasurement2 = new QuantityMeasurement(unit.length.FEET, 1);
        let QuantityMeasurementObj = QuantityMeasurement1.equal(QuantityMeasurement1, QuantityMeasurement2);
        assert.equal(QuantityMeasurementObj, true);
    })
})

describe('feet to yard', () => {
    it('should return true if 3 feet and 1 yard sent', () => {
        QuantityMeasurement1 = new QuantityMeasurement(unit.length.FEET, 3);
        QuantityMeasurement2 = new QuantityMeasurement(unit.length.YARD, 1);
        let QuantityMeasurementObj = QuantityMeasurement1.equal(QuantityMeasurement1, QuantityMeasurement2);
        assert.equal(QuantityMeasurementObj, true);
    })

    it('should return false if 1feet and 1 yard sent', () => {
        QuantityMeasurement1 = new QuantityMeasurement(unit.length.FEET, 1);
        QuantityMeasurement2 = new QuantityMeasurement(unit.length.YARD, 1);
        let QuantityMeasurementObj = QuantityMeasurement1.equal(QuantityMeasurement1, QuantityMeasurement2);
        assert.equal(QuantityMeasurementObj, false);
    })

    it('should return false if 1inch and 1 yard sent', () => {
        QuantityMeasurement1 = new QuantityMeasurement(unit.length.INCH, 1);
        QuantityMeasurement2 = new QuantityMeasurement(unit.length.YARD, 1);
        let QuantityMeasurementObj = QuantityMeasurement1.equal(QuantityMeasurement1, QuantityMeasurement2);
        assert.equal(QuantityMeasurementObj, false);
    })

    it('should return true if 36inch and 1 yard sent', () => {
        QuantityMeasurement1 = new QuantityMeasurement(unit.length.INCH, 36);
        QuantityMeasurement2 = new QuantityMeasurement(unit.length.YARD, 1);
        let QuantityMeasurementObj = QuantityMeasurement1.equal(QuantityMeasurement1, QuantityMeasurement2);
        assert.equal(QuantityMeasurementObj, true);
    })

    it('should return true if 1yard and 36inch sent', () => {
        QuantityMeasurement1 = new QuantityMeasurement(unit.length.YARD, 1);
        QuantityMeasurement2 = new QuantityMeasurement(unit.length.INCH, 36);
        let QuantityMeasurementObj = QuantityMeasurement1.equal(QuantityMeasurement1, QuantityMeasurement2);
        assert.equal(QuantityMeasurementObj, true);
    })
})

describe('inch to centimetre', () => {
    it('should return true if 2inch and 5centimeter sent', () => {
        QuantityMeasurement1 = new QuantityMeasurement(unit.length.INCH, 2);
        QuantityMeasurement2 = new QuantityMeasurement(unit.length.CENTIMETER, 5.08);
        let QuantityMeasurementObj = QuantityMeasurement1.equal(QuantityMeasurement1, QuantityMeasurement2);
        assert.equal(QuantityMeasurementObj, true);
    })
})

describe('adding two values', () => {
    it('should return true if 2inch and 2inch sent', () => {
        QuantityMeasurement1 = new QuantityMeasurement(unit.length.INCH, 2);
        QuantityMeasurement2 = new QuantityMeasurement(unit.length.INCH, 2);
        let add = QuantityMeasurement1.add(QuantityMeasurement1, QuantityMeasurement2, unit.length.INCH);
        assert.equal(add, 4)
    })

    it('should return true if 1feet and 2inch sent', () => {
        QuantityMeasurement1 = new QuantityMeasurement(unit.length.FEET, 1);
        QuantityMeasurement2 = new QuantityMeasurement(unit.length.INCH, 2);
        let add = QuantityMeasurement1.add(QuantityMeasurement1, QuantityMeasurement2, unit.length.INCH);   
        assert.equal(add,14);   
    })

    it('should return true if 1feet and 1feet sent', () => {
        QuantityMeasurement1 = new QuantityMeasurement(unit.length.FEET, 1);
        QuantityMeasurement2 = new QuantityMeasurement(unit.length.FEET, 1);
        let add = QuantityMeasurement1.add(QuantityMeasurement1, QuantityMeasurement2, unit.length.INCH);
        assert.equal(add, 24)
    })

    it('should return true if 1feet and 1feet sent', () => {
        QuantityMeasurement1 = new QuantityMeasurement(unit.length.INCH, 2);
        QuantityMeasurement2 = new QuantityMeasurement(unit.length.CENTIMETER, 2.54);
        let add = QuantityMeasurement1.add(QuantityMeasurement1, QuantityMeasurement2, unit.length.INCH);
        assert.equal(add, 3)
    })
})