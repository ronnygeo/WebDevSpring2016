/**
 * Created by ronnygeo on 3/19/16.
 */

(function () {
    angular.module('FormBuilderApp')
        .filter('FormatOptions', function () {
            return function (input) {
                var data = "";
                for (var i of input) {
                    data += i.label+":"+i.value+"\n";
                }
                return data;
            }
        });
})();