const prenoms = ['Jean', 'Eric', 'Romain'];

// ES2015 (for .. of => utilisé par *ngFor)
// for (const prenom of prenoms) {
//   console.log(prenom);
// }

// ES5
// Callback sync
// prenoms.forEach((prenom) => {
//   console.log(prenom);
// });

// console.log('après forEach');

// callstack
// ^
// |lg   lg   lg
// |=> - => - =>
// |forEach      - lg
// +------------------------> temps
//  Eric Jean Rom  apres forEach

// callback async
setTimeout(() => console.log('A'), 100);
setTimeout(() => console.log('B'), 50);
console.log('après setTimeout');

// callstack
// ^
// |
// |                  lg       lg
// |st - st - lg      =>       =>
// 0------------------50-------100---> temps
//            apres   B        A

// node langage/01-callback-sync-vs-async.js
