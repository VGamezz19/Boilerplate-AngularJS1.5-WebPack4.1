import angular from 'angular';
import './HelloWorld.styles.less';
import HelloWorldController from './HelloWorld.controller';
import HelloWorldTemplate from './HelloWorld.template.html';

const MODULE_NAME = HelloWorldController.name;

const HelloWorldComponent = {
  template: HelloWorldTemplate,
  controller: HelloWorldController,
  controllerAs: 'ctr'
};

angular
  .module(MODULE_NAME, [])
  .controller('HelloWorldController', HelloWorldComponent)
  .component('HelloWorld', HelloWorldComponent);

export default MODULE_NAME;
