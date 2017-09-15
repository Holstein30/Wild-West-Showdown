$(document).ready(function start() {
$(".w-l").hide();
$("#alert").hide();
$("#info").text("Choose a Cowboy!")
// Variables

$("#clint").show();
$("#john").show();
$("#lee").show();
$("#sam").show();

var gameStart = false;
var gameOver = false;
var user = false;
var userDead = false;
var opponent = false;
var opponent2 = false;
var opponentsLeft = 3;
var wins = 0;
var losses = 0;

// Character objects with stats (maybe add critical hit)

// Clint

var clint = {
	name: "'The Man with No Name'",
	hp: 100,
	attack: Math.floor(Math.random() * 100)
}

// John

var john = {
	name: "'The Duke'",
	hp: 200,
	attack: Math.floor(Math.random() * 50)
}

// Lee

var lee = {
	name: "'Angel Eyes'",
	hp: 150,
	attack: Math.floor(Math.random() * 75)
}

// Sam

var sam = {
	name: "'The Stranger'",
	hp: 250,
	attack: Math.floor(Math.random() * 25)
}
// Sounds to be added if everything else works

var clintSound;
var johnSound;
var leeSound;
var samSound;
var gunShot;
var winSound;
var loseSound;
var backgroundMusic;

// Hide toggle between title and duel screen

function hideToggle () {
	$('.hide').toggleClass('unhidden hidden');
}

// Character selection

$(".chars").on("click", function () {
	if (user == false) {
		$(this).hide();
		var newImg = $("<img>");
		userImage = $(this).attr("src");
		// $("#userPick").attr("src", userImage);
		$("#userPick").append(newImg);
		newImg.attr("src", userImage);
		console.log(userImage);
		userChar = $(this).attr("id");
		user = true;
		opponents();
	}
	else {
		return;
	}
});


function opponents () { 
	if (opponent === false) {
		$("#info").html("<h2 id='info'>Choose your Opponent<h2>")
		$(".chars").on("click", function() {
			$(this).hide();
			$("#opponentPick img").remove();
			opponent = true;
			newImg = $("<img id='remove'>");
			opponentImage = $(this).attr("src");
			// $("#opponentPick").attr("src", opponentImage);
			$("#opponentPick").append(newImg);
			newImg.attr("src", opponentImage);
			opponentChar = $(this).attr("id");
			console.log(opponentImage);
			console.log(opponentChar);
			$("#info").html("<h2 id='info'>Press Draw to Attack</h2>");
			hideToggle();
		});
	}
	else {
		return;
	}
}

// Determine which characters are currenlty fighting and set up draw event to attack

$("#DRAW").on("click", function() {
	if (user && opponent) {
		if ((userChar === "clint" || opponentChar === "clint") && (userChar === "john" || opponentChar === "john")) {
			console.log("CLINT v JOHN");
			console.log("2" + opponentChar);
			john.hp -= clint.attack;
			clint.hp -= john.attack;
			health();
			console.log(john.hp);
			console.log(clint.hp);
			check();
			checkHealth();
		}
		else if ((userChar === "clint" || opponentChar === "clint") && (userChar === "lee" || opponentChar === "lee")) {
			console.log("CLINT v LEE");
			lee.hp -= clint.attack;
			clint.hp -= lee.attack;
			health();
			console.log(lee.hp);
			console.log(clint.hp);
			check();
			checkHealth();
		}
		else if ((userChar === "clint" || opponentChar === "clint") && (userChar === "sam" || opponentChar === "sam")) {
			console.log("CLINT v SAM");
			sam.hp -= clint.attack;
			clint.hp -= sam.attack;
			health();
			console.log(sam.hp);
			console.log(clint.hp);
			check();
			checkHealth();
		}
		else if ((userChar === "john" || opponentChar === "john") && (userChar === "lee" || opponentChar === "lee")) {
			console.log("JOHN v LEE");
			john.hp -= lee.attack;
			lee.hp -= john.attack;
			health();
			console.log(lee.hp);
			console.log(john.hp);
			check();
			checkHealth();
		}
		else if ((userChar === "john" || opponentChar === "john") && (userChar === "sam" || opponentChar === "sam")) {
			console.log("JOHN v SAM");
			sam.hp -= john.attack;
			john.hp -= sam.attack;
			health();
			console.log(sam.hp);
			console.log(john.hp);
			check();
			checkHealth();
		}
		else if ((userChar === "lee" || opponentChar === "lee") && (userChar === "sam" || opponentChar === "sam")) {
			console.log("LEE v SAM");
			sam.hp -= lee.attack;
			lee.hp -= sam.attack;
			health();
			console.log(sam.hp);
			console.log(lee.hp);
			check();
			checkHealth();
		}
		else {
			console.log("got to else");
		}
	}


// Check if game is over

function check () {
	if (opponentsLeft === 0) {
		$(".w-l").show();
		wins++;
		console.log("wins " + wins);
		$("#wins").html("Wins: " + wins);
		$("#info").html("YOU WON!!!");
		$("#charSelect").hide();
		gameOver();
	}
	else if (userDead) {
		$(".w-l").show();
		losses++;
		$("#losses").html("Losses: " + losses);
		$("#info").html("YOU LOST!");
		$("#charSelect").hide();
		hideToggle();
		gameOver();
	}
	else {
		return;
	}
}

// Check health of each character if >= 0 then check if game is over or choose another opponent

function checkHealth () {
	if (userChar && (opponentsLeft >= 1)) {
			if ((userChar === "clint" || opponentChar === "clint") && (userChar === "john" || opponentChar === "john")) {
				if (clint.hp <= 0) {
					if (userChar === "clint") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("Clint Lose" + opponentsLeft);
				}
				else if (john.hp <= 0) {
					if (userChar === "john") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("John lose" + opponentsLeft);
				}
			}
			else if ((userChar === "clint" || opponentChar === "clint") && (userChar === "lee" || opponentChar === "lee")) {
				if (clint.hp <= 0) {
					if (userChar === "clint") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("Clint Lose" + opponentsLeft);
				}
				else if (lee.hp <= 0) {
					if (userChar === "lee") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("Lee lose" + opponentsLeft);
				}
			}
			else if ((userChar === "clint" || opponentChar === "clint") && (userChar === "sam" || opponentChar === "sam")) {
				if (clint.hp <= 0) {
					if (userChar === "clint") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("Clint Lose" + opponentsLeft);
				}
				else if (sam.hp <= 0) {
					if (userChar === "sam") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("Sam lose" + opponentsLeft);
				}
			}
			else if ((userChar === "john" || opponentChar === "john") && (userChar === "lee" || opponentChar === "lee")) {
				if (john.hp <= 0) {
					if (userChar === "john") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("JOHN Lose" + opponentsLeft);
				}
				else if (lee.hp <= 0) {
					if (userChar === "lee") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("LEE lose" + opponentsLeft);
				}
			}
			else if ((userChar === "john" || opponentChar === "john") && (userChar === "sam" || opponentChar === "sam")) {
				if (john.hp <= 0) {
					if (userChar === "john") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("John Lose" + opponentsLeft);
				}
				else if (sam.hp <= 0) {
					if (userChar === "sam") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("Sam lose" + opponentsLeft);
				}
			}
			else if ((userChar === "lee" || opponentChar === "lee") && (userChar === "sam" || opponentChar === "sam")) {
				if (lee.hp <= 0) {
					if (userChar === "lee") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("LEE Lose" + opponentsLeft);
				}
				else if (sam.hp <= 0) {
					if (userChar === "sam") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("Sam lose" + opponentsLeft);
				}
			}
			else {
				console.log("ELLSLELSLSELELSSEEE");
				return;
			}		
		}
	}

function health () {
	switch (userChar) {
		case "clint":
			$("#userHealth").html(clint.hp);
			break;
		case "john":
			$("#userHealth").html(john.hp);
			break;
		case "lee":
			$("#userHealth").html(lee.hp);
			break;
		case "sam":
			$("#userHealth").html(sam.hp);
			break;
	}

	switch (opponentChar) {
		case "clint":
			// $("#opponentHealth").empty();
			$("#opponentHealth").html(clint.hp);
			break;
		case "john":
			// $("#opponentHealth").empty();
			$("#opponentHealth").html(john.hp);
			break;
		case "lee":
			$("#opponentHealth").html(lee.hp);
			break;
		case "sam":
			// $("#opponentHealth").empty();
			$("#opponentHealth").html(sam.hp);
			break;
	}
}

function gameOver () {
	// $("#DRAW").html("Restart");
	clint.hp = 80;
	john.hp = 120;
	lee.hp = 90;
	sam.hp = 180;
	// $("#DRAW").on("click", function () {
	// 	$("#DRAW").html("DRAW");
	// 	start();
	// });
	// $("#userPick").reset();
	// $("#opponentPick")reset()
	$("#alert").show();
	document.body.addEventListener('keypress', reset);
	}
});

function reset () {
	window.location.reload();
}
});

// Whats left to be added
// -------------
// MOST IMPORTANT: Display characters names and health
// Play sounds when choosing characters/hitting draw/win/lose/restart/etc.


// Known Bugs
// -----------
// When player hits a key to restart game and then chooses a character 3 characters show on duel screen
// When fixed restart I can't keep track of wins/losses after each game
// Opponent health doesn't reset until draw clicked again after opponent is switched out

// Random thoughts 
// ---------------
// Maybe create an instance of the game to reset var instance1 = new game;
// Or could reset html containers

