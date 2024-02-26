<?php

class Conf {
    private static $database = array(
        'hostname' => '162.38.222.151',
        'database' => 'iut',
        'login'    => '', // votre login IUT
        // votre mdp PostgreSQL = mot de passe LDAP
        //                      = mot de passe sur les machines
        'password' => '',
    );

    static public function getLogin() {
        return self::$database['login'];
    }

    static public function getHostname() {
        return self::$database['hostname'];
    }

    static public function getDatabase() {
        return self::$database['database'];
    }

    static public function getPassword() {
        return self::$database['password'];
    }

}

?>
