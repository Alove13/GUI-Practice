//First get hold of module like other script files:
angular
    .module('ngCribs')
    .filter('cribsFilter', function() {
        return function(listings, priceInfo) { //where do listings and listing come from?
            var filtered = [];
            var min = priceInfo.min;
            var max = priceInfo.max;

            angular.forEach(listings, function(listing) { //somehow listing represents each home in json file. Listings is all the homes.
                if(listing.price >= min && listing.price <= max) {
                    filtered.push(listing);
                }
            });
                return filtered; //returns to view the array of filtered homes.
        }
    });