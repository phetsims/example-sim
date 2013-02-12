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
                              "deploy/debug/require.js":[
                                  "js/vendor/almond.js",
                                  "deploy/debug/require.js"
                              ]
                          },

                          min:{
                              "deploy/release/require.js":[
                                  "deploy/debug/require.js"
                              ]
                          },

                          requirejs:{
                              compile:{
                                  options:{
                                      mainConfigFile:"js/config.js",
                                      out:"deploy/debug/require.js",
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
