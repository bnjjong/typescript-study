"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = (function () {
    function Person(name, occupation) {
        this._name = name;
        this._occupation = occupation;
    }
    Person.prototype.print = function () {
        console.log('printing...');
        console.log("name: ".concat(this._name));
        console.log("occupation: ".concat(this._occupation));
    };
    Person.prototype.foo = function (value1, value2) {
        console.log("value1: ".concat(value1, ", value2 : ").concat(value2 ? value2 : ""));
    };
    Person.prototype.foo2 = function (value1, value2) {
        if (value2 === void 0) { value2 = 'default'; }
        console.log("value1: ".concat(value1, ", value2: ").concat(value2));
    };
    Person.prototype.callback = function (name) {
        return function () {
            console.log("".concat(name, " is callback!"));
        };
    };
    Person.prototype.callback2 = function (name) {
        return function () {
            console.log("".concat(name, " is callback!"));
        };
    };
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "occupation", {
        get: function () {
            return this._occupation;
        },
        set: function (value) {
            this._occupation = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=Person.js.map