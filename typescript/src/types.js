"use strict";
// funcs
function multiply(a, b) {
    return a * b;
}
;
var myMultiply;
myMultiply = multiply;
myMultiply(2, 10);
var complex = {
    data: [1, 2, 3, 10, 3.99],
    output: function () {
        return this.data;
    }
};
// union types
var myAge = 16;
myAge = '16';
// check types 
var finalValue = 'String';
if (typeof finalValue == 'string')
    console.log('string, yep');
// never type
function neverRetuns() {
    throw new Error('Error');
}
// nullable type
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'Nik',
    bankAccount: bankAccount,
    hobbies: ['Front-end', 'Sport'],
};
myself.bankAccount.deposit(3000);
console.log(myself);
