<?php 
class aradminPage { 
    
    function init() {
        //------ Plugin Dashboard
        add_action( 'admin_menu', [$this,'ar_admin_menu'] );
        //---- enqueu scripts
        add_action( 'admin_enqueue_scripts', [$this,'ar_admin_scripts'] );

    }

    // Add Page Dashboard
    function ar_admin_menu() {
            add_menu_page(
                __( 'Dashboard', 'my-textdomain' ),
                __( 'Setting', 'my-textdomain' ),
                'manage_options',
                'dashboard-options',
                [$this, "arDashboardPage"],
                'dashicons-schedule',
                3
            );
    }

    //----- Dashbord Page
    function arDashboardPage() {
        ?>
        <div id="ar_setting"></div><?php
    }

    function ar_admin_scripts($hook) {
        
        if($hook === "toplevel_page_dashboard-options") {
            //------- enqueue Wordpress Media library js and css
            wp_enqueue_media();

            //------- Enqueue Load Build react index and css/js dependencies
            $file_decpandencies_elements = plugin_dir_path( __DIR__).'build/index.asset.php';
            if( file_exists( $file_decpandencies_elements ) ) {     
                $decpandencies_elements = require_once $file_decpandencies_elements;
                wp_enqueue_style('ar-panel-style', plugins_url('/build/style-index.css', __DIR__));
                foreach( $decpandencies_elements['dependencies'] as $cssDependencies) {
                    wp_enqueue_style($cssDependencies);
                }
            
                wp_enqueue_script( 
                    'ar-panel', 
                    plugins_url('/build/index.js', __DIR__), 
                    $decpandencies_elements['dependencies'], 
                    $decpandencies_elements['version'], 
                    true 
                );

                //--- array Options (WP get_options())
                $ar_options = get_option( 'ar_admin_options' );
                if(!is_array($ar_options)) {
                    $ar_options = [];
                }

                //--- wp_localize_script send variables to js code
                $args =[
                    'apiUrl' => home_url( '/wp-json' ),
                    'nonce' => wp_create_nonce( 'wp_rest' ),
                ];
                wp_localize_script( 'ar-panel', 'panelLocalizer', array_merge($ar_options, $args) );
            
            }
        } 
    }
}