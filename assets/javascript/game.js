// Set character stats (HP, Power)

let clint = {
	health: 80,
	power: 50

}

let john = {
	health: 120,
	power: 30
}

let lee = {
	health: 90,
	power: 40
}

let sam = {
	health: 180,
	power: 20
}

// Create attack object

function attack () {
	clintAttack = Math.floor(Math.random() * clint.power);
	johnAttack = Math.floor(Math.random() * john.power);
	leeAttack = Math.floor(Math.random() * lee.power);
	samAttack = Math.floor(Math.random() * sam.power);
}

$(document).ready(function() {
      // When random-button is clicked...
      $("#DRAW").on("click", function() {
      	attack();
      	console.log(clintAttack);
      	console.log(johnAttack);
      	console.log(leeAttack);
      	console.log(samAttack);
      });

});

// Create a counter attack object
// Set up click events to choose character

$("#clint").on("click", function() {
        console.log("You chose clint");
       	function unhide() {
		var item = document.getElementById(".row");
		if (item) {
    		if(item.className=='hidden'){
        		item.className = 'unhidden' ;
    		}else{
        		item.className = 'hidden';
    		}
		}}
});
// Make rest of characters the enemy
// Let user attack and have them immediately counter attacked by opponent
// If HP=0 that character loses. 
// -if character is users character then player loses
// -if it is opponents then move to next opponent
// -if opponent out of characters then the user wins
// -tally wins & losses







// For Hiding and Unhiding

function unhide(clickedButton, divID) {
var item = document.getElementById(divID);
if (item) {
    if(item.className=='hidden'){
        item.className = 'unhidden' ;
        clickedButton.value = 'hide'
    }else{
        item.className = 'hidden';
        clickedButton.value = 'unhide'
    }
}}
