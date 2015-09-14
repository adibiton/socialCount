'use strict';

module.exports = function (grunt) {
	// Project configuration.
  grunt.initConfig({
  	jasmine: {
  		test: {
			src: 'src/*.js',
			options: {     
				specs: 'spec/*.js'
    		}		
		}  	
  	},
	connect: {
		server: {
			options: {
				port: 9001
      	}
    }
  }
});

	// Load the plugin that provides the "jasmine" task.
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	
	// Load the plugin that provides the serve task. 	
  	grunt.loadNpmTasks('grunt-serve');

	// Test task(s).
	//grunt.registerTask('default', ['uglify']);
	grunt.registerTask('test', 'jasmine');

	// A very basic default task.
	grunt.registerTask('default', 'Log some stuff.', function() {
		grunt.log.write('Logging some stuff...').ok();
  });
};