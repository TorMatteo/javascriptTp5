<?php

require_once('Model.php');

// A COMPLETER

// récupération du contenu du champ, passé en get
// ...

// lancement de la requête SQL avec selectByName et
// récupération du résultat de la requête SQL
// ...

// délai fictif
// sleep(1);

// affichage en format JSON du résultat précédent
// ...
$ville = $_GET['ville'];
$tab = Model::selectByName($ville);
echo json_encode($tab);
