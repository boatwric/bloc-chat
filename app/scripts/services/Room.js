(function() {
    function Room($firebaseArray) { //going to pass in $firebaseArray
        var Room = {}; //empty object
        var ref = firebase.database().ref().child("rooms"); //go to database, reference children of rooms, will return the list
        var rooms = $firebaseArray(ref); //rooms equals array of rooms (room1, room2, room3)

        rooms.all = rooms; //all method now lists all those chat rooms

        return rooms.all; //give me the list
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();