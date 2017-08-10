(function() {
        function ModalCtrl(function($uibModal, $log, Room) { //taken straight from documentation, only removed $document because I'm not applying it to the whole page
                /*References Room function which lives inside of Room.js. That function creates an empty Room object, then gets all the children in rooms array, then sets that as the variable rooms, then sets that equal to the method Room.add*/
                this.title = "Create New Room!!!";
                this.add = Room.add //method created in Room.js to create new chat room
            }

            angular
            .module('blocChat')
            .controller('HomeCtrl', ['Room', HomeCtrl]);
        })();