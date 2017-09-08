<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Arrays en PHP</title>
</head>
<body>
	<p>
		<?php  
			$languages = array("HTML/CSS", "PHP", "Python", "Javascript", "Java");

			foreach ($languages as $lang) {
				print "<p>$lang</p>";
			}
			print "=========="
			
			unset($languages[3]);

			foreach ($languages as $lang) {
				print "<p>$lang</p>";
			}

		?>
	</p>
	
</body>
</html>