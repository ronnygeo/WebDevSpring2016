app.controller('NgController', ['$scope', function ($scope){
    $scope.hello = "Hello World";
    $scope.h = '';
    $scope.product = {
        name: "Ronny",
        age: 25
    };
    $scope.sayHello= function(){
        $scope.hello = 'Hello';
    };

    $scope.setLorem = function(){
        $scope.lorem = product.name;
    };

    $scope.articles = [
        {title: 'TEST 1', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non nunc eros. Nullam consectetur erat enim, et scelerisque eros efficitur in. Curabitur lacus sem, cursus eget laoreet sed, pellentesque vel nisi. Vestibulum sed leo eget ex lacinia finibus sit amet sed leo. Donec a imperdiet magna, a eleifend massa. Sed vel arcu pellentesque, hendrerit felis eu, vehicula mi. In consectetur eleifend ligula, vitae faucibus ipsum venenatis sed. Morbi iaculis mi non eros bibendum, non tincidunt libero maximus. Donec scelerisque ante et lorem consectetur, interdum bibendum ante ornare. Suspendisse iaculis erat id vehicula varius. Donec interdum auctor sapien, ac mattis ex molestie sit amet."},
        {title: 'TEST 2', content: "Sed quis semper massa. Nullam consequat orci nibh, a efficitur velit euismod non. Donec scelerisque dapibus volutpat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam at aliquam quam, eu finibus risus. Suspendisse sagittis pulvinar egestas. Maecenas accumsan, nunc at porta mollis, elit augue vestibulum nunc, vitae mollis tellus sapien quis nisi. Nunc justo diam, gravida ac velit sit amet, tempus dictum dui. Aliquam dapibus lacus vitae ipsum bibendum, et auctor mi bibendum."},
        {title: 'TEST 3', content: "Sed risus risus, lobortis non dui sed, efficitur vehicula urna. Sed pulvinar quis eros sed faucibus. Phasellus tincidunt vehicula turpis. Quisque ac ex ut orci maximus porttitor egestas vel elit. Morbi mi leo, egestas eu pretium quis, rutrum vel massa. Phasellus sed rutrum urna, sit amet congue turpis. Nulla scelerisque elementum aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer accumsan, augue non posuere tincidunt, quam augue dictum mi, eget laoreet lectus nunc pellentesque ipsum. Duis ut facilisis elit, ut porta nibh"}
    ];
}]);


