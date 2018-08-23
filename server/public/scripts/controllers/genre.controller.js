myApp.controller('GenreController', function ($http) {
    let self = this;
console.log('in controller Genre');

self.sendData = function(){
    console.log('in sendData function');
    
    $http({
        method: 'POST',
        url:'/genre',
        data: { genre: self.genre
        }
    }).then(function(response){
        console.log('Success with POST', response);
    }).catch(function(error){
        alert('Error in making POST', error);  
    });
}

})