// Copyright 2002-2013, University of Colorado

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
require( ['JOIST/SimLauncher', 'JOIST/Sim', 'barmagnet/BarMagnetTab', 'common/ExampleSimStrings', 'common/ExampleSimImages' ],
  function( SimLauncher, Sim, BarMagnetTab, ExampleSimStrings, ExampleSimImages ) {
    'use strict';

    SimLauncher.launch( ExampleSimImages, function() {
      var sim = new Sim( ExampleSimStrings.exampleSim, [ new BarMagnetTab() ] );
      sim.start();
    } );
  } );
