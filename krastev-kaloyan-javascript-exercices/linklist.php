<!DOCTYPE html>
<html lang = "fr">
  <head>
    <meta charset = "utf-8">
    <title>jsex</title>
  </head>
  <body>
    <?php if ($handle = opendir('.')) {
            echo "<h1>apformation javascript exercices</h1>";
            $hidden = -2;
            echo "<a href = \"../.\">(up)</a><br><br>";
            while (false !== ($entry = readdir($handle))) {
              if (strpos($entry, 'html') === false) {
                $hidden++;
              } else {
                echo "<a href = \"$entry\">$entry</a><br>";
              }
            }
            closedir($handle);
            echo "<br>+$hidden hidden files<br>";
          } else {
            echo "cannot open directory";
          } ?>
  </body>
</html>

