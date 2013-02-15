/*global module:false*/
module.exports = function ( grunt ) {

    // Project configuration.
    grunt.initConfig( {
                          pkg:'<json:package.json>',


                          lint:{
                              files:[
                                  'js/**/*.js'
                              ]
                          },

                          concat:{
                              "deploy/debug/example-sim-debug.js":[
                                  "almond.js",
                                  "deploy/debug/example-sim-debug.js"
                              ]
                          },

                          // Even though r.js minified already, do it again to minify the boot loader.
                          min:{
                              "deploy/release/example-sim.min.js":[
                                  "deploy/debug/example-sim-debug.js"
                              ]
                          },

                          requirejs:{
                              compile:{
                                  options:{
                                      mainConfigFile:"js/config.js",
                                      out:"deploy/debug/example-sim-debug.js",
                                      name:"config",
                                      wrap:true
                                  }
                              }
                          },

                          jshint:{
                              options:{
                                  curly:true,
                                  eqeqeq:true,
                                  immed:false,
                                  latedef:false,
                                  newcap:true,
                                  noarg:true,
                                  sub:true,
                                  undef:true,
                                  boss:true,
                                  eqnull:true,
                                  browser:true,
                                  node:true,
                                  jquery:true,
                                  expr:true
                              },
                              globals:{
                                  Modernizr:true,
                                  define:true,
                                  $:true
                              }
                          }
                      } );

    // Default task.
    grunt.registerTask( 'default', 'lint requirejs concat min' );
    grunt.loadNpmTasks( 'grunt-contrib-requirejs' );

};
