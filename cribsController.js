//Two methods to reference app from app.js:

//Method one is with a variable created in app.js.
//If in app.js: created a var app = angular.module.....
//then can call that variable.

//Method two:
angular
    .module('ngCribs') //omit 2nd para, so is reference
    .controller('cribsController', function($scope, cribsFactory) {
        //$scope.hello = "Hello World"; //using scope:creates hello property. 
       
       //Do, if using json file to hold data:
       $scope.cribs; //declare property. 
       $scope.priceInfo = { //grabs the priceInfo variable already created.
           min: 0,
           max: 1000000
       }

       $scope.newListing = {};

       $scope.addCrib = function(newListing) {
           $scope.cribs.push(newListing);
       }

       cribsFactory.getCribs().then(function (response) { //done automatically? No need call getCribs()??
           $scope.cribs = response.data;
       });

        //Do, if no json file holding data: 
       // $scope.cribs = cribsFactory.getCribs();
}); 
    //.controller attaches a controller to app.
    //1st para: name of controller. 
    //2nd para: creates a function.