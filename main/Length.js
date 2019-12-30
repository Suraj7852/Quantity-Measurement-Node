class Length {
    constructor(unit, number) {
        this.unit = unit;
        this.number = number;
    }

    feetToInch(feet) {
        return feet*12;
    }

    equal(obj1,obj2) {
        if(obj1.unit === obj2.unit) {
            if(obj1.number == obj2.number) {
                return true;
            }
        } else if (obj1.unit != obj2.unit) {
            let value = this.feetToInch(obj1.number)
            if(obj2.number == value)
                return true
            return false
        }
        return false;
    }
}
module.exports = Length;