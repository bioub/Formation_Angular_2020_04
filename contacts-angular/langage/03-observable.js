// function timeout(delayMs) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(); // appel () => console.log('1s')
//     }, delayMs);
//   });
// }

// // setTimeout(() => console.log('1s'), 1000);
// timeout(1000).then(() => console.log('1s'));

const { Observable } = require('rxjs');

function interval(delayMs) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next(); // appel () => console.log('1s')
    }, delayMs);
  });
}

// setInterval(() => console.log('1s'), 1000);
interval(1000).subscribe(() => console.log('1s'));

// learnrxjs.com -> videos
