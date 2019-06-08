namespace MyMath {
  const PI = 3.14;

  export function calcCir(d: number) {
    return d * PI;
  }

  export function calcRect(w: number, l: number) {
    return w * l;
  }
}

console.log(MyMath.calcRect(10, 20));

