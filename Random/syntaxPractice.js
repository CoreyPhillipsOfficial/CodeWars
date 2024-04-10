// // Define a class called Person
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

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