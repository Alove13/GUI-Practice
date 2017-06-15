angular
    .module('ngCribs')
    .factory('cribsFactory', function($http){ //include $http if using json file.

        // W/ JSON FILE:

        function getCribs() {
            return $http.get("data/data.json");
        }
            return {
                getCribs: getCribs
            }
    });


        // w/o json file put data here:

        // var cribsData = [
        //     {
        //         "type": "Condo",
        //         "price": 350000,
        //         "address": 'Skippin Lane',
        //         "description": "Super over-priced",
        //     },
        //     {
        //         "type": "Heavenly Mansion",
        //         "price": "Priceless",
        //         "address": "Reformed Earth",
        //         "description": "Golden lanes and no stress.",
        //     },
        //     {
        //         "type": "Box",
        //         "price": 2,
        //         "address": "Anyhere",
        //         "description": "Homeless",
        //     }
        // ]; 

        // function getCribs() {
        //     return cribsData; //fetch function.
        // }

        // return {
        //     getCribs: getCribs //makes accessible elsewhere.
        // }
        //test!