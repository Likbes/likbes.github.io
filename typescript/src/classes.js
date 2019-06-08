"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.type = 'Smth';
        this.age = 16;
        this.name = name;
        this.username = username;
    }
    Person.prototype.printAge = function () {
        console.log('age', this.age);
        this.setType('anime');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log('type', this.type);
    };
    return Person;
}());
var person = new Person('Nikita', 'Likbes');
person.printAge();
console.log(Array(50).fill('-').join(''));
// inheritance
var Nik = /** @class */ (function (_super) {
    __extends(Nik, _super);
    function Nik(username) {
        var _this = _super.call(this, 'Nik', username) || this;
        _this.age = 17;
        _this.setType('Hmmm');
        return _this;
    }
    return Nik;
}(Person));
var nik = new Nik('nik');
console.log('nik object', nik);
console.log(Array(50).fill('-').join(''));
// getter setter static
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'weed';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            this._species = value;
        },
        enumerable: true,
        configurable: true
    });
    Plant.calcCircumference = function (d) {
        return this.PI * d;
    };
    Plant.PI = 3.14159;
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'mark';
console.log(plant.species);
console.log(2 * Plant.PI);
console.log(Plant.calcCircumference(2));
console.log(Array(50).fill('-').join(''));
// abstract classes
var Project = /** @class */ (function () {
    function Project() {
        this.name = 'Default';
        this.budget = 0;
    }
    Project.prototype.changeBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.name = name;
    };
    return ITProject;
}(Project));
