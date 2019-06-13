console.log('---------------generic learning--------------------');

class Calc<T extends U, U extends number> {
  value: T;
  doubleValue: U;
  calc(): number {
    return this.value * this.doubleValue;
  }

  constructor(value: T, doubleValue: T) {
    this.value = value;
    this.doubleValue = doubleValue;
  }
}

const calc = new Calc<number, number>(10, 20);
console.log(calc.calc());

console.log('-----------decorator----------------');

function printable(fn: Function): void {
  fn.prototype.print = function () {
    console.log(this);
  }
}

function f() {
  console.log("f(): вычисляется");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("f(): вызван");
  }
}

function g() {
  console.log("g(): вычисляется");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("g(): вызван");
  }
}

class C {
  @f()
  @g()
  method() { console.log(1) }
}

const c = new C;
c.method();

console.log('---------------static properties--------------');
class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number, y: number }) {
    let xDist = (point.x - Grid.origin.x);
    let yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) { this.scale = scale }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

class Greeter {
  static standardGreeting = "Hello, there";
  greeting?: string;

  constructor() {

  }

  greet() {
    if (this.greeting) {
      return "Hello, " + this.greeting;
    }
    else {
      return Greeter.standardGreeting;
    }
  }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());

console.log('-----------------generics--------------------');

class GenericNumber<T> {
  zeroValue?: T;
  add?: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };

console.log(myGenericNumber);

interface Box {
  height: number;
  width: number;
}

interface Box {
  scale: number;
}

let box: Box = { height: 5, width: 6, scale: 10 };
