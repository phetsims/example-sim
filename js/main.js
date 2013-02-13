// Copyright 2002-2013, University of Colorado

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
require(
  [
    'easel',
    'model/ExampleSimModel',
    'view/ExampleSimView'
  ],
  function ( Easel, ExampleSimModel, ExampleSimView ) {
    "use strict";

    // model
    var model = new ExampleSimModel();

    // view
    var view = new ExampleSimView( model );

    // Animation loop. Put all animation tasks in this function so that the FPS indicator is accurate.
    Easel.Ticker.addListener( function () {
      view.performanceMonitor.begin();
      model.tick();
      view.tick();
      view.performanceMonitor.end();
    } );
    Easel.Ticker.setFPS( 60 );
  } );
