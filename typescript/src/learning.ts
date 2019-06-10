// generic learning

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

// decorator

function printable(fn: Function): void {
  fn.prototype.print = function () {
    console.log(this);
  }
}
