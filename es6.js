// Prolem 1
const countVolumeBalok = (...params) => {
  const [panjang, lebar, tinggi] = params;
  return `Volume balok adalah ${panjang * lebar * tinggi}`;
};

const countVolumeTabung = (...params) => {
  const PI = 3.14;
  const [diameter, tinggi] = params;
  return `Volume tabung adalah ${0.25 * PI * diameter * diameter * tinggi}`;
};

// console.log(countVolumeBalok(2, 5, 4));
// console.log(countVolumeTabung(2, 5));

// Problem 2
let pesertaLomba = [
  ['Budi', 'Pria', '172cm'],
  ['Susi', 'Wanita', '162cm'],
  ['Lala', 'Wanita', '155cm'],
  ['Agung', 'Pria', '175cm'],
];

let pesertaLombaObj = [];
pesertaLomba.map((peserta) => {
  const pesertaObj = {
    nama: peserta[0],
    jenisKelamin: peserta[1],
    tinggi: peserta[2],
  };

  pesertaLombaObj = [...pesertaLombaObj, pesertaObj];
});

// console.log(pesertaLombaObj);

// Problem 3
let kalimat = '';
const addKalimat = (additionKalimat) => {
  kalimat = `${kalimat} ${additionKalimat}`;
  return kalimat;
};

// console.log(addKalimat('saya'));
// console.log(addKalimat('adalah'));
// console.log(addKalimat('seorang'));
// console.log(addKalimat('frontend'));
// console.log(addKalimat('developer'));

// Problem 4
const newFunction = (firstName, lastName) => {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: () => {
      console.log(`${firstName} ${lastName}`);
    },
  };
};

// Driver Code
// newFunction('John', 'Doe').fullName();

// Problem 5
const newObject = {
  firstName: 'Harry',
  lastName: 'Potter Holt',
  destination: 'Hogwarts React Conf',
  occupation: 'Deve-wizard Avocado',
  spell: 'Vimulus Renderus!!!',
};

const { firstName, lastName, destination, occupation, spell } = newObject;

// Driver code
// console.log(firstName, lastName, destination, occupation, spell);

// Problem 6
const west = ['Will', 'Chris', 'Sam', 'Holly'];
const east = ['Gill', 'Brian', 'Noel', 'Maggie'];
const combined = [...west, ...east];

//Driver Code
// console.log(combined);

// Problem 7
let warna = ['biru', 'merah', 'kuning', 'hijau'];

let dataBukuTambahan = {
  penulis: 'john doe',
  tahunTerbit: 2020,
};

let buku = {
  nama: 'pemograman dasar',
  jumlahHalaman: 172,
  warnaSampul: ['hitam'],
};

warna = [...warna, ...buku.warnaSampul];
buku = { ...buku, ...dataBukuTambahan };

// console.log(warna);
// console.log(buku);

// Problem 8
let cars = [
  { brand: 'BMW', color: 'red', yearOfRelease: 2010 },
  { brand: 'Benz', color: 'navy', yearOfRelease: 2008 },
  { brand: 'Daihatsu', color: 'red', yearOfRelease: 2009 },
  { brand: 'Honda', color: 'white', yearOfRelease: 2011 },
  { brand: 'Jaguar', color: 'red', yearOfRelease: 2018 },
];

const filteredCar = cars.filter(
  (car) => car.color == 'red' && car.yearOfRelease > 2010
);

// console.log(filteredCar);
