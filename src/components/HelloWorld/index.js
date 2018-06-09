import angular from 'angular';
import './HelloWorld.styles.less';
import HelloWorldController from './HelloWorld.controller';
import HelloWorldTemplate from './HelloWorld.template.html';

const MODULE_NAME = 'helloWorld.component';

const HelloWorldComponent = {
  template: HelloWorldTemplate,
  controller: HelloWorldController,
  controllerAs: 'ctrl'
};

angular
  .module(MODULE_NAME, [])
  .controller('HelloWorldController', HelloWorldController)
  .component('helloWorld', HelloWorldComponent);

export default MODULE_NAME;
