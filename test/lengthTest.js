let assert = require('assert');
let quantityMeasurement = require('../main/quantityMeasurement');
let unit = require('../main/unit');
describe('quantityMeasurement to quantityMeasurement', function () {
    it('should return true if 0inch and 0inch passed', function () {
        inch1 = new quantityMeasurement(unit.length.INCH, 0);
        inch2 = new quantityMeasurement(unit.length.INCH, 0);
        let inchObj = inch1.equal(inch1, inch2);
        assert.equal(inchObj, true);
    });

    it('should return true if 1inch and 1inch passed', function () {
        inch1 = new quantityMeasurement(unit.length.INCH, null);
        inch2 = new quantityMeasurement(unit.length.INCH, 1);
        let inchObj = inch1.equal(inch1, inch2);
        assert.equal(inchObj, false);
    });

    it('should return false if 1inch and 1.5inch passed', function () {
        inch1 = new quantityMeasurement(unit.length.INCH, 1);
        inch2 = new quantityMeasurement(unit.length.INCH, 1.5);
        let inchObj = inch1.equal(inch1, inch2);
        assert.equal(inchObj, false);
    });
});

describe('feet to feet', function () {
    it('should return true if 0feet and 0feet passed', function () {
        feet1 = new quantityMeasurement(unit.length.FEET, 0);
        feet2 = new quantityMeasurement(unit.length.FEET, 0);
        let feetObj = feet1.equal(feet1, feet2);
        assert.equal(feetObj, true);
    });

    it('should return false if null and 1feet passed', function () {
        feet1 = new quantityMeasurement(unit.length.FEET, null);
        feet2 = new quantityMeasurement(unit.length.FEET, 0);
        let feetObj = feet1.equal(feet1, feet2);
        assert.equal(feetObj, false);
    });

    it('should return false if 1feet and 1.5feet passed', function () {
        feet1 = new quantityMeasurement(unit.length.FEET, 1);
        feet2 = new quantityMeasurement(unit.length.FEET, 1.5);
        let feetObj = feet1.equal(feet1, feet2);
        assert.equal(feetObj, false);
    });
});

describe('feet to inch', () => {
    it('should return false if 2 different unit.length type sent', () => {
        quantityMeasurement1 = new quantityMeasurement(unit.length.FEET, 1);
        quantityMeasurement2 = new quantityMeasurement(unit.length.INCH, 1);
        let quantityMeasurementObj = quantityMeasurement1.equal(quantityMeasurement1, quantityMeasurement2);
        assert.equal(quantityMeasurementObj, false);
    })

    it('should return true if 12inch and 1 feet sent', () => {
        quantityMeasurement1 = new quantityMeasurement(unit.length.FEET, 1);
        quantityMeasurement2 = new quantityMeasurement(unit.length.INCH, 12);
        let quantityMeasurementObj = quantityMeasurement1.equal(quantityMeasurement1, quantityMeasurement2);
        assert.equal(quantityMeasurementObj, true);
    })

    it('should return false if 1inch and 1 feet sent', () => {
        quantityMeasurement1 = new quantityMeasurement(unit.length.INCH, 1);
        quantityMeasurement2 = new quantityMeasurement(unit.length.FEET, 1);
        let quantityMeasurementObj = quantityMeasurement1.equal(quantityMeasurement1, quantityMeasurement2);
        assert.equal(quantityMeasurementObj, false);
    })
})

describe('inch to feet', () => {
    it('should return true if 12inch and 1 feet sent', () => {
        quantityMeasurement1 = new quantityMeasurement(unit.length.INCH, 12);
        quantityMeasurement2 = new quantityMeasurement(unit.length.FEET, 1);
        let quantityMeasurementObj = quantityMeasurement1.equal(quantityMeasurement1, quantityMeasurement2);
        assert.equal(quantityMeasurementObj, true);
    })
})

