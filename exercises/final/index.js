// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;
var fs = require("fs");


server.listen(port, function() {
    console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

//Choose a random number between 0 and 10, this will be the number that the
//players are trying to guess
//We will use this object to hold all of the player's guesses
var guesses = {};

var content = fs.readFileSync("trivia.json");
var triviaQuestions = JSON.parse(content);
var triviaQ = triviaQuestions.triviaQuestions;
var len = triviaQ.length; //-1

var randomQuestion = Math.floor(Math.random() * len); //+1

var realQ = triviaQ[randomQuestion].question;
var realA = triviaQ[randomQuestion].answer;
var realC = triviaQ[randomQuestion].choice;
console.log(realQ);


io.on('connection', function(socket) {

            socket.on('new user', function(id) {
                socket.userId = id;
            });

            io.emit('question', {
                question: realQ
            });

            io.emit('choice', {
                choice: realC
            });

            socket.on('guess', function(guess) {
                guesses[socket.userId] = guess;
                console.log(guess);
                //This is how you find out how many keys are in an associative array in js
                var numGuesses = Object.keys(guesses).length;

                if (numGuesses >= 2) {

                    //Determine the winner
                    var winner = "";
                    for (var userId in guesses) {
                        var guess = guesses[userId];
                        console.log(realA);
                        var up = guess.toString().toUpperCase;
                        var upAnswer = realA.toString().toUpperCase;
                        console.log(userId);
                        console.log(up);
                        if (up == upAnswer) {
                            winner = userId;
                            console.log(winner);
                        }
                    }

                    // Announce the winner to everyone
                    io.emit('allUsersHaveGuessed', {
                        winner: winner,
                        answer: realA
                    });
                }

            });
            socket.on('playAgain', function(bool) {
                    if (bool == true) {
                        //
                        var newGuesses = {};
                        console.log("random");
                        var random = Math.floor(Math.random() * len);
                        newRealQ = triviaQ[random].question;
                        console.log(newRealQ);
                        newRealA = triviaQ[random].answer;
                        console.log(newRealA);
                        newRealC = triviaQ[random].choice;
                        console.log(newRealC);
                        socket.on('guess', function(newGuess) {
                            newGuesses[socket.userId] = newGuess;
                            console.log(newGuess);
                            //This is how you find out how many keys are in an associative array in js
                            var newNumGuesses = Object.keys(newGuesses).length;

                            if (newNumGuesses >= 2) {

                                //Determine the winner
                                var newWinner = "";
                                for (var userId in newGuesses) {
                                    var newGuess = newGuesses[userId];
                                    console.log(newRealA);
                                    var newUp = guess.toString().toUpperCase;
                                    var newUpAnswer = realA.toString().toUpperCase;
                                    console.log(userId);
                                    console.log(newUp);
                                    if (newUp == newUpAnswer) {
                                        newWinner = userId;
                                        console.log(newWinners);
                                    }
                                }
                                io.emit('newQuestion', {
                                    question: newRealQ
                                });
                                io.emit('newChoice', {
                                    choice: newRealC
                                });
                                io.emit('newAllUsersHaveGuessed', {
                                    winner: newWinner,
                                    answer: newRealA
                                });

                                //
                            }
                            //
                        });
                    }
                });
});
