// Copyright 2002-2013, University of Colorado

/**
 * Model container.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  "use strict";
  var Easel = require( 'easel' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var Vector2 = require( 'DOT/Vector2' );
  var BarMagnet = require( 'model/BarMagnet' );

  function ExampleSimModel() {
    // model elements
    this.barMagnet = new BarMagnet( new Vector2( 0, 0 ), new Dimension2( 375, 75 ), 0 );
  }

  // Resets all model elements
  ExampleSimModel.prototype.reset = function() {
    this.barMagnet.reset();
  };

  // Called by the animation loop
  ExampleSimModel.prototype.step = function() {
    // Make model changes here.
  };

  return ExampleSimModel;
} );
