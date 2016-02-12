app.directive('article', function(){
    return {
        restrict: 'E',
        $scope:
        {
            info: '='
        },
        templateUrl: '../js/directives/article.html'
    }

});