(function() {
    function Room($firebaseArray) { //going to pass in $firebaseArray
        var Room = {}; //empty object
        var ref = firebase.database().ref().child("rooms"); //go to database, reference children of rooms, will return the list
        var rooms = $firebaseArray(ref); //rooms equals array of rooms (room1, room2, room3)

        Room.all = rooms; //all method now lists all those chat rooms
        console.log("Loaded Room.all (listed all rooms)");

        console.log("Made it outside of Room.create"); //I did :D

        Room.create = function(room) { //going to give Room an add method, using firebase's built in $add method create it
            //rooms.$add(room); //firebaseArray already referenced above, just need to call in, use $add service, and specify that it's whatever argument is passed into the function
            console.log("Made it down to rooms.$add command");
            rooms.$add({ name: room });
            console.log("Made it past rooms.$add command");
        };

        return Room; //give me whatever methods I invoked
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();