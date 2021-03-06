let assert = require('assert');
let QuantityMeasurement = require('../main/QuantityMeasurement');
let unit = require('../main/Unit');

describe('weight to weight', () => {
    it('should return true if 0kg and 0kg passed', () => {
        weight1 = new QuantityMeasurement(unit.weight.KILOGRAM, 0);
        weight2 = new QuantityMeasurement(unit.weight.KILOGRAM, 0);
        let weightObj = weight1.equal(weight1, weight2);
        assert.equal(weightObj, true);
    })

    it('should return true if 0gm and 0gm passed', () => {
        weight1 = new QuantityMeasurement(unit.weight.GRAM, 0);
        weight2 = new QuantityMeasurement(unit.weight.GRAM, 0);
        let weightObj = weight1.equal(weight1, weight2);
        assert.equal(weightObj, true);
    })

    it('should return false if 0gm and 1gm passed', () => {
        weight1 = new QuantityMeasurement(unit.weight.GRAM, 0);
        weight2 = new QuantityMeasurement(unit.weight.GRAM, 1);
        let weightObj = weight1.equal(weight1, weight2);
        assert.equal(weightObj, false);
    })

    it('should return true if 1kg and 1000gm passed', () => {
        weight1 = new QuantityMeasurement(unit.weight.KILOGRAM, 1);
        weight2 = new QuantityMeasurement(unit.weight.GRAM, 1000);
        let weightObj = weight1.equal(weight1, weight2);
        assert.equal(weightObj, true);
    })

    it('should return true if 1tonne and 1000kg passed', () => {
        weight1 = new QuantityMeasurement(unit.weight.TONNE, 1);
        weight2 = new QuantityMeasurement(unit.weight.KILOGRAM, 1000);
        let weightObj = weight1.equal(weight1, weight2);
        assert.equal(weightObj, true);
    })
})

describe('add 2 unit values', () => {
    it('should return 1001kg if 1tonne and 1000gm passed', () => {
        weight1 = new QuantityMeasurement(unit.weight.TONNE, 1);
        weight2 = new QuantityMeasurement(unit.weight.GRAM, 1000);
        let add = weight1.add(weight1, weight2, unit.weight.KILOGRAM)
        assert.equal(add, 1001);
    })

    it('should return 1001kg if 1tonne and 1000gm passed', () => {
        weight1 = new QuantityMeasurement(unit.weight.TONNE, 1);
        weight2 = new QuantityMeasurement(unit.volume.GALLON, 1);
        let weightObj = weight1.equal(weight1, weight2);
        assert.equal(weightObj,false)
    })
})