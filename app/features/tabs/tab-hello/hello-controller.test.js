describe('hello', function () {
  beforeEach(module('hello'));

  describe('helloCtrl', function () {

    var scope, ionicLoading, state;

    beforeEach(inject(function ($controller, $rootScope, $ionicLoading, $state) {
      scope                 = $rootScope.$new();
      ionicLoading          = $ionicLoading;
      state                 = $state;

      controller = $controller('helloCtrl',
        {
          $scope                : scope,
          $ionicLoading         : ionicLoading,
          $state                : state
        });
    }));

    describe('showMessage function', function(){

      it('sets the controller message variable', function(){
        controller.showMessage();
        expect(controller.message).toEqual('Hello World');
      });
    });

  });
});
