// Copyright 2002-2013, University of Colorado

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
require(
  [
    'easel',
    'PHETCOMMON/view/CanvasQuirks',
    'model/ExampleSimModel',
    'view/ExampleSimStage',
    'i18n!../nls/example-sim-strings'
  ],
  function ( Easel, CanvasQuirks, ExampleSimModel, ExampleSimStage, Strings ) {

    // Title --------------------------------------------------------------------

    $( 'title' ).html( Strings.title );

    // Canvas --------------------------------------------------------------------

    var canvas = document.getElementById( 'example-sim-canvas' ); //TODO replace with jquery selector
    CanvasQuirks.fixTextCursor( canvas );

    // MVC --------------------------------------------------------------------

    var model = new ExampleSimModel();
    var stage = new ExampleSimStage( canvas, model );

    // Animation loop ----------------------------------------------------------

    Easel.Ticker.addListener( model );
    Easel.Ticker.addListener( stage );
    Easel.Ticker.setFPS( 60 );
    Easel.Touch.enable( stage, false, false );
  } );
