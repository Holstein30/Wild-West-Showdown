// Variables

clintPick = false;
johnPick = false;
leePick = false;
samPick = false;
wins = 0;
losses = 0;

// Set character stats (HP, Power)

let clint = {
	health: 80,
	power: 150

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

// Create attack object or function (Maybe counter attack too?)

function attack () {
	clintAttack = Math.floor(Math.random() * clint.power);
	johnAttack = Math.floor(Math.random() * john.power);
	leeAttack = Math.floor(Math.random() * lee.power);
	samAttack = Math.floor(Math.random() * sam.power);
}

// let attack = {
// 	clintAttack: Math.floor(Math.random() * clint.power),
// 	johnAttack: Math.floor(Math.random() * john.power),
// 	leeAttack: Math.floor(Math.random() * lee.power),
// 	samAttack: Math.floor(Math.random() * sam.power)
// }

// Set up click events to choose character

$("#clint").on("click", function() {
        $("#userPick").html("<img src='assets/images/Clint-Eastwood.jpg' alt='Clint Eastwood'>");
        clintPick = true;
        hideToggle();
        opponents();
});
$("#john").on("click", function() {
        $("#userPick").html("<img src='assets/images/John-Wayne.jpg' alt='John Wayne'>");
        johnPick = true;
        hideToggle();
        opponents();
});
$("#lee").on("click", function() {
        $("#userPick").html("<img src='assets/images/Lee-Van-Cleef.jpg' alt='Lee Van Cleef'>");
        leePick = true;
        hideToggle();
        opponents();
});
$("#sam").on("click", function() {
        $("#userPick").html("<img src='assets/images/Sam-Elliot.jpg' alt='Sam Elliot'>");
        samPick = true;
        hideToggle();
        opponents();
});

// Toggle between title screen and duel screen

function hideToggle () {
	$('.hide').toggleClass('unhidden hidden');
}

// Make rest of characters the enemy

function opponents () {
	if (clintPick) {
		oppA = "john";
		$("#opponentA").html("<img src='assets/images/John-Wayne.jpg' alt='John Wayne'>");
		$("#opponentB").html("<img src='assets/images/Lee-Van-Cleef.jpg' alt='Lee Van Cleef'>");
		$("#opponentC").html("<img src='assets/images/Sam-Elliot.jpg' alt='Sam Elliot'>");
	}
	else if (johnPick){
		$("#opponentA").html("<img src='assets/images/Clint-Eastwood.jpg' alt='Clint Eastwood'>");
		$("#opponentB").html("<img src='assets/images/Lee-Van-Cleef.jpg' alt='Lee Van Cleef'>");
		$("#opponentC").html("<img src='assets/images/Sam-Elliot.jpg' alt='Sam Elliot'>");
	}
	else if (leePick) {
		$("#opponentA").html("<img src='assets/images/John-Wayne.jpg' alt='John Wayne'>");
		$("#opponentB").html("<img src='assets/images/Clint-Eastwood.jpg' alt='Clint Eastwood'>");
		$("#opponentC").html("<img src='assets/images/Sam-Elliot.jpg' alt='Sam Elliot'>");		
	}
	else {
		$("#opponentA").html("<img src='assets/images/John-Wayne.jpg' alt='John Wayne'>");
		$("#opponentB").html("<img src='assets/images/Lee-Van-Cleef.jpg' alt='Lee Van Cleef'>");
		$("#opponentC").html("<img src='assets/images/Clint-Eastwood.jpg' alt='Clint-Eastwood'>");
	}
}

// Draw event to attack

$(document).ready(function() {
      // Let user attack and have them immediately counter attacked by opponent
      $("#DRAW").on("click", function() {
      	if (clintPick) {
      		if (oppA === "john") {
      			attack();
      			john.health -= clintAttack;
      			clint.health -= johnAttack;
      			console.log(john.health);
      			console.log(clint.health);
      			gameOver();
      		}
      		else if (oppA === "lee") {
      			attack();
      			lee.health -= clintAttack;
      			clint.health -= leeAttack;
      			console.log(lee.health);
      			console.log(clint.health);
      			gameOver();
      		}
      		else {
      			attack();
      			sam.health -= clintAttack;
      			clint.health -= samAttack;
      			console.log(sam.health);
      			console.log(clint.health);
      			gameOver();
      		}
      	}
      });

});


// If HP=0 that character loses. 
// -if character is users character then player loses & replace picture with YOU LOSE
// -if it is opponents then move to next opponent & Display options for next opponent
// -if opponent out of characters then the user wins & replace opponent picutre with YOU WIN
// -tally wins & losses
// -change draw button to restart button

function gameOver () {
	if (clintPick && oppA === "john") {
		if (clint.health <= 0) {
			$("#userPick").html("YOU LOST");
			console.log("YOU LOSE");
			losses++;
			$("#losses").html("Losses: "+ losses);
			restart();
		}
		else if (john.health <= 0) {
			oppA = "lee";
			$("#opponentA").html("<img src='assets/images/Lee-Van-Cleef.jpg' alt='Lee Van Cleef'>");
			$("#opponentB").html("<img src='assets/images/Sam-Elliot.jpg' alt='Sam Elliot'>");
			$("#opponentC").html("Lost");

			console.log("John lose");
		}
		else {
			return;
		}
	}
	else if (clintPick && oppA === "lee") {
		if (clint.health <= 0) {
			$("#userPick").html("YOU LOST");
			console.log("YOU LOSE");
			losses++;
			$("#losses").html("Losses: "+ losses);
			restart();
		}
		else if (lee.health <= 0) {
			oppA = "sam";
			$("#opponentA").html("<img src='assets/images/Sam-Elliot.jpg' alt='Sam Elliot'>");
			$("#opponentB").html("LOST");
			$("#opponentC").html("LOST");

			console.log("LEE lose");
		}
	}
	else {
		if (clint.health <= 0) {
			$("#userPick").html("YOU LOST");
			console.log("YOU LOSE");
			losses++;
			$("#losses").html("Losses: " + losses);
			restart();
		}
		else if (sam.health <= 0) {
			$("#opponentA").html("YOU WIN!!!");
			$("#opponentB").html("LOST");
			$("#opponentC").html("LOST");

			console.log("YOU WIN");
			wins++;
			$("#wins").html("Wins: " + wins);
			restart();
		}
	}		
}

function restart () {
	$("#DRAW").html("Restart");
	clint.health = 80;
	john.health = 120;
	lee.health = 90;
	sam.health = 180;
	$("#DRAW").on("click", function () {
		$("#DRAW").html("DRAW");
		hideToggle();
	});
}
