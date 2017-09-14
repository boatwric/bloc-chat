/*
Look familiar? Pretty much identical setup to Room.js. $firebaseArray is passed to the function, and inside there's an empty object, a path to the database, and then passing that path off to your $firebaseArray. Then you call your object and assign it whatever methods you want to populate it. Down at the botton, you've got a message factory that pulls in the $firbaseArray and the service itself as dependencies. Piece of cake, right?
*/


(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getByRoomId = function(roomId) {
            console.log($firebaseArray(ref.orderByChild("roomId").equalTo(roomId)));
            return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId)); //the first method takes in the firebaseArray property "roomId", the second the function parameter. It's just saying "If there's a match between the property and the argument, I wanna see it"
            //now that I have $id, can pass into this method to get associated messages. 
        };

        return Message;
    };

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();