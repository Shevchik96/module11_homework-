function sum(x) {
    return function(y) {
        return x + y;
    };
}

let f = sum(7);
console.log( f(1), f(2), f(3) );

console.log( sum(2)(3), sum(3)(3), sum(40)(8) );