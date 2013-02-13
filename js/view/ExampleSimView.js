// Copyright 2002-2013, University of Colorado

/**
 * View container.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define(
  [
    'PHETCOMMON/model/property/Property',
    'PHETCOMMON/view/CanvasQuirks',
    'view/ExampleSimStage',
    'view/ControlPanel',
    'view/PerformanceMeter',
    'i18n!../../nls/example-sim-strings'
  ],
  function( Property, CanvasQuirks, ExampleSimStage, ControlPanel, PerformanceMeter, strings ) {
    "use strict";

    function ExampleSimView( model ) {

      var that = this;

      // browser window title
      $( 'title' ).html( strings.title );

      // canvas
      var canvas = document.getElementById( 'example-sim-canvas' ); //TODO replace with jquery selector
      CanvasQuirks.fixTextCursor( canvas );

      // stage
      this.stage = new ExampleSimStage( canvas, model );

      // performance meter
      this.performanceMeter = new PerformanceMeter();

      // view-specific properties
      this.frameRateVisibleProperty = new Property( true );
      this.frameRateVisibleProperty.addObserver( function ( visible ) {
        that.performanceMeter.setVisible( visible );
      } );

      // control panel
      ControlPanel.init( strings, model, this );
    }

    ExampleSimView.prototype.reset = function() {
      this.frameRateVisibleProperty.reset();
      this.stage.reset();
    }

    // Called by the animation loop
    ExampleSimView.prototype.tick = function() {
      this.stage.tick();
    }

    return ExampleSimView;
  }
);