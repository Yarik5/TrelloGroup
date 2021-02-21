console.log (null || 2 || underfiled); // 2

console.log ( console.log(1) || 2 || console.log(3) ); // 1 2 

console.log (1 && null && 2 ); // null

console.log ( console.log(1) && console.log(2) ); //1 undefined

console.log ( null || 2 && 3 || 4 ); // 3