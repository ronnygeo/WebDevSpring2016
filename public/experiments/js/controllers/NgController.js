app.controller('NgController', ['$scope', function($scope){
    $scope.hello = "Hello World from Angular!";
    $scope.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis semper condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras commodo facilisis enim ac ullamcorper. Fusce sed tincidunt justo. Integer scelerisque laoreet luctus. Ut condimentum, magna in porttitor convallis, sapien nibh fringilla risus, a dictum tortor lectus ut dolor.";
    $scope.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis semper condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras commodo facilisis enim ac ullamcorper. Fusce sed tincidunt justo. Integer scelerisque laoreet luctus. Ut condimentum, magna in porttitor convallis, sapien nibh fringilla risus, a dictum tortor lectus ut dolor.";
}]);

function setLorem($scope){
    $scope.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis semper condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras commodo facilisis enim ac ullamcorper. Fusce sed tincidunt justo. Integer scelerisque laoreet luctus. Ut condimentum, magna in porttitor convallis, sapien nibh fringilla risus, a dictum tortor lectus ut dolor.";
}