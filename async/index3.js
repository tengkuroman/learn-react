var filterBooksPromise = require('./promise2.js');

// Problem 3
// bukunya berwarna dan jumlah halamannya 40
filterBooksPromise(true, 40)
  .then((books) => {
    books.map((book) => {
      console.log(`Buku ${book.name} dengan jumlah halaman ${book.totalPage}.`);
    });
  })
  .catch((err) => console.log(err.message));

// bukunya tidak berwarna dan jumlah halamannya 250
filterBooksPromise(false, 250)
  .then((books) => {
    books.map((book) => {
      console.log(`Buku ${book.name} dengan jumlah halaman ${book.totalPage}.`);
    });
  })
  .catch((err) => console.log(err.message));

// bukunya berwarna dan jumlah halamannya 30
filterBooksPromise(true, 30)
  .then((books) => {
    books.map((book) => {
      console.log(`Buku ${book.name} dengan jumlah halaman ${book.totalPage}.`);
    });
  })
  .catch((err) => console.log(err.message));
