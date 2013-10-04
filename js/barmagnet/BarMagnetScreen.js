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

  // strings
  var exampleSimString = require( 'string!EXAMPLE_SIM/exampleSim' );

  function BarMagnetScreen() {

    this.name = exampleSimString;
    this.backgroundColor = 'rgb(50,50,50)'; // dark gray

    this.createModel = function() {
      return new BarMagnetModel();
    };

    this.createView = function( model ) {
      return new BarMagnetView( model );
    };
  }

  return BarMagnetScreen;
} );