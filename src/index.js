import angular from 'angular';
import HelloWorldComponent from './components/HelloWorld';


const root = angular
  .module('app', [
    HelloWorldComponent
  ])
  .component('acApp', {
    template: '<hello-world></hello-world>',
  });

export default root;
