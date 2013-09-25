// Copyright 2002-2013, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
require( ['JOIST/SimLauncher', 'JOIST/Sim', 'EXAMPLE_SIM/barmagnet/BarMagnetScreen', 'EXAMPLE_SIM/example-sim-strings' ],
  function( SimLauncher, Sim, BarMagnetScreen, strings ) {
    'use strict';

    SimLauncher.launch( function() {
      var sim = new Sim( strings.exampleSim, [ new BarMagnetScreen() ] );
      sim.start();
    } );
  } );
