/*
 * Configuration file for Grunt.
 * Used to configure or define tasks, and load Grunt plugins.
 */
module.exports = function( grunt ) {

  // Initialize a configuration object for the project.
  grunt.initConfig( {
    // Read the project settings from the package.json file.
    pkg: '<json:package.json>',

    // Validate files with JSHint.
    jshint: {
      files: [ 'js/**/*.js' ],
      options: {
        curly: true,
        eqeqeq: true,
        immed: false,
        latedef: false,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        node: true,
        jquery: true,
        expr: true,
        globals: {
          Modernizr: true,
          define: true,
          $: true,
          requestAnimFrame: true
        }
      }
    },

    // Optimize RequireJS projects using r.js.
    requirejs: {
      // for the debug build (no minimization or source maps)
      debug: {
        options: {
          almond: true,
          mainConfigFile: "js/config.js",
          out: "deploy/debug/example-sim-debug.js",
          name: "config",
          optimize: 'none',
          wrap: true
        }
      },
      
      // for the release build (minimization, source maps)
      release: {
        options: {
          almond: true,
          mainConfigFile: "js/config.js",
          out: "deploy/release/example-sim.min.js",
          name: "config",
          optimize: 'uglify2',
          generateSourceMaps: true,
          preserveLicenseComments: false,
          wrap: true
        }
      }
    }
    
  } );
  
  // Register tasks
  grunt.registerTask( 'default', [ 'jshint', 'debug', 'release' ] );
  grunt.registerTask( 'debug', [ 'requirejs:debug' ] );
  grunt.registerTask( 'release', [ 'requirejs:release' ] );
  
  // Load tasks
  grunt.loadNpmTasks( 'grunt-requirejs' );
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
};
