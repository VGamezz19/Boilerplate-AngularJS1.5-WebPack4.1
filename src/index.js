import angular from 'angular';
import HelloWorldComponent from './components/HelloWorld';
// import { AppComponent } from './app.component';

const root = angular
  .module('app', [])
  .component('helloWorld', HelloWorldComponent);

// console.log(HelloWorldComponent);

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['app']));

export default root;
