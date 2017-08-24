/*
Look familiar? Pretty much identical setup to Room.js. $firebaseArray is passed to the function, and inside there's an empty object, a path to the database, and then passing that path off to your $firebaseArray. Then you call your object and assign it whatever methods you want to populate it. Down at the botton, you've got a message factory that pulls in the $firbaseArray and the service itself as dependencies. Piece of cake, right?
*/


(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getByRoomId = function(roomId) {
            return $firebaseArray(messages.child('roomId').orderByChild('sentAt'));
            console.log("Am I inside?");
        };

        return Message;
    };

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();