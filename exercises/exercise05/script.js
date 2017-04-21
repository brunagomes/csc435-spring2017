//Set up a HTTP request to users.php, it will generate a list of all entries
//from the clients table in the foods database
//NOTE: The code below uses AJAX to make a HTTP GET request to a php file
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("usersDiv").innerHTML = this.responseText;
    }
}
xmlhttp.open("GET", "users.php");
xmlhttp.send();
