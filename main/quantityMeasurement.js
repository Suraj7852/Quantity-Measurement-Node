class Inch {
    constructor(number) {
        this.number = number;
    }
    
    equal(obj1,obj2) {
        if(obj1.Inch === obj2.Inch)
            if(obj1.number == obj2.number)
                return true;
        return false;
    }
}
module.exports = Inch;