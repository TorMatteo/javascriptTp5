<?php

class Conf {
    private static $database = array(
        'hostname' => 'webinfo.iutmontp.univ-montp2.fr',
        'database' => 'tordeuxm',
        'login'    => 'tordeuxm',
        'password' => '08022003',
        'port' => '3316' // IUT : 3316, sinon 3306
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

    static public function getPort() {
        return self::$database['port'];
    }

}
