// Copyright 2002-2013, University of Colorado Boulder

/**
 * Model of a simple bar magnet.
 * The magnet has fixed size, and mutable location and orientation.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // imports
  var Property = require( 'AXON/Property' );

  /**
   * @param {Vector2} location
   * @param {Dimension2} size
   * @param {Number} orientation in radians
   */
  function BarMagnet( location, size, orientation ) {
    this.location = new Property( location );
    this.size = size;
    this.orientation = new Property( orientation );
  }

  BarMagnet.prototype = {

    // Resets all properties
    reset: function() {
      this.location.reset();
      this.orientation.reset();
    }
  };

  return BarMagnet;
} );
