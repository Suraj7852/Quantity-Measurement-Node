class QuantityMeasurement {
    constructor(unit, value) {
        this.unit = unit;
        this.value = value;
    }

    compare(obj1, obj2) {
        return obj1.value * obj1.unit == obj2.value * obj2.unit;
    }

    add(obj1, obj2, basevalue) {
        return (obj1.value * obj1.unit + obj2.value * obj2.unit) / basevalue;
    }

    equal(obj1, obj2) {
        if (obj1.unit === obj2.unit) {
            if (obj1.value == obj2.value) {
                return true;
            }
        } else if (obj1.unit != obj2.unit) {
            return this.compare(obj1, obj2);
        }
        return false;
    }
}
module.exports = QuantityMeasurement;