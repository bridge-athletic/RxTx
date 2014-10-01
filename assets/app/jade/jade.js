angular.module( 'ngBoilerplate.jade', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(['$stateProvider', function config( $stateProvider ) {
  $stateProvider.state( 'jade', {
    url: '/jade',
    views: {
      "main": {
        controller: 'JadeCtrl',
        templateUrl: 'jade/jade.tpl.jade'
      }
    },
    data:{ pageTitle: 'What is It?' }
  });
}])

.controller( 'JadeCtrl', ['$scope', function JadeCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
}])

;
