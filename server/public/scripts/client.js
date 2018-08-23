
console.log('JS');



let myApp = angular.module('myApp', ['ngRoute', 'ngMaterial','ngMessages']);
console.log('in controller');


myApp.config( function ( $routeProvider){
    $routeProvider.when( '/', {
        templateUrl: '/views/home.html', //path of home
    }) // end home
    .when( '/movies', {
        templateUrl: '/views/movies.html',
        controller: 'MovieController as vm'
     }) //end movie
     .when('/genre', {
        templateUrl: 'views/genre.html',
        controller: 'GenreController as vm'
     })// end genre
     .otherwise({
         templateUrl: '/views/404.html' // error page
     }) // end

})