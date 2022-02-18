<!DOCTYPE html>
<html lang = "fr">
  <head>
    <meta charset = "utf-8">
    <title>Kaloyan KRASTEV</title>
  </head>
  <body>
    <?php if ($handle = opendir('.')) {
            echo "<h1>apformation projets personnels</h1>";
            $hidden = -2;
            #echo "<a href = \"../.\">parent folder</a><br>";
            while (false !== ($entry = readdir($handle))) {
              if (strpos($entry, '.') === false) {
                echo "<a href = \"$entry\">$entry</a><br>";
              } else {
                $hidden++;
              }
            }
            closedir($handle);
            echo "<br>+$hidden hidden files";
          } else {
            echo "<h1>cannot open directory</h1>";
          } ?>
  </body>
</html>

