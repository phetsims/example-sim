// Copyright 2002-2013, University of Colorado

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
require(
    [
      'easel',
      'fastclick',
      'PHETCOMMON/util/ImagesLoader',
      'model/ExampleSimModel',
      'view/ExampleSimView'
    ],
    function( Easel, FastClick, ImagesLoader, ExampleSimModel, ExampleSimView ) {
      "use strict";

      //On iPad, prevent buttons from flickering 300ms after press.  See https://github.com/twitter/bootstrap/issues/3772
      new FastClick( document.body );

      // model
      var model = new ExampleSimModel();

      // initialize the view
      function initView( imagesLoader ) {

        // view
        var view = new ExampleSimView( imagesLoader, model );

        // Animation loop. Put all animation tasks in this function so that the FPS indicator is accurate.
        Easel.Ticker.addListener( function() {
          view.performanceMonitor.begin();
          model.step();
          view.step();
          view.performanceMonitor.end();
        } );
        Easel.Ticker.setFPS( 60 );
      }

      // after images are loaded...
      new ImagesLoader( function( imagesLoader ) {

        initView( imagesLoader );

        // clean up the DOM
        $( "#images" ).remove();
        $( "#overlay" ).remove();
      } );
    } );
