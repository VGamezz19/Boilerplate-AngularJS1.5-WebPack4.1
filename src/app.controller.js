import logo from '../public/images/logo.svg';

export default class AppController {
  constructor() {
    this.helloWorld = 'Hello World';
    this.goodBy = 'Good By';
    this.text = this.helloWorld;
    this.logo = logo;
  }

  onChildClick(value) {
    const { helloWorld, goodBy } = this;

    this.text = value === helloWorld ? goodBy : helloWorld;
  }
}
