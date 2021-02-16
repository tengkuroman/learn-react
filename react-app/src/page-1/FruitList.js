import React from 'react';
import { Title } from './About';

class FruitList extends React.Component {
  render() {
    return (
      <div>
        <Title text='Daftar Harga Buah' />
        <table style={{ margin: '0 auto' }}>
          <thead>
            <tr className='table-buah'>
              <td>Nama</td>
              <td>Harga</td>
              <td>Berat</td>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((buah, key) => {
              return (
                <tr className='table-buah'>
                  <td>{buah.nama}</td>
                  <td>{buah.harga}</td>
                  <td>{`${buah.berat / 1000} kg`}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FruitList;