describe('feet to yard', () => {
    it('should return true if 3 feet and 1 yard sent', () => {
        quantityMeasurement1 = new quantityMeasurement(unit.length.FEET, 3);
        quantityMeasurement2 = new quantityMeasurement(unit.length.YARD, 1);
        let quantityMeasurementObj = quantityMeasurement1.equal(quantityMeasurement1, quantityMeasurement2);
        assert.equal(quantityMeasurementObj, true);
    })

    it('should return false if 1feet and 1 yard sent', () => {
        quantityMeasurement1 = new quantityMeasurement(unit.length.FEET, 1);
        quantityMeasurement2 = new quantityMeasurement(unit.length.YARD, 1);
        let quantityMeasurementObj = quantityMeasurement1.equal(quantityMeasurement1, quantityMeasurement2);
        assert.equal(quantityMeasurementObj, false);
    })

    it('should return false if 1inch and 1 yard sent', () => {
        quantityMeasurement1 = new quantityMeasurement(unit.length.INCH, 1);
        quantityMeasurement2 = new quantityMeasurement(unit.length.YARD, 1);
        let quantityMeasurementObj = quantityMeasurement1.equal(quantityMeasurement1, quantityMeasurement2);
        assert.equal(quantityMeasurementObj, false);
    })

    it('should return true if 36inch and 1 yard sent', () => {
        quantityMeasurement1 = new quantityMeasurement(unit.length.INCH, 36);
        quantityMeasurement2 = new quantityMeasurement(unit.length.YARD, 1);
        let quantityMeasurementObj = quantityMeasurement1.equal(quantityMeasurement1, quantityMeasurement2);
        assert.equal(quantityMeasurementObj, true);
    })

    it('should return true if 1yard and 36inch sent', () => {
        quantityMeasurement1 = new quantityMeasurement(unit.length.YARD, 1);
        quantityMeasurement2 = new quantityMeasurement(unit.length.INCH, 36);
        let quantityMeasurementObj = quantityMeasurement1.equal(quantityMeasurement1, quantityMeasurement2);
        assert.equal(quantityMeasurementObj, true);
    })
})

describe('inch to centimetre', () => {
    it('should return true if 2inch and 5centimeter sent', () => {
        quantityMeasurement1 = new quantityMeasurement(unit.length.INCH, 2);
        quantityMeasurement2 = new quantityMeasurement(unit.length.CENTIMETER, 5.08);
        let quantityMeasurementObj = quantityMeasurement1.equal(quantityMeasurement1, quantityMeasurement2);
        assert.equal(quantityMeasurementObj, true);
    })
})

describe('adding two values', () => {
    it('should return true if 2inch and 2inch sent', () => {
        quantityMeasurement1 = new quantityMeasurement(unit.length.INCH, 2);
        quantityMeasurement2 = new quantityMeasurement(unit.length.INCH, 2);
        let quantityMeasurementObj = quantityMeasurement1.equal(quantityMeasurement1, quantityMeasurement2);
        if (quantityMeasurementObj) {
            let add = quantityMeasurement1.add(quantityMeasurement1, quantityMeasurement2, unit.length.INCH);
            assert.equal(add, 4)
        }
    })

    it('should return true if 1feet and 2inch sent', () => {
        quantityMeasurement1 = new quantityMeasurement(unit.length.FEET, 1);
        quantityMeasurement2 = new quantityMeasurement(unit.length.INCH, 2);
        let quantityMeasurementObj = quantityMeasurement1.equal(quantityMeasurement1, quantityMeasurement2);
        if (quantityMeasurementObj) {
            let add = quantityMeasurement1.add(quantityMeasurement1, quantityMeasurement2, unit.length.INCH);
            assert.equal(add, 14)
        }
    })

    it('should return true if 1feet and 1feet sent', () => {
        quantityMeasurement1 = new quantityMeasurement(unit.length.FEET, 1);
        quantityMeasurement2 = new quantityMeasurement(unit.length.FEET, 1);
        let quantityMeasurementObj = quantityMeasurement1.equal(quantityMeasurement1, quantityMeasurement2);
        if (quantityMeasurementObj) {
            let add = quantityMeasurement1.add(quantityMeasurement1, quantityMeasurement2, unit.length.INCH);
            assert.equal(add, 24)
        }
    })

    it('should return true if 1feet and 1feet sent', () => {
        quantityMeasurement1 = new quantityMeasurement(unit.length.INCH, 2);
        quantityMeasurement2 = new quantityMeasurement(unit.length.CENTIMETER, 2.54);
        let quantityMeasurementObj = quantityMeasurement1.equal(quantityMeasurement1, quantityMeasurement2);
        if (quantityMeasurementObj) {
            let add = quantityMeasurement1.add(quantityMeasurement1, quantityMeasurement2, unit.length.INCH);
            assert.equal(add, 3)
        }
    })
})