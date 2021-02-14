var readBooks = require('./callback.js');

var books = [
  { name: 'LOTR', timeSpent: 3000 },
  { name: 'Fidas', timeSpent: 2000 },
  { name: 'Kalkulus', timeSpent: 4000 },
  { name: 'komik', timeSpent: 1000 },
];

// Problem 1
let i = 0;
const execute = (time, book) => {
  readBooks(time, book[i], (sisaWaktu) => {
    if (sisaWaktu > 0) {
      i++;
      execute(sisaWaktu, book);
    }
  });
};

execute(10000, books);
