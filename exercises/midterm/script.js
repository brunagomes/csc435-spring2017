$(document).ready(function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var response = this.responseText;

      var creatureData = JSON.parse(response);

      //var cList = $("select/>");
      for (var i=0; i<creatureData.creatures.length;i++){
        var randomCreature = creatureData.creatures[i];
        var newCreatureDiv = generatedCreatureDiv(randomCreature);
        $("#creatureCreator").append(newCreatureDiv);
      }
      //$("body").append(cList);
      //var randomIndex = Math.floor(Math.random() * creatureData.creatures.length);
      //var randomCreature = creatureData.creatures[randomIndex];

      //var newCreatureDiv = generatedCreatureDiv(randomCreature);
      //$("#creatureCreator").append(newCreatureDiv);
    }
  };
  xhttp.open("GET", "https://api.myjson.com/bins/17f3jl", true);
  xhttp.send();

  var generatedCreatureDiv = function(name) {

    var creatureDiv = $("<div />");

    var creaturesButtonDiv = $("<div />")
    creatureDiv.append(creaturesButtonDiv);

    var randomCreatureButton = $("<button/>");
    creatureDiv.append(randomCreatureButton);
    randomCreatureButton.text("Creature");
    randomCreatureButton.click(function() {
      creatureDiv.append("<h3>"+name.name+"</h3>");
      //var img = new Image();
      //img.src = name.image;

      creatureDiv.append("<img>"+name.image+"</img>");
      creatureDiv.append("<img src= " + name.image +  " />");
      //creatureDiv.append("<img>"+name.image+"</img>");
      creatureDiv.append("<p>"+name.description+"</p>");
    });
    return creatureDiv;
  }
});

var selectedCreature = function() {
  var creatureList = document.getElementById("creatureType");
  var selectedCreature = creatureList.options[creatureList.selectedIndex].text;

}
