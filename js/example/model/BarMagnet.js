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

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var PropertySet = require( 'AXON/PropertySet' );

  /**
   * Create a new bar magnet model.  The magnet has fixed size, and mutable location and orientation.
   *
   * @param {Vector2} location the position of the bar magnet in model coordinates
   * @param {Dimension2} size the size of the bar magnet in model coordinates
   * @param {number} orientation in radians
   * @constructor
   */
  function BarMagnet( location, size, orientation ) {
    PropertySet.call( this, {
      location: location,
      orientation: orientation
    } );
    this.size = size;
  }

  return inherit( PropertySet, BarMagnet );
} );