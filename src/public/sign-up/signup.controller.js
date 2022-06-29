(function() {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['SignUpService','MyInfoService'];
  function SignUpController(SignUpService,MyInfoService) {
    var $ctrl = this;
    $ctrl.info= {};

    $ctrl.submit = function() {
      console.log("$ctrl.info.favMenu", $ctrl.info.favMenu);
      SignUpService.getItemsByShortName($ctrl.info.favMenu).then(function(response) {
        $ctrl.isInvalidItem = false;
         $ctrl.completed = true;
         MyInfoService.setInfo($ctrl.info);
      })

      .catch(function(e) {
        $ctrl.isInvalidItem = true;
      });
     
      
     
      
    };

    $ctrl.validateFavItem = function()  { 
      $ctrl.isInvalidItem = false;

      SignUpService.getItemsByShortName($ctrl.info.favMenu).catch(function(e) {
         $ctrl.isInvalidItem = true;
      });
     
    };


  }
})();