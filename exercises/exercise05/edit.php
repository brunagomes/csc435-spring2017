<?php
  $name = $_GET["name"];
  echo $name;
  echo "
  <form action='display.php?name=$name' method='post'>
    <input name='breakfast' type='text' placeholder='Breakfast' required></br>
    <input name='lunch' type='text' placeholder='Lunch' required></br>
    <input name='dinner' type='text' placeholder='Dinner'required>
    <input type='submit'></input>
  </form>";
?>
