var readBooksPromise = require('./promise.js');

var books = [
  { name: 'LOTR', timeSpent: 3000 },
  { name: 'Fidas', timeSpent: 2000 },
  { name: 'Kalkulus', timeSpent: 4000 },
];

// Problem 2
let i = 0;
const execute = (time, books) => {
  if (books[i] !== undefined) {
    readBooksPromise(time, books[i])
      .then((sisaWaktu) => {
        i++;
        execute(sisaWaktu, books);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
};

execute(10000, books);
