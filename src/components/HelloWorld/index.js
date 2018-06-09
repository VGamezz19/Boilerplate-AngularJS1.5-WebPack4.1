import './HelloWorld.styles.less';
import HelloWorldController from './HelloWorld.controller';
import HelloWorldTemplate from './HelloWorld.template.html';

// const MODULE_NAME = 'helloWorl.component';

export default {
  template: HelloWorldTemplate,
  controller: HelloWorldController,
  controllerAs: 'ctr'
};

// angular
//   .module(MODULE_NAME, [])
//   .controller('HelloWorldController', HelloWorldComponent)
//   .component('helloWorld', HelloWorldComponent);

// export default MODULE_NAME;
