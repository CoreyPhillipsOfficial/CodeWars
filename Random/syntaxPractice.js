
// // Define a class called Person
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

// const { log } = require("console");

//     displayInfo() {
//         console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }
// }

// const person1 = new Person('Alice', 30);

// person1.displayInfo();



// // Define a class called Car
// class Car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }

//     displayInfo() {
//         console.log(`Make: ${this.make}, Model: ${this.model}`);
//     }
// }

// // Creat an object of the Car class
// const car1 = new Car('Porsche', '911');

// // Call the displayInfo method to display car information
// car1.displayInfo();





// Create getter and setter methods

// Define a class
class Employee {
    constructor(name) {
        this.name = name; // Private property
    }

    // Getter method for the name property
    get name() {
        return this._name;
    }

    // Setter method for the name property
    set name(newName) {
        this._name = newName;
    }
}

// Create an oject of the Employee class
employee1 = new Employee('Bert');

// Access the name property using the getter method
console.log(employee1.name); // Output: Bert

// Update the property using the setter method
employee1.name = 'Ernie';

// Access the updated name property
console.log(employee1.name); // Output: Ernie





// Exception handling using try-catch blocks

try {
    // Code that may throw an exception
    throw new Error('An error occurred,');
} catch (error) {
    // Code to handle exception
    console.error('Caught an error:' error.message);
}



// Another example of exception handling

try {
    // Code that may throw an exception
    const result = 10 / 0; // This will throw a division by zero error
    console.log(result); // This line will not be executed
} catch (error) {
    // Code to handle the exception
    console.error('An error occurred:' error.message); // Output: An error occurred: Infinity
} finally {
    // Optional: Code to be executed regardless of whther an exception occurred
    console.log('Execution completed.'); // Output: Execution completed
}