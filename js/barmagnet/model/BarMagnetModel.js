// Copyright 2002-2013, University of Colorado Boulder

/**
 * Model for the 'Bar Magnet' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // imports
  var BarMagnet = require( 'barmagnet/model/BarMagnet' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var Vector2 = require( 'DOT/Vector2' );

  function BarMagnetModel() {
    // model elements
    this.barMagnet = new BarMagnet( new Vector2( 0, 0 ), new Dimension2( 375, 75 ), 0 );
  }

  BarMagnetModel.prototype = {

    // Resets all model elements
    reset: function() {
      this.barMagnet.reset();
    },

    // Called by the animation loop
    step: function() {
      // Handle model animation here.
    }
  };

  return BarMagnetModel;
} );
