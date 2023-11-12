<?php
/**
 * Plugin Name: React custom admin page plugin
 * Plugin URI: http://www.legothemes.com 
 * Description: Plugin to get title & thumbnails from youtube chanel using API.
 * Version: 1.0
 * Author: Art-pixel 
 * Author URI: http://www.legothemes.com 
 */

 if( ! defined( 'ABSPATH' ) ) : exit(); endif; // No direct access allowed.

 define("PLUGIN_PATH",plugin_dir_path( __FILE__ ));

 require_once(  PLUGIN_PATH.'/class/admin-page.php' );
 require_once(  PLUGIN_PATH.'/class/routes-setting.php' );

 if(class_exists("aradminPage")) {
    $aradminpage = new aradminPage();
    $aradminpage->init();
 }