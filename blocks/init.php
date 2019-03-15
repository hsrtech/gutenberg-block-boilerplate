<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

function gutenberg_boilerplate_assets() { 
	
	// Register our block script with WordPress
	wp_register_script(
		'gutenberg-boilerplate-block-js',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), 
		array( 'wp-blocks', 'wp-i18n' ), 
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), 
		true 
	);

	// // Register our block's base CSS  
	// wp_register_style(
	// 	'gutenberg-card-block-style',
	// 	plugins_url( '/blocks/dist/blocks.style.build.css', __FILE__ ),
	// 	array( 'wp-blocks' )
	//   );
	  
	//   // Register our block's editor-specific CSS
	//   wp_register_style(
	// 	'gutenberg-card-block-edit-style',
	// 	plugins_url('/blocks/dist/blocks.editor.build.css', __FILE__),
	// 	array( 'wp-edit-blocks' )
	//   );  

	// Enqueue the script in the editor
	register_block_type('gutenberg-boilerplate/blocks', array(
		'editor_script' => 'gutenberg-boilerplate-block-js',
		//'editor_style' => 'gutenberg-card-block-edit-style',
		//'style' => 'gutenberg-card-block-edit-style'
	  ));

}

add_action( 'init', 'gutenberg_boilerplate_assets' );