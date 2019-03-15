const { __ } = wp.i18n; 
const { registerBlockType } = wp.blocks; 

registerBlockType( 'gutenberg-boilerplate/block-boilerplate-block', {

    title: __( 'Boilerplate Block', 'gutenberg_boilerplate' ), 
	icon: 'marker', 
	category: 'common', 
	keywords: [
		__( 'Boilerplate Block', 'gutenberg_boilerplate' ),
		__( 'boilerplate-block', 'gutenberg_boilerplate' ),
	],

	edit: function( props ) {
		return (
			<div className={ props.className }>
				<p>{ __(`— Hello from the backend.`, 'gutenberg_boilerplate') }</p>
			</div>
		);
	},

	save: function( props ) {
		return (
			<div>
				<p>{ __(`— Hello from the backend.`, 'gutenberg_boilerplate') }</p>
			</div>
		);
	},
} );
