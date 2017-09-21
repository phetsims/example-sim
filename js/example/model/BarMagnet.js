// Copyright 2013-2016, University of Colorado Boulder

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
  var exampleSim = require( 'EXAMPLE_SIM/exampleSim' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );

  /**
   * Create a new bar magnet model.  The magnet has fixed size, and mutable location and orientation.
   *
   * @param {Vector2} location the position of the bar magnet in model coordinates
   * @param {Dimension2} size the size of the bar magnet in model coordinates
   * @param {number} orientation in radians
   * @constructor
   */
  function BarMagnet( location, size, orientation ) {
    this.size = size;
    this.locationProperty = new Property( location );
    this.orientationProperty = new Property( orientation );
  }

  exampleSim.register( 'BarMagnet', BarMagnet );

  return inherit( Object, BarMagnet, {

    // @public
    reset: function() {
      this.locationProperty.reset();
      this.orientationProperty.reset();
    }
  } );
} );