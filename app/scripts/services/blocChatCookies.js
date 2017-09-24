(function() {
        function BlocChatCookies($cookies) {
            var currentUser = $cookies.get('blocChatCurrentUser');
            if (!currentUser || currentUser === '') {
                $uibModal.open({
                        var modalInstance = $uibModal.open({ //copied directly from documentation
                            animation: this.animationsEnabled,
                            templateUrl: 'templates/usernameModal.html',
                            controller: 'ModalInstanceCtrl',
                            controllerAs: 'modalInstance'
                        })

                        modalInstance.result.then(function(username) {
                            this.username = username;
                            console.log(this.username);
                            $cookies.put('blocChatCurrentUser', username); //replace blocChatCurrentUser with username
                            currentUser = this.username; //username gets passed into currentUser at beginning of function
                            console.log(currentUser);
                        });
                    }
                };
                return currentUser;
            };

            angular
                .module('blocChat')
                .run(['$cookies', '$uibModal', BlocChatCookies]); //Runs if cookies are present, then opens a modal, loads the logic above
            .factory('BlocChatCookies', ['$cookies', '$uibModal', BlocChatCookies]); //creating same kind of object over and over, takes in cookies, modal, and itself as dependecies
        })();