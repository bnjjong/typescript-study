import {Person} from "./Person";

const henry: Person = new Person('henry', 'CEO');
henry.print();

henry.foo('first', 'second'); // value1: first
                        // vlaue2: second

henry.foo('first'); // value1: first

henry.foo2('first');

// getter setter
henry.name = "henry han";
console.log(henry.name);

let callback = henry.callback('henry');
callback();

// lambda function
callback = henry.callback2('henry');
callback();