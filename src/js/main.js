angular.module('application', [])


.controller('testController', function () {

  console.log('--- testController ---');

  this.testForm = function (scope) {

    console.log('scope.isChecked: ', scope.isChecked);

  }

});