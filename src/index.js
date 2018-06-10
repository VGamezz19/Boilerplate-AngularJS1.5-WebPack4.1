import angular from 'angular';
import HelloWorldComponent from './components/HelloWorld';

import template from './app.component.html';
import controller from './app.controller';
import './app.style.less';

// https://code.angularjs.org/1.5.5/docs/guide/component

const appComponent = {
  template,
  controller,
  controllerAs: 'app'
};

export default angular
  .module('app', [
    HelloWorldComponent
  ])
  .component('acApp', appComponent);
