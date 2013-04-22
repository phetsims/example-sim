// Copyright 2002-2013, University of Colorado

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
require(
    [
      'fastclick',
      'PHETCOMMON/util/ImagesLoader',
      'model/ExampleSimModel',
      'view/ExampleSimScene',
      'SCENERY/util/Util',
      'SCENERY_PHET/Sim',
      'SCENERY/nodes/Rectangle'
    ],
    function( FastClick, ImagesLoader, ExampleSimModel, ExampleSimScene, Util, Sim, Rectangle ) {
      'use strict';

      //On iPad, prevent buttons from flickering 300ms after press.  See https://github.com/twitter/bootstrap/issues/3772
      new FastClick( document.body );

      // after images are loaded...
      new ImagesLoader( function( imagesLoader ) {

        new Sim( "Simulation Example", [
          { name: "Example",
            icon: new Rectangle( 0, 0, 50, 50, {fill: 'blue'} ),
            createModel: function() {return new ExampleSimModel();},
            createView: function( model ) {return new ExampleSimScene( imagesLoader, null, model );}}
        ] ).start();

        // clean up the DOM
        $( '#images' ).remove();
        $( '#overlay' ).remove();
      } );
    } );
