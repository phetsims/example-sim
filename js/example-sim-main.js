// Copyright 2013-2017, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var ExampleScreen = require( 'EXAMPLE_SIM/example/ExampleScreen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );

  // strings
  var exampleSimTitleString = require( 'string!EXAMPLE_SIM/example-sim.title' );

  var simOptions = {
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
    var sim = new Sim( exampleSimTitleString, [ new ExampleScreen() ], simOptions );
    sim.start();
  } );
} );