import React from 'react';

class About extends React.Component {
  render() {
    const items = {
      nama: 'Tengku Romansyah',
      email: 'tengkuroman@gmail.com',
      sistOperasi: 'Windows 10',
      akunGitlab: '@tengkuroman',
    };

    return (
      <Container>
        <Title text='Data Diri' />
        <Item items={items} />
      </Container>
    );
  }
}

class Container extends React.Component {
  render() {
    const containerStyle = {
      width: '60%',
      margin: '100px auto',
      padding: '20px',
      border: '1px solid grey',
      borderRadius: '20px',
      boxShadow: 'grey 0px 5px 10px 0px',
    };
    return <div style={containerStyle}>{this.props.children}</div>;
  }
}

class Title extends React.Component {
  render() {
    return <h2 style={{ textAlign: 'center' }}>{this.props.text}</h2>;
  }
}

class Item extends React.Component {
  render() {
    return (
      <ol>
        <li>
          <h4 style={{ display: 'inline' }}>Nama:&nbsp;</h4>
          {this.props.items.nama}
        </li>
        <li>
          <h4 style={{ display: 'inline' }}>Email:&nbsp;</h4>
          {this.props.items.email}
        </li>
        <li>
          <h4 style={{ display: 'inline' }}>
            Sistem Operasi yang Digunakan:&nbsp;
          </h4>
          {this.props.items.sistOperasi}
        </li>
        <li>
          <h4 style={{ display: 'inline' }}>Akun Gitlab:&nbsp;</h4>
          {this.props.items.akunGitlab}
        </li>
      </ol>
    );
  }
}

export { About, Title };
