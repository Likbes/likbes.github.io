"use strict";
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calcCir(d) {
        return d * PI;
    }
    MyMath.calcCir = calcCir;
    function calcRect(w, l) {
        return w * l;
    }
    MyMath.calcRect = calcRect;
})(MyMath || (MyMath = {}));
console.log(MyMath.calcRect(10, 20));
