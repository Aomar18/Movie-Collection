myApp.controller('GenreController', function ($http, $mdDialog) {
    let self = this;
    console.log('in controller Genre');
    getData();

    self.sendData = function (genre) {
        console.log('in sendData function');

        $http({
            method: 'POST',
            url: '/genre',
            data: {
                genre: genre
            }
        }).then(function (response) {
            console.log('Success with POST', response);
            getData();
        }).catch(function (error) {
            alert('Error in making POST', error);
        });
        self.genre = '';
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
        if (id.count > 0) {


            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application
            // to prevent interaction outside of dialog
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('Deleting Project /w active movies')
                    .textContent('Active movies. Please do not delete')
                    .ariaLabel('Alert Dialog Demo')
                    .ok(`Choose Another`)
            );


        } else {
            console.log('Trying to delete this project');
            $http({
                method: 'DELETE',
                url: '/genre/' + id.id
            }).then(function (response) {
                getData();
                alert('You have deleted this project, no take backs');

            }).catch(function (error) {
                alert('Can not delete yet there is something wrong. Check here:', error);
            });
        }
    }



})