myApp.controller('MovieController', function ($http) {
    let self = this;
    getGenre();
    getMovie();
    
  

    console.log('in controller Genre');
  

    self.sendMovie = function () {
        console.log('in sendData function');

        $http({
            method: 'POST',
            url: '/movie',
            data: {
                name: self.name,
                genre_id: self.genre,
                release_date: self.date,
                image_path: self.image,
                runtime: self.runtime
            }
        }).then(function (response) {
            console.log('Success with POST', response);
            getMovie();
        }).catch(function (error) {
            alert('Error in making POST', error);
        });
        self.name = '';
        self.image = '';
        self.runtime = '';
    }


    function getGenre() {
        console.log('Getting Genre is in progress');
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

    function getMovie() {
        console.log('Getting Movies is in progress');
        $http({
            method: 'GET',
            url: '/movie'
        }).then(function (response) {
            console.log('Back from the server with Movies', response.data);
            self.movieList = response.data;
            console.log(self.movieList);
        }).catch(function (error) {
            alert('Error in getting data', error);
        })
    }

    self.deleteMovie = function (id) {
        console.log('Trying to delete this movie');
        $http({
            method: 'DELETE',
            url: '/movie/' + id
        }).then(function (response){
            getMovie();
            alert('You have deleted this movie, no take backs');
        }).catch(function(error){
            alert('Can not delete yet there is something wrong. Check here:', error);
        });

    }



})