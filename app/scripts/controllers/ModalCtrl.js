(function() {
    function ModalCtrl($uibModal, $log, Room) { //taken straight from documentation, only removed $document because I'm not applying it to the whole page
        /*References Room function which lives inside of Room.js. That function creates an empty Room object, then gets all the children in rooms array, then sets that as the variable rooms, then sets that equal to the method Room.add*/
        this.title = "Create New Room!!!";

        this.open = function() {
            var modalInstance = $uibModal.open({ //copied directly from documentation
                animation: this.animationsEnabled,
                templateUrl: 'templates/modal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modalInstance'
            });
        };

        /*
        
        -Commenting out for now because it breaks all the functionality of home.html
        
        modalInstance.result.then(function(room) {
                this.room = room;
                console.log(this.room)
                Room.create(this.room);
        });

        */

        /*
                
        -Structure example from https://stackoverflow.com/questions/42214052/testing-modalinstance-result-then

                modalInstance.result.then(function(data) {
                //How do I test that the function or branches here
                 // were run?
                        if (data.length === 2) {
                        //do this thing
                        } else {
                         // do this other thing
                        }
                });

        */

    };

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl])
})();