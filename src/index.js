import angular from 'angular';
// general: {
//     templateUrl: require('./login.template.html'),
//     controller: require('./login.controller.js'),
//     controllerAs: "ctrl"
// }

import template from './heroDetail.html';

angular.module('heroApp', []).controller('MainCtrl', function MainCtrl() {
  this.hero = {
    name: 'World'
  };
}).component('heroDetail', {
  template,
  // controller: require(),
  controllerAs: 'ctrl',
  bindings: {
    hero: '='
  }
});
