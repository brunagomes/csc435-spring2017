var people = [];

function person(headshot, firstName, lastName, studentWorker, timeType){
  this.headshot = headshot;
  this.firstName = firstName;
  this.lastName = lastName;
  this.studentWorker = studentWorker;
  this.timeType = timeType;

  this.printPerson = function(){
    return this.headshot;
    return this.fistName + " " + this.lastName;
    return this.studentWorker;
    return this.timeType;
  }
}

var createPersonId = function(person){

  //div "newId" created for each new user
  var newId = document.createElement("div");
  //div "headshotEntry" created to hold the headshot of a person's ID
  var headshotEntry = document.createElement("img");
  //h3 "personNameHeading" created for the full name of a person's ID
  var personNameHeading = document.createElement("h3");
  //p "studentWorkerParagraph" created to display if the person is a student or worker
  var studentWorkerParagraph = document.createElement("p");
    //p "timeTypeParagraph" created to display if the person is part/full time
  var timeTypeParagraph = document.createElement("p");

  //links the input taken in from the user to the newly created variable that displays the input info
  headshotEntry.src = person.headshot;
  personNameHeading.innerHTML = person.firstName + " " + person.lastName;
  studentWorkerParagraph.innerHTML = person.studentWorker;
  timeTypeParagraph.innerHTML = person.timeType;

  //adds the headshot, full name, worker/student, and part/full time to the "newId" div
  newId.appendChild(headshotEntry);
  newId.appendChild(personNameHeading);
  newId.appendChild(studentWorkerParagraph);
  newId.appendChild(timeTypeParagraph);

  return newId;
}

var submitClicked = function(){
  //Grabs div with the ID "idPrint"
  var idPrint = document.getElementById("idPrint");
  //Grabs image input with the ID "headshot"
  var headshot = document.getElementById("headshot").value;
  //Grabs text inputs with the ID "firstName" and "lastName"
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  //Grabs the selection inputs of the user for "studentWorker" and "timeType"
  var studentWorker = document.getElementById("studentWorker");
//  console.log(studentWorker);

  var timeType = document.getElementById("timeType");
  //Allows the user's selection to be displayed
  var studentWorkerEntry = studentWorker.options[studentWorker.selectedIndex].text;
  var timeTypeEntry = timeType.options[studentWorker.selectedIndex].text;
//  console.log(studentWorkerEntry);
//  console.log(timeTypeEntry);

  var personInput = new person(headshot, firstName, lastName, studentWorkerEntry, timeTypeEntry);
  people.push(personInput);


  for (var i = 0; i < people.length; i++) {
    var personEntry = createPersonId(people[i]);
    idPrint.appendChild(personEntry);

    //idPrint.innerHTML += "<p>" + people[i].printPerson() + "</p>";
  }
//  return people[i];
idPrint.appendChild(personEntry);
}
