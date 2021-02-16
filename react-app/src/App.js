import logo from './logo.svg';
import './App.css';
import { About } from './page-1/About';
import FruitList from './page-1/FruitList';

let dataHargaBuah = [
  { nama: 'Semangka', harga: 10000, berat: 1000 },
  { nama: 'Anggur', harga: 40000, berat: 500 },
  { nama: 'Strawberry', harga: 30000, berat: 400 },
  { nama: 'Jeruk', harga: 30000, berat: 1000 },
  { nama: 'Mangga', harga: 30000, berat: 500 },
];

function App() {
  return (
    <div>
      <About />
      <FruitList data={dataHargaBuah} />
    </div>
  );
}

export default App;
