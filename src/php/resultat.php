<?php

echo 'contenu de $_POST : <hr>';
foreach ($_POST as $key => $value) {
	echo " - $key : $value<br>";
}
echo '<hr>';
echo '<a href="../completion.html">retour au formulaire</a>';

?>
