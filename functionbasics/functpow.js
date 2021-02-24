function pow(x,n) {
let sum = x;
    for (let i = 1; i < n; i++) { 
        sum *= x;
    }
    return sum;

}
console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));
