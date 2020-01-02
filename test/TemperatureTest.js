let assert = require('assert');
let QuantityMeasurement = require('../main/QuantityMeasurement');
let unit = require('../main/Unit');

describe('celcius to celcius', () => {
    it('should return true if 0 celcius and 0 celcius passed', () => {
        temp1 = new QuantityMeasurement(unit.temperature.CELSIUS, 0);
        temp2 = new QuantityMeasurement(unit.temperature.CELSIUS, 0);
        let tempObj = temp1.equal(temp1, temp2);
        assert.equal(tempObj, true);
    })

    it('should return true if 1 celcius and 1 fahrenheit passed', () => {
        temp1 = new QuantityMeasurement(unit.temperature.CELSIUS, 1);
        temp2 = new QuantityMeasurement(unit.temperature.FAHRENHEIT, 1);
        let tempObj = temp1.equal(temp1, temp2);
        assert.equal(tempObj, false);
    })

    it('should return true if 100 celcius and 212 fahrenheit passed', () => {
        temp1 = new QuantityMeasurement(unit.temperature.CELSIUS, 100);
        temp2 = new QuantityMeasurement(unit.temperature.FAHRENHEIT, 212);
        let tempObj = temp1.equal(temp1, temp2);
        assert.equal(tempObj, true);
    })

    it('should return true if 212 fehrenheit and 100 celcius passed', () => {
        temp1 = new QuantityMeasurement(unit.temperature.FAHRENHEIT, 212);
        temp2 = new QuantityMeasurement(unit.temperature.CELSIUS, 100);
        let tempObj = temp1.equal(temp1, temp2);
        assert.equal(tempObj, true);
    })
})