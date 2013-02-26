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
    'model/ExampleSimModel',
    'view/ExampleSimView'
  ],
  function ( Easel, FastClick, ExampleSimModel, ExampleSimView ) {
    "use strict";

    //On iPad, prevent buttons from flickering 300ms after press.  See https://github.com/twitter/bootstrap/issues/3772
    new FastClick( document.body );

    // model
    var model = new ExampleSimModel();

    // initialize the view
    function initView( $images ) {

      // view
      var view = new ExampleSimView( $images, model );

      // Animation loop. Put all animation tasks in this function so that the FPS indicator is accurate.
      Easel.Ticker.addListener( function () {
        view.performanceMonitor.begin();
        model.step();
        view.step();
        view.performanceMonitor.end();
      } );
      Easel.Ticker.setFPS( 60 );
    }

    // after images are loaded...
    $( 'body' ).imagesLoaded( function ( $images, $proper, $broken ) {
      console.log( "num images loaded: " + $images.length );//XXX
      initView( $images );
      $( "#images" ).remove();
    } );
  } );
