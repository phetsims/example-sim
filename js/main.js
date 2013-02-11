// Copyright 2002-2013, University of Colorado

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (cmalley@pixelzoom.com)
 */
require( [
             'easel',
             'i18n!../nls/example-sim-strings'
         ],
         function ( Easel, Strings ) {

             // Title --------------------------------------------------------------------

             $( 'title' ).html( Strings.title );

             // Canvas --------------------------------------------------------------------

             var canvas = document.getElementById( 'example-sim-canvas' );

             // MVC --------------------------------------------------------------------

             // Animation loop ----------------------------------------------------------

             Easel.Ticker.addListener( model );
             Easel.Ticker.addListener( stage );
             Easel.Ticker.addListener( stage.frameRateDisplay );
             Easel.Ticker.setFPS( 60 );
             Easel.Touch.enable( stage, false, false );
         } );
