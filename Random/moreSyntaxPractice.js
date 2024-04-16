// Constructor function for creating a Person object
function Person(name, age) {
    // Private variables
    var _name = name;
    var _age = age;

    // Public method to get the name
    this.getName = function () {
        return _name;
    };

    // Public method to set the name (access control)
    this.setName = function (newName) {
        // Check if newName is a valid string
        if (typeof newName === 'string' && newName.trim() !== '') {
            _name = newName;
        } else {
            console.error('Invalid name');
        }
    };

    // Public method to get the age
    this.getAge = function () {
        return _age;
    };

    // Public method to set the age (access control)
    this.setAge = function (newAge) {
        // Check if newAge is a valid number
        if (typeof newAge === 'number' && newAge > 0) {
            _age = newAge;
        } else {
            console.error('Invalid age');
        }
    };
}

// Creating a new Person object
var person1 = new Person('Alice', 30);

// Accessing public methods to get and set name and age
console.log(person1.getName()); // Output: Alice
console.log(person1.getAge()); // Output: 30

person1.setName('Bob'); // Setting the name
person1.setAge(25); // Setting the age

console.log(person1.getName()); // Output: Bob
console.log(person1.getAge()); // Output: 25

// Trying to set invalid name and age
person1.setName(''); // Output: Invalid name
person1.setAge(-5); // Output: Invalid age




























// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     // Getter for name property
//     get name() {
//         return this._name;
//     }

//     // Setter for name property
//     set name(newName) {
//         this._name = newName;
//     }
// }

// person1 = new Person('Sherlock');

// console.log(person1.name);

// person1.name = 'Holmes';

// console.log(person1.name);










// class Car {
//     constructor(make) {
//         this._make = make;
//     }

//     // Getter for make property
//     get make() {
//         return this._make;
//     }

//     // Setter for make property
//     set make(newMake) {
//         this._make = newMake;
//     }
// }

// const car1 = new Car('Mazda', '3');

// console.log(`${car1.make}`);

// car1.make = 'Porsche';

// console.log(`${car1.make}`);