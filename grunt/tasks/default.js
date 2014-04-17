module.exports = function ( grunt ) {

	'use strict';

	grunt.registerTask( 'default', [
		'concat',
		'qunit',
		'copy'
	]);

};
