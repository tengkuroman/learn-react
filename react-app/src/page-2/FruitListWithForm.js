import React from 'react';
import { Title } from '../page-1/About';

class FruitListWithForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      nama: '',
      harga: '',
      berat: '',
      index: -1,
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    let value = event.target.value;
    let data = this.state.data.filter((val, idx) => idx != value);
    this.setState({ data });
  }

  render() {
    return (
      <div>
        <Title text='Daftar Harga Buah' />
        <table style={{ margin: '0 auto' }}>
          <thead>
            <tr className='table-buah'>
              <td>
                <b>Nama</b>
              </td>
              <td>
                <b>Harga</b>
              </td>
              <td>
                <b>Berat</b>
              </td>
              <td>
                <b>Aksi</b>
              </td>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((buah, index) => {
              return (
                <tr className='table-buah'>
                  <td>{buah.nama}</td>
                  <td>{buah.harga}</td>
                  <td>{`${buah.berat / 1000} kg`}</td>
                  <td>
                    <button onClick={this.handleEdit} value={index}>
                      Edit
                    </button>
                    <button onClick={this.handleDelete} value={index}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Title text='Form Daftar Harga Buah' />
      </div>
    );
  }
}

export default FruitListWithForm;
