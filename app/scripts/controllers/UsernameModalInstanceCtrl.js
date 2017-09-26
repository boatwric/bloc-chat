(function() {
    function UsernameModalInstanceCtrl($uibModalInstance) {

        this.ok = function() {
            $uibModalInstance.close(this.username);
            console.log(this.username);
        };
    }

    angular
        .module('blocChat')
        .controller('UsernameModalInstanceCtrl', ['$uibModalInstance', UsernameModalInstanceCtrl])
})()