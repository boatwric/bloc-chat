(function() {
    function HomeCtrl(Room) {
        /*References Room function which lives inside of Room.js. That function creates an empty Room object, then gets all the children in rooms array, then sets that as the variable rooms, then sets that equal to the method Room.all*/
        this.tempTitle = "Ermahgerd!";
        this.room = Room.all //method created in Room.js to list all chat rooms
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', [HomeCtrl]);
})();

/*
Checkpoint 2 notes

Need to create an array inside of the controller, then move that array into the service room.js


*/