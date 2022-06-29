(function() {
  "use strict";

  angular.module('public')
  .service('SignUpService', SignUpService);

  SignUpService.$inject = ['$http','ApiPath'];
  function SignUpService($http, ApiPath) {
    var service = this;
    
    service.getItemsByShortName = function(shortName)  {
     
      return $http.get(ApiPath + '/menu_items/'+shortName.toUpperCase()+'.json').then(function(response) {
        return response.data;
        
      }).catch(function(error)  {
        throw error;

      });
    };
  }
})();