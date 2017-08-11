(function() {
    function ModalInstanceCtrl($uibModalInstance) {
        this.cancel = function() {
            $uibModalInstance.dismiss('dismiss')
        };
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl])
})()

/*
this controller listens for instructions from inside our modal,
similar to how ModalCtrl listens to instructions from outside
of it. when the cancel button is clicked inside of modal.html,
this.cancel() is executed, which calls the $uibModalInstance 
service and dismisses the modal. 
*/