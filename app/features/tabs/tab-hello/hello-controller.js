angular.module('hello')
  .controller('helloCtrl', helloCtrl);

  helloCtrl.$inject = [];

  function helloCtrl () {
    var vm = this;

    vm.showMessage = function(){
      vm.message = "Hello World";
    };

    vm.showMessage();
  };
