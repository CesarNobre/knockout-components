module.exports = function(grunt) {
  	grunt.initConfig({
	connect: {
	    server: {
	      options: {
	        port: 9001,
	        base: '../knockout-components',
	        keepalive:true
	      }
	    }
	},
	jasmine: {
	  taskName: {
	    src: 'src/**/*.js',
	    options: {
	        specs: 'assets/js/components/tests/*.spec.js',
	        host: 'http://127.0.0.1:9001/',
	        template: require('grunt-template-jasmine-requirejs'),
	        templateOptions: {
	        requireConfigFile: 'assets/js/main.js'
	        }
	      }
	    }
	  } 
	});

	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-template-jasmine-requirejs');
	grunt.loadNpmTasks('grunt-contrib-connect');


};