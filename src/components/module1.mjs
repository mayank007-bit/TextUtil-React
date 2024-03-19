// import aa from './module2.mjs'
// console.log(aa);     //aa = a = mayank which means it print by default.

//if we want to print multiple value from the module2...when we print more than one then they can't print by default...we can call by their variables.

import aa, {b, c, d} from './module2.mjs'
console.log(aa);
console.log(b);
console.log(c);
console.log(d);