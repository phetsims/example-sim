// Main entry point for the sim.
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
