
console.log('JS');



let myApp = angular.module('myApp', ['ngRoute', 'ngMaterial','ngMessages']);


myApp.config( function ( $routeProvider){
    $routeProvider.when( '/movies', {
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

myApp.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .dark();
                              // from default
  });