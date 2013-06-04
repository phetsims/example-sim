// Copyright 2002-2013, University of Colorado

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
require(
    [
      'PHETCOMMON/util/ImagesLoader',
      'common/ExampleSimImages',
      'JOIST/Sim',
      'common/ExampleSimStrings',
      'barmagnet/BarMagnetTab'
    ],
    function( ImagesLoader, ExampleSimImages, Sim, ExampleSimStrings, BarMagnetTab ) {
      'use strict';

      var loader = new ImagesLoader( function( loader ) {

        // extend the image loader
        ExampleSimImages.getImage = loader.getImage;

        // instantiate and start the simulation
        new Sim( ExampleSimStrings.exampleSim, [ new BarMagnetTab() ] ).start();

        // clean up the DOM
        $( '#images' ).remove();
        $( '#overlay' ).remove();
      } );
    } );
