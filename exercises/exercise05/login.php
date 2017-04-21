<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Login</title>
  </head>
  <body>
    <p>
      <?php
      $host = "localhost";
      $user = "root";
      $password = "";

      $mysqli = new mysqli($host, $user, $password, "exercise05");
      if ($mysqli->connect_errno) {
        die("Error: " . $mysqli->connect_errno);
      }

      $name = $_POST["name"];
      $password = $_POST["password"];


      $match = "SELECT name, password, breakfast, lunch, dinner FROM users WHERE name = '$name' AND password = '$password'";
      $result = $mysqli->query($match);
      if(!$match){
        die('query failed');
      }
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
      ?>
    </p>
  </body>
</html>
