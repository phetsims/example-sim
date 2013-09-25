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
  var inherit = require( 'PHET_CORE/inherit' );
  var PropertySet = require( 'AXON/PropertySet' );

  /**
   * @param {Vector2} location
   * @param {Dimension2} size
   * @param {Number} orientation in radians
   */
  function BarMagnet( location, size, orientation ) {
    PropertySet.call( this, { location: location, orientation: orientation } );
    this.size = size;
  }

  return inherit( PropertySet, BarMagnet );
} );
