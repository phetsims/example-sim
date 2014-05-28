// Copyright 2002-2013, University of Colorado Boulder

/**
 * Model for the 'Example' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var BarMagnet = require( 'EXAMPLE_SIM/example/model/BarMagnet' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var Vector2 = require( 'DOT/Vector2' );

  function ExampleModel() {

    // model elements
    this.barMagnet = new BarMagnet( new Vector2( 0, 0 ), new Dimension2( 375 * 0.7, 75 * 0.7 ), 0 );
  }

  ExampleModel.prototype = {

    // Resets all model elements
    reset: function() {
      this.barMagnet.reset();
    },

    // Called by the animation loop. Optional, so if your model has no animation, you can omit this.
    step: function() {
      // Handle model animation here.
    }
  };

  return ExampleModel;
} );