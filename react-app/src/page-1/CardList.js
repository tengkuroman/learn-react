import React from 'react';
import { Title } from './About';

class CardList extends React.Component {
  render() {
    const style = {
      cardlistContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '60%',
        margin: '0 auto',
      },
    };

    return (
      <div>
        <Title text='Person List' />
        <div style={style.cardlistContainer}>
          {data.map((person) => {
            return <Card person={person} />;
          })}
        </div>
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    const style = {
      card: {
        boxShadow: '0 2px 10px #b3b3b3',
        transition: '0.3s',
        width: '40%',
        margin: '10px',
        borderRadius: '20px',
        overflow: 'hidden',
      },

      img: {
        borderRadius: '5px 5px 0 0',
        width: '100%',
        height: '200px',
        objectFit: 'cover',
      },

      cardContainer: {
        padding: '2px 16px',
      },
    };

    const { name, age, gender, profession, photo } = this.props.person;
    const title = gender == 'Male' ? 'Mr.' : 'Mrs.';

    return (
      <div style={style.card}>
        <img src={photo} style={style.img} />
        <div style={style.cardContainer}>
          <h4>
            <b>{`${title} ${name}`}</b>
          </h4>
          <p>{profession}</p>
          <p>{`${age} years old`}</p>
        </div>
      </div>
    );
  }
}

const data = [
  {
    name: 'John',
    age: 40,
    gender: 'Male',
    profession: 'Engineer',
    photo:
      'https://media.istockphoto.com/photos/portarit-of-a-handsome-older-man-sitting-on-a-sofa-picture-id1210237745',
  },
  {
    name: 'Sarah',
    age: 25,
    gender: 'Female',
    profession: 'Designer',
    photo:
      'https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg',
  },
  {
    name: 'David',
    age: 28,
    gender: 'Male',
    profession: 'Programmer',
    photo:
      'https://media.istockphoto.com/photos/handsome-mexican-hipster-man-sending-email-with-laptop-picture-id1182472756',
  },
  {
    name: 'Kate',
    age: 27,
    gender: 'Female',
    profession: 'Model',
    photo:
      'https://cdn.pixabay.com/photo/2015/05/17/20/07/fashion-771505_960_720.jpg',
  },
];

export default CardList;
