<?php
/*
*   Rest APIs route
*/
class ar_setting_rest_routes {

    function __construct() {
        add_action("rest_api_init",[$this,"create_rest_routes"]);
    }
    
    function create_rest_routes() {
        register_rest_route( "aroptions/v1", "/settings", [
            'methods' => 'GET',
            'callback' => [$this, 'get_options'],
            'permission_callback' => function () {
				return true; 
			}
        ] );
        register_rest_route( "aroptions/v1", "/settings", [
            'methods' => 'POST',
            'callback' => [$this, 'save_options'],
            'permission_callback' => function () {
				return true; 
			}
        ] );
    }

    function get_options() {
             $rep = get_option("ar_admin_options");
            return rest_ensure_response( $rep );
    }

    function save_options( $req ) {
        $string = json_decode( $req->get_body() ); 
        $option = array();
        foreach ( $string as $key => $value) {
            $option[$key] =  $value ;
        }
         update_option( "ar_admin_options" , $option );

        return rest_ensure_response( "Update Done" );
        
    }
}
new ar_setting_rest_routes();