// Copyright 2002-2013, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
require( ['JOIST/SimLauncher', 'JOIST/Sim', 'barmagnet/BarMagnetScreen', 'common/ExampleSimStrings', 'common/ExampleSimImages' ],
  function( SimLauncher, Sim, BarMagnetScreen, ExampleSimStrings, ExampleSimImages ) {
    'use strict';

    SimLauncher.launch( ExampleSimImages, function() {
      var sim = new Sim( ExampleSimStrings.exampleSim, [ new BarMagnetScreen() ] );
      sim.start();
    } );
  } );
