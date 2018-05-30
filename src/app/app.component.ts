import { Component, OnInit  } from '@angular/core';

class Greeting {
  message: string;
  constructor(message: string) {
    this.message = message;
  }

  greet() {
    return 'hello, ' + this.message;
  }
}

class Animal {
 private name: string;

  constructor(animalName: string) {
    this.name = animalName;
  }

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`);
  }

}

class Dog extends Animal {
constructor(name: string) {
  super(name);
}

  bark() {
    console.log('Woof!');
  }

  move(distanceMovedByDog: number = 5) {
    console.log('dog is moving..');
    super.move(distanceMovedByDog);

  }

}

class Poodle extends Dog {
  constructor(name: string) {
    super(name);
  }

  move() {
    let moving = super.move();
    console.log('poodle is walking');
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceByHorse: number = 45) {
    console.log('horse is charging..');
    super.move(distanceByHorse);
  }
}

class User {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
}
class John extends User {
  constructor() {
    super('John');
  }
}
class Employee {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Worker extends Person {
  private department: string;

 protected constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  getDetails() {
    return `My name is ${this.name} and i work in ${this.department} .`;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works';

  ngOnInit() {
    // this.classTesting();
    // this.animalClassTesting();
    // this.classCompatibilityTesting();
    this.extendDeviredClassTesting();
    this.protectedTesting();
  }
  classTesting() {
    const greeter = new Greeting('world');
    console.log(greeter.greet());
  }

  animalClassTesting() {
    const dog = new Dog('goofy');
    dog.bark();
    dog.move();

    const horse: Animal = new Horse ('bull eye');
    horse.move();
    const animal = new Animal('cat');
    console.log(animal);

  }

  classCompatibilityTesting() {
    let user = new User('Doe');
    const john = new John();

    console.log(user);
    console.log(john);

    const employee = new Employee('Smith');
    console.log(employee);

    user = john;
    console.log(user);
  }

  extendDeviredClassTesting() {
    const poodle = new Poodle('tom');
    poodle.move();
  }

  protectedTesting() {
    const worker = new Worker('Steve', 'sales');
    console.log(worker.getDetails());

    const person = new Person('patrick');
    console.log(person);
  }
}
