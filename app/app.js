angular.module('hello', ['ui.router', 'ionic', 'ngCordova', 'app'])
.run(function($ionicPlatform) {

  $ionicPlatform.ready(function() {
    // Boilerplate Setup
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }

  });
});
