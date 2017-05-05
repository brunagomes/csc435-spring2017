$(function () {
  var socket = io();

  //Deal with getting username
  $('#userIdForm').submit(function() {
    console.log($('#userIdInput').val());
    socket.emit('new user', $('#userIdInput').val());
    $('#gameDiv').show();
    $('#logInDiv').hide();
    $('#canvasDiv').hide();
    return false; //This tell jquery to not refresh the page
  });

  //$('#questionDiv'){
  //  console.log($('#questionDiv');
  //  socket.emit($('#questionDiv');
  socket.on('question',function(msg) {
    console.log(msg);
    console.log(msg.question);
    $('#questionDiv').empty();
    $('#questionDiv').append("<h2>Question: " + msg.question + "</h2>");
    $('#questionDiv').show();
    return false;
  });

  socket.on('choice',function(msg) {
    console.log(msg);
    console.log(msg.choice.A);
    console.log(msg.choice.B);
    console.log(msg.choice.C);
    console.log(msg.choice.D);
    $('#choiceDiv').empty();
    $('#choiceDiv').append("<h3>A : " + msg.choice.A + "</h3>");
    $('#choiceDiv').append("<h3>B : " + msg.choice.B + "</h3>");
    $('#choiceDiv').append("<h3>C : " + msg.choice.C + "</h3>");
    $('#choiceDiv').append("<h3>D : " + msg.choice.D + "</h3>");
    $('#choiceDiv').show();
    return false;
  });

//
  socket.on('newQuestion',function(msg) {
    console.log(msg);
    console.log(msg.question);
    $('#questionDiv').empty();
    $('#questionDiv').append("<h2>Question: " + msg.question + "</h2>");
    $('#questionDiv').show();

    return false;
  });

  socket.on('newChoice',function(msg) {
    console.log(msg);
    console.log(msg.choice.A);
    console.log(msg.choice.B);
    console.log(msg.choice.C);
    console.log(msg.choice.D);
    $('#choiceDiv').empty();
    $('#choiceDiv').append("<h3>A : " + msg.choice.A + "</h3>");
    $('#choiceDiv').append("<h3>B : " + msg.choice.B + "</h3>");
    $('#choiceDiv').append("<h3>C : " + msg.choice.C + "</h3>");
    $('#choiceDiv').append("<h3>D : " + msg.choice.D + "</h3>");
    $('#choiceDiv').show();
    return false;
  });
//

  //Deal with getting the guess
  $('#guessForm').submit(function() {
    socket.emit('guess', $('#guessInput').val());
    $('#guessForm').hide();
    $('#waitingDiv').show();
    return false;
  });

  //This will be called when all users have guessed
  socket.on('allUsersHaveGuessed', function(msg) {
    console.log(msg);
    $('#resultsDiv').append("<h3>The answer was: " + msg.answer + "<br>Winner: " + msg.winner + "</h3>");
    $('#waitingDiv').hide();
    $('#resultsDiv').show();
    $('#buttonContainer').show();
  });

//This will be called when all users have guessed
  socket.on('newAllUsersHaveGuessed', function(msg) {
    console.log(msg);
    $('#resultsDiv').append("<h3>The answer was: " + msg.answer + "<br>Winner: " + msg.winner + "</h3>");
    $('#waitingDiv').hide();
    $('#resultsDiv').show();
    $('#buttonContainer').show();
  });

  $('#playButton').click(function() {
    console.log("click");
    socket.emit('playAgain', true);
    $('#buttonContainer').hide();
    //$('#choiceDiv').empty();
    //$('#questionDiv').empty();
    $('#guessForm').show();
    $('#waitingDiv').hide();
    $('#resultsDiv').empty();
    $('#resultsDiv').hide();
    $('#guessInput').val("");
    return false;
  });
//
});
