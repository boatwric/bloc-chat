(function() {
        function BlocChatCookies($cookies) {
            var currentUser = $cookies.get('blocChatCurrentUser');
            if (!currentUser || currentUser === '') {
                $uibModal.open({
                        // Do something to allow users to set their username
                    }
                }

                angular
                    .module('blocChat')
                    .run(['$cookies', '$uibModal', BlocChatCookies]); //Runs if cookies are present, then opens a modal, loads the logic above
            })();