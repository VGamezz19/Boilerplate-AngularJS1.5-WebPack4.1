import angular from 'angular';
import './HelloWorld.style.less';
// import HelloWorldController from './HelloWorld.controller';
import HelloWorldTemplate from './HelloWorld.template.html';

const MODULE_NAME = 'helloWorld.component';

// https://code.angularjs.org/1.5.5/docs/guide/component
const HelloWorldComponent = {
  bindings: {
    text: '=',
    onClick: '&'
  },
  template: HelloWorldTemplate,
};

angular
  .module(MODULE_NAME, [])
  .component('helloWorld', HelloWorldComponent);

export default MODULE_NAME;
