angular.module('hello')
.config(function($ionicConfigProvider) {
  $ionicConfigProvider.templates.maxPrefetch(0);
  $ionicConfigProvider.tabs.style('striped');
})
