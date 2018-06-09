export default class AppController {
  constructor() {
    this.helloWorld = 'Hello World';
    this.goodBy = 'Good By';
    this.text = this.helloWorld;
  }

  onChildClick(value) {
    const { helloWorld, goodBy } = this;

    this.text = value === helloWorld ? goodBy : helloWorld;
  }
}
