let assert = require('assert');
let quantityMeasurement = require('../main/quantityMeasurement');
let unit = require('../main/unit');

describe('gallon to gallon', () => {
    it('should return true if 0gallon and 0gallon passed', function () {
        volume1 = new quantityMeasurement(unit.volume.GALLON, 0);
        volume2 = new quantityMeasurement(unit.volume.GALLON, 0);
        let volumeObj = volume1.equal(volume1, volume2);
        assert.equal(volumeObj, true);
    });

    it('should return true if 0litre and 0litre passed', function () {
        volume1 = new quantityMeasurement(unit.volume.LITRE, 0);
        volume2 = new quantityMeasurement(unit.volume.LITRE, 0);
        let volumeObj = volume1.equal(volume1, volume2);
        assert.equal(volumeObj, true);
    });

    it('should return true if 1litre and 1gallon passed', function () {
        volume1 = new quantityMeasurement(unit.volume.LITRE, 1);
        volume2 = new quantityMeasurement(unit.volume.GALLON, 1);
        let volumeObj = volume1.equal(volume1, volume2);
        assert.equal(volumeObj, false);
    });

    it('should return true if 1gallon and 3.78litre passed', function () {
        volume1 = new quantityMeasurement(unit.volume.GALLON, 1);
        volume2 = new quantityMeasurement(unit.volume.LITRE, 3.78);
        let volumeObj = volume1.equal(volume1, volume2);
        assert.equal(volumeObj, true);
    });

    it('should return true if 1litre and 1000ml passed', function () {
        volume1 = new quantityMeasurement(unit.volume.LITRE, 1);
        volume2 = new quantityMeasurement(unit.volume.MILILITRE, 1000);
        let volumeObj = volume1.equal(volume1, volume2);
        assert.equal(volumeObj, true);
    });
})

describe('add 2 unit values', () => {
    it('should return true if 1gallon and 3.78litre passed', function () {
        volume1 = new quantityMeasurement(unit.volume.GALLON, 1);
        volume2 = new quantityMeasurement(unit.volume.LITRE, 3.78);
        let volumeObj = volume1.equal(volume1, volume2);
        if (volumeObj){
            let add  = volume1.add(volume1, volume2, unit.volume.LITRE);
            assert.equal(add, 7.56)
        }
    });

    it('should return true if 1litre and 1000ml passed', function () {
        volume1 = new quantityMeasurement(unit.volume.LITRE, 1);
        volume2 = new quantityMeasurement(unit.volume.MILILITRE, 1000);
        let volumeObj = volume1.equal(volume1, volume2);
        if (volumeObj){
            let add  = volume1.add(volume1, volume2, unit.volume.LITRE);
            assert.equal(add, 2)
        }
    });
})