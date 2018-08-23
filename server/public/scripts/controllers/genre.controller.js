myApp.controller('GenreController', function ($http) {
    let self = this;
    console.log('in controller Genre');
    getData();

    self.sendData = function () {
        console.log('in sendData function');

        $http({
            method: 'POST',
            url: '/genre',
            data: {
                genre: self.genre
            }
        }).then(function (response) {
            console.log('Success with POST', response);
            getData();
        }).catch(function (error) {
            alert('Error in making POST', error);
        });
    }


    function getData() {
        console.log('Getting Data is in progress');
        $http({
            method: 'GET',
            url: '/genre'
        }).then(function (response) {
            console.log('Back from the server', response.data);
            self.genreList = response.data;
        }).catch(function (error) {
            alert('Error in getting data', error);
        })
    }
    self.deleteGenre = function (id) {
        console.log('Trying to delete this project');
        $http({
            method: 'DELETE',
            url: '/genre/' + id
        }).then(function (response){
            getData();
            alert('You have deleted this project, no take backs');

        }).catch(function(error){
            alert('Can not delete yet there is something wrong. Check here:', error);
        });
        
    }


})