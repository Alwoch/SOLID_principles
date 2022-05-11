//adding
//subtract
//multiplication
//normal division
//modulus division
//resetting
//power-on
//power-off
//memory to store and retrieve data
//display (output option)
//Error 
var addition = /** @class */ (function () {
    function addition() {
    }
    addition.prototype.adding = function () {
        console.log('adding....');
    };
    return addition;
}());
var subtraction = /** @class */ (function () {
    function subtraction() {
    }
    subtraction.prototype.subtracting = function () {
        console.log('subtracting....');
    };
    return subtraction;
}());
var division = /** @class */ (function () {
    function division() {
    }
    division.prototype.dividing = function () {
        console.log('dividing....');
    };
    return division;
}());
var modulusDivison = /** @class */ (function () {
    function modulusDivison() {
    }
    modulusDivison.prototype.modulusDividing = function () {
        console.log('modulus diving....');
    };
    return modulusDivison;
}());
var reset = /** @class */ (function () {
    function reset() {
    }
    reset.prototype.resetting = function () {
        console.log('modulus diving....');
    };
    return reset;
}());
var power = /** @class */ (function () {
    function power() {
    }
    //powering on
    power.prototype.powerOn = function () {
        console.log('powering on');
    };
    return power;
}());
//calculator
var calculator = /** @class */ (function () {
    function calculator() {
    }
    //methods
    calculator.prototype.add = function () {
        var add = new addition;
        add.adding();
    };
    calculator.prototype.subtract = function () { };
    calculator.prototype.multiply = function () { };
    calculator.prototype.divide = function () { };
    calculator.prototype.modulusDivision = function () { };
    calculator.prototype.reset = function () { };
    calculator.prototype.powerOn = function () { };
    calculator.prototype.powerOff = function () { };
    calculator.prototype.memory = function () { };
    calculator.prototype.display = function () { };
    calculator.prototype.err = function () { };
    return calculator;
}());
var calculator2 = new calculator();
calculator2.add();
