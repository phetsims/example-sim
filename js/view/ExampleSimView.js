// Copyright 2002-2013, University of Colorado

/**
 * View container.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define(
    function( require ) {
      'use strict';

      var CanvasQuirks = require( 'PHETCOMMON/view/CanvasQuirks' );
      var PerformanceMonitor = require( 'PHETCOMMON/view/PerformanceMonitor' );
      var ExampleSimScene = require( 'view/ExampleSimScene' );
      var strings = require( 'example-sim-strings' );

      function ExampleSimView( imagesLoader, model ) {

        var that = this;

        // browser window title
        $( 'title' ).html( strings.title );

        // canvas
        CanvasQuirks.fixTextCursor( $( 'body' ) );

        // stage
        this.scene = new ExampleSimScene( imagesLoader, $( '#example-sim-canvas' ), model );

        // performance monitor
        this.performanceMonitor = new PerformanceMonitor();

        // view-specific properties
        model.link( 'performanceMonitorVisible', function( visible ) {
          that.performanceMonitor.setVisible( visible );
        } );
      }

      // Called by the animation loop
      ExampleSimView.prototype.update = function() {
        this.scene.updateScene();
      };

      return ExampleSimView;
    }
);
