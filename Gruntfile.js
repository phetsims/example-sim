/*global module:false*/
module.exports = function ( grunt ) {

  // Project configuration.
  grunt.initConfig( {
                      pkg: '<json:package.json>',

                      concat: {
                        "deploy/debug/example-sim-debug.js": [
                          "almond-0.2.5.js",
                          "deploy/debug/example-sim-debug.js"
                        ]
                      },

                      uglify: {
                        "deploy/release/example-sim.min.js": [
                          "deploy/debug/example-sim-debug.js"
                        ]
                      },

                      requirejs: {
                        compile: {
                          options: {
                            mainConfigFile: "js/config.js",
                            out: "deploy/debug/example-sim-debug.js",
                            name: "config",
                            wrap: true,
                            uglify: {
                              // turn off name mangling to make debugging easier
                              no_mangle: true
                            }
                          }
                        }
                      },

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
                            $: true
                          }
                        }
                      }
                    } );

  // Default task.
  grunt.registerTask( 'default', [ 'jshint', 'requirejs', 'concat', 'uglify'] );
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-contrib-requirejs' );
  grunt.loadNpmTasks( 'grunt-contrib-concat' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
};