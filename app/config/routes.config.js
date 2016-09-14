angular.module('hello')
.config(function($ionicConfigProvider) {
  return $ionicConfigProvider.templates.maxPrefetch(0);
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('tab', {
        url: '/tab',
        abstract: false,
        templateUrl: function() {
          if (ionic.Platform.isIOS()) {
            return 'tabs-ios.tpl.html';
          }
          return 'tabs-android.tpl.html';
        }
      })
  .state('tab.hello', {
    url: '/hello',
    views: {
      'tab-hello': {
        templateUrl: 'tabs/tab-hello/tab-hello.tpl.html',
        controller: 'helloCtrl as hello'
      }
    }
  });
  $urlRouterProvider.otherwise('tab/hello');
})
