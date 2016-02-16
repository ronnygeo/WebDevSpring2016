/**
 * Created by ronnygeo on 2/16/16.
 */

(function(){
    app.config(function($routeProvider){
        $routeProvider
            .when('/', {
                controller: HomeController,
                templateUrl: 'home/home.view.html'
            })
            .otherwise({
                redirectTo: '/'
            })
    });
    }
)();
