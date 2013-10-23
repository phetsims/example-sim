// Copyright 2002-2013, University of Colorado Boulder

/**
 * The 'Bar Magnet' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // imports
  var BarMagnetModel = require( 'EXAMPLE_SIM/barmagnet/model/BarMagnetModel' );
  var BarMagnetView = require( 'EXAMPLE_SIM/barmagnet/view/BarMagnetView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var exampleSimString = require( 'string!EXAMPLE_SIM/exampleSim' );

  function BarMagnetScreen() {
    Screen.call( this, exampleSimString, null /* no icon, single-screen sim */,
      function() { return new BarMagnetModel(); },
      function( model ) { return new BarMagnetView( model ); },
      { backgroundColor: 'rgb(50,50,50)' }
    );
  }

  return inherit( Screen, BarMagnetScreen );
} );