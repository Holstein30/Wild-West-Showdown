// Variables

clintPick = false;
johnPick = false;
leePick = false;
samPick = false;

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

// Create attack object (Maybe counter attack too?)

function attack () {
	clintAttack = Math.floor(Math.random() * clint.power);
	johnAttack = Math.floor(Math.random() * john.power);
	leeAttack = Math.floor(Math.random() * lee.power);
	samAttack = Math.floor(Math.random() * sam.power);
}

// Draw event to attack

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

// Set up click events to choose character & switch to duel screen when chosen 

$("#clint").on("click", function() {
        $("#userPick").html("<img src='assets/images/Clint-Eastwood.jpg' alt='Clint Eastwood'>/");
        clintPick = true;
        hideToggle();
        opponents();
});
$("#john").on("click", function() {
        $("#userPick").html("<img src='assets/images/John-Wayne.jpg' alt='John Wayne'>/");
        johnPick = true;
        hideToggle();
        opponents();
});
$("#lee").on("click", function() {
        $("#userPick").html("<img src='assets/images/Lee-Van-Cleef.jpg' alt='Lee Van Cleef'>/");
        leePick = true;
        hideToggle();
        opponents();
});
$("#sam").on("click", function() {
        $("#userPick").html("<img src='assets/images/Sam-Elliot.jpg' alt='Sam Elliot'>/");
        samPick = true;
        hideToggle();
        opponents();
});

function hideToggle () {
	$('.hide').toggleClass('unhidden hidden');
}

// Make rest of characters the enemy

function opponents () {
	if (clintPick) {
		$("#opponentA").html("<img src='assets/images/John-Wayne.jpg' alt='John Wayne'>/");
		$("#opponentB").html("<img src='assets/images/Lee-Van-Cleef.jpg' alt='Lee Van Cleef'>/");
		$("#opponentC").html("<img src='assets/images/Sam-Elliot.jpg' alt='Sam Elliot'>/");
	}
	else if (johnPick){
		$("#opponentA").html("<img src='assets/images/Clint-Eastwood.jpg' alt='Clint Eastwood'>/");
		$("#opponentB").html("<img src='assets/images/Lee-Van-Cleef.jpg' alt='Lee Van Cleef'>/");
		$("#opponentC").html("<img src='assets/images/Sam-Elliot.jpg' alt='Sam Elliot'>/");
	}
	else if (leePick) {
		$("#opponentA").html("<img src='assets/images/John-Wayne.jpg' alt='John Wayne'>/");
		$("#opponentB").html("<img src='assets/images/Clint-Eastwood.jpg' alt='Clint Eastwood'>/");
		$("#opponentC").html("<img src='assets/images/Sam-Elliot.jpg' alt='Sam Elliot'>/");		
	}
	else {
		$("#opponentA").html("<img src='assets/images/John-Wayne.jpg' alt='John Wayne'>/");
		$("#opponentB").html("<img src='assets/images/Lee-Van-Cleef.jpg' alt='Lee Van Cleef'>/");
		$("#opponentC").html("<img src='assets/images/Clint-Eastwood.jpg' alt='Clint-Eastwood'>/");
	}
}

// Let user attack and have them immediately counter attacked by opponent
// If HP=0 that character loses. 
// -if character is users character then player loses
// -if it is opponents then move to next opponent
// -if opponent out of characters then the user wins
// -tally wins & losses
