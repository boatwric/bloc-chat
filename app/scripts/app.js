(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
    }

    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        console.log(currentUser);
        if (!currentUser || currentUser === '') {
            var cookiesModalInstance = $uibModal.open({ //copied directly from documentation
                animation: this.animationsEnabled,
                templateUrl: 'templates/usernameModal.html',
                controller: 'UsernameModalInstanceCtrl',
                controllerAs: 'UserModalInstance'
            });

            cookiesModalInstance.result.then(function(username) {
                this.username = username;
                console.log(this.username);
                $cookies.put('blocChatCurrentUser', username); //replace blocChatCurrentUser with username
                currentUser = this.username; //username gets passed into currentUser at beginning of function
                console.log(currentUser);
            });
        }
    }




    angular
        .module('blocChat', ['ui.bootstrap', 'ui.router', 'firebase', 'ngCookies']) //Arranged in descending order by checkpoint
        .config(config)
        .run(['$cookies', '$uibModal', BlocChatCookies]) //Runs if cookies are present, then opens a modal, loads the logic above
})();