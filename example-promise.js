// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('San Diego', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   }
//   else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('San Diego').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });

// Challenge
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number')
      resolve(a + b);
    else {
      reject('Two numbers not given');
    }
  });
}

addPromise(2, 5).then(function(sum) {
  console.log('sum', sum);
}, function(err) {
  console.log('error', err);
});

addPromise('a', 5).then(function(sum) {
  console.log('sum', sum);
}, function(err) {
  console.log('error', err);
});
