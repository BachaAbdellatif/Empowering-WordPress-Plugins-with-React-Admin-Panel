<?php
/**
 * Plugin Name: React custom admin page plugin
 * Plugin URI: http://www.legothemes.com 
 * Description: Start a plugin with a React-powered dashboard page.
 * Version: 1.0
 * Author: Art-pixel 
 * Author URI: http://www.legothemes.com 
 * Text Domain: translate-name
 */

 if( ! defined( 'ABSPATH' ) ) : exit(); endif; // No direct access allowed.

 define("PLUGIN_PATH",plugin_dir_path( __FILE__ ));

 require_once(  PLUGIN_PATH.'/class/admin-page.php' );
 require_once(  PLUGIN_PATH.'/class/routes-setting.php' );

 if(class_exists("aradminPage")) {
    $aradminpage = new aradminPage();
    $aradminpage->init();
 }