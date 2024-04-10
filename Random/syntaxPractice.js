// Define a class called Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const person1 = new Person('Alice', 30);

person1.displayInfo();



// Define a class called Car
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    displayInfo() {
        console.log(`Make: ${this.make}, Model: ${this.model}`);
    }
}

// Creat an object of the Car class
const car1 = new Car('Porsche', '911');

// Call the displayInfo method to display car information
car1.displayInfo();