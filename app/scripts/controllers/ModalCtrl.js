(function() {
    function ModalCtrl($uibModal, Room) { //taken straight from documentation, only removed $document because I'm not applying it to the whole page
        /*References Room function which lives inside of Room.js. That function creates an empty Room object, then gets all the children in rooms array, then sets that as the variable rooms, then sets that equal to the method Room.add*/
        this.title = "Create New Room!!!";

        this.open = function() {
            console.log("Made it inside of ModalCtrl.open");
            var modalInstance = $uibModal.open({ //copied directly from documentation
                animation: this.animationsEnabled,
                templateUrl: 'templates/modal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modalInstance'
            });

            console.log("Made it outside of ModalCtrl.open");

            modalInstance.result.then(function(room) {
                console.log("Entered modalInstance.result.then");
                this.room = room;
                console.log("Passed room argument into this.room");
                Room.create(this.room);
                console.log("Passed this.room into Room.create");
            }, function() {
                console.log("Made it inside of modalInstance.result.then 2");
            });
        };
    };

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl])
})();