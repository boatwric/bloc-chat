(function() {
    function HomeCtrl(Room) {
        /*References Room function which lives inside of Room.js. That function creates an empty Room object, then gets all the children in rooms array, then sets that as the variable rooms, then sets that equal to the method Room.all*/
        this.title = "Welcome to Bloc Chat!!!";
        this.room = Room.all //method created in Room.js to list all chat rooms
        this.currentRoom = null;
        this.messages = null;

        this.whatRoom = function(room) {
            this.currentRoom = room;
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$scope', HomeCtrl]);
})();

/*
Checkpoint 2 notes

Need to create an array inside of the controller, then move that array into the service room.js


*/