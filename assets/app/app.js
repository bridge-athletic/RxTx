angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
  //$urlRouterProvider.otherwise( '/home' );
  
  $urlRouterProvider.otherwise(function ($injector, $location) {
    //console.log($location.$$url);
    
    if ($location.$$url === '/') {
      window.location = '/home';
    } else {
      // pass through to let the web server handle this request
      window.location = $location.$$absUrl;
    }
  });
  $locationProvider.html5Mode(true);
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
});


