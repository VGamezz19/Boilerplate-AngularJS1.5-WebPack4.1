export default class HelloWorldController {
  constructor() {
    this.helloWorld = 'Hello World';
    this.goodBy = 'Good By';
  }

  onClick() {
    const { bindingText, helloWorld, goodBy } = this;

    this.bindingText = bindingText === helloWorld ? goodBy : helloWorld;
  }
}
