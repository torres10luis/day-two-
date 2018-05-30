import { Component, OnInit  } from '@angular/core';
import { Module } from '@module';

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

// modules
module Shapes {
  export class Retangle {

  constructor(public height: number, public width: number) {}

  }
  export const rect1 = new Retangle(10, 4);
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
    // this.extendDeviredClassTesting();
    // this.protectedTesting();
    // testing generics

    console.log('random  number selected: ', this.randomIntElem(([22, 223, 434, 4343]) );
    console.log('random string selected: ', this.randomStrElem(['red', 'blue']));
    console.log('random position selected from randomElem: ', this.randomElem(position));
    console.log('random color selected from randomElem:', );

    const rect2 = new Shapes.Rectangle(20, 10);
    console.log(rect2);
   
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

  // generics

  randomIntElem(arr: number[]): number {
    const randomIndex = Math.floor( Math.random() * arr.length);
    return arr[randomIndex];
  }

  randomStrElem(arr: string[]): string {
    const randomIndex = Math.floor( Math.random() * arr.length);
    return arr[randomIndex];

  }

  randomElem(arra: any[]): any {
    const randomIndex = Math.floor( Math.random() * arr.length );
    return arr[randomIndex];
  }
}
