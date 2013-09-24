// Copyright 2002-2013, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
require( ['JOIST/SimLauncher', 'JOIST/Sim', 'EXAMPLE_SIM/barmagnet/BarMagnetScreen', 'EXAMPLE_SIM/common/ExampleSimStrings' ],
  function( SimLauncher, Sim, BarMagnetScreen, ExampleSimStrings ) {
    'use strict';

    SimLauncher.launch( function() {
      var sim = new Sim( ExampleSimStrings.exampleSim, [ new BarMagnetScreen() ] );
      sim.start();
    } );
  } );
