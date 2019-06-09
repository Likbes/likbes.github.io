/* eslint-disable import/no-extraneous-dependencies */
/*
  issue with react-hot-loader
  eventhough those 2 dependencies are only used in development
  eslint has no way to tell that and outputs an error
*/

// react dependencies
import React from "react";
import ReactDOM from "react-dom";
// hot reload for development
import { AppContainer } from "react-hot-loader";

import App from "./App";

import "./style.scss";

const root = document.getElementById("root") as HTMLElement;

const render = (Component: React.SFC) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root,
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    render(App);
  });
}

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

@printable
class Person {
  name = 'Plant'
}

const person = new Person();
person.print()
