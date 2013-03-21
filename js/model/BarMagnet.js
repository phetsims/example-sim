// Copyright 2002-2013, University of Colorado

/**
 * Model of a simple bar magnet.
 * The magnet has fixed size, and mutable location and orientation.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  var Vector2 = require( 'DOT/Vector2' );
  var Property = require( 'PHETCOMMON/model/property/Property' );

  "use strict";

  /**
   * @class BarMagnet
   * @constructor
   * @param {Vector2} location
   * @param {Dimension2} size
   * @param {Number} orientation in radians
   */
  function BarMagnet( location, size, orientation ) {

    // initialize properties
    this.location = new Property( location );
    this.size = size;
    this.orientation = new Property( orientation );
  }

  // Resets all properties
  BarMagnet.prototype.reset = function() {
    this.location.reset();
    this.orientation.reset();
  };

  return BarMagnet;
} );

