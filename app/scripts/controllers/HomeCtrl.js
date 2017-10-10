(function() {
    function HomeCtrl(Room, Message, $scope) {
        /*References Room function which lives inside of Room.js. That function creates an empty Room object, then gets all the children in rooms array, then sets that as the variable rooms, then sets that equal to the method Room.all*/
        this.title = "Welcome to Bloc Chat!!!";
        this.room = Room.all; //method created in Room.js to list all chat rooms
        this.message = ' ';

        this.setRoom = function(room) {
            $scope.currentRoom = room;
            console.log(room);
            $scope.messages = Message.getByRoomId(room.$id);
            console.log(room.$id);
        };

        this.send = function(message, room) {
            //TODO: Delete this console.log 
            console.log("Sending this message: ", message);

            Message.send(message, room);
            this.message = ' ';
        }
    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$scope', HomeCtrl]);
})();

/*
Checkpoint 2 notes

Need to create an array inside of the controller, then move that array into the service room.js


*/