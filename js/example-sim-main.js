// Copyright 2002-2013, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
require( ['JOIST/SimLauncher', 'JOIST/Sim', 'EXAMPLE_SIM/barmagnet/BarMagnetScreen', 'string!EXAMPLE_SIM/example-sim.name' ],
  function( SimLauncher, Sim, BarMagnetScreen, simTitle ) {
    'use strict';

    SimLauncher.launch( function() {
      var sim = new Sim( simTitle, [ new BarMagnetScreen() ] );
      sim.start();
    } );
  } );
