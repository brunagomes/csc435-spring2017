<?
$host = "localhost";
$user = "root";
$password = "";

$mysqli = new mysqli($host, $user, $password, "exercise05");
if ($mysqli->connect_errno) {
  die("Error: " . $mysqli->connect_errno);
}

$name = $_GET["name"];
$breakfast = $_POST["breakfast"];
$lunch = $_POST["lunch"];
$dinner = $_POST["dinner"];

$update = "UPDATE users SET breakfast = '$breakfast', lunch = '$lunch', dinner = '$dinner' WHERE name = '$name'";
if ($mysqli->query($update) == TRUE){
$match = "SELECT name, password, breakfast, lunch, dinner FROM users WHERE name = '$name'";
$result = $mysqli->query($match);
  if($result->num_rows>0){
    $row = $result->fetch_assoc();
    $breakfast = $row['breakfast'];
    $lunch = $row['lunch'];
    $dinner = $row['dinner'];
    echo "<h2>".$name."</h2>
    <h3>".$breakfast."</h3>
    <h3>".$lunch."</h3>
    <h3>".$dinner."</h3>
    <a href='edit.php?name=$name'>Edit</a>";
  }
} else {
  echo "already exists";
}
?>
