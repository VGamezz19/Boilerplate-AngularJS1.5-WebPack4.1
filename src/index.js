import angular from 'angular';
import HelloWorldComponent from './components/HelloWorld';


const root = angular
  .module('app', [
    HelloWorldComponent
  ])
  .component('acApp', {
    template: '<hello-world binding-text="ctrlAp.text"></hello-world>',
    controller: class appController {
      constructor() {
        this.text = 'Hello World';
      }
    },
    controllerAs: 'ctrlAp'
  });

export default root;
