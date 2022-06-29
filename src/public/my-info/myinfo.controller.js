(function() {
  "use strict";

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MyInfoService', 'info','SignUpService'];
  function MyInfoController(MyInfoService,info,SignUpService) {
    var $ctrl = this;
    if(info)  {
      SignUpService.getItemsByShortName(info.favMenu)
      .then(function(response) {
        $ctrl.menuItem = response;
      })
      .catch(function(response) {
        console.log(response);
      });
    }
    
    


    


  }
})();