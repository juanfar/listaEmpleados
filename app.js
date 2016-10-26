var miAppAngular = angular.module('navegacion', ['ngRoute'] );

miAppAngular.config( [ '$routeProvider' , function($routeProvider){
    
    $routeProvider.when('/' , {      
        templateUrl: 'plantillas/inicio.html',
        controller: 'inicio'
    })

    .when('/404', {
        templateUrl: 'plantillas/404.html',
        controller: 'inicio'
    })

    .when('/detalles/:empleadoID', {
        templateUrl: 'plantillas/detalles.html',
        controller: 'detalles'
    })

    .otherwise({        
        redirectTo: '/404'        
    })
    
} ] );


miAppAngular.constant('configuracionGlobal' , {
 
    'nombreDelSitio':'Corporación Rajuela',
    'api_url': 'http://juanfar.com/empleados/api',
    'carpeta_imagenes':'imagenes/'
    
})

