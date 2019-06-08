interface Array<T> {
  fill(value: T): Array<T>;
}

class Person {
  name: string;
  username: string;
  private type: string = 'Smth';
  protected age: number = 16;

  constructor(name: string, username: string) {
    this.name = name;
    this.username = username;
  }

  printAge() {
    console.log('age', this.age);
    this.setType('anime');
  }

  protected setType(type: string) {
    this.type = type;
    console.log('type', this.type);
  }
}

const person = new Person('Nikita', 'Likbes');

person.printAge();

console.log(Array<string>(50).fill('-').join(''));

// inheritance

class Nik extends Person {

  constructor(username: string) {
    super('Nik', username);
    this.age = 17;
    this.setType('Hmmm')
  }
}

const nik = new Nik('nik');
console.log('nik object', nik);

console.log(Array<string>(50).fill('-').join(''));

// getter setter static

class Plant {
  static PI: number = 3.14159;
  private _species: string = 'weed';


  get species() {
    return this._species;
  }

  set species(value: string) {
    this._species = value;
  }

  static calcCircumference(d: number): number {
    return this.PI * d;
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = 'mark';
console.log(plant.species);

console.log(2 * Plant.PI);
console.log(Plant.calcCircumference(2));

console.log(Array<string>(50).fill('-').join(''));

// abstract classes

abstract class Project {
  name: string = 'Default';
  budget: number = 0;

  abstract changeName(name: string): void;

  changeBudget(): number {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string) {
    this.name = name;
  }
}

