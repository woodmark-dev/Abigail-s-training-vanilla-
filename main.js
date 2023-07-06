import './style.css';

/*
function promisifySetTimeout() {
  return new Promise(function (res, rej) {
    setTimeout(res, 3000, 'hello');
  });
}

function promisifySetTimeout2() {
  return new Promise(function (res, rej) {
    setTimeout(res, 2000, 'hello2');
  });
}

async function consumePromises() {
  try {
    const val = await promisifySetTimeout();
    console.log(val);
    const val2 = await promisifySetTimeout2();
    console.log(val2);

    console.log('Hello mom');
  } catch (err) {
    console.log(err);
  }
}

consumePromises();

/*
promisifySetTimeout()
  .then((val) => {
    console.log(val);
    return promisifySetTimeout2();
  })
  .then((val) => console.log(val));

/*
// const arr = ourMap(
//   function (val) {
//     return val + 1;
//   },
//   [1, 2, 3, 4, 5, 6]
// );

// console.log(arr);

const arr2 = new Array(8);

arr2.fill(0);

// console.log(arr2);

Array.prototype.ourMap = function ourMap(fn) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    const value = fn(this[i]);
    arr.push(value);
  }
  return arr;
};

const arr3 = [1, 2, 3, 4, 5, 6];

const arr4 = arr3.ourMap(function (val) {
  return val + 1;
});

console.log(arr4);

/*
const myPromise = new Promise(function (resolve, reject) {
  resolve('Logged in');
  reject('Error');
});

const myPromise2 = new Promise(function (res, rej) {
  res('Show page');
});

//The .then method consumes a promise and can also return another promise that will be consumed by
//Another .then

myPromise
  .then(function (message) {
    console.log(message);
    return myPromise2;
  })
  .then((val) => {
    console.log(val);
  })
  .catch(function (err) {
    console.log(err);
  });

/*

setTimeout(function () {
  console.log('Logged in');
  setTimeout(function () {
    console.log('Show Page');
    setTimeout(function () {
      console.log('Debit Money');
      setTimeout(function () {
        console.log('Credit Money');
        setTimeout(function () {
          console.log('Logout out');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 2000);

/*

class Animal {
  constructor(printName, name) {
    printName(name);
  }
}

const dog = new Animal(function (name) {
  console.log(name, 'is a beautiful dog');
}, 'Bingo');

const cat = new Animal(function (name) {
  console.log(name, 'Is a beautiful cat');
}, 'Emily');

/*
function generic(add2) {
  return add2(4);
}

const result = generic(function (num) {
  return num + 2;
});

console.log(result);

// const dog = new Animal(function (name) {
//   console.log(name);
// });

// const ourPromise = new Promise();

/*

const data = fetch(
  'https://vitejsvitegn3dpq-tdvp--3000--e809191e.local-corp.webcontainer.io/posts'
);

data.then((val) => console.log(val));

// function myP() {
//   return new Promise((resolve, reject) => {
//     resolve('Hello');
//   });
// }

// myP.then((val) => console.log(val)).catch((err) => console.log(err));

/*
const request = new XMLHttpRequest();
const request2 = new XMLHttpRequest();
request.open(
  'GET',
  'https://vitejsvitegn3dpq-tdvp--3000--e809191e.local-corp.webcontainer.io/posts'
);
request.send();

request2.open(
  'GET',
  'https://vitejsvitegn3dpq-tdvp--3000--e809191e.local-corp.webcontainer.io/users'
);
request2.send();

request.addEventListener('load', function () {
  console.log(this.responseText);
  request2.addEventListener('load', function () {
    console.log(this.responseText);
    
  });
});


//microtask queue

const ourPromise = new Promise((res, rej) => {
  setTimeout(res, 1000, 'hello');
});

ourPromise.then((val) => console.log(val));

const req = new XMLHttpRequest();
const req2 = new XMLHttpRequest();

req.addEventListener('load', function () {
  console.log(this.responseText);
  req2.addEventListener('load', function () {
    if (this.statusText !== 'OK') {
      console.log('An error happened');
    }
  });
  req2.open(
    'GET',
    'https://vitejsvitegn3dpq-tdvp--3000--e809191e.local-corp.webcontainer.io/user'
  );
  req2.send();
});
req.open(
  'GET',
  'https://vitejsvitegn3dpq-tdvp--3000--e809191e.local-corp.webcontainer.io/posts'
);
req.send();

// const data = fetch(
//   'https://vitejsvitegn3dpq-tdvp--3000--e809191e.local-corp.webcontainer.io/posts'
// );

// data.then((val) => val.json()).then((val) => console.log(val));

// setTimeout(() => console.log('Abigail'), 100000000);

// console.log('Ibrahim');

//Web APIs
//timer

/*
import { obj2 } from './sayname';
const [first, second] = obj2();
const details = {
  first: { ...first },
  second: { ...second },
};
console.log(details);
*/
