class Feet {
    constructor(number) {
        this.number = number;
    }
    
    equal(obj1,obj2) {
        if(obj1.Feet === obj2.Feet)
            if(obj1.number == obj2.number)
                return true;
        return false;
    }
}
module.exports = Feet;