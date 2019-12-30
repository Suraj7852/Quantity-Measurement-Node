class Length {
    constructor(unit, number) {
        this.unit = unit;
        this.number = number;
    }
    
    equal(obj1,obj2) {
        if(obj1.unit === obj2.unit) {
            if(obj1.number == obj2.number)
                return true;
        }
        return false;
    }
}
module.exports = Length;