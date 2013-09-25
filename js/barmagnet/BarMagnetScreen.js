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
  var strings = require( 'EXAMPLE_SIM/example-sim-strings' );

  function BarMagnetScreen() {

    this.name = strings.exampleSim;
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