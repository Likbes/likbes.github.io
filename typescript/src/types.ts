// funcs

function multiply(a: number, b: number) {
  return a * b;
};

let myMultiply: (a: number, b: number) => number;

myMultiply = multiply;

myMultiply(2, 10);

// objs + alias

type Complex = {
  data: number[],
  output: () => number[]
};

let complex: Complex = {
  data: [1, 2, 3, 10, 3.99],
  output: function (): number[] {
    return this.data;
  }
}

// union types

let myAge: number | string = 16;
myAge = '16';

// check types 

let finalValue = 'String';

if (typeof finalValue == 'string') console.log('string, yep');

// never type

function neverRetuns(): never {
  throw new Error('Error');
}

// nullable type
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;

// 1 exercise

type BankAccount = {
  money: number,
  deposit: (value: number) => void,
}

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself: {
  name: string,
  bankAccount: BankAccount,
  hobbies: string[],
} = {
  name: 'Nik',
  bankAccount,
  hobbies: ['Front-end', 'Sport'],
};

myself.bankAccount.deposit(3000);

console.log(myself);
