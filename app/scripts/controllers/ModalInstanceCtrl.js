(function() {
    function ModalInstanceCtrl($uibModalInstance, $scope) {
        this.cancel = function() {
            $uibModalInstance.dismiss('cancel')
        };
        this.ok = function() {
            $uibModalInstance.close(this.name);
            console.log(this.name);
            console.log("Made it inside of this.ok")
        };
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', '$scope', ModalInstanceCtrl])
})()

/*
this controller listens for instructions from inside our modal,
similar to how ModalCtrl listens to instructions from outside
of it. when the cancel button is clicked inside of modal.html,
this.cancel() is executed, which calls the $uibModalInstance 
service and dismisses the modal. 
*/