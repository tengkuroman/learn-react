// Problem 1
// Release 0 (Poin A)
class Animal {
  constructor(name) {
    this.name = name;
    this.legs = 4;
    this.coldBlooded = false;
  }

  get animalName() {
    return this.name;
  }

  set animalName(name) {
    this.name = name;
  }

  get sumLegs() {
    return this.legs;
  }

  set sumLegs(legs) {
    this.legs = legs;
  }

  get isColdBlooded() {
    return this.coldBlooded;
  }

  set isColdBlooded(isColdBlooded) {
    this.isColdBlooded = isColdBlooded;
  }
}

let sheep = new Animal('shaun');

// console.log(sheep.name); // "shaun"
// console.log(sheep.legs); // 4
// sheep.legs = 3;
// console.log(sheep.isColdBlooded); // false
// console.log(sheep.legs); // 3

// Release 1 (Poin B)
class Ape extends Animal {
  constructor(legs) {
    super(legs);
    this.legs = 2;
  }

  yell() {
    console.log('Auooo');
  }
}

// let sungokong = new Ape('kera sakti');
// sungokong.yell(); // "Auooo"
// console.log(sungokong.name);
// sungokong.legs = 2;
// console.log(sungokong.legs);

class Frog extends Animal {
  jump() {
    console.log('hop hop');
  }
}

// let kodok = new Frog('buduk');
// kodok.jump(); // "hop hop"
// console.log(kodok.name);
// console.log(kodok.legs);

// Problem 2
class Clock {
  constructor({ template }) {
    this.timer;
    this.template = template;
  }

  render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(this.render.bind(this), 1000);
  }
}

let clock = new Clock({ template: 'h:m:s' });
clock.start();
