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
    'view/ControlPanel',
    'i18n!../nls/example-sim-strings'
  ],
  function ( Easel, CanvasQuirks, ExampleSimModel, ExampleSimStage, ControlPanel, strings ) {
    "use strict";

    // Title --------------------------------------------------------------------

    $( 'title' ).html( strings.title );

    // Canvas --------------------------------------------------------------------

    var canvas = document.getElementById( 'example-sim-canvas' ); //TODO replace with jquery selector
    CanvasQuirks.fixTextCursor( canvas );

    // MVC --------------------------------------------------------------------

    var model = new ExampleSimModel();
    var stage = new ExampleSimStage( canvas, model );
    ControlPanel.init( strings, model, stage );

    // Animation loop ----------------------------------------------------------

    // Put all animation tasks in this function so that the FPS indicator is accurate.
    Easel.Ticker.addListener( function() {
      stage.stats.begin();
      model.tick();
      stage.tick()
      stage.stats.end();
    } );
    Easel.Ticker.setFPS( 60 );
    Easel.Touch.enable( stage, false, false );
  } );
