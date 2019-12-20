// Copyright 2013-2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const ExampleScreen = require( 'EXAMPLE_SIM/example/ExampleScreen' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );

  // strings
  const exampleSimTitleString = ( 'EXAMPLE_SIM/example-sim.title' );

  const simOptions = {
    credits: {
      // all credits fields are optional, see joist.AboutDialog
      leadDesign: 'Boris',
      softwareDevelopment: 'Natasha',
      team: 'Chico, Groucho, Gummo, Harpo, Zeppo',
      qualityAssurance: 'Curly, Larry, Moe',
      graphicArts: 'Rembrandt Harmenszoon van Rijn',
      thanks: 'Thanks to the ACME Dynamite Company for funding this sim!'
    }
  };

  SimLauncher.launch( function() {
    const sim = new Sim( exampleSimTitleString, [ new ExampleScreen() ], simOptions );
    sim.start();
  } );
} );