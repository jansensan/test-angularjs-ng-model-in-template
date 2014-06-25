angular.module('application', [])


.controller('testController', function () {
  // value must be declared so that it can be used as an ng-model
  this.isBoxChecked = false;

  this.testForm = function () {
    // retrieving the value from the ng-model is then possible
    console.log('is check box checked: ' + this.isBoxChecked);
  }
});