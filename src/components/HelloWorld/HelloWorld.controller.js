export default class HelloWorldController {
  constructor() {
    this.text = 'Hello World';
    this.helloWorld = 'Hello World';
    this.goodBy = 'Good By';
  }

  onClick() {
    const { text, helloWorld, goodBy } = this;

    this.text = text === helloWorld ? goodBy : helloWorld;
  }
}
