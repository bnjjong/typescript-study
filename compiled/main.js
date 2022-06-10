"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var henry = new Person_1.Person('henry', 'CEO');
henry.print();
henry.foo('first', 'second');
henry.foo('first');
henry.foo2('first');
henry.name = "henry han";
console.log(henry.name);
var callback = henry.callback('henry');
callback();
callback = henry.callback2('henry');
callback();
//# sourceMappingURL=Main.js.map