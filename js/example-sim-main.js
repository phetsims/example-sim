// Copyright 2002-2013, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // imports
  var BarMagnetScreen = require( 'EXAMPLE_SIM/barmagnet/BarMagnetScreen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );

  // strings
  var simTitle = require( 'string!EXAMPLE_SIM/example-sim.name' );

  var simOptions = {
    credits: 'PhET Development Team -\n' +
             'Lead Design: Groucho\n' +
             'Software Development: Harpo\n' +
             'Design Team: Curly, Larry, Mo',
    thanks: 'Thanks -\n' +
            'Thanks to everyone who made this possible!'
  };

  // Appending '?dev' to the URL will enable developer-only features.
  if ( window.phetcommon.getQueryParameter( 'dev' ) ) {
    simOptions = _.extend( {
      // add dev-specific options here
    }, simOptions );
  }

  SimLauncher.launch( function() {
    var sim = new Sim( simTitle, [ new BarMagnetScreen() ], simOptions );
    sim.start();
  } );
} );