(function() {
    function ModalCtrl($uibModal, $log, Room) { //taken straight from documentation, only removed $document because I'm not applying it to the whole page
        /*References Room function which lives inside of Room.js. That function creates an empty Room object, then gets all the children in rooms array, then sets that as the variable rooms, then sets that equal to the method Room.add*/
        this.title = "Create New Room!!!";

        this.open = function() {
            var modalInstance = $uibModal.open({ //copied directly from documentation
                animation: $ctrl.animationsEnabled,
                templateUrl: 'templates/modal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modal'
            });
        };
    };

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', ModalCtrl])
})();